import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { copyFileSync, mkdirSync, mkdtempSync, symlinkSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import format from './secretlint-formatter.mjs';

const scanner = fileURLToPath(new URL('./check-secrets.mjs', import.meta.url));
const zero = '0'.repeat(40);
test('32MB超の本文も検査結果に含めず、診断だけを返す', () => {
  const secret = 'sensitive-value';
  const result = format([{
    filePath: '/tmp/0.txt',
    sourceContent: 'x'.repeat(33 * 1024 * 1024),
    messages: [{ line: 7, ruleId: 'test-rule', message: secret, data: { secret } }],
  }]);
  assert.deepEqual(JSON.parse(result), [{
    filePath: '/tmp/0.txt', messages: [{ line: 7, ruleId: 'test-rule' }],
  }]);
  assert.ok(result.length < 200);
  assert.ok(!result.includes(secret));
});
test('push履歴・index・禁止パスを検査し、実値は出力しない', () => {
  const cwd = mkdtempSync(join(tmpdir(), 'fec-secret-test-'));
  const git = (...args) => execFileSync('git', ['-c', 'core.hooksPath=/dev/null', ...args], { cwd, encoding: 'utf8' }).trim();
  const scan = (...args) => spawnSync(process.execPath, [scanner, ...args], { cwd, encoding: 'utf8' });
  const commit = () => { git('add', '.'); git('commit', '-qm', 'fixture'); return git('rev-parse', 'HEAD'); };
  try {
    git('init', '-q');
    git('config', 'user.name', 'Test');
    git('config', 'user.email', 'test@example.invalid');
    writeFileSync(join(cwd, 'safe.txt'), 'safe\n');
    const base = commit();
    assert.equal(scan('--range', base, zero).status, 0);
    const secret = 'AKIA' + 'Z'.repeat(16);
    writeFileSync(join(cwd, 'space name.txt'), secret);
    commit();
    writeFileSync(join(cwd, 'space name.txt'), 'removed');
    const head = commit();
    const result = scan('--range', head, base);
    assert.equal(result.status, 1);
    assert.match(result.stderr, /space name.txt/);
    assert.ok(!result.stderr.includes(secret));
    assert.equal(scan('--range', head, zero).status, 1);
    assert.equal(scan('--range', head, 'f'.repeat(40)).status, 1);
    const push = spawnSync(process.execPath, [scanner, '--pre-push'], {
      cwd, encoding: 'utf8',
      input: `refs/heads/safe ${base} refs/heads/safe ${zero}\nrefs/heads/main ${head} refs/heads/main ${base}\n`,
    });
    assert.equal(push.status, 1);
    assert.equal(scan('--staged').status, 0);
    assert.equal(scan('--tracked').status, 0);
    writeFileSync(join(cwd, '.env'), 'PASSWORD=ordinary');
    git('add', '.env');
    assert.equal(scan('--staged').status, 1);
    assert.equal(scan('--tracked').status, 1);
    git('rm', '--cached', '.env');
    writeFileSync(join(cwd, '.env.example'), 'PASSWORD=');
    git('add', '.env.example');
    assert.equal(scan('--staged').status, 0);
    assert.equal(scan('--tracked').status, 0);
    const deletion = spawnSync(process.execPath, [scanner, '--pre-push'], {
      cwd, encoding: 'utf8', input: `(delete) ${zero} refs/heads/main ${head}\n`,
    });
    assert.equal(deletion.status, 0);
  } finally {
    rmSync(cwd, { recursive: true, force: true });
  }
});

test('stagedだけ検査し、切り替えを止めず、commit --no-verifyを拒否する', () => {
  const cwd = mkdtempSync(join(tmpdir(), 'fec-reference-test-'));
  const root = fileURLToPath(new URL('../', import.meta.url));
  const env = { ...process.env, HUSKY: '1' };
  const run = (...args) => spawnSync('git', args, { cwd, encoding: 'utf8', env });
  const git = (...args) => {
    const result = run(...args);
    assert.equal(result.status, 0, result.stderr);
    return result.stdout.trim();
  };
  const secret = 'AKIA' + 'Z'.repeat(16);
  try {
    git('init', '-q');
    git('config', 'user.name', 'Test');
    git('config', 'user.email', 'test@example.invalid');
    mkdirSync(join(cwd, '.husky'));
    copyFileSync(join(root, '.husky/pre-commit'), join(cwd, '.husky/pre-commit'));
    copyFileSync(join(root, '.husky/reference-transaction'), join(cwd, '.husky/reference-transaction'));
    symlinkSync(join(root, 'scripts'), join(cwd, 'scripts'));
    symlinkSync(join(root, 'node_modules'), join(cwd, 'node_modules'));
    const install = spawnSync(process.execPath, [join(root, 'scripts/install-hooks.mjs')], { cwd, encoding: 'utf8', env });
    assert.equal(install.status, 0, install.stderr);
    assert.equal(git('config', '--get', 'core.hooksPath'), '.husky/_');

    writeFileSync(join(cwd, 'content.txt'), secret);
    git('add', 'content.txt');
    const initial = run('commit', '--no-verify', '-qm', 'blocked initial');
    assert.notEqual(initial.status, 0);
    assert.match(initial.stderr, /認証情報の疑い/);
    assert.ok(!initial.stderr.includes(secret));
    assert.notEqual(run('rev-parse', '--verify', 'HEAD').status, 0);

    writeFileSync(join(cwd, 'content.txt'), 'safe');
    git('add', 'content.txt');
    git('commit', '--no-verify', '-qm', 'safe');
    const base = git('rev-parse', 'HEAD');
    writeFileSync(join(cwd, 'unstaged.txt'), secret);
    git('switch', '-c', 'new-branch');
    assert.equal(git('branch', '--show-current'), 'new-branch');
    assert.equal(git('rev-parse', 'HEAD'), base);
    // stagedに秘密があっても、既存コミットからのブランチ作成は検査しない。
    writeFileSync(join(cwd, 'content.txt'), secret);
    git('add', 'content.txt');
    git('switch', '-c', 'another-branch');
    assert.equal(git('branch', '--show-current'), 'another-branch');
    git('switch', 'new-branch');
    assert.equal(git('branch', '--show-current'), 'new-branch');
    assert.notEqual(run('commit', '-qm', 'blocked by pre-commit').status, 0);
    assert.notEqual(run('commit', '--no-verify', '-qm', 'blocked').status, 0);
    assert.equal(git('rev-parse', 'HEAD'), base);

    // 別経路で作られたコミットを取り込む場合は、stagedの内容を検査する。
    const tree = git('write-tree');
    const bad = git('commit-tree', tree, '-p', base, '-m', 'unreferenced');
    git('reset', '--hard', base);
    assert.notEqual(run('cherry-pick', bad).status, 0);
    assert.equal(git('rev-parse', 'HEAD'), base);
    git('reset', '--hard', base);
    git('checkout', '--detach', base);
    writeFileSync(join(cwd, 'content.txt'), secret);
    git('add', 'content.txt');
    assert.notEqual(run('commit', '--no-verify', '-qm', 'blocked detached').status, 0);
    assert.equal(git('rev-parse', 'HEAD'), base);
    git('reset', '--hard', base);
    git('tag', 'safe-tag', base);
    git('tag', '-d', 'safe-tag');
  } finally {
    rmSync(cwd, { recursive: true, force: true });
  }
});

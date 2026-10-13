import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const toolRoot = fileURLToPath(new URL('../', import.meta.url));
const deny = [
  /(^|\/)\.env(?:\.(?!example$|sample$|template$|dist$)[^/]+)?$/i,
  /\.(pem|key|p12|pfx|jks|keystore|ppk)$/i,
  /(^|\/)id_(rsa|dsa|ecdsa|ed25519)$/,
  /(^|\/)\.(databrickscfg|netrc|pgpass)$/,
  /(^|\/)credentials(\.json|\.ya?ml|\.csv)?$/i,
  /(^|\/)[^/]*service[-_]account[^/]*\.json$/i,
  /(^|\/)\.aws\//,
];
const git = (...args) => execFileSync('git', args, {
  maxBuffer: 256 * 1024 * 1024,
  stdio: ['pipe', 'pipe', 'pipe'],
});
const zero = (sha) => /^0+$/.test(sha);
const entries = new Map();
function add(path, sha, mode) {
  if (mode === '160000') throw new Error('サブモジュールは別途検査が必要です。');
  entries.set(`${sha}:${path}`, { path, sha });
}
function staged() {
  const tokens = git('diff', '--cached', '--raw', '-z', '--no-abbrev',
    '--no-renames', '--diff-filter=ACMT', '--').toString('utf8').split('\0');
  for (let i = 0; i < tokens.length; i++) {
    const record = tokens[i];
    if (!record.startsWith(':')) continue;
    const fields = record.slice(1).split(' ');
    add(tokens[++i], fields[3], fields[1]);
  }
}
function range(local, remote) {
  if (!/^[a-f0-9]{40,64}$/.test(local) || !/^[a-f0-9]{40,64}$/.test(remote)) {
    throw new Error('不正なref更新です。');
  }
  if (zero(local)) return;
  // 新規ブランチ・remote object未取得時は全履歴を検査する。
  // 他remoteの追跡refを除外すると、新しい送信先での漏洩を見逃すため除外しない。
  const known = !zero(remote) && spawnSync('git', ['cat-file', '-e', remote], {
    stdio: 'ignore',
  }).status === 0;
  const revisions = known ? [`${remote}..${local}`] : [local];
  const tokens = git('log', '--format=', '--raw', '-z', '--no-abbrev',
    '--no-renames', '--root', '-m', '--diff-filter=ACMT', ...revisions, '--')
    .toString('utf8').split('\0');
  for (let i = 0; i < tokens.length; i++) {
    const record = tokens[i].trimStart();
    if (!record.startsWith(':')) continue;
    const fields = record.slice(1).split(' ');
    add(tokens[++i], fields[3], fields[1]);
  }
}

function main() {
  const [mode, ...args] = process.argv.slice(2);
  if (mode === '--reference-transaction') {
    for (const line of readFileSync(0, 'utf8').split('\n').filter(Boolean)) {
      const fields = line.trim().split(/\s+/);
      if (fields.length !== 3) throw new Error('不正なreference-transaction入力です。');
      const [oldSha, newSha, ref] = fields;
      // 既存コミットへのブランチ作成・切り替えは走査しない。
      // 新規コミットだけを選び、その内容はGit indexから読む。
      if (ref !== 'HEAD' && !ref.startsWith('refs/heads/')) continue;
      if (newSha.startsWith('ref:') || newSha === oldSha || zero(newSha)) continue;
      if (!/^[a-f0-9]{40,64}$/.test(newSha)) throw new Error('不正なref更新です。');
      if (zero(oldSha) && ref !== 'HEAD') {
        // old=0はブランチ作成でも届く。現在のHEADが指すrefだけが
        // 初回コミットの更新候補なので、それ以外は検査しない。
        const currentBranch = spawnSync('git', ['symbolic-ref', '-q', 'HEAD'], {
          encoding: 'utf8',
        });
        if (currentBranch.status !== 0 || currentBranch.stdout.trim() !== ref) continue;
      }
      const unseen = git('rev-list', '--max-count=1', newSha, '--not', '--all').length > 0;
      if (unseen) staged();
    }
  } else if (mode === '--staged') {
    staged();
  } else if (mode === '--pre-push') {
    for (const line of readFileSync(0, 'utf8').split('\n').filter(Boolean)) {
      const fields = line.trim().split(/\s+/);
      if (fields.length !== 4) throw new Error('不正なpre-push入力です。');
      range(fields[1], fields[3]);
    }
  } else if (mode === '--range' && args.length === 2) {
    range(...args);
  } else if (mode === '--tracked') {
    for (const record of git('ls-files', '--stage', '-z').toString('utf8').split('\0').filter(Boolean)) {
      const tab = record.indexOf('\t');
      const [fileMode, sha, stage] = record.slice(0, tab).split(' ');
      if (stage !== '0') throw new Error('競合を解消してから検査してください。');
      add(record.slice(tab + 1), sha, fileMode);
    }
  } else {
    throw new Error('Usage: node scripts/check-secrets.mjs --staged | --tracked | --pre-push | --reference-transaction | --range <local> <remote>');
  }
  if (!entries.size) return;
  const binary = resolve(toolRoot, 'node_modules/secretlint/bin/secretlint.js');
  if (!existsSync(binary)) throw new Error('secretlintが見つかりません。npm ciで依存を導入してください。');
  let failed = false;
  for (const { path } of entries.values()) {
    if (deny.some((pattern) => pattern.test(path))) {
      console.error(`禁止ファイル名: ${JSON.stringify(path)}`);
      failed = true;
    }
  }
  const temp = mkdtempSync(join(tmpdir(), 'fec-secret-scan-'));
  try {
    const files = [];
    const paths = new Map();
    for (const { path, sha } of entries.values()) {
      // flatな一時ファイルに展開し、symlinkやパスを解釈しない。
      const name = `${files.length}.txt`;
      writeFileSync(join(temp, name), git('cat-file', 'blob', sha));
      files.push(name);
      paths.set(name, path);
    }
    for (let i = 0; i < files.length; i += 100) {
      const result = spawnSync(process.execPath, [
        binary,
        '--secretlintrc', resolve(toolRoot, '.secretlintrc.json'),
        '--no-glob', '--no-gitignore', '--format', resolve(toolRoot, 'scripts/secretlint-formatter.mjs'),
        ...files.slice(i, i + 100),
      ], { cwd: temp, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
      if (result.error || ![0, 1].includes(result.status)) {
        throw new Error(`secretlintの実行に失敗しました (exit=${result.status}, signal=${result.signal ?? 'none'}, code=${result.error?.code ?? 'none'})。`);
      }
      let reports;
      try {
        reports = JSON.parse(result.stdout);
      } catch {
        throw new Error('secretlintの検査結果を読み取れませんでした。');
      }
      for (const report of reports) {
        for (const message of report.messages ?? []) {
          // secretlintのメッセージやソースを出力せず、実値の漏洩を防ぐ。
          const name = report.filePath.split(/[\\/]/).pop();
          console.error(`認証情報の疑い: ${JSON.stringify(paths.get(name))}:${message.line ?? '?'} (${message.ruleId})`);
        }
      }
      if (result.status !== 0) failed = true;
    }
  } finally {
    rmSync(temp, { recursive: true, force: true });
  }
  if (failed) throw new Error('認証情報の疑いがあるため中止しました。対象の履歴から取り除いてください。');
  console.error(`クレデンシャル検査完了 (${entries.size} ファイルバージョン)。`);
}
try {
  main();
} catch (error) {
  // Git/ツールの生の出力には秘密が含まれる可能性がある。
  console.error(error.status !== undefined ? 'Gitオブジェクトの検査に失敗しました。' : error.message);
  process.exitCode = 1;
}

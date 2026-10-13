import husky from 'husky';
import { chmodSync, existsSync, writeFileSync } from 'node:fs';

const message = husky();
if (message) {
  console.error(message);
  // Huskyの明示的な無効化とGit管理外の配布物は従来どおり扱う。
  if (process.env.HUSKY !== '0' && existsSync('.git')) process.exitCode = 1;
} else {
  // Husky v9の標準フック一覧にreference-transactionは含まれない。
  const hook = '.husky/_/reference-transaction';
  writeFileSync(hook, '#!/usr/bin/env sh\n. "$(dirname "$0")/h"\n');
  chmodSync(hook, 0o755);
}

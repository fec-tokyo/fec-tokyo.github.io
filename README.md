# フロントエンドカンファレンス東京Webサイト

## push前のクレデンシャル検査

Node.js 24とGitを用意し、`npm ci`を実行すると、既存のHusky経由で
pre-pushとreference-transactionフックが有効になります。Pythonは不要です。
手動で再設定する場合は`npm run prepare`を実行します。

`git commit`時、Git indexで追加・変更されたファイルだけを検査します。
未ステージの編集や既存履歴はここでは走査しません。

`git push`時、送信対象の各コミットの追加・変更ファイルをGitオブジェクトから
取り出して検査します。途中で追加し、後のコミットで削除・置換した秘密も対象です。
新規ブランチや送信先のコミットがローカルにない場合は、送信する全履歴を検査します。
削除だけのpushは検査不要です。

- `.env`、秘密鍵、AWS設定などのファイル名を禁止します。
  `.env.example` / `.env.sample` / `.env.template` / `.env.dist`は内容検査のみ行います。
- secretlintの推奨ルールと追加パターンで認証情報を検査します。
- 検出時はファイル名・行・ルールだけを表示し、認証情報の実値は表示しません。
- 依存不足や検査エラーでもpushを止めます。

手動検査は`npm run check-secrets`（stagedの追加・変更だけ）、
追跡ファイル全体の検査は`npm run check-secrets:tracked`、
検査機構のテストは`npm run test:secrets`です。未ステージの編集は手動検査に含みません。
誤検出は`.secretlintrc.json`の該当ルールの`allows`、ファイル名の判定は
`scripts/check-secrets.mjs`の`deny`で対象を絞って調整してください。

### `--no-verify`への対策

[`reference-transaction`](https://git-scm.com/docs/githooks#_reference_transaction)の
`prepared`段階で新規コミットの参照更新だけを判定し、staged内容を1回検査します。
秘密が見つかると参照更新を中止するため、`git commit --no-verify`でも検査を省略できません。
既存コミットを指すブランチの作成・切り替えでは履歴の内容検査を行いません。
削除とsymbolic refの切り替え、remote追跡refの更新も対象外です。
Husky v9が標準生成しないフックなので、`prepare`で専用の起動ファイルを補います。

`git push --no-verify`は引き続きpre-pushを省略しますが、この環境で通常作成する
コミットは参照更新時点で検査されます。導入前・別環境で作成されたコミットや、
`HUSKY=0`・`core.hooksPath`変更などによる意図的な無効化までは防げません。
送信自体を強制的に拒否するにはサーバー側のsecret push protectionや受信フックが必要です。
パターンに一致しない秘密は検出できないため、検査は漏洩防止の補助です。

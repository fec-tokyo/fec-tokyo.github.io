# フロントエンドカンファレンス東京Webサイト

フロントエンドカンファレンス東京の公式サイトです。Astroで構築し、GitHub Pagesに公開しています。
年別のページとして`/2025/`、`/2025/contents/`、`/2026/`があります。
現在、トップページ（`/`）は`/2026/`へリダイレクトします。
旧特定商取引法に基づく表記のURL（`/tokushoho/`）は、`astro.config.mjs`の`redirects`で公式サイトの表記ページへリダイレクトします。

## 開発環境

Node.js 24（`.node-version`および`package.json`のVolta設定では24.5.0）とnpmを使用します。

```sh
npm ci
npm run dev
```

開発サーバーは`http://localhost:3000`で起動します。公開用の出力をローカルで確認する場合は、
`npm run build`の後に`npm run preview`を実行します。ビルド結果は`dist/`に生成されます。

## 主なファイル

| パス | 内容 |
| --- | --- |
| `src/pages/` | URLに対応するページ。年別のページは`2025/`、`2026/`に配置 |
| `src/components/2025/`、`src/components/2026/` | 年別の表示部品 |
| `src/data/2025/` | 2025年のセッション、タイムテーブル、スポンサーなどのデータ |
| `src/data/2026/` | 2026年のお知らせとリンク先。チケットなどのURLは`links.ts`で管理 |
| `src/css/`、`src/assets/` | スタイルと画像・SVG |
| `public/` | faviconやOG画像など、そのまま配信するファイル |

## 確認コマンド

| コマンド | 内容 |
| --- | --- |
| `npm run check` | AstroとTypeScriptのチェック |
| `npm run build` | 本番用サイトのビルド |
| `npm run markuplint` | Astroファイルのマークアップ検査 |
| `npm run markuplint:dist` | ビルド後のHTMLのマークアップ検査 |
| `npm run eslint` | JavaScript・TypeScript・AstroファイルのLintと自動修正 |
| `npm run stylelint` | Astro・CSSファイルのLintと自動修正 |
| `npm run format` | AstroファイルをPrettierで整形 |
| `npm run screenshots` | Playwrightでスクリーンショットを取得 |

スクリーンショットを初めて取得する環境では`npx playwright install`でブラウザーを用意してください。
`npm run screenshots`はビルドしたサイトをポート3000で配信し、結果を`screen-shot/`に保存します。

## 公開

`.github/workflows/publish.yml`の「Deploy Pages」をGitHub Actionsから手動実行すると、
`npm ci`と`npm run build`を行い、`dist/`をGitHub Pagesにデプロイします。
タグを指定して実行した場合は、ビルド成果物のアーカイブをGitHub Releaseにも添付します。

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

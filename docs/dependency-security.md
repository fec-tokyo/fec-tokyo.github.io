# 依存パッケージの脆弱性対応

[Issue #92](https://github.com/fec-tokyo/fec-tokyo.github.io/issues/92) の対応記録。確認日: 2026-11-03。

## 更新と運用方針

- `npm audit fix` でメジャー更新を伴わない修正を適用し、その後 Astro を 5.12.8 から 7.4.5 に更新した。Astro 5 に残る画像処理の critical と zod の high を解消するため、メジャー更新を採用する。
- lockfile の Astro 7.4.5、Vite 8.3.5、sharp 0.35.5 により、Issue で挙げられた Astro の画像処理、dev/preview、sharp/libvips の advisory は audit の対象から外れた。
- Node.js は 24.22.1 を使用する。古い 24.5.0 から開発環境の指定を更新した。両デプロイワークフローの `node-version: 24` もこの要件を満たす。
- `serve` とその依存を削除した。`npm run serve` は `astro preview --host 127.0.0.1 --port 3000` を起動する。スクリーンショットもこのコマンドを使い、LAN に公開しない。dev/preview に `--host 0.0.0.0` を付けない。
- Astro 7 で変更された空白処理は `compressHTML: true` で従来の動作を維持した。SNS アイコンはコンポーネント参照を配列に持たせる形に変更した。
- Lint の既存エラー（未使用 import、インデント、CSS 宣言順）も修正した。markuplint の glob を引用符で囲み、年別ディレクトリも検査する。KV の画像に寸法を付与し、favicon URL の正規表現をテンプレート外に移してパーサーエラーを避けた。

## 画像素材

AVIF / HEIF は修正済みの Astro・sharp でのみ処理する。未更新のブランチや過去の lockfile を使うビルドには新規の AVIF / HEIF を追加しない。拡張子の変更を安全対策にしない。

登壇者・スポンサー等から受け取る画像は、出所と用途を確認してレビューしたものだけをリポジトリに追加する。任意の外部 URL から画像を自動取得して、デプロイ権限付きジョブで変換する仕組みは導入しない。新しい画像形式や外部取得の導入時には画像処理依存の audit を再確認する。

## 残る advisory の扱い

更新後の `npm audit --json` は **19件 (moderate 15、low 4、high 0、critical 0)**。`npm audit --omit=dev` は0件。19件は依存元への波及を含む件数で、直接の advisory は次の3種類。いずれも開発用 Lint の依存で、静的サイトの配信コードには含まれない。

| advisory | 残る依存経路と発動条件 | 現在の判断 |
| --- | --- | --- |
| [GHSA-gcqx-w48m-w2h4](https://github.com/advisories/GHSA-gcqx-w48m-w2h4) | markuplint → ml-config → deepmerge 4.3.1。攻撃者が制御するオブジェクトをマージすると、戻り値のプロトタイプが汚染される | `.markuplintrc` と同梱 preset の設定をマージする開発処理のみ。外部から設定オブジェクトを受け付けないため現在の利用経路では影響なしとして受容する。修正版がなく、markuplint 1.8.1 への降格は採用しない |
| [GHSA-3g3m-2fjr-6pw4](https://github.com/advisories/GHSA-3g3m-2fjr-6pw4) | markuplint → file-resolver → glob 13.0.6。AbortSignal で中断した探索が裏で継続する | file-resolver は `glob(filePathOrGlob, {})` を呼び、AbortSignal を指定していない。固定したローカルのソース glob を検査するため、この中断回避経路は成立しない。親依存が修正版を採用するまで受容する |
| [GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249) | ESLint / typescript-eslint / markuplint / glob → minimatch 3.x、9.x、10.x。攻撃者が制御するパターンによる計算量増幅 | CLI、Lint 設定、同梱 preset のパターンを使い、Web 入力や外部利用者の glob を受け付けない。現在の利用経路では影響なしとして受容する。11.x の強制 override は互換性を保証できないため採用しない |

`npm audit fix --force` によるツールの降格や、互換範囲外の override で警告だけを消す運用はしない。残存 advisory は通常の依存更新時に再確認する。外部設定、利用者指定 glob、信頼できないリポジトリに対する Lint サービスを追加する場合は、上の受容判断を見直す。

SSR、adapter、actions、session、外部 Markdown / YAML / TOML、content collections の導入時も元の静的サイトの調査前提が変わるので、改めて監査する。

## 検証

Node.js 24.22.1 で `npm ci --progress=false`、`npm run build`、`npm run build:preview`、`npm run check`、ESLint、Stylelint、全 Astro ファイルの `npm run markuplint` が成功した。型チェックは errors / warnings / hints がすべて0。既存の `npm run test:secrets` は3件成功、`npm run check-secrets:tracked` も成功した。

表示比較は互換更新後の Astro 5.18.2 を基準に、Chrome の 1440×1000 と 390×844 で `/2026/` のスクリーンショットとメニュー開閉を確認した。ページの高さはそれぞれ7951px / 8576pxで更新前後一致し、横方向のはみ出しはない。画素差分はPCではKV、モバイルでは冒頭のスクロール演出の範囲に限られ、下部の配置に差分はなかった。PC画像の未読込は0、モバイルでは画像2枚が更新前後とも未読込で、増加はない。`lsof` でも配信先が `127.0.0.1:3000` であることを確認した。

本番成果物のローカル参照に欠落はなく、2026年LPのfaviconは本番で `/favicon.ico`、プレビューで `/preview/favicon.ico`。プレビューのみ `noindex, nofollow` が付くことを確認した。CI のデプロイ自体は行わず、`publish.yml` の `npm run build` と `deploy-preview.yml` の `npm run build:preview` に相当するローカル検証を行う。プレビューが再ビルドする過去の本番コミットにはこの依存更新は適用されないため、当該コミットに新規画像を追加しない。

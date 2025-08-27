# FEC Tokyo Official Website

## プロジェクト概要
Frontend Conference Tokyo 公式サイト。2025年9月21日開催のフロントエンドカンファレンスのランディングページ。

## 技術スタック
- **フレームワーク**: Astro 5.12.8
- **スタイル**: SCSS + CSS Modules（scoped styles）
- **画像処理**: Astro Assets
- **リント**: Biome, Markuplint
- **フォーマッター**: Prettier
- **テスト**: Playwright（スクリーンショットテスト）
- **Git フック**: Husky + lint-staged

## プロジェクト構造
```
src/
├── assets/          # 画像・SVGファイル
├── components/      # 再利用可能なコンポーネント
│   ├── Header.astro # ヘッダーコンポーネント
│   └── Kv.astro     # KVセクション
├── css/             # スタイル関連
│   ├── _vars.scss   # SCSS変数
│   ├── _mixins.scss # SCSSミキシン
│   └── GlobalStyles.astro
├── layouts/         # レイアウトコンポーネント
│   └── Layout.astro
└── pages/           # ページコンポーネント
    └── index.astro
```

## 実装ルール

### ファイル命名
- コンポーネント: PascalCase（例: `Header.astro`）
- ページ: lowercase（例: `index.astro`）
- CSS: _prefix + kebab-case（例: `_vars.scss`）

### スタイル
- 768px以下をSPブレークポイントとする
- `@include mixin.media-sp` でレスポンシブ対応
- scoped styles使用（各コンポーネント内で `<style lang="scss">`）
- パス設定: `@/` = `./src/`

### コード品質
- Biome でリント・フォーマット
- Markuplint で HTML 構文チェック
- コミット前に自動チェック実行
- Playwright でビジュアルリグレッションテスト

### 開発コマンド
- 開発: `npm run dev`
- ビルド: `npm run build`
- チェック: `npm run check`
- テスト: `npm run screenshots`
declare global {
  interface Window {
    // GTM のスニペットが作る配列。プレビュー用ビルドではスニペットを出さないので存在しない
    dataLayer?: Record<string, string | undefined>[];
  }
}

export {};

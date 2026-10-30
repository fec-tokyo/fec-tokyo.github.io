declare global {
  interface Window {
    // GTM のスニペットが作る配列
    dataLayer?: Record<string, string | number>[];
  }
}

export {};

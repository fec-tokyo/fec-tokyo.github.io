type News = {
  text: string;
  url: string;
};

// お知らせごとに URL を決めるので、チケット販売ページと同じ URL でも links.ts は参照せずに書く
export const NEWS: News = {
  text: "一般チケットの販売を開始しました！",
  url: "https://fortee.jp/fec-tokyo-2026/ticket-shop/index/2812bafe-10f6-4b29-a5f4-2111a47c591a",
};

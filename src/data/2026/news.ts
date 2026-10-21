type News = {
  text: string;
  url: string;
};

// お知らせごとに URL を決めるので、チケット販売ページと同じ URL でも links.ts は参照せずに書く
export const NEWS: News = {
  text: "アーリーバードチケットの販売を開始しました！",
  url: "https://fortee.jp/fec-tokyo-2026/ticket-shop/index/e89cacf2-5a76-4671-92b1-a878e27da802",
};

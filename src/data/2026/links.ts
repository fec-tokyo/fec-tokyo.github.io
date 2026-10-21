// LP のトップ（ヘッダーとフッターのロゴのリンク先）
// プレビュー用ビルドでは base が /preview/ になるので BASE_URL を前に付ける
export const TOP_URL = `${import.meta.env.BASE_URL.replace(/\/$/, "")}/2026/`;

// チケット販売ページ（fortee）
export const TICKET_URL = "https://fortee.jp/fec-tokyo-2026/ticket-shop/index";

// アーリーバードチケットの販売ページ（fortee）
export const TICKET_EARLY_BIRD_URL =
  "https://fortee.jp/fec-tokyo-2026/ticket-shop/index/e89cacf2-5a76-4671-92b1-a878e27da802";

export const X_URL = "https://x.com/fec_tokyo";

export const NOTE_URL = "https://note.com/fec_tokyo";

export const GITHUB_URL = "https://github.com/fec-tokyo";

// プロポーザル（登壇の応募）を受け付ける fortee のページ
export const PROPOSAL_URL =
  "https://fortee.jp/fec-tokyo-2026/speaker/proposal/cfp";

// 応募されたプロポーザルの一覧（fortee）
export const PROPOSAL_LIST_URL =
  "https://fortee.jp/fec-tokyo-2026/proposal/all";

// フロカン東京2026の見どころを紹介するスライド（Google スライド）
export const HIGHLIGHTS_URL =
  "https://docs.google.com/presentation/d/1T1mqR4m1UWguHyM2kRPvFcrchqtq_FiOX8Rwo2siW3I/edit?usp=sharing";

// ページ内の注意事項のセクション（NotesSection.astro）
export const NOTES_URL = `${TOP_URL}#notes`;

// TODO: タイムテーブルが公開されたら URL を入れる。null の間はボタンを無効にして表示する
export const TIMETABLE_URL: string | null = null;

export const ANTI_HARASSMENT_POLICY_URL =
  "https://docs.google.com/document/d/1VsMZeTFTB075L-_schEoZIDYz7bjbRccxmwTbl9aOe8/preview?tab=t.0#heading=h.w297zwrtq7xn";

export const PRIVACY_POLICY_URL =
  "https://docs.google.com/document/d/1kzUGfkN5P77_4nmOCCZ7jJZcsGdMD44UIZtSLQMIEPI/edit?usp=sharing";

export const CODE_OF_CONDUCT_URL =
  "https://docs.google.com/document/d/1VsMZeTFTB075L-_schEoZIDYz7bjbRccxmwTbl9aOe8/edit?tab=t.0#heading=h.w297zwrtq7xn";

export const CANCEL_POLICY_URL =
  "https://docs.google.com/document/d/1pyHpjW8yNUDqbZa2p57PjCuEkYn6jWPCNPEQ3PWAq7o/edit?usp=sharing";

import Og0b5vrImage from "@/assets/2026/ogp/ogp_0b5vr.png";
import AkihikoKigureOgImage from "@/assets/2026/ogp/ogp_akihikokigure.png";
import AmagiOgImage from "@/assets/2026/ogp/ogp_amagi.png";
import HirokiTaniOgImage from "@/assets/2026/ogp/ogp_hirokitani.png";
import MasatoHondaOgImage from "@/assets/2026/ogp/ogp_hondamasato.png";
import KyouheiHorizumiOgImage from "@/assets/2026/ogp/ogp_horizumikyohei.png";
import KeitaYamadaOgImage from "@/assets/2026/ogp/ogp_keitayamada.png";
import KogisoOgImage from "@/assets/2026/ogp/ogp_kogiso.png";
import TetsuharuOhzekiOgImage from "@/assets/2026/ogp/ogp_tetsuharuohzeki.png";
import MasatoHondaImage from "@/assets/2026/speaker-icons/honda_masato.jpg";
import KeitaYamadaImage from "@/assets/2026/speaker-icons/keita_yamada.png";
import HirokiTaniImage from "@/assets/2026/speaker-icons/tani_hiroki.jpg";
import LacolacoOgImage from "@/assets/2026/ogp/ogp_lacolaco.png";
import RicardoCabelloOgImage from "@/assets/2026/ogp/ogp_ricardocabello.png";
import Image0b5vr from "@/assets/2026/speaker-icons/0b5vr.png";
import AkihikoKigureImage from "@/assets/2026/speaker-icons/akihiko_kigure.png";
import AmagiImage from "@/assets/2026/speaker-icons/amagi.jpg";
import KogisoImage from "@/assets/2026/speaker-icons/kogiso.jpg";
import KyouheiHorizumiImage from "@/assets/2026/speaker-icons/kyouhei_horizumi.png";
import LacolacoImage from "@/assets/2026/speaker-icons/lacolaco.jpg";
import OkunokentaroImage from "@/assets/2026/speaker-icons/okunokentaro.jpg";
import RicardoCabelloImage from "@/assets/2026/speaker-icons/ricardo_cabello.jpg";
import TetsuharuOhzekiImage from "@/assets/2026/speaker-icons/tetsuharu_ohzeki.jpg";
import type { ImageMetadata } from "astro";

export type GuestSpeaker = {
  name: string;
  company: string | null;
  image: ImageMetadata;
  profile: string;
  sns: string | null;
};

type GuestSession = {
  slug: string;
  overview: string[] | null;
  ogImage: ImageMetadata;
  speakers: GuestSpeaker[];
};

export const GUEST_SESSIONS: GuestSession[] = [
  {
    slug: "hiroki-tani",
    ogImage: HirokiTaniOgImage,
    overview: [
      "Figmaはデザイナー向けのUIデザインツールと思われがちですが、実はユーザーの約3分の1が開発者です。キャンバス上でコードを扱えるようになり、AIエージェントも開発プロセスに加わる今、デザイナーとエンジニアの協働にはどのような可能性が広がっているのでしょうか。本セッションでは、進化するFigmaを通して、エンジニアもデザインに参加し、職種を越えて一緒に考え、つくることの価値をお話しします。",
    ],
    speakers: [
      {
        name: "Hiroki Tani",
        company: "Figma Japan株式会社",
        image: HirokiTaniImage,
        profile:
          "Figma Japan株式会社デザイナーアドボケート。中小企業向けのSaaS、フリーランスでの受託、起業やスタートアップでの開発チーム立ち上げを経験。Webのフロントエンド開発や、UI・UX設計をおこなう。現在はFigma Japanでイベント登壇やコンテンツ設計に取り組んでいる。",
        sns: "https://x.com/hiloki",
      },
    ],
  },
  {
    slug: "keita-yamada",
    ogImage: KeitaYamadaOgImage,
    overview: [
      "デジタルユーザーインターフェースにおける「自己帰属感」をテーマに、AI時代のUI設計について考えます。",
      "生成AIによって、自然言語で指示するだけでUIを実装できるようになりました。しかし、AIにコードを書かせることができても、どのようなUIを作るべきかを判断するための知識や指針は、依然として人間側に求められます。",
      "本セッションでは、ユーザーが自分の操作やその結果を「自分が引き起こしたもの」と感じられる自己帰属感に着目します。具体的なUIを題材に、一般的なプロンプトでAIに実装させた場合と、自己帰属感を考慮した指示を与えた場合とで、生成されるUIにどのような違いが生まれるのかを比較します。",
      "AIにUIを作らせる時代だからこそ、人間がUIの原理を理解しておくことの重要性を、実例を交えながらお話しします。",
    ],
    speakers: [
      {
        name: "Keita Yamada",
        company: "Freelance Web Designer / Developer",
        image: KeitaYamadaImage,
        profile: "フリーランスで活動しているWebサイト制作者です。",
        sns: "https://x.com/P5_keita",
      },
    ],
  },
  {
    slug: "masato-honda",
    ogImage: MasatoHondaOgImage,
    overview: [
      "AIエージェントを活用した開発が広がる中で、デザイナーとエンジニアの職域の境界が曖昧になりつつあります。",
      "そうしたAgenticな開発フローの中で、デザイナーはどのような役割を担い、専門性を発揮していくのか。実際の開発で起きている変化を踏まえながら、従来の役割分担にとらわれない協働のあり方や、職域の境界が融けた先のプロダクト開発についてお話ししたいと考えています。",
    ],
    speakers: [
      {
        name: "本田 雅人",
        company: "株式会社サイバーエージェント",
        image: MasatoHondaImage,
        profile:
          "早稲田大学文学部卒。2017年に株式会社サイバーエージェントに入社。現在はAmebaLIFE事業本部のデザインリードを担当し、プロダクト戦略の設計を担う。Amebaのデザインシステム「Spindle」を立ち上げ、2023年にグッドデザイン賞を受賞。サイバーエージェントの各種サービスのデザインシステムのアドバイザーとしても活動中。著書に『表層UIデザインの解剖学──ユーザーの知覚に訴える「見た目」の作り方』（単著）、『モバイルアプリアクセシビリティ入門──iOS＋Androidのデザインと実装』（共著、いずれも技術評論社）がある。",
        sns: "https://x.com/Windom40",
      },
    ],
  },
  {
    slug: "amagi",
    ogImage: AmagiOgImage,
    overview: [
      "Rust/WebAssemblyで動画編集アプリを開発した知見"
    ],
    speakers: [
      {
        name: "Amagi",
        company: null,
        image: AmagiImage,
        profile:
          "Webグラフィックスエンジニア。2021年より動画生成/編集サービスInVideoの開発に携わる。カナダ・バンクーバー在住。",
        sns: "https://x.com/amagitakayosi",
      },
    ],
  },
  {
    slug: "akihiko-kigure",
    ogImage: AkihikoKigureOgImage,
    overview: ["（仮）MDN Web Docs 翻訳コミュニティの活動紹介"],
    speakers: [
      {
        name: "akihiko.KIgure a.k.a グレさん",
        company: null,
        image: AkihikoKigureImage,
        profile:
          "akihiko.KIgure a.k.a グレさん 渋谷とグンマー帝国の 2 拠点でフロントエンド開発をしています。",
        sns: "https://x.com/ic_lifewood",
      },
    ],
  },
  {
    slug: "0b5vr",
    ogImage: Og0b5vrImage,
    overview: [
      "私は、数KB〜数十KBの単一HTMLファイルから映像と音楽をリアルタイム生成する作品をつくっています。その中では、普段のWeb開発ではあまり触れる機会のないブラウザAPIが活躍しています。本セッションでは、自作の作品を題材に、WebGLとWeb Audioを用いた映像・音楽生成、そしてDecompressionStreamや圧縮技術を駆使してHTMLファイルを極限まで小さくするテクニックを紹介します。デモシーン特有のブラウザ技術に触れて、刺激を受けていただければ幸いです。",
    ],
    speakers: [
      {
        name: "0b5vr",
        company: null,
        image: Image0b5vr,
        profile:
          "0b5vrは、日本を拠点に活動するデモシーナー。64KBや8KBといったサイズ制限のある単一のHTMLファイルから、映像と音楽をブラウザ上でリアルタイム生成する作品の制作を得意とする。",
        sns: "https://x.com/0b5vr",
      },
    ],
  },
  {
    slug: "tetsuharu-ohzeki",
    ogImage: TetsuharuOhzekiOgImage,
    overview: [
      "DOM binding - JSの世界とC++で実装されたDOMはどのように統合されて動くのか",
    ],
    speakers: [
      {
        name: "Tetsuharu Ohzeki",
        company: null,
        image: TetsuharuOhzekiImage,
        profile: "Open Source Software Engineer",
        sns: "https://github.com/tetsuharuohzeki",
      },
    ],
  },
  {
    slug: "kgsi",
    ogImage: KogisoOgImage,
    overview: [
      "コードとデザイン（仮）",
      "今年起こったデジタルにおけるデザイン界隈の変化と、デザインとコードの今後の在り方についてお話します。",
    ],
    speakers: [
      {
        name: "こぎそ",
        company: "株式会社Lumilinks",
        image: KogisoImage,
        profile:
          "株式会社Lumilinks 代表取締役/デザイナー。受託制作会社やインターネットインフラ企業でデザイン、アプリケーション開発などに携わったのち、SaaS企業でプロダクトデザイン、デザインシステムの構築を担当。生成AIベンチャーやスタートアップを経て株式会社Lumilinksを設立。デザインを軸に、組織支援、AIワークフロー構築、広報支援などを行う。共著に『ちいさくはじめるデザインシステム』（BNN）。",
        sns: "https://x.com/kgsi",
      },
    ],
  },
  {
    slug: "kyouhei-horizumi",
    ogImage: KyouheiHorizumiOgImage,
    overview: ["サポート詐欺の魔手を断て！"],
    speakers: [
      {
        name: "堀住 恭平",
        company: "FOURIER Inc.",
        image: KyouheiHorizumiImage,
        profile: "Windows Meに育てられました / FOURIER Inc.",
        sns: "https://x.com/KyouheiHorizumi",
      },
    ],
  },
  {
    // TODO: フォームの登壇概要が空欄だったので、概要が届いたら overview を入れる（それまで詳細ページに Overview は出さない）
    slug: "ricardo-cabello",
    ogImage: RicardoCabelloOgImage,
    overview: null,
    speakers: [
      {
        name: "Ricardo Cabello / mrdoob",
        company: "Google",
        image: RicardoCabelloImage,
        profile:
          "Ricardo Cabello (Mr.doob) is a Tokyo-based software engineer at Google and the creator of Three.js. Since 2010, he has maintained the open-source 3D web graphics library and led its global community of developers and artists.",
        sns: "https://x.com/mrdoob",
      },
    ],
  },
  {
    slug: "lacolaco-okunokentaro",
    // OGP 画像は lacolaco と okunokentaro の 2 枚あるが、ページはひとつなので lacolaco の方を使う
    ogImage: LacolacoOgImage,
    overview: [
      "リファラジのふたりがそれぞれの2026年のリファクタリングを振り返る公開収録",
    ],
    speakers: [
      {
        name: "lacolaco",
        company: null,
        image: LacolacoImage,
        profile:
          "Google Developers Expert for Angular。Angularを中心にWeb周辺のオープンソースコミュニティでコントリビューションや翻訳、登壇、イベント主催などの活動をしています。ポッドキャスト「リファクタリングとともに生きるラジオ」でも活動中。",
        sns: "https://x.com/laco2net",
      },
      {
        name: "okunokentaro",
        company: null,
        image: OkunokentaroImage,
        profile:
          "TypeScript歴13年。20万行超の大規模アプリケーション設計を得意とする。2026年7月から、タイムリープ株式会社の技術顧問。商業書籍の執筆、カンファレンス登壇、イベント運営など。",
        sns: "https://x.com/okunokentaro",
      },
    ],
  },
];

// ゲストスピーカーの枠の数（Figma では 4 列 × 3 段）
const GUEST_SPEAKER_SLOTS = 12;

/*
 * まだ公開していない枠の公開予定日。3 枠ずつ 1 日ごとに公開する。
 * 枠の頭から数えて until 番目より前の枠がその日に公開になる（最初の 3 枠は公開済み）
 */
const PUBLISH_SCHEDULE = [
  { until: 6, date: "10/28（水）" },
  { until: 9, date: "10/29（木）" },
  { until: 12, date: "10/30（金）" },
];

const publishedCount = GUEST_SESSIONS.flatMap(
  ({ speakers }) => speakers,
).length;

// まだ公開していないスピーカーの枠。公開したスピーカーで埋まらない分だけ「coming soon...」のカードを並べる
export const GUEST_SPEAKERS_COMING_SOON = Array.from(
  { length: Math.max(0, GUEST_SPEAKER_SLOTS - publishedCount) },
  (_, index) => {
    const slot = publishedCount + index;
    const date = PUBLISH_SCHEDULE.find(({ until }) => slot < until)?.date;
    return { publishDateText: `${date}公開予定` };
  },
);

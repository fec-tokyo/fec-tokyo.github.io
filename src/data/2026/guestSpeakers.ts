import Og0b5vrImage from "@/assets/2026/ogp/ogp_0b5vr.png";
import AkihikoKigureOgImage from "@/assets/2026/ogp/ogp_akihikokigure.png";
import AmagiOgImage from "@/assets/2026/ogp/ogp_amagi.png";
import HirokiTaniOgImage from "@/assets/2026/ogp/ogp_hirokitani.png";
import MasatoHondaOgImage from "@/assets/2026/ogp/ogp_hondamasato.png";
import KyouheiHorizumiOgImage from "@/assets/2026/ogp/ogp_horizumikyohei.png";
import KogisoOgImage from "@/assets/2026/ogp/ogp_kogiso.png";
import LacolacoAndOkunoKentaroOgImage from "@/assets/2026/ogp/ogp_lacolaco_okunokentaro.png";
import RicardoCabelloOgImage from "@/assets/2026/ogp/ogp_ricardocabello.png";
import TetsuharuOhzekiOgImage from "@/assets/2026/ogp/ogp_tetsuharuohzeki.png";
import Image0b5vr from "@/assets/2026/speaker-icons/0b5vr.png";
import AkihikoKigureImage from "@/assets/2026/speaker-icons/akihiko_kigure.png";
import AmagiImage from "@/assets/2026/speaker-icons/amagi.jpg";
import MasatoHondaImage from "@/assets/2026/speaker-icons/honda_masato.jpg";
import KogisoImage from "@/assets/2026/speaker-icons/kogiso.jpg";
import KyouheiHorizumiImage from "@/assets/2026/speaker-icons/kyouhei_horizumi.png";
import LacolacoImage from "@/assets/2026/speaker-icons/lacolaco.jpg";
import OkunokentaroImage from "@/assets/2026/speaker-icons/okunokentaro.jpg";
import RicardoCabelloImage from "@/assets/2026/speaker-icons/ricardo_cabello.jpg";
import HirokiTaniImage from "@/assets/2026/speaker-icons/tani_hiroki.jpg";
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
  // セッションのタイトル。まだ決まっていないときは null
  title: string | null;
  overview: string[] | null;
  ogImage: ImageMetadata;
  speakers: GuestSpeaker[];
};

export const GUEST_SESSIONS: GuestSession[] = [
  {
    slug: "hiroki-tani",
    ogImage: HirokiTaniOgImage,
    title: "コードを素材に、みんなでデザインする",
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
    slug: "masato-honda",
    ogImage: MasatoHondaOgImage,
    title: "融けていく職域の中で、再定義されるデザインという行為の実態について",
    overview: [
      "AIの台頭によりあらゆる行為の価値が変わりました。制作過程は省略され、再現のための思考や試行錯誤は誰でも手軽にできるものになりました。これまでデザインの価値の多くは「正しく作る過程」にあり、中間成果物がゴールでした。それが企業の目指す状態に不可欠だったからです。",
      "しかし、デザインの本質は過程や手段ではありません。どんなアウトカムを生み、どんな市場インパクトをもたらすか。そこにあります。デザイナーがコードというユーザーに届く実体に踏み込むのはこれまでも必然でした。今やデザインは良いものづくりのためなら何でも行い、責任を持つ職へと本質回帰しています。",
      "同じ目的に向かうなら、職種を問わず誰もがデザイナーの職域に立ちます。違うのは責任と軸足の置き場所だけです。本セッションでは、融けゆく職域の中でデザインが担う実態と、フロントエンドに携わる私たちの役割、それを支える組織や仕組みについて語ります。",
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
    title: "拡大するフロントエンド / Extend the Frontend",
    overview: [
      "Webブラウザの進化によって、Webフロントエンドで扱える技術は大幅に増えました。また、AIによって実装のスピードが急激に向上した結果、一人ひとりの開発者がカバーすべき領域も拡大を続けています。",
      "この発表では、Rust/WebAssemblyで書かれた動画編集アプリの実例を通じて、フロントエンドの領域がどこまで拡大していけるのかを論じます。特に、DOMの管理から外れた領域でのWeb開発について、WebGL、動画処理、テキストレンダリングなどを絡めて考えてます。",
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
    title: "MDN Web Docs 歴史と活動の紹介",
    overview: [
      "MDN Web Docs の誕生と歴史をブラウザの歴史と関連付けて紹介します。翻訳活動と翻訳手順を紹介します。",
    ],
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
    title: "DemosceneにおけるWeb APIと圧縮技術",
    overview: [
      "私は、数KB〜数十KBの単一HTMLファイルから映像と音楽をリアルタイム生成する作品をつくっています。その中では、普段のWeb開発ではあまり触れる機会のないブラウザAPIが活躍しています。本セッションでは、私の作品を題材に、WebGLとWeb Audioを用いた映像・音楽生成、そしてDecompressionStreamや圧縮技術を駆使してHTMLファイルを極限まで小さくするテクニックを紹介します。デモシーン特有のブラウザ技術に触れて、刺激を受けていただければ幸いです。",
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
    title:
      "How to handle DOM object lifetime? Web EngineにおけるJSとC++の協調的メモリ管理",
    overview: [
      "JavaScriptを書いていてメモリ管理を気にしたことがありますか？　多くの方は無縁なことと思います。C++やRustを書いていてメモリ管理を気にしたことがありますか？　多くの方は苦労なさっていると思います。",
      "では、JSから操作されるDOMの裏側はどうなっているでしょうか。主要なWeb EngineのDOMはC++で実装されています。つまり、メモリ管理を殆ど気にしなくてよい世界から、メモリ管理を厳格に気にする世界が直接操作されています。少し扱いを間違えるだけでクラッシュや脆弱性・メモリリークの温床になります。とても面倒くさそうですね。",
      "本セッションでは、3大Web Engineがどのようにこの厄介さに取り組んでいるのかについての概説を通じて、Web Engineの面白さについてお伝えできればと思います。",
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
    title: "デザインエージェントの未来。",
    overview: [
      "AIやエージェントにより開発速度は上がったものの、価値提供の速度は変わっていません。合意形成や、とりわけデザイン・使いやすさの「品質判断」が人の速さのまま留まっているためです。判断が遅れればスロップ（粗悪品）が出回り、迷えば手戻りが増えます。",
      "2026年、デザイン領域においてもDESIGN.mdやAgentic Design System、デザインハーネスなど判断基準を渡す仕組みは進みましたが、検証は依然として人頼みです。ソフトウェアファクトリーなどの概念が発達し、生成量が急増する中で、人だけの確認だけでは限界を迎えます。いま求められるのは、判断基準をもとに確認から修正まで自律的に担うデザインエージェントの登場です。",
      "本セッションでは2026年のデザイン組織の変化を振り返り、デザインエージェントについてと、2027年に向け、組織が備えるべき実践をお話しします。",
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
    title:
      "サポート詐欺の魔手を断て！ 〜Chromiumへの修正と、問題に挑み続ける理由〜",
    overview: [
      "日本国内だけでも2025年に約14.9億円の被害が確認されたサポート詐欺は、海外でも深刻な問題となっています。その手口の一つに、ブラクラを使ってブラウザを閉じたり、前のページに戻ったりする操作を妨害し、ユーザーをその場に留めようとするものがあります。こうした問題をきっかけに、ブラウザ内部の挙動を調査し、Chromiumへの修正を目標に取り組んできました。",
      "本セッションでは、問題に関心を持ったきっかけから、調査、修正提案、コードレビューまでの取り組みを紹介します。",
      "さらに、なぜ仕事でもない問題に取り組むのか、どうすれば挑戦を始め、継続できるのかについても、自身の経験を交えてお話しします。",
      "最後に、次の挑戦として取り組んでいるWeb標準「FormRequest API」の仕様提案を紹介します。まだ提案段階だからこそ、皆さんの率直な感想や意見をお聞きできればと思います。",
    ],
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
    slug: "ricardo-cabello",
    ogImage: RicardoCabelloOgImage,
    title: "Adventures in Agentic Coding",
    overview: [
      "What happens when you hand the keyboard to AI agents to build 3D web projects? In this talk I will share recent Three.js experiments built with agentic coding workflows, from daily creative sketches to large-scale procedural worlds that feel like a new kind of opensource. We will look at the actual process, what works, where agents fail, and how this shift turns creative developers into directors.",
    ],
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
    ogImage: LacolacoAndOkunoKentaroOgImage,
    title: "2026年のリファクタリングをふりかえる",
    overview: [
      "ポッドキャスト「リファクタリングとともに生きるラジオ」の公開収録として、会場のみなさんと一緒に2026年のリファクタリングをふりかえります。1年間で変わったこと、変わらなかったこと、これから変わりそうなことについてゆるく楽しく雑談します。",
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

// ゲストスピーカーの枠の数（Figma では 4 列 × 3 段）。登壇をキャンセルした 1 名の分を減らしている
const GUEST_SPEAKER_SLOTS = 11;

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

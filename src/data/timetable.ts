import type { ImageMetadata } from "astro";

import berlysia from "@/assets/coreMembers/berlysia.jpg";
import did0es from "@/assets/coreMembers/did0es.jpg";

import E_Chanoknan from "@/assets/speaker/EC-9624.jpg";
import hal from "@/assets/speaker/Hal.jpg";
import hiroppy from "@/assets/speaker/hiroppy.webp";
import jp_knj from "@/assets/speaker/jp-knj.jpg";
import jxck from "@/assets/speaker/jxck.png";
import KyouheiHorizumi from "@/assets/speaker/KyouheiHorizumi.jpg";
import kengo from "@/assets/speaker/kengo20_03.jpg";
import kinocoboy from "@/assets/speaker/kinocoboy.jpg";
import ksu_kohei0104 from "@/assets/speaker/ksu_kohei0104.jpg";
import l1lhu1hu1 from "@/assets/speaker/l1lhu1hu1.jpg";
import manasugiyoshi from "@/assets/speaker/manasugiyoshi.jpg";
import nkgrnkgr from "@/assets/speaker/nkgrnkgr.jpg";
import nrs from "@/assets/speaker/nrs.jpg";
import nus3 from "@/assets/speaker/nus3_.jpg";
import p_craft from "@/assets/speaker/p_craft.jpg";
import progfay from "@/assets/speaker/progfay.jpg";
import pvcresin from "@/assets/speaker/pvcresin.png";
import reyalka_dev from "@/assets/speaker/reyalka_dev.jpg";
import riya_amemiya from "@/assets/speaker/riya-amemiya.png";
import ryo_manba from "@/assets/speaker/ryo_manba.jpg";
import yuta_ike from "@/assets/speaker/Selria1.jpg";
import saku from "@/assets/speaker/saku.jpg";
import ssssota from "@/assets/speaker/ssssotaro.png";
import syumai from "@/assets/speaker/syumai.jpg";
import takashi_onda from "@/assets/speaker/takashi_onda.jpg";
import tetsuwo from "@/assets/speaker/tetsuwo0717.jpg";
import toshi__toma from "@/assets/speaker/toshi__toma.jpg";

type EventRow = {
  category: "event";
  time: string;
  label: string;
};

type PresentationRow = {
  category: "presentation";
  startAt: string;
  endAt: string;
  list: TimeTableCell[];
};

type TimeTableCell = {
  id?: string;
  roomType: "A" | "B";
  title: string;
  isEmphasized: boolean;
  speakerName: string;
  xId?: string;
  githubId?: string;
  website?: string;
  isLongTalk: boolean;
  hasSlides: boolean;
  slidesUrl: string;
  thumbnailImage: ImageMetadata;
};

type TimeTableRow = EventRow | PresentationRow;

// NOTE: 必要最小限のダミーデータのみ用意
export const TIMETABLE_ROWS: TimeTableRow[] = [
  { category: "event", time: "10:00", label: "開場" },
  {
    category: "presentation",
    startAt: "10:30",
    endAt: "11:00",
    list: [
      {
        id: "1",
        roomType: "A",
        title: "オープニング",
        isEmphasized: true,
        speakerName: "did0es",
        xId: "did0es",
        githubId: "shuta13",
        isLongTalk: true,
        hasSlides: false,
        slidesUrl: "",
        thumbnailImage: did0es,
      },
    ],
  },
  {
    category: "presentation",
    startAt: "11:00",
    endAt: "11:30",
    list: [
      {
        id: "2",
        roomType: "A",
        title: "Bon Voyage! CSS Ecosystem Meets Standards, now?",
        isEmphasized: false,
        speakerName: "saku",
        xId: "sakupi01",
        isLongTalk: true,
        hasSlides: false,
        slidesUrl: "",
        thumbnailImage: saku,
      },
      {
        id: "3",
        roomType: "B",
        title: "CSS Linter の現在地 ― 2025年のベストプラクティスを探る",
        isEmphasized: false,
        speakerName: "まっつー",
        xId: "ryo_manba",
        isLongTalk: true,
        hasSlides: false,
        slidesUrl: "#",
        thumbnailImage: ryo_manba,
      },
    ],
  },
  {
    category: "presentation",
    startAt: "11:40",
    endAt: "12:10",
    list: [
      {
        id: "4",
        roomType: "A",
        title:
          "見た目は動く。でも使えない、、アクセシブルなUIの実装アンチパターン集",
        isEmphasized: false,
        speakerName: "maddy/杉吉真奈",
        xId: "manasugiyoshi",
        isLongTalk: true,
        hasSlides: false,
        slidesUrl: "#",
        thumbnailImage: manasugiyoshi,
      },
      {
        id: "5",
        roomType: "B",
        title: "日本語縦書きWebの現在地 2025",
        isEmphasized: false,
        speakerName: "berlysia",
        website: "https://berlysia.net",
        isLongTalk: true,
        hasSlides: false,
        slidesUrl: "#",
        thumbnailImage: berlysia,
      },
    ],
  },
  { category: "event", time: "12:00", label: "ランチブレイク" },
  {
    category: "presentation",
    startAt: "13:45",
    endAt: "14:15",
    list: [
      {
        id: "6",
        roomType: "A",
        title: "実践AIチャットボットUI実装入門",
        isEmphasized: false,
        speakerName: "syumai",
        xId: "__syumai",
        isLongTalk: true,
        hasSlides: false,
        slidesUrl: "#",
        thumbnailImage: syumai,
      },
      {
        id: "7",
        roomType: "B",
        title: "LLMとPlaywright/reg-suitを活用したjQueryリファクタリングの実際",
        isEmphasized: false,
        speakerName: "kinocoboy",
        xId: "kinocoboy2",
        isLongTalk: true,
        hasSlides: false,
        slidesUrl: "#",
        thumbnailImage: kinocoboy,
      },
    ],
  },
  {
    category: "presentation",
    startAt: "14:25",
    endAt: "14:55",
    list: [
      {
        id: "8",
        roomType: "A",
        title:
          "そのJavaScript、V8が泣いてます。V8の気持ちを理解して書くパフォーマンス最適化",
        isEmphasized: false,
        speakerName: "西 悠太",
        website: "https://riya-amemiya-links.oshaburikitchin.com/",
        isLongTalk: true,
        hasSlides: false,
        slidesUrl: "#",
        thumbnailImage: riya_amemiya,
      },
      {
        id: "9",
        roomType: "B",
        title:
          "フロントエンドパフォーマンスチューニングで Web 技術を深掘り直す",
        isEmphasized: false,
        speakerName: "progfay",
        xId: "progfay",
        isLongTalk: true,
        hasSlides: false,
        slidesUrl: "#",
        thumbnailImage: progfay,
      },
    ],
  },
  {
    category: "presentation",
    startAt: "15:05",
    endAt: "15:35",
    list: [
      {
        id: "10",
        roomType: "A",
        title:
          "爆速でプロダクトをリリースしようと思ったらマイクロフロントエンドを選んでいた",
        isEmphasized: false,
        speakerName: "Nokogiri",
        xId: "nkgrnkgr",
        isLongTalk: true,
        hasSlides: false,
        slidesUrl: "#",
        thumbnailImage: nkgrnkgr,
      },
      {
        id: "11",
        roomType: "B",
        title: "フロントエンド開発に役立つクライアントプログラム共通のノウハウ",
        isEmphasized: false,
        speakerName: "nrs",
        xId: "nrslib",
        isLongTalk: true,
        hasSlides: false,
        slidesUrl: "#",
        thumbnailImage: nrs,
      },
    ],
  },
  {
    category: "presentation",
    startAt: "15:45",
    endAt: "16:15",
    list: [
      {
        id: "12",
        roomType: "A",
        title:
          "Reduxモダナイズ　〜コードのモダン化を通して、将来のライブラリ移行に備える〜",
        isEmphasized: false,
        speakerName: "pvcresin",
        xId: "pvcresin",
        isLongTalk: true,
        hasSlides: false,
        slidesUrl: "#",
        thumbnailImage: pvcresin,
      },
      {
        id: "13",
        roomType: "B",
        title: '"フロントエンドの技術"を移行する技術',
        isEmphasized: false,
        speakerName: "外松 俊尚",
        xId: "toshi__toma",
        isLongTalk: true,
        hasSlides: false,
        slidesUrl: "#",
        thumbnailImage: toshi__toma,
      },
    ],
  },
  {
    category: "presentation",
    startAt: "16:25",
    endAt: "16:55",
    list: [
      {
        id: "14",
        roomType: "A",
        title: "TS - Type = JS ?",
        isEmphasized: false,
        speakerName: "Jxck",
        website: "https://jxck.io",
        isLongTalk: true,
        hasSlides: false,
        slidesUrl: "#",
        thumbnailImage: jxck,
      },
      // {
      //   id: "15",
      //   roomType: "B",
      //   title: "[キャンセル] Node.jsのこれまでの歩みとこれから",
      //   isEmphasized: false,
      //   speakerName: "hiroppy",
      //   isLongTalk: true,
      //   hasSlides: false,
      //   slidesUrl: "#",
      //   thumbnailImage: hiroppy,
      // },
    ],
  },
  {
    category: "presentation",
    startAt: "17:15",
    endAt: "17:25",
    list: [
      {
        id: undefined,
        roomType: "A",
        title: "愛すべき Image API - 前世紀の技を現代で",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "恩田 崇",
        xId: "takashi_onda",
        hasSlides: false,
        slidesUrl: "#",
        thumbnailImage: takashi_onda,
      },
      {
        id: "17",
        roomType: "B",
        title: "Local Peer-to-Peer APIはどのように使われていくのか？",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "Hal",
        xId: "hal_spidernight",
        hasSlides: false,
        slidesUrl: "#",
        thumbnailImage: hal,
      },
    ],
  },
  {
    category: "presentation",
    startAt: "17:25",
    endAt: "17:35",
    list: [
      {
        id: "18",
        roomType: "A",
        title:
          "IME vs Input Field Shortcuts: Enhancing Text Input Accessibility",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "かみくず",
        xId: "p_craft",
        hasSlides: false,
        slidesUrl: "#",
        thumbnailImage: p_craft,
      },
      {
        id: "19",
        roomType: "B",
        title: "意外と知らない input[type=number] の仕様と、全角対応について",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "Kyouhei Horizumi",
        xId: "KyouheiHorizumi",
        hasSlides: false,
        slidesUrl: "#",
        thumbnailImage: KyouheiHorizumi,
      },
    ],
  },
  {
    category: "presentation",
    startAt: "17:35",
    endAt: "17:45",
    list: [
      {
        id: "20",
        roomType: "A",
        title: "メディアクエリだけではない、レスポンシブ対応の考え方と実装",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "yuta-ike",
        xId: "Selria1",
        hasSlides: false,
        slidesUrl: "#",
        thumbnailImage: yuta_ike,
      },
      {
        id: "21",
        roomType: "B",
        title: "先進的なCSS関数で実現する動的スタイリング",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "斉藤賢悟",
        xId: "kengo20_03",
        hasSlides: false,
        slidesUrl: "#",
        thumbnailImage: kengo,
      },
    ],
  },
  {
    category: "presentation",
    startAt: "17:45",
    endAt: "17:55",
    list: [
      {
        id: "22",
        roomType: "A",
        title: "Playwright はどのようにクロスブラウザをサポートしているのか",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "nus3",
        xId: "nus3_",
        hasSlides: false,
        slidesUrl: "#",
        thumbnailImage: nus3,
      },
      {
        id: "23",
        roomType: "B",
        title: "reading-flow プロパティから見るアクセシビリティ的懸念点",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "綾本公平",
        xId: "ksu_kohei0104",
        hasSlides: false,
        slidesUrl: "#",
        thumbnailImage: ksu_kohei0104,
      },
    ],
  },
  {
    category: "presentation",
    startAt: "17:55",
    endAt: "18:05",
    list: [
      {
        id: "24",
        roomType: "A",
        title:
          "ブラウザストレージを活用した、複数アプリをまたぐ永続化とリアクティブな同期 ",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "てつを。",
        xId: "tetsuwo0717",
        hasSlides: false,
        slidesUrl: "#",
        thumbnailImage: tetsuwo,
      },
      {
        id: "25",
        roomType: "B",
        title: "フロントエンドで実現するアクセス制御入門",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "Eakudompong Chanoknan",
        githubId: "EC-9624",
        hasSlides: false,
        slidesUrl: "#",
        thumbnailImage: E_Chanoknan,
      },
    ],
  },
  {
    category: "presentation",
    startAt: "18:05",
    endAt: "18:15",
    list: [
      {
        id: "26",
        roomType: "A",
        title: "Web技術を最大限活用してRAW画像を現像する",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "ssssota",
        xId: "ssssotaro",
        hasSlides: false,
        slidesUrl: "#",
        thumbnailImage: ssssota,
      },
      {
        id: "27",
        roomType: "B",
        title: "SSGの限界を破る、再ビルド不要なサイト",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "れやか",
        xId: "reyalka_dev",
        hasSlides: false,
        slidesUrl: "#",
        thumbnailImage: reyalka_dev,
      },
    ],
  },
  {
    category: "presentation",
    startAt: "18:15",
    endAt: "18:25",
    list: [
      {
        id: "28",
        roomType: "A",
        title:
          "Yahoo! 知恵袋におけるFeature Flag活用 〜安全で柔軟なリリースを目指して〜",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "津村光輝",
        xId: "l1lhu1hu1",
        hasSlides: false,
        slidesUrl: "#",
        thumbnailImage: l1lhu1hu1,
      },
      {
        id: "29",
        roomType: "B",
        title: "コードの向こう側 × 校正ツール × チーム：言葉をつなぐ体験",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "jp-knj",
        githubId: "jp-knj",
        hasSlides: false,
        slidesUrl: "#",
        thumbnailImage: jp_knj,
      },
    ],
  },
  {
    category: "presentation",
    startAt: "18:45",
    endAt: "19:00",
    list: [
      {
        roomType: "A",
        title: "クロージング",
        isEmphasized: true,
        speakerName: "did0es",
        xId: "did0es",
        githubId: "shuta13",
        isLongTalk: true,
        hasSlides: false,
        slidesUrl: "#",
        thumbnailImage: did0es,
      },
    ],
  },
  { category: "event", time: "19:00", label: "閉場" },
] as const;

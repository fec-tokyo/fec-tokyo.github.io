import type { ImageMetadata } from "astro";

import chot from "@/assets/2026/sponsors/chot Inc_logo_black.svg";
import cyberagent from "@/assets/2026/sponsors/logo_CyberAgent_01_RGB.png";
import gajiLabo from "@/assets/2026/sponsors/Gaji-Labo-logotype-horizontal_1200_600.png";
import kakehashi from "@/assets/2026/sponsors/logo_kakehashi_vertical_white.png";
import kua from "@/assets/2026/sponsors/KUA_with_X-tech_Management.png";
import lyCorporation from "@/assets/2026/sponsors/LY_Corporation_Wordmark_Black_RGB.png";

// 社名と URL は fortee のスポンサー一覧（https://fortee.jp/fec-tokyo-2026/api/sponsors）から
type Sponsor = {
  name: string;
  url: string;
  // ロゴをまだもらっていない会社は null にして、ロゴの位置に社名を出す
  image: ImageMetadata | null;
};

type Sponsors = {
  venue: Sponsor[];
  general: Sponsor[];
};

export const SPONSORS: Sponsors = {
  venue: [
    {
      name: "株式会社サイバーエージェント",
      url: "https://www.cyberagent.co.jp/",
      image: cyberagent,
    },
  ],
  // 法人格を除いた社名のよみの五十音順に並べる
  general: [
    {
      name: "株式会社カケハシ",
      url: "https://recruit.kakehashi.life/",
      image: kakehashi,
    },
    {
      name: "株式会社Gaji-Labo",
      url: "https://www.gaji.jp/",
      image: gajiLabo,
    },
    {
      name: "株式会社クロステック・マネジメント（京都芸術大学）",
      url: "https://xtm.jp/",
      image: kua,
    },
    { name: "ちょっと株式会社", url: "https://chot-inc.com/", image: chot },
    {
      name: "LINEヤフー株式会社",
      url: "https://www.lycorp.co.jp/ja/technology-design/",
      image: lyCorporation,
    },
  ],
};

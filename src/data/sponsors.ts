import type { ImageMetadata } from "astro";

import cyberagent from "@/assets/sponsor/logo_CyberAgent.png";
// Food sponsors
import levtech from "@/assets/sponsor/logo_levtech.png";
import dwango from "@/assets/sponsor/logo_dwango.png";
import geniee from "@/assets/sponsor/logo_geniee.png";
import commune from "@/assets/sponsor/logo_Commune_corp.png";
import chot from "@/assets/sponsor/logo_chot_Inc.png";
import novelty from "@/assets/sponsor/logo_novelty.png";
import kaonavi from "@/assets/sponsor/logo_kaonavi.png";
import carta from "@/assets/sponsor/logo_carta.png";
// Drink sponsors
import free from "@/assets/sponsor/logo_freee.png";
import kakehashi from "@/assets/sponsor/logo_kakehashi.png";

type SponsorType = "venue" | "food" | "drink";

type Sponsor = {
  name: string;
  image: ImageMetadata;
};

type Sponsors = {
  [key in SponsorType]: Sponsor[];
};

export const SPONSORS: Sponsors = {
  venue: [{ name: "ダミースポンサー1", image: cyberagent }],
  food: [
    { name: "レバテック株式会社", image: levtech },
    { name: "株式会社CARTA HOLDINGS", image: carta },
    { name: "株式会社ドワンゴ", image: dwango },
    { name: "株式会社ジーニー", image: geniee },
    { name: "コミューン株式会社", image: commune },
    { name: "ちょっと株式会社", image: chot },
    { name: "株式会社ノベルティ", image: novelty },
    { name: "株式会社カオナビ", image: kaonavi },
  ],
  drink: [
    { name: "フリー株式会社", image: free },
    { name: "株式会社カケハシ", image: kakehashi },
  ],
};

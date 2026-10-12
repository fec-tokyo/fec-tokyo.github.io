import type { ImageMetadata } from "astro";

import cyberagent from "@/assets/2025/sponsor/logo_CyberAgent.png";
// Food sponsors
import levtech from "@/assets/2025/sponsor/logo_levtech.png";
import dwango from "@/assets/2025/sponsor/logo_dwango.png";
import geniee from "@/assets/2025/sponsor/logo_geniee.png";
import commune from "@/assets/2025/sponsor/logo_Commune_corp.png";
import chot from "@/assets/2025/sponsor/logo_chot_Inc.png";
import novelty from "@/assets/2025/sponsor/logo_novelty.png";
import kaonavi from "@/assets/2025/sponsor/logo_kaonavi.png";
import carta from "@/assets/2025/sponsor/logo_carta.png";
// Drink sponsors
import free from "@/assets/2025/sponsor/logo_freee.png";
import kakehashi from "@/assets/2025/sponsor/logo_kakehashi.png";

type SponsorType = "venue" | "food" | "drink";

type Sponsor = {
  name: string;
  image: ImageMetadata;
};

type Sponsors = {
  [key in SponsorType]: Sponsor[];
};

export const SPONSORS: Sponsors = {
  venue: [{ name: "株式会社サイバーエージェント", image: cyberagent }],
  food: [
    { name: "株式会社カオナビ", image: kaonavi },
    { name: "株式会社CARTA HOLDINGS", image: carta },
    { name: "コミューン株式会社", image: commune },
    { name: "株式会社ジーニー", image: geniee },
    { name: "ちょっと株式会社", image: chot },
    { name: "株式会社ドワンゴ", image: dwango },
    { name: "株式会社ノベルティ", image: novelty },
    { name: "レバテック株式会社", image: levtech },
  ],
  drink: [
    { name: "株式会社カケハシ", image: kakehashi },
    { name: "フリー株式会社", image: free },
  ],
};

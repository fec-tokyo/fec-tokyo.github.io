import dummySponsor from "@/assets/dummy-sponsor.png";
import type { ImageMetadata } from "astro";

type SponsorType = "venue" | "food" | "drink";

type Sponsor = {
  name: string;
  image: ImageMetadata;
};

type Sponsors = {
  [key in SponsorType]: Sponsor[];
};

export const SPONSORS: Sponsors = {
  venue: [{ name: "ダミースポンサー1", image: dummySponsor }],
  food: [
    { name: "ダミースポンサー2", image: dummySponsor },
    { name: "ダミースポンサー3", image: dummySponsor },
    { name: "ダミースポンサー4", image: dummySponsor },
    { name: "ダミースポンサー5", image: dummySponsor },
    { name: "ダミースポンサー6", image: dummySponsor },
  ],
  drink: [
    { name: "ダミースポンサー7", image: dummySponsor },
    { name: "ダミースポンサー8", image: dummySponsor },
    { name: "ダミースポンサー9", image: dummySponsor },
    { name: "ダミースポンサー10", image: dummySponsor },
    { name: "ダミースポンサー11", image: dummySponsor },
  ],
};

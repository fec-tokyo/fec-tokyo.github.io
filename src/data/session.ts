import dummySpeakerIcon from "@/assets/dummy-speaker-icon.png";
import type { ImageMetadata } from "astro";

type SessionItem = {
  id?: string;
  category: "session" | "ama";
  title: string;
  description: string;
  name: string;
  presenterId: string;
  icon: ImageMetadata;
  slidesUrl: string;
  xId: string;
  githubId: string;
};

type SessionTimeSlot = {
  startAt: string;
  list: SessionItem[];
};

// NOTE: 必要最小限のダミーデータのみ用意
export const SESSION_LIST: SessionTimeSlot[] = [
  {
    startAt: "11:00",
    list: [
      {
        id: "1",
        category: "session",
        title:
          "書生が動くのか自分だけが動くのか分らないが無暗むやみに眼が廻る。胸が悪くなる。到底助からないと思っていると、どさりと音がして眼から火が出た。",
        description:
          "書生が動くのか自分だけが動くのか分らないが無暗むやみに眼が廻る。胸が悪くなる。到底助からないと思っていると、どさりと音がして眼から火が出た。",
        name: "名前",
        presenterId: "lanberb",
        icon: dummySpeakerIcon,
        slidesUrl: "#",
        xId: "",
        githubId: "",
      },
      {
        id: "2",
        category: "ama",
        title:
          "書生が動くのか自分だけが動くのか分らないが無暗むやみに眼が廻る。胸が悪くなる。到底助からないと思っていると、どさりと音がして眼から火が出た。",
        description:
          "書生が動くのか自分だけが動くのか分らないが無暗むやみに眼が廻る。胸が悪くなる。到底助からないと思っていると、どさりと音がして眼から火が出た。",
        name: "名前",
        presenterId: "lanberb",
        icon: dummySpeakerIcon,
        slidesUrl: "#",
        xId: "",
        githubId: "",
      },
    ],
  },
  {
    startAt: "11:40",
    list: [
      {
        id: "3",
        category: "session",
        title:
          "書生が動くのか自分だけが動くのか分らないが無暗むやみに眼が廻る。胸が悪くなる。到底助からないと思っていると、どさりと音がして眼から火が出た。",
        description:
          "書生が動くのか自分だけが動くのか分らないが無暗むやみに眼が廻る。胸が悪くなる。到底助からないと思っていると、どさりと音がして眼から火が出た。",
        name: "名前",
        presenterId: "lanberb",
        icon: dummySpeakerIcon,
        slidesUrl: "#",
        xId: "",
        githubId: "",
      },
      {
        id: "4",
        category: "ama",
        title:
          "書生が動くのか自分だけが動くのか分らないが無暗むやみに眼が廻る。胸が悪くなる。到底助からないと思っていると、どさりと音がして眼から火が出た。",
        description:
          "書生が動くのか自分だけが動くのか分らないが無暗むやみに眼が廻る。胸が悪くなる。到底助からないと思っていると、どさりと音がして眼から火が出た。",
        name: "名前",
        presenterId: "lanberb",
        icon: dummySpeakerIcon,
        slidesUrl: "#",
        xId: "",
        githubId: "",
      },
    ],
  },
] as const;

import dummySpeakerIcon from "@/assets/dummy-speaker-icon.png";
import type { ImageMetadata } from "astro";

type Organizer = {
  name: string;
  message?: string[];
  image: ImageMetadata;
  id: string;
  socialLinks: {
    type: "x" | "github";
    url: string;
  }[];
};

type Organizers = {
  author: Organizer[];
  cfpReviews: Organizer[];
  staff: Organizer[];
  designer: Organizer[];
};

export const ORGANIZERS: Organizers = {
  author: [
    {
      name: "平井 柊太",
      message: [
        "本カンファレンスは次世代を担うエンジニアに向けて、フロントエンドの第一線に立つエンジニアが知見を共有し、成長の機会を提供します。",
        "また、開発現場で活躍するエンジニアが外部発信するきっかけを作るとともに、初心者が実践的なノウハウを学べる場となることを目指します。",
        "登壇やAMA、他の参加者との議論を通じて知識と繋がりを深め、これまでに築いたフロントエンドの技術と文化を未来へ伝えるためのカンファレンスです。",
      ],
      image: dummySpeakerIcon,
      id: "@lanberb",
      socialLinks: [
        {
          type: "x",
          url: "https://twitter.com/lanberb",
        },
        {
          type: "github",
          url: "https://github.com/lanberb",
        },
      ],
    },
  ],
  cfpReviews: [
    {
      name: "名前",
      image: dummySpeakerIcon,
      id: "@lanberb",
      socialLinks: [
        {
          type: "x",
          url: "https://twitter.com/lanberb",
        },
        {
          type: "github",
          url: "https://github.com/lanberb",
        },
      ],
    },
    {
      name: "名前",
      image: dummySpeakerIcon,
      id: "@lanberb",
      socialLinks: [
        {
          type: "x",
          url: "https://twitter.com/lanberb",
        },
        {
          type: "github",
          url: "https://github.com/lanberb",
        },
      ],
    },
    {
      name: "名前",
      image: dummySpeakerIcon,
      id: "@lanberb",
      socialLinks: [
        {
          type: "x",
          url: "https://twitter.com/lanberb",
        },
        {
          type: "github",
          url: "https://github.com/lanberb",
        },
      ],
    },
  ],
  staff: [
    {
      name: "名前",
      image: dummySpeakerIcon,
      id: "@lanberb",
      socialLinks: [
        {
          type: "x",
          url: "https://twitter.com/lanberb",
        },
        {
          type: "github",
          url: "https://github.com/lanberb",
        },
      ],
    },
    {
      name: "名前",
      image: dummySpeakerIcon,
      id: "@lanberb",
      socialLinks: [
        {
          type: "x",
          url: "https://twitter.com/lanberb",
        },
        {
          type: "github",
          url: "https://github.com/lanberb",
        },
      ],
    },
    {
      name: "名前",
      image: dummySpeakerIcon,
      id: "@lanberb",
      socialLinks: [
        {
          type: "x",
          url: "https://twitter.com/lanberb",
        },
        {
          type: "github",
          url: "https://github.com/lanberb",
        },
      ],
    },
  ],
  designer: [
    {
      name: "名前",
      image: dummySpeakerIcon,
      id: "@lanberb",
      socialLinks: [
        {
          type: "x",
          url: "https://twitter.com/lanberb",
        },
        {
          type: "github",
          url: "https://github.com/lanberb",
        },
      ],
    },
  ],
};

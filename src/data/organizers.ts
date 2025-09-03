import dummySpeakerIcon from "@/assets/dummy-speaker-icon.png";
import type { ImageMetadata } from "astro";

import did0es from "@/assets/staff/did0es.jpg";
import ken7253 from "@/assets/staff/ken7253.jpg";
import oyu from "@/assets/staff/0yu.jpg";
import yossydev from "@/assets/staff/yossydev.jpg";

import berlysia from "@/assets/staff/berlysia.jpg";
import sakito from "@/assets/staff/sakito.jpg";
import sosukesuzuki from "@/assets/staff/sosukesuzuki.jpg";

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
      image: did0es,
      id: "@did0es",
      socialLinks: [
        {
          type: "x",
          url: "http://twitter.com/did0es",
        },
        {
          type: "github",
          url: "https://github.com/shuta13",
        },
      ],
    },
  ],
  cfpReviews: [
    {
      name: "berlysia",
      image: berlysia,
      id: "@berlysia",
      socialLinks: [
        {
          type: "x",
          url: "https://twitter.com/berlysia",
        },
        {
          type: "github",
          url: "https://github.com/berlysia",
        },
      ],
    },
    {
      name: "sakito",
      image: sakito,
      id: "@sakito",
      socialLinks: [
        {
          type: "x",
          url: "https://x.com/__sakito__",
        },
        {
          type: "github",
          url: "https://github.com/sakit0",
        },
      ],
    },
    {
      name: "sosukesuzuki",
      image: sosukesuzuki,
      id: "@__sosukesuzuki",
      socialLinks: [
        {
          type: "x",
          url: "https://twitter.com/__sosukesuzuki",
        },
        {
          type: "github",
          url: "https://github.com/sosukesuzuki",
        },
      ],
    },
  ],
  staff: [
    {
      name: "0yu",
      image: oyu,
      id: "@0yu",
      socialLinks: [
        {
          type: "x",
          url: "https://x.com/yud0uhu",
        },
        {
          type: "github",
          url: "https://github.com/yud0uhu",
        },
      ],
    },
    {
      name: "ken7253",
      image: ken7253,
      id: "@ken7253",
      socialLinks: [
        {
          type: "x",
          url: "https://x.com/ken7253_",
        },
        {
          type: "github",
          url: "https://github.com/ken7253",
        },
      ],
    },
    {
      name: "yossydev",
      image: yossydev,
      id: "@yossydev",
      socialLinks: [
        {
          type: "x",
          url: "https://x.com/yossydev",
        },
        {
          type: "github",
          url: "https://github.com/yossydevb",
        },
      ],
    },
  ],
  designer: [
    {
      name: "lanberb",
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

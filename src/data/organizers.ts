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
    id: string;
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
      id: "did0es",
      socialLinks: [
        {
          type: "x",
          id: "did0es",
        },
        {
          type: "github",
          id: "shuta13",
        },
      ],
    },
  ],
  cfpReviews: [
    {
      name: "sakito",
      image: sakito,
      id: "sakito",
      socialLinks: [
        {
          type: "x",
          id: "__sakito__",
        },
        {
          type: "github",
          id: "sakit0",
        },
      ],
    },
    {
      name: "sosukesuzuki",
      image: sosukesuzuki,
      id: "__sosukesuzuki",
      socialLinks: [
        {
          type: "x",
          id: "__sosukesuzuki",
        },
        {
          type: "github",
          id: "sosukesuzuki",
        },
      ],
    },
    {
      name: "berlysia",
      image: berlysia,
      id: "berlysia",
      socialLinks: [
        {
          type: "x",
          id: "berlysia",
        },
        {
          type: "github",
          id: "berlysia",
        },
      ],
    },
  ],
  staff: [
    {
      name: "0yu",
      image: oyu,
      id: "0yu",
      socialLinks: [
        {
          type: "x",
          id: "yud0uhu",
        },
        {
          type: "github",
          id: "yud0uhu",
        },
      ],
    },
    {
      name: "ken7253",
      image: ken7253,
      id: "ken7253",
      socialLinks: [
        {
          type: "x",
          id: "ken7253_",
        },
        {
          type: "github",
          id: "ken7253",
        },
      ],
    },
    {
      name: "yossydev",
      image: yossydev,
      id: "yossydev",
      socialLinks: [
        {
          type: "x",
          id: "yossydev",
        },
        {
          type: "github",
          id: "yossydev",
        },
      ],
    },
  ],
  designer: [
    {
      name: "lanberb",
      image: dummySpeakerIcon,
      id: "lanberb",
      socialLinks: [
        {
          type: "x",
          id: "lanberb__",
        },
        {
          type: "github",
          id: "lanberb",
        },
      ],
    },
  ],
};

import dummySpeakerIcon from "@/assets/dummy-speaker-icon.png";
import type { ImageMetadata } from "astro";

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
  title: string;
  isEmphasized: boolean;
  speakerName: string;
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
        title: "オープニング",
        isEmphasized: true,
        speakerName: "shuta hirai",
        isLongTalk: true,
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
    ],
  },
  {
    category: "presentation",
    startAt: "11:00",
    endAt: "11:30",
    list: [
      {
        title:
          "十八等官でしたから役所のなかでも、ずうっと下の方でしたし俸給ほうきゅうもほんのわずかでしたが、受持ちが標本の採集や整理で生れ付き好きなことでしたから、わたくしは毎日ずいぶん愉快にはたらきました。",
        isEmphasized: false,
        speakerName: "shuta hirai",
        isLongTalk: true,
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
      {
        title:
          "十八等官でしたから役所のなかでも、ずうっと下の方でしたし俸給ほうきゅうもほんのわずかでしたが、受持ちが標本の採集や整理で生れ付き好きなことでしたから、わたくしは毎日ずいぶん愉快にはたらきました。",
        isEmphasized: false,
        speakerName: "shuta hirai",
        isLongTalk: true,
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
    ],
  },
  {
    category: "presentation",
    startAt: "11:40",
    endAt: "12:10",
    list: [
      {
        title:
          "十八等官でしたから役所のなかでも、ずうっと下の方でしたし俸給ほうきゅうもほんのわずかでしたが、受持ちが標本の採集や整理で生れ付き好きなことでしたから、わたくしは毎日ずいぶん愉快にはたらきました。",
        isEmphasized: false,
        speakerName: "shuta hirai",
        isLongTalk: true,
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
      {
        title:
          "十八等官でしたから役所のなかでも、ずうっと下の方でしたし俸給ほうきゅうもほんのわずかでしたが、受持ちが標本の採集や整理で生れ付き好きなことでしたから、わたくしは毎日ずいぶん愉快にはたらきました。",
        isEmphasized: false,
        speakerName: "shuta hirai",
        isLongTalk: true,
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
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
        title:
          "十八等官でしたから役所のなかでも、ずうっと下の方でしたし俸給ほうきゅうもほんのわずかでしたが、受持ちが標本の採集や整理で生れ付き好きなことでしたから、わたくしは毎日ずいぶん愉快にはたらきました。",
        isEmphasized: false,
        speakerName: "shuta hirai",
        isLongTalk: true,
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
      {
        title:
          "十八等官でしたから役所のなかでも、ずうっと下の方でしたし俸給ほうきゅうもほんのわずかでしたが、受持ちが標本の採集や整理で生れ付き好きなことでしたから、わたくしは毎日ずいぶん愉快にはたらきました。",
        isEmphasized: false,
        speakerName: "shuta hirai",
        isLongTalk: true,
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
    ],
  },
  {
    category: "presentation",
    startAt: "14:25",
    endAt: "14:55",
    list: [
      {
        title:
          "十八等官でしたから役所のなかでも、ずうっと下の方でしたし俸給ほうきゅうもほんのわずかでしたが、受持ちが標本の採集や整理で生れ付き好きなことでしたから、わたくしは毎日ずいぶん愉快にはたらきました。",
        isEmphasized: false,
        speakerName: "shuta hirai",
        isLongTalk: true,
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
      {
        title:
          "十八等官でしたから役所のなかでも、ずうっと下の方でしたし俸給ほうきゅうもほんのわずかでしたが、受持ちが標本の採集や整理で生れ付き好きなことでしたから、わたくしは毎日ずいぶん愉快にはたらきました。",
        isEmphasized: false,
        speakerName: "shuta hirai",
        isLongTalk: true,
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
    ],
  },
  {
    category: "presentation",
    startAt: "15:05",
    endAt: "15:35",
    list: [
      {
        title:
          "十八等官でしたから役所のなかでも、ずうっと下の方でしたし俸給ほうきゅうもほんのわずかでしたが、受持ちが標本の採集や整理で生れ付き好きなことでしたから、わたくしは毎日ずいぶん愉快にはたらきました。",
        isEmphasized: false,
        speakerName: "shuta hirai",
        isLongTalk: true,
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
      {
        title:
          "十八等官でしたから役所のなかでも、ずうっと下の方でしたし俸給ほうきゅうもほんのわずかでしたが、受持ちが標本の採集や整理で生れ付き好きなことでしたから、わたくしは毎日ずいぶん愉快にはたらきました。",
        isEmphasized: false,
        speakerName: "shuta hirai",
        isLongTalk: true,
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
    ],
  },
  {
    category: "presentation",
    startAt: "15:45",
    endAt: "16:15",
    list: [
      {
        title:
          "十八等官でしたから役所のなかでも、ずうっと下の方でしたし俸給ほうきゅうもほんのわずかでしたが、受持ちが標本の採集や整理で生れ付き好きなことでしたから、わたくしは毎日ずいぶん愉快にはたらきました。",
        isEmphasized: false,
        speakerName: "shuta hirai",
        isLongTalk: true,
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
      {
        title:
          "十八等官でしたから役所のなかでも、ずうっと下の方でしたし俸給ほうきゅうもほんのわずかでしたが、受持ちが標本の採集や整理で生れ付き好きなことでしたから、わたくしは毎日ずいぶん愉快にはたらきました。",
        isEmphasized: false,
        speakerName: "shuta hirai",
        isLongTalk: true,
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
    ],
  },
  {
    category: "presentation",
    startAt: "16:25",
    endAt: "16:55",
    list: [
      {
        title:
          "十八等官でしたから役所のなかでも、ずうっと下の方でしたし俸給ほうきゅうもほんのわずかでしたが、受持ちが標本の採集や整理で生れ付き好きなことでしたから、わたくしは毎日ずいぶん愉快にはたらきました。",
        isEmphasized: false,
        speakerName: "shuta hirai",
        isLongTalk: true,
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
      {
        title:
          "十八等官でしたから役所のなかでも、ずうっと下の方でしたし俸給ほうきゅうもほんのわずかでしたが、受持ちが標本の採集や整理で生れ付き好きなことでしたから、わたくしは毎日ずいぶん愉快にはたらきました。",
        isEmphasized: false,
        speakerName: "shuta hirai",
        isLongTalk: true,
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
    ],
  },
  {
    category: "presentation",
    startAt: "17:15",
    endAt: "17:25",
    list: [
      {
        title: "ライトニングトーク",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "shuta hirai",
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
      {
        title: "ライトニングトーク",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "shuta hirai",
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
    ],
  },
  {
    category: "presentation",
    startAt: "17:25",
    endAt: "17:35",
    list: [
      {
        title: "ライトニングトーク",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "shuta hirai",
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
      {
        title: "ライトニングトーク",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "shuta hirai",
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
    ],
  },
  {
    category: "presentation",
    startAt: "17:35",
    endAt: "17:45",
    list: [
      {
        title: "ライトニングトーク",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "shuta hirai",
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
      {
        title: "ライトニングトーク",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "shuta hirai",
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
    ],
  },
  {
    category: "presentation",
    startAt: "17:45",
    endAt: "17:55",
    list: [
      {
        title: "ライトニングトーク",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "shuta hirai",
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
      {
        title: "ライトニングトーク",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "shuta hirai",
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
    ],
  },
  {
    category: "presentation",
    startAt: "17:55",
    endAt: "18:05",
    list: [
      {
        title: "ライトニングトーク",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "shuta hirai",
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
      {
        title: "ライトニングトーク",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "shuta hirai",
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
    ],
  },
  {
    category: "presentation",
    startAt: "18:05",
    endAt: "18:15",
    list: [
      {
        title: "ライトニングトーク",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "shuta hirai",
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
      {
        title: "ライトニングトーク",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "shuta hirai",
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
    ],
  },
  {
    category: "presentation",
    startAt: "18:15",
    endAt: "18:25",
    list: [
      {
        title: "ライトニングトーク",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "shuta hirai",
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
      {
        title: "ライトニングトーク",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "shuta hirai",
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
    ],
  },
  {
    category: "presentation",
    startAt: "18:45",
    endAt: "19:00",
    list: [
      {
        title: "クロージング",
        isEmphasized: true,
        speakerName: "shuta hirai",
        isLongTalk: true,
        hasSlides: false,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
    ],
  },
  { category: "event", time: "19:00", label: "閉場" },
] as const;

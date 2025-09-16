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
  id?: string;
  roomType: "A" | "B";
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
        roomType: "A",
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
        id: "2",
        roomType: "A",
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
        id: "3",
        roomType: "B",
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
        id: "4",
        roomType: "A",
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
        id: "5",
        roomType: "B",
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
        id: "6",
        roomType: "A",
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
        id: "7",
        roomType: "B",
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
        id: "8",
        roomType: "A",
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
        id: "9",
        roomType: "B",
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
        id: "10",
        roomType: "A",
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
        id: "11",
        roomType: "B",
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
        id: "12",
        roomType: "A",
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
        id: "13",
        roomType: "B",
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
        id: "14",
        roomType: "A",
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
        id: "15",
        roomType: "B",
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
        id: "16",
        roomType: "A",
        title: "ライトニングトーク",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "shuta hirai",
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
      {
        id: "17",
        roomType: "B",
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
        id: "18",
        roomType: "A",
        title: "ライトニングトーク",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "shuta hirai",
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
      {
        id: "19",
        roomType: "B",
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
        id: "20",
        roomType: "A",
        title: "ライトニングトーク",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "shuta hirai",
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
      {
        id: "21",
        roomType: "B",
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
        id: "22",
        roomType: "A",
        title: "ライトニングトーク",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "shuta hirai",
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
      {
        id: "23",
        roomType: "B",
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
        id: "24",
        roomType: "A",
        title: "ライトニングトーク",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "shuta hirai",
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
      {
        id: "25",
        roomType: "B",
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
        id: "26",
        roomType: "A",
        title: "ライトニングトーク",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "shuta hirai",
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
      {
        id: "27",
        roomType: "B",
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
        id: "28",
        roomType: "A",
        title: "ライトニングトーク",
        isLongTalk: false,
        isEmphasized: false,
        speakerName: "shuta hirai",
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImage: dummySpeakerIcon,
      },
      {
        id: "29",
        roomType: "B",
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
        roomType: "A",
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

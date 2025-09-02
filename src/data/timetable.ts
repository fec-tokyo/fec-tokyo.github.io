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
  hasSlides: boolean;
  slidesUrl: string;
  thumbnailImagePath: string;
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
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImagePath: "@/assets/kv-traffic.png",
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
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImagePath: "@/assets/kv-traffic.png",
      },
      {
        title:
          "十八等官でしたから役所のなかでも、ずうっと下の方でしたし俸給ほうきゅうもほんのわずかでしたが、受持ちが標本の採集や整理で生れ付き好きなことでしたから、わたくしは毎日ずいぶん愉快にはたらきました。",
        isEmphasized: false,
        speakerName: "shuta hirai",
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImagePath: "@/assets/kv-traffic.png",
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
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImagePath: "@/assets/kv-traffic.png",
      },
      {
        title:
          "十八等官でしたから役所のなかでも、ずうっと下の方でしたし俸給ほうきゅうもほんのわずかでしたが、受持ちが標本の採集や整理で生れ付き好きなことでしたから、わたくしは毎日ずいぶん愉快にはたらきました。",
        isEmphasized: false,
        speakerName: "shuta hirai",
        hasSlides: true,
        slidesUrl: "#",
        thumbnailImagePath: "@/assets/kv-traffic.png",
      },
    ],
  },
  { category: "event", time: "12:00", label: "ランチブレイク" },
] as const;

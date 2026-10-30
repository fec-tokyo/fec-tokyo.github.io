export const GTM_CONTAINER_ID: string = "GTM-KHH5F9LR";

// GTM のカスタムイベントのトリガーと一致させるイベント名
export const TrackEvent = {
  TicketClick: "ticket_click",
  ProposalClick: "proposal_click",
  TimetableClick: "timetable_click",
  SnsClick: "sns_click",
} as const;

export type TrackEventName = (typeof TrackEvent)[keyof typeof TrackEvent];

// GA4 のカスタムディメンション link_location の値（リンクを置いている場所）
export const TrackLocation = {
  Header: "header",
  Menu: "menu",
  About: "about",
  Tickets: "tickets",
  Proposals: "proposals",
  Timetable: "timetable",
} as const;

export type TrackLocationName =
  (typeof TrackLocation)[keyof typeof TrackLocation];

// GA4 のカスタムディメンション platform の値（SNS の種類）
export const TrackPlatform = {
  X: "x",
  Note: "note",
  GitHub: "github",
} as const;

export type TrackPlatformName =
  (typeof TrackPlatform)[keyof typeof TrackPlatform];

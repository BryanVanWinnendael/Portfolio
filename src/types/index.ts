export interface ActiveLink {
  type: "Download" | "Visit Site";
  link: string;
}

export type Elements =
  | "home"
  | "about"
  | "experience"
  | "select-work"
  | "lets-talk";

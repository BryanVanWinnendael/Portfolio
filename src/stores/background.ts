import { atom } from "nanostores"

export const $background_color = atom<string>("bg-primary")

export function setBackgroundColor(background_color: string) {
  $background_color.set(background_color)
}

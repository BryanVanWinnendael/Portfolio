import { atom } from "nanostores"

export const $showNav = atom<boolean>(true)

export function setShowNav(bool: boolean) {
  $showNav.set(bool)
}

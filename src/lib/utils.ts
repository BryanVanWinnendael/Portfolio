import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const changeBgColorHome = (isIntersectin: boolean) => {
  const main = document.querySelector('main');
  const nav = document.getElementById('nav');
  console.log(main, nav)
  if (!main || !nav) return
  if (isIntersectin) {
    main?.classList.remove('bg-secondary');
    main?.classList.add('bg-primary');
    nav?.classList.remove('bg-secondary');
    nav?.classList.add('bg-primary');
  }
}

export const changeBgColorAbout = (isIntersectin: boolean) => {
  const main = document.querySelector('main');
  const nav = document.getElementById('nav');
  if (!main || !nav) return
  if (isIntersectin) {
    nav?.classList.remove('bg-primary');
    nav?.classList.add('bg-secondary');
    main?.classList.remove('bg-primary');
    main?.classList.add('bg-secondary');
  }
}

export const scrollToElement = (elementId: string) => {
  var targetElement = document.getElementById(elementId)
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' })
  }
}
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const scrollToElement = (elementId: string) => {
  const targetElement = document.getElementById(elementId)
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" })
  }
}

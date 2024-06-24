import { Elements } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToElement = (elementId: Elements) => {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    const yPosition =
      targetElement.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: yPosition,
      behavior: "smooth",
    });
  }
};

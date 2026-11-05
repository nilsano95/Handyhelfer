import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const dateFormatter = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

/** Formatiert ein ISO-Datum (JJJJ-MM-TT) als deutsches Datum. */
export function formatDate(iso: string): string {
  return dateFormatter.format(new Date(`${iso}T00:00:00Z`));
}

export function formatDuration(minutes: number): string {
  return minutes === 1 ? "ca. 1 Minute" : `ca. ${minutes} Minuten`;
}

export const difficultyLabel = {
  leicht: "Leicht",
  mittel: "Mittel",
  anspruchsvoll: "Anspruchsvoll",
} as const;

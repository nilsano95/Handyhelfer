import type { DeviceSeries, GuideImage, OneUiVersion } from "@/types";

export const ALLE_SERIEN: DeviceSeries[] = ["galaxy-s", "galaxy-a", "galaxy-z"];
export const ONE_UI_6_BIS_8: OneUiVersion[] = ["6", "7", "8"];
export const PRUEFDATUM = "2026-11-05";

/** Erzeugt den Pfad zu einer Illustration im Ordner der Anleitung. */
export function illustration(
  slug: string,
  datei: string,
  alt: string,
  beschreibung: string,
): GuideImage {
  return {
    src: `/images/anleitungen/${slug}/${datei}`,
    alt,
    beschreibung,
    art: "illustration",
  };
}

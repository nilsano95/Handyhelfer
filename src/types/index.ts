/**
 * Zentrale Typen für „Samsung einfach erklärt“.
 * Die Laufzeit-Prüfung der Inhalte erfolgt mit Zod in src/lib/schema.ts.
 */

export type CategorySlug =
  | "erste-schritte"
  | "telefonieren-und-kontakte"
  | "nachrichten-und-whatsapp"
  | "kamera-und-fotos"
  | "internet-und-wlan"
  | "einstellungen"
  | "apps-und-anwendungen"
  | "probleme-loesen";

export type IconName =
  | "rocket"
  | "phone"
  | "message"
  | "camera"
  | "wifi"
  | "settings"
  | "apps"
  | "lifebuoy";

export interface Category {
  slug: CategorySlug;
  name: string;
  kurzbeschreibung: string;
  beschreibung: string;
  icon: IconName;
}

export type Difficulty = "leicht" | "mittel" | "anspruchsvoll";

/** Geräteserien, für die eine Anleitung gilt. */
export type DeviceSeries = "galaxy-s" | "galaxy-a" | "galaxy-z";

/** One-UI-Hauptversionen, für die eine Anleitung geprüft wurde. */
export type OneUiVersion = "6" | "7" | "8";

export type ImageKind = "screenshot" | "illustration" | "platzhalter";

export interface GuideImage {
  src: string;
  /** Kurzer Alternativtext für Screenreader. */
  alt: string;
  /** Ausführliche, sichtbare Bildbeschreibung. */
  beschreibung: string;
  /** Echte Screenshots nur, wenn sie geprüft wurden. */
  art: ImageKind;
}

export interface GuideStep {
  titel: string;
  text: string;
  /** Optionaler Index in `bilder`, der zu diesem Schritt passt. */
  bild?: number;
  hinweis?: string;
}

export interface Guide {
  id: string;
  /** URL-Teil, z. B. /anleitung/schrift-groesser-machen */
  slug: string;
  titel: string;
  beschreibung: string;
  kategorie: CategorySlug;
  keywords: string[];
  synonyme: string[];
  /** Alltagsformulierungen von Problemen („Ich kann nichts lesen“). */
  probleme: string[];
  schwierigkeit: Difficulty;
  dauerMinuten: number;
  geraeteSerien: DeviceSeries[];
  oneUiVersionen: OneUiVersion[];
  schritte: GuideStep[];
  bilder: GuideImage[];
  tipps: string[];
  warnhinweise: string[];
  /** ISO-Datum (JJJJ-MM-TT) der letzten inhaltlichen Prüfung. */
  pruefdatum: string;
  beliebt?: boolean;
}

export interface DeviceModel {
  id: string;
  name: string;
  serie: DeviceSeries;
  /** One-UI-Versionen, die für dieses Modell erschienen sind (Hauptversionen ab 6). */
  oneUiVersionen: OneUiVersion[];
}

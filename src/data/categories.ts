import type { Category } from "@/types";

export const categories: Category[] = [
  {
    slug: "erste-schritte",
    name: "Erste Schritte",
    kurzbeschreibung: "Einschalten, Tasten, Bildschirmfoto",
    beschreibung:
      "Die Grundlagen: Wie schalte ich das Handy ein und aus, welche Taste macht was und wie halte ich den Bildschirm als Foto fest?",
    icon: "rocket",
  },
  {
    slug: "telefonieren-und-kontakte",
    name: "Telefonieren und Kontakte",
    kurzbeschreibung: "Anrufen, annehmen, Nummern speichern",
    beschreibung:
      "Alles rund ums Telefonieren: Anrufe tätigen und annehmen, Telefonnummern als Kontakt speichern und wiederfinden.",
    icon: "phone",
  },
  {
    slug: "nachrichten-und-whatsapp",
    name: "Nachrichten und WhatsApp",
    kurzbeschreibung: "WhatsApp einrichten, Bilder senden",
    beschreibung:
      "Schreiben Sie mit Familie und Freunden: WhatsApp installieren, einrichten und Fotos verschicken.",
    icon: "message",
  },
  {
    slug: "kamera-und-fotos",
    name: "Kamera und Fotos",
    kurzbeschreibung: "Fotos machen, ansehen, teilen",
    beschreibung:
      "Mit der Kamera Erinnerungen festhalten, Fotos in der Galerie ansehen und an andere weitergeben.",
    icon: "camera",
  },
  {
    slug: "internet-und-wlan",
    name: "Internet und WLAN",
    kurzbeschreibung: "WLAN verbinden, mobile Daten",
    beschreibung:
      "Ins Internet kommen: zu Hause über das WLAN oder unterwegs über die mobilen Daten Ihres Handyvertrags.",
    icon: "wifi",
  },
  {
    slug: "einstellungen",
    name: "Einstellungen",
    kurzbeschreibung: "Schrift, Lautstärke, Anpassungen",
    beschreibung:
      "Das Handy an Ihre Bedürfnisse anpassen: größere Schrift, passende Lautstärke und mehr.",
    icon: "settings",
  },
  {
    slug: "apps-und-anwendungen",
    name: "Apps und Anwendungen",
    kurzbeschreibung: "Apps löschen und aktualisieren",
    beschreibung:
      "Programme auf dem Handy verwalten: nicht benötigte Apps entfernen und vorhandene Apps auf dem neuesten Stand halten.",
    icon: "apps",
  },
  {
    slug: "probleme-loesen",
    name: "Probleme lösen",
    kurzbeschreibung: "Speicher voll, Handy hängt, Bild dreht nicht",
    beschreibung:
      "Hilfe bei typischen Problemen – ruhig und Schritt für Schritt erklärt.",
    icon: "lifebuoy",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

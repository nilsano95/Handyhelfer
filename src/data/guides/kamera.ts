import type { Guide } from "@/types";
import { ALLE_SERIEN, ONE_UI_6_BIS_8, PRUEFDATUM, illustration } from "./shared";

export const kamera: Guide[] = [
  {
    id: "foto-aufnehmen",
    slug: "foto-aufnehmen",
    titel: "Ein Foto aufnehmen",
    beschreibung: "So machen Sie mit der Kamera-App ein Foto und sehen es sich danach an.",
    kategorie: "kamera-und-fotos",
    keywords: ["foto", "kamera", "fotografieren", "bild machen", "auslöser"],
    synonyme: ["foto machen", "photo", "bild aufnehmen", "knipsen", "selfie"],
    probleme: ["Wie mache ich ein Foto", "Wo finde ich die Kamera"],
    schwierigkeit: "leicht",
    dauerMinuten: 2,
    geraeteSerien: ALLE_SERIEN,
    oneUiVersionen: ONE_UI_6_BIS_8,
    bilder: [
      illustration(
        "foto-aufnehmen",
        "kamera.svg",
        "Illustration: Kamera-Ansicht mit rundem Auslöser",
        "Vereinfachte Zeichnung der Kamera-Ansicht. Unten in der Mitte befindet sich der große, runde Auslöser.",
      ),
    ],
    schritte: [
      { titel: "Kamera öffnen", text: "Tippen Sie auf dem Startbildschirm auf die App „Kamera“." },
      { titel: "Motiv anpeilen", text: "Halten Sie das Handy ruhig und richten Sie es auf das, was Sie fotografieren möchten. Tippen Sie auf dem Bildschirm auf die Stelle, die scharf sein soll." },
      { titel: "Auslösen", text: "Tippen Sie auf den großen runden Knopf unten in der Mitte. Das Foto ist sofort gespeichert.", bild: 0 },
      { titel: "Foto ansehen", text: "Tippen Sie auf das kleine Vorschaubild neben dem Auslöser. Alle Fotos finden Sie später in der App „Galerie“." },
    ],
    tipps: [
      "Für ein Selfie tippen Sie auf das Symbol mit den zwei Pfeilen – dann wird die vordere Kamera verwendet.",
      "Bei vielen Geräten startet die Kamera auch, wenn Sie die Seitentaste zweimal schnell drücken.",
    ],
    warnhinweise: [],
    pruefdatum: PRUEFDATUM,
  },
  {
    id: "foto-teilen-galerie",
    slug: "foto-aus-galerie-teilen",
    titel: "Foto aus der Galerie teilen",
    beschreibung: "Geben Sie ein Foto direkt aus der Galerie weiter – per WhatsApp, E-Mail oder Nachricht.",
    kategorie: "kamera-und-fotos",
    keywords: ["galerie", "teilen", "foto teilen", "bilder verschicken", "weiterleiten"],
    synonyme: ["fotos verschicken", "bild weitergeben", "foto senden", "bilder schicken", "photo teilen"],
    probleme: ["Wie gebe ich ein Foto weiter", "Bilder an Familie senden"],
    schwierigkeit: "leicht",
    dauerMinuten: 2,
    geraeteSerien: ALLE_SERIEN,
    oneUiVersionen: ONE_UI_6_BIS_8,
    bilder: [
      illustration(
        "foto-aus-galerie-teilen",
        "teilen.svg",
        "Illustration: Teilen-Symbol unter einem Foto",
        "Vereinfachte Zeichnung eines geöffneten Fotos. Unten ist das Teilen-Symbol – drei mit Linien verbundene Punkte – markiert.",
      ),
    ],
    schritte: [
      { titel: "Galerie öffnen", text: "Tippen Sie auf die App „Galerie“." },
      { titel: "Foto auswählen", text: "Tippen Sie auf das Foto, das Sie teilen möchten. Es wird groß angezeigt." },
      { titel: "Teilen antippen", text: "Tippen Sie unten auf das Teilen-Symbol (drei verbundene Punkte).", bild: 0 },
      { titel: "Weg wählen", text: "Wählen Sie, womit Sie das Foto senden möchten – zum Beispiel WhatsApp – und dann die Person." },
    ],
    tipps: ["Mehrere Fotos auf einmal: In der Übersicht den Finger länger auf ein Foto legen, weitere antippen und dann auf „Teilen“ tippen."],
    warnhinweise: [],
    pruefdatum: PRUEFDATUM,
  },
];

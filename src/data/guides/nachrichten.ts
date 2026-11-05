import type { Guide } from "@/types";
import { ALLE_SERIEN, ONE_UI_6_BIS_8, PRUEFDATUM, illustration } from "./shared";

export const nachrichten: Guide[] = [
  {
    id: "whatsapp-installieren",
    slug: "whatsapp-installieren",
    titel: "WhatsApp installieren und einrichten",
    beschreibung:
      "Laden Sie WhatsApp aus dem Google Play Store herunter und richten Sie es mit Ihrer Telefonnummer ein.",
    kategorie: "nachrichten-und-whatsapp",
    keywords: ["whatsapp", "installieren", "herunterladen", "play store", "einrichten", "messenger"],
    synonyme: ["whats app", "watsapp", "whatsap", "runterladen", "app laden", "chat app"],
    probleme: ["WhatsApp fehlt auf dem Handy", "Familie schreibt über WhatsApp"],
    schwierigkeit: "mittel",
    dauerMinuten: 10,
    geraeteSerien: ALLE_SERIEN,
    oneUiVersionen: ONE_UI_6_BIS_8,
    bilder: [
      illustration(
        "whatsapp-installieren",
        "play-store.svg",
        "Illustration: App-Seite im Play Store mit Schaltfläche Installieren",
        "Vereinfachte Zeichnung einer App-Seite im Play Store mit einer großen grünen Schaltfläche „Installieren“.",
      ),
    ],
    schritte: [
      { titel: "Play Store öffnen", text: "Tippen Sie auf die App „Play Store“ (buntes Dreieck). Sie brauchen dafür ein Google-Konto und eine Internetverbindung." },
      { titel: "WhatsApp suchen", text: "Tippen Sie oben in das Suchfeld, schreiben Sie „WhatsApp“ und wählen Sie „WhatsApp Messenger“ von WhatsApp LLC." },
      { titel: "Installieren", text: "Tippen Sie auf „Installieren“ und warten Sie, bis der Download fertig ist. Tippen Sie dann auf „Öffnen“.", bild: 0 },
      { titel: "Bedingungen bestätigen", text: "Lesen Sie die Hinweise und tippen Sie auf „Zustimmen und fortfahren“." },
      {
        titel: "Telefonnummer bestätigen",
        text: "Geben Sie Ihre Handynummer ein. Sie erhalten eine SMS mit einem sechsstelligen Code. Oft wird er automatisch erkannt, sonst tippen Sie ihn ein.",
      },
      { titel: "Profil anlegen", text: "Geben Sie Ihren Namen ein, den Ihre Kontakte sehen sollen, und tippen Sie auf „Weiter“. Fertig!" },
    ],
    tipps: [
      "Erlauben Sie WhatsApp den Zugriff auf Ihre Kontakte – dann sehen Sie automatisch, wer von Ihren Bekannten WhatsApp nutzt.",
    ],
    warnhinweise: [
      "Installieren Sie WhatsApp nur aus dem Play Store, nicht über Links aus Nachrichten oder E-Mails.",
      "Geben Sie den sechsstelligen Bestätigungscode niemals an andere Personen weiter – auch nicht an angebliche Familienmitglieder.",
    ],
    pruefdatum: PRUEFDATUM,
    beliebt: true,
  },
  {
    id: "bilder-verschicken-whatsapp",
    slug: "bilder-verschicken-whatsapp",
    titel: "Bilder über WhatsApp verschicken",
    beschreibung: "Schicken Sie ein Foto aus Ihrer Galerie an einen Kontakt oder eine Gruppe in WhatsApp.",
    kategorie: "nachrichten-und-whatsapp",
    keywords: ["bilder verschicken", "foto senden", "whatsapp", "bild schicken", "anhang"],
    synonyme: ["fotos verschicken", "bild senden", "foto schicken", "bilder senden", "photo"],
    probleme: ["Wie schicke ich ein Foto", "Enkel möchten Bilder sehen"],
    schwierigkeit: "leicht",
    dauerMinuten: 3,
    geraeteSerien: ALLE_SERIEN,
    oneUiVersionen: ONE_UI_6_BIS_8,
    bilder: [
      illustration(
        "bilder-verschicken-whatsapp",
        "anhang.svg",
        "Illustration: Büroklammer-Symbol im WhatsApp-Eingabefeld",
        "Vereinfachte Zeichnung eines Chats. Im Eingabefeld unten ist das Büroklammer-Symbol markiert, über das man Bilder anhängt.",
      ),
    ],
    schritte: [
      { titel: "Chat öffnen", text: "Öffnen Sie WhatsApp und tippen Sie auf die Person oder Gruppe, der Sie ein Bild schicken möchten." },
      { titel: "Büroklammer antippen", text: "Tippen Sie unten im Eingabefeld auf das Büroklammer-Symbol.", bild: 0 },
      { titel: "Galerie wählen", text: "Tippen Sie auf „Galerie“ und wählen Sie das gewünschte Foto aus. Für mehrere Fotos halten Sie den Finger länger auf einem Bild und tippen dann weitere an." },
      { titel: "Absenden", text: "Schreiben Sie bei Bedarf einen Text dazu und tippen Sie auf den grünen Pfeil (Senden)." },
    ],
    tipps: ["Über das Kamera-Symbol im Eingabefeld können Sie auch direkt ein neues Foto aufnehmen und senden."],
    warnhinweise: ["Überlegen Sie vor dem Senden, ob auf dem Bild private Dinge zu sehen sind – zum Beispiel Adressen oder Ausweise."],
    pruefdatum: PRUEFDATUM,
    beliebt: true,
  },
];

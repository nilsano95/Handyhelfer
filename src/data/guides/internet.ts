import type { Guide } from "@/types";
import { ALLE_SERIEN, ONE_UI_6_BIS_8, PRUEFDATUM, illustration } from "./shared";

export const internet: Guide[] = [
  {
    id: "wlan-verbinden",
    slug: "mit-wlan-verbinden",
    titel: "Mit dem WLAN verbinden",
    beschreibung:
      "Verbinden Sie Ihr Handy mit dem WLAN zu Hause. Das spart Datenvolumen und ist meist schneller.",
    kategorie: "internet-und-wlan",
    keywords: ["wlan", "wifi", "internet", "verbinden", "router", "passwort", "netzwerk"],
    synonyme: ["wi-fi", "w-lan", "wlan passwort", "wlan schlüssel", "heimnetz", "kein internet"],
    probleme: ["WLAN funktioniert nicht", "Kein Internet zu Hause", "WLAN verbindet nicht"],
    schwierigkeit: "leicht",
    dauerMinuten: 3,
    geraeteSerien: ALLE_SERIEN,
    oneUiVersionen: ONE_UI_6_BIS_8,
    bilder: [
      illustration(
        "mit-wlan-verbinden",
        "wlan-liste.svg",
        "Illustration: Liste verfügbarer WLAN-Netze",
        "Vereinfachte Zeichnung der WLAN-Einstellungen mit einem Schalter oben und einer Liste verfügbarer Netzwerke darunter.",
      ),
    ],
    schritte: [
      { titel: "Einstellungen öffnen", text: "Tippen Sie auf die App „Einstellungen“ (Zahnrad-Symbol)." },
      { titel: "WLAN aufrufen", text: "Tippen Sie auf „Verbindungen“ und dann auf „WLAN“." },
      { titel: "WLAN einschalten", text: "Schalten Sie den Schalter oben ein, falls er aus ist. Es erscheint eine Liste mit Netzwerken.", bild: 0 },
      {
        titel: "Netzwerk wählen",
        text: "Tippen Sie auf den Namen Ihres WLANs. Den Namen und das Passwort finden Sie meist auf einem Aufkleber an Ihrem Router.",
      },
      { titel: "Passwort eingeben", text: "Geben Sie das Passwort genau ein (Groß- und Kleinschreibung beachten) und tippen Sie auf „Verbinden“." },
    ],
    tipps: [
      "Schneller Weg: Vom oberen Bildschirmrand nach unten wischen und das WLAN-Symbol lange gedrückt halten.",
      "Funktioniert es nicht: Router kurz vom Strom nehmen, eine Minute warten und neu einstecken.",
    ],
    warnhinweise: ["In offenen WLANs (z. B. im Café) sollten Sie kein Online-Banking nutzen."],
    pruefdatum: PRUEFDATUM,
    beliebt: true,
  },
  {
    id: "mobile-daten",
    slug: "mobile-daten-einschalten",
    titel: "Mobile Daten ein- und ausschalten",
    beschreibung: "Unterwegs ohne WLAN ins Internet: So schalten Sie die mobilen Daten Ihres Handyvertrags ein oder aus.",
    kategorie: "internet-und-wlan",
    keywords: ["mobile daten", "internet unterwegs", "datenverbindung", "lte", "5g"],
    synonyme: ["handy internet", "datenvolumen", "mobiles internet", "daten einschalten"],
    probleme: ["Unterwegs kein Internet", "WhatsApp geht unterwegs nicht"],
    schwierigkeit: "leicht",
    dauerMinuten: 1,
    geraeteSerien: ALLE_SERIEN,
    oneUiVersionen: ONE_UI_6_BIS_8,
    bilder: [
      illustration(
        "mobile-daten-einschalten",
        "schnellzugriff.svg",
        "Illustration: Schnellzugriff mit Symbol für mobile Daten",
        "Vereinfachte Zeichnung des Schnellzugriffs, der erscheint, wenn man vom oberen Rand nach unten wischt. Ein Symbol mit zwei Pfeilen steht für mobile Daten.",
      ),
    ],
    schritte: [
      { titel: "Schnellzugriff öffnen", text: "Wischen Sie mit einem Finger vom oberen Bildschirmrand zweimal nach unten." },
      {
        titel: "Mobile Daten antippen",
        text: "Suchen Sie das Symbol „Mobile Daten“ (zwei Pfeile nach oben und unten). Tippen Sie darauf. Ist es farbig, sind die mobilen Daten eingeschaltet.",
        bild: 0,
      },
      { titel: "Alternative über Einstellungen", text: "Öffnen Sie „Einstellungen“ › „Verbindungen“ › „Datennutzung“ und schalten Sie „Mobile Daten“ ein oder aus." },
    ],
    tipps: ["Fehlt das Symbol im Schnellzugriff, wischen Sie dort nach links – es kann auf einer zweiten Seite liegen."],
    warnhinweise: ["Im Ausland können mobile Daten außerhalb der EU sehr teuer sein. Prüfen Sie vorher Ihren Tarif."],
    pruefdatum: PRUEFDATUM,
  },
];

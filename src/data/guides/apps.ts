import type { Guide } from "@/types";
import { ALLE_SERIEN, ONE_UI_6_BIS_8, PRUEFDATUM, illustration } from "./shared";

export const apps: Guide[] = [
  {
    id: "app-deinstallieren",
    slug: "app-deinstallieren",
    titel: "Eine App löschen (deinstallieren)",
    beschreibung: "Entfernen Sie Apps, die Sie nicht mehr brauchen. Das schafft Platz und Übersicht.",
    kategorie: "apps-und-anwendungen",
    keywords: ["app löschen", "deinstallieren", "entfernen", "app weg", "programm löschen"],
    synonyme: ["app entfernen", "anwendung löschen", "app loswerden", "app deinstallation"],
    probleme: ["Zu viele Apps", "Ich brauche eine App nicht mehr"],
    schwierigkeit: "leicht",
    dauerMinuten: 1,
    geraeteSerien: ALLE_SERIEN,
    oneUiVersionen: ONE_UI_6_BIS_8,
    bilder: [
      illustration(
        "app-deinstallieren",
        "app-menue.svg",
        "Illustration: Menü nach langem Drücken auf ein App-Symbol",
        "Vereinfachte Zeichnung eines App-Symbols mit einem kleinen Menü darüber, in dem „Deinstallieren“ steht.",
      ),
    ],
    schritte: [
      { titel: "App-Symbol suchen", text: "Suchen Sie auf dem Startbildschirm oder in der App-Übersicht das Symbol der App." },
      { titel: "Lange drücken", text: "Legen Sie den Finger auf das Symbol und halten Sie ihn etwa eine Sekunde, bis ein kleines Menü erscheint.", bild: 0 },
      { titel: "Deinstallieren", text: "Tippen Sie auf „Deinstallieren“ und bestätigen Sie mit „OK“." },
    ],
    tipps: ["Manche vorinstallierte Apps lassen sich nicht löschen, nur „Deaktivieren“. Das ist normal."],
    warnhinweise: ["Beim Löschen einer App können darin gespeicherte Daten verloren gehen."],
    pruefdatum: PRUEFDATUM,
  },
  {
    id: "apps-aktualisieren",
    slug: "apps-aktualisieren",
    titel: "Apps aktualisieren",
    beschreibung: "Halten Sie Ihre Apps aktuell – das bringt neue Funktionen und schließt Sicherheitslücken.",
    kategorie: "apps-und-anwendungen",
    keywords: ["update", "aktualisieren", "play store", "neue version", "app update"],
    synonyme: ["updaten", "apps erneuern", "aktualisierung", "apps auf neuesten stand"],
    probleme: ["App funktioniert nicht mehr", "App verlangt ein Update"],
    schwierigkeit: "leicht",
    dauerMinuten: 3,
    geraeteSerien: ALLE_SERIEN,
    oneUiVersionen: ONE_UI_6_BIS_8,
    bilder: [
      illustration(
        "apps-aktualisieren",
        "updates.svg",
        "Illustration: Liste verfügbarer Updates im Play Store",
        "Vereinfachte Zeichnung einer Update-Liste mit einer Schaltfläche „Alle aktualisieren“.",
      ),
    ],
    schritte: [
      { titel: "Play Store öffnen", text: "Tippen Sie auf die App „Play Store“." },
      { titel: "Profilbild antippen", text: "Tippen Sie oben rechts auf Ihr Profilbild oder Ihren Anfangsbuchstaben." },
      { titel: "Apps verwalten", text: "Tippen Sie auf „Apps und Gerät verwalten“." },
      { titel: "Aktualisieren", text: "Tippen Sie bei „Updates verfügbar“ auf „Alle aktualisieren“. Die Apps werden nacheinander aktualisiert.", bild: 0 },
    ],
    tipps: ["Am besten führen Sie Updates im WLAN durch, um Datenvolumen zu sparen."],
    warnhinweise: [],
    pruefdatum: PRUEFDATUM,
  },
];

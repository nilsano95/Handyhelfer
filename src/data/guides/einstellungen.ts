import type { Guide } from "@/types";
import { ALLE_SERIEN, ONE_UI_6_BIS_8, PRUEFDATUM, illustration } from "./shared";

export const einstellungen: Guide[] = [
  {
    id: "schrift-groesser",
    slug: "schrift-groesser-machen",
    titel: "Schrift größer machen",
    beschreibung: "Stellen Sie eine größere Schrift ein, damit Sie alles auf dem Handy bequem lesen können.",
    kategorie: "einstellungen",
    keywords: ["schrift", "schriftgröße", "größer", "lesen", "text größer"],
    synonyme: ["buchstaben größer", "schrift vergrößern", "zu klein", "groessere schrift", "lesbarkeit"],
    probleme: ["Ich kann die Schrift nicht lesen", "Schrift ist zu klein", "Text zu klein"],
    schwierigkeit: "leicht",
    dauerMinuten: 2,
    geraeteSerien: ALLE_SERIEN,
    oneUiVersionen: ONE_UI_6_BIS_8,
    bilder: [
      illustration(
        "schrift-groesser-machen",
        "schieberegler.svg",
        "Illustration: Schieberegler für die Schriftgröße",
        "Vereinfachte Zeichnung eines Schiebereglers mit einem kleinen „A“ links und einem großen „A“ rechts. Wird der Punkt nach rechts gezogen, wird die Schrift größer.",
      ),
    ],
    schritte: [
      { titel: "Einstellungen öffnen", text: "Tippen Sie auf die App „Einstellungen“ (Zahnrad-Symbol)." },
      { titel: "Anzeige wählen", text: "Tippen Sie auf „Anzeige“." },
      { titel: "Schriftgröße öffnen", text: "Tippen Sie auf „Schriftgröße und -stil“." },
      {
        titel: "Regler verschieben",
        text: "Ziehen Sie den Punkt beim Regler „Schriftgröße“ nach rechts. Oben sehen Sie sofort eine Vorschau, wie groß die Schrift wird.",
        bild: 0,
      },
    ],
    tipps: [
      "Unter „Anzeige“ › „Bildschirmzoom“ können Sie zusätzlich alle Symbole und Schaltflächen größer machen.",
      "Die Einstellung wird sofort übernommen – ein Speichern ist nicht nötig.",
    ],
    warnhinweise: [],
    pruefdatum: PRUEFDATUM,
    beliebt: true,
  },
  {
    id: "lautstaerke",
    slug: "lautstaerke-aendern",
    titel: "Handy lauter oder leiser machen",
    beschreibung: "Stellen Sie die Lautstärke für Klingelton, Medien und Benachrichtigungen ein.",
    kategorie: "einstellungen",
    keywords: ["lautstärke", "lauter", "leiser", "klingelton", "ton", "lautsprecher"],
    synonyme: ["lauter machen", "höre nichts", "zu leise", "laut", "ton lauter", "volume"],
    probleme: ["Ich höre das Klingeln nicht", "Handy ist zu leise", "Kein Ton"],
    schwierigkeit: "leicht",
    dauerMinuten: 2,
    geraeteSerien: ALLE_SERIEN,
    oneUiVersionen: ONE_UI_6_BIS_8,
    bilder: [
      illustration(
        "lautstaerke-aendern",
        "regler.svg",
        "Illustration: Lautstärkeregler für Klingelton, Medien und Benachrichtigungen",
        "Vereinfachte Zeichnung von mehreren Schiebereglern untereinander – je einer für Klingelton, Medien, Benachrichtigungen und System.",
      ),
    ],
    schritte: [
      { titel: "Lautstärketaste drücken", text: "Drücken Sie am rechten Rand die obere Lautstärketaste (lauter) oder die untere (leiser). Am Bildschirmrand erscheint ein Regler." },
      {
        titel: "Alle Regler anzeigen",
        text: "Tippen Sie beim Regler auf das kleine Symbol mit den drei Punkten bzw. Strichen. Jetzt sehen Sie getrennte Regler für Klingelton, Medien, Benachrichtigungen und System.",
        bild: 0,
      },
      { titel: "Klingelton einstellen", text: "Ziehen Sie den Regler „Klingelton“ nach rechts (bzw. nach oben), damit Sie Anrufe besser hören." },
      { titel: "Alternative über Einstellungen", text: "Öffnen Sie „Einstellungen“ › „Töne und Vibration“ › „Lautstärke“ und stellen Sie dort alle Regler ein." },
    ],
    tipps: ["„Medien“ regelt die Lautstärke von Videos und Musik, „Klingelton“ die Lautstärke bei Anrufen."],
    warnhinweise: ["Ist oben in der Statusleiste ein durchgestrichener Lautsprecher zu sehen, ist das Handy stumm geschaltet."],
    pruefdatum: PRUEFDATUM,
    beliebt: true,
  },
];

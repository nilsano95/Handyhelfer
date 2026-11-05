import type { Guide } from "@/types";
import { ALLE_SERIEN, ONE_UI_6_BIS_8, PRUEFDATUM, illustration } from "./shared";

export const ersteSchritte: Guide[] = [
  {
    id: "handy-ausschalten-neu-starten",
    slug: "handy-ausschalten-und-neu-starten",
    titel: "Handy ausschalten und neu starten",
    beschreibung:
      "So schalten Sie Ihr Samsung-Handy aus, wieder ein oder starten es neu – zum Beispiel, wenn etwas nicht richtig funktioniert.",
    kategorie: "erste-schritte",
    keywords: ["ausschalten", "einschalten", "neu starten", "neustart", "power", "seitentaste"],
    synonyme: ["abschalten", "anmachen", "ausmachen", "herunterfahren", "hochfahren", "an aus"],
    probleme: ["Handy lässt sich nicht ausschalten", "Wie mache ich das Handy aus", "Seitentaste öffnet etwas anderes"],
    schwierigkeit: "leicht",
    dauerMinuten: 2,
    geraeteSerien: ALLE_SERIEN,
    oneUiVersionen: ONE_UI_6_BIS_8,
    bilder: [
      illustration(
        "handy-ausschalten-und-neu-starten",
        "tasten.svg",
        "Illustration: Seitentaste und Leiser-Taste am Handy",
        "Schematische Zeichnung eines Handys. Rechts am Rand liegen die Lautstärketasten und darunter die Seitentaste. Für das Ausschalt-Menü drücken Sie die Seitentaste und die untere Lautstärketaste gleichzeitig.",
      ),
    ],
    schritte: [
      {
        titel: "Tasten finden",
        text: "Halten Sie das Handy so, dass Sie auf den Bildschirm schauen. Am rechten Rand finden Sie oben die Lautstärketasten (lauter und leiser) und darunter die Seitentaste.",
        bild: 0,
      },
      {
        titel: "Beide Tasten gedrückt halten",
        text: "Drücken Sie gleichzeitig die Seitentaste und die Leiser-Taste und halten Sie beide etwa zwei Sekunden lang gedrückt, bis ein Menü erscheint.",
        hinweis: "Wenn Sie nur die Seitentaste lange drücken, startet bei vielen Geräten der Sprachassistent Bixby. Das ist normal.",
      },
      {
        titel: "Ausschalten oder Neu starten wählen",
        text: "Tippen Sie auf „Ausschalten“ oder auf „Neu starten“. Tippen Sie danach noch einmal auf die gleiche Schaltfläche, um es zu bestätigen.",
      },
      {
        titel: "Wieder einschalten",
        text: "Um das ausgeschaltete Handy wieder einzuschalten, halten Sie die Seitentaste einige Sekunden gedrückt, bis das Samsung-Logo erscheint. Geben Sie danach Ihre PIN ein.",
      },
    ],
    tipps: [
      "Alternativ: Wischen Sie vom oberen Bildschirmrand zweimal nach unten. Oben im Schnellzugriff finden Sie ein Ein/Aus-Symbol.",
      "Ein Neustart ab und zu hilft oft, wenn das Handy langsam wird.",
    ],
    warnhinweise: ["Nach dem Einschalten wird die PIN Ihrer SIM-Karte oder Ihre Bildschirmsperre abgefragt. Halten Sie diese bereit."],
    pruefdatum: PRUEFDATUM,
    beliebt: true,
  },
  {
    id: "bildschirmfoto-erstellen",
    slug: "bildschirmfoto-erstellen",
    titel: "Bildschirmfoto (Screenshot) erstellen",
    beschreibung:
      "Halten Sie fest, was gerade auf dem Bildschirm zu sehen ist – zum Beispiel, um es jemandem zu zeigen, der Ihnen helfen möchte.",
    kategorie: "erste-schritte",
    keywords: ["screenshot", "bildschirmfoto", "bildschirm aufnehmen", "foto vom bildschirm"],
    synonyme: ["bildschirm fotografieren", "screenshot machen", "bildschirmkopie", "abfotografieren"],
    probleme: ["Ich möchte zeigen, was auf meinem Handy steht", "Fehlermeldung festhalten"],
    schwierigkeit: "leicht",
    dauerMinuten: 1,
    geraeteSerien: ALLE_SERIEN,
    oneUiVersionen: ONE_UI_6_BIS_8,
    bilder: [
      illustration(
        "bildschirmfoto-erstellen",
        "tasten.svg",
        "Illustration: Seitentaste und Leiser-Taste kurz gleichzeitig drücken",
        "Schematische Zeichnung eines Handys. Die Seitentaste und die Leiser-Taste sind markiert. Beide werden nur kurz und gleichzeitig gedrückt.",
      ),
    ],
    schritte: [
      {
        titel: "Gewünschten Inhalt anzeigen",
        text: "Öffnen Sie das, was Sie festhalten möchten – zum Beispiel eine Nachricht oder eine Fehlermeldung.",
      },
      {
        titel: "Beide Tasten kurz drücken",
        text: "Drücken Sie die Seitentaste und die Leiser-Taste gleichzeitig nur ganz kurz und lassen Sie sofort wieder los.",
        bild: 0,
      },
      {
        titel: "Bestätigung abwarten",
        text: "Der Bildschirm blinkt kurz auf und unten erscheint eine kleine Leiste. Das Bildschirmfoto ist jetzt gespeichert.",
      },
      {
        titel: "Bildschirmfoto finden",
        text: "Öffnen Sie die App „Galerie“. Das neue Bildschirmfoto steht ganz oben bei den neuesten Bildern.",
      },
    ],
    tipps: ["Bildschirmfotos können Sie wie normale Fotos verschicken, zum Beispiel über WhatsApp."],
    warnhinweise: ["Halten Sie die Tasten nicht zu lange gedrückt – sonst öffnet sich das Menü zum Ausschalten."],
    pruefdatum: PRUEFDATUM,
  },
];

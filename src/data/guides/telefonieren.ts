import type { Guide } from "@/types";
import { ALLE_SERIEN, ONE_UI_6_BIS_8, PRUEFDATUM, illustration } from "./shared";

export const telefonieren: Guide[] = [
  {
    id: "kontakt-speichern",
    slug: "kontakt-speichern",
    titel: "Neuen Kontakt speichern",
    beschreibung:
      "Speichern Sie eine Telefonnummer mit Namen, damit Sie die Person später schnell wiederfinden und anrufen können.",
    kategorie: "telefonieren-und-kontakte",
    keywords: ["kontakt", "kontakt speichern", "nummer speichern", "telefonbuch", "adressbuch", "neuer kontakt"],
    synonyme: ["nummer eintragen", "telefonnummer sichern", "kontakt anlegen", "kontakt hinzufügen", "nummer abspeichern"],
    probleme: ["Ich finde eine Nummer nicht wieder", "Wie speichere ich eine Nummer"],
    schwierigkeit: "leicht",
    dauerMinuten: 3,
    geraeteSerien: ALLE_SERIEN,
    oneUiVersionen: ONE_UI_6_BIS_8,
    bilder: [
      illustration(
        "kontakt-speichern",
        "kontakt-anlegen.svg",
        "Illustration: Formular für einen neuen Kontakt",
        "Vereinfachte Zeichnung eines Kontaktformulars mit Feldern für Name und Telefonnummer sowie einer Schaltfläche „Speichern“ unten.",
      ),
    ],
    schritte: [
      { titel: "Kontakte-App öffnen", text: "Tippen Sie auf dem Startbildschirm oder in der App-Übersicht auf die App „Kontakte“." },
      {
        titel: "Neuen Kontakt anlegen",
        text: "Tippen Sie auf das Plus-Zeichen (+). Falls Sie gefragt werden, wo der Kontakt gespeichert werden soll, wählen Sie Ihr Google- oder Samsung-Konto – dann geht er bei einem Handywechsel nicht verloren.",
      },
      {
        titel: "Name und Nummer eintragen",
        text: "Tippen Sie in das Feld „Name“ und schreiben Sie den Namen. Tippen Sie dann in das Feld „Telefon“ und geben Sie die Nummer ein.",
        bild: 0,
      },
      { titel: "Speichern", text: "Tippen Sie unten auf „Speichern“. Der Kontakt steht jetzt in Ihrer Kontaktliste." },
    ],
    tipps: [
      "Sie können auch direkt in der Telefon-App eine Nummer eintippen und dann „Neuen Kontakt erstellen“ bzw. „Zu Kontakten hinzufügen“ wählen.",
      "Geben Sie Familienmitgliedern eindeutige Namen wie „Tochter Anna“ – so finden Sie sie schneller.",
    ],
    warnhinweise: [],
    pruefdatum: PRUEFDATUM,
    beliebt: true,
  },
  {
    id: "anrufen-und-annehmen",
    slug: "anrufen-und-anruf-annehmen",
    titel: "Jemanden anrufen und Anrufe annehmen",
    beschreibung:
      "So rufen Sie eine Nummer oder einen gespeicherten Kontakt an – und so nehmen Sie einen eingehenden Anruf an oder lehnen ihn ab.",
    kategorie: "telefonieren-und-kontakte",
    keywords: ["anrufen", "telefonieren", "anruf annehmen", "abnehmen", "auflegen", "anruf ablehnen"],
    synonyme: ["telefonat", "rangehen", "abheben", "wählen", "nummer wählen", "klingelt"],
    probleme: ["Ich kann einen Anruf nicht annehmen", "Wie gehe ich ran", "Wie lege ich auf"],
    schwierigkeit: "leicht",
    dauerMinuten: 2,
    geraeteSerien: ALLE_SERIEN,
    oneUiVersionen: ONE_UI_6_BIS_8,
    bilder: [
      illustration(
        "anrufen-und-anruf-annehmen",
        "anruf-annehmen.svg",
        "Illustration: Grünes und rotes Hörer-Symbol bei einem Anruf",
        "Vereinfachte Zeichnung des Anrufbildschirms: links ein grünes Hörer-Symbol zum Annehmen, rechts ein rotes zum Ablehnen.",
      ),
    ],
    schritte: [
      { titel: "Telefon-App öffnen", text: "Tippen Sie auf das grüne Hörer-Symbol „Telefon“ unten auf dem Startbildschirm." },
      {
        titel: "Nummer wählen oder Kontakt suchen",
        text: "Unter „Tastenfeld“ tippen Sie die Nummer ein. Unter „Kontakte“ finden Sie gespeicherte Personen. Tippen Sie dann auf den grünen Hörer, um anzurufen.",
      },
      {
        titel: "Anruf annehmen",
        text: "Wenn es klingelt, legen Sie den Finger auf das grüne Hörer-Symbol und ziehen ihn ein Stück zur Seite oder nach oben. Dann sind Sie verbunden.",
        bild: 0,
      },
      { titel: "Anruf beenden", text: "Tippen Sie auf das rote Hörer-Symbol, um aufzulegen." },
    ],
    tipps: ["Zum Ablehnen eines Anrufs ziehen Sie das rote Hörer-Symbol zur Seite."],
    warnhinweise: ["Rufen Sie bei unbekannten Nummern, die Geld oder Daten verlangen, niemals zurück und geben Sie keine Codes weiter."],
    pruefdatum: PRUEFDATUM,
  },
];

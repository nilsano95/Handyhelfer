import Fuse, { type IFuseOptions } from "fuse.js";
import { getCategory } from "@/data/categories";
import type { Guide } from "@/types";

/**
 * Stichwortsuche mit Fuse.js.
 *
 * Ablauf:
 * 1. Suchtext normalisieren (Kleinschreibung, Umlaute, Satzzeichen).
 * 2. In einzelne Wörter zerlegen und Füllwörter („wie“, „mein“, „machen“ …) entfernen.
 * 3. Jedes Wort unscharf (tippfehlertolerant) über alle Felder suchen.
 * 4. Treffer zusammenführen: Anleitungen, die zu mehr Wörtern passen, stehen oben.
 */

export interface SearchDocument {
  id: string;
  titel: string;
  beschreibung: string;
  kategorie: string;
  keywords: string[];
  synonyme: string[];
  probleme: string[];
}

export interface SearchHit {
  guide: Guide;
  /** 0 = perfekt, 1 = schwach */
  score: number;
  matchedTerms: number;
}

const STOPWORDS = new Set([
  "wie", "was", "wo", "wann", "warum", "wieso", "kann", "koennen", "ich", "man", "mein", "meine", "meinem",
  "meinen", "mir", "mich", "das", "der", "die", "den", "dem", "des", "ein", "eine", "einen", "einem", "einer",
  "und", "oder", "mit", "auf", "aus", "bei", "fuer", "von", "vom", "zum", "zur", "ist", "sind", "bitte",
  "machen", "mache", "macht", "geht", "gehen", "tun", "handy", "smartphone", "telefon", "samsung", "galaxy",
  "nicht", "kein", "keine", "mehr", "ganz", "sehr", "noch", "auch", "jetzt", "hier", "da", "dass", "es",
  "funktioniert", "klappt", "will", "moechte", "soll",
]);

/** Mindestqualität (1 − Fuse-Score), damit ein Wort als Treffer zählt. */
const MIN_TERM_QUALITY = 0.35;
/** Treffer müssen mindestens diesen Anteil der Qualität des besten Treffers erreichen. */
const RELATIVE_TERM_QUALITY = 0.35;

export function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[-_/]/g, " ")
    .replace(/[^a-z0-9 ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function tokenize(query: string): string[] {
  const words = normalize(query)
    .split(" ")
    .filter((w) => w.length >= 2);
  const meaningful = words.filter((w) => !STOPWORDS.has(w) && w.length >= 3);
  // Besteht die Anfrage nur aus Füllwörtern (z. B. „Handy“), suchen wir trotzdem danach.
  return Array.from(new Set(meaningful.length > 0 ? meaningful : words));
}

export function toSearchDocument(guide: Guide): SearchDocument {
  return {
    id: guide.id,
    titel: normalize(guide.titel),
    beschreibung: normalize(guide.beschreibung),
    kategorie: normalize(getCategory(guide.kategorie)?.name ?? guide.kategorie),
    keywords: guide.keywords.map(normalize),
    synonyme: guide.synonyme.map(normalize),
    probleme: guide.probleme.map(normalize),
  };
}

export const fuseOptions: IFuseOptions<SearchDocument> = {
  keys: [
    { name: "titel", weight: 3 },
    { name: "keywords", weight: 2.5 },
    { name: "synonyme", weight: 2 },
    { name: "probleme", weight: 1.5 },
    { name: "kategorie", weight: 1 },
    { name: "beschreibung", weight: 0.8 },
  ],
  includeScore: true,
  ignoreLocation: true,
  threshold: 0.38,
  minMatchCharLength: 2,
};

export function createSearcher(guides: Guide[]) {
  const docs = guides.map(toSearchDocument);
  const byId = new Map(guides.map((g) => [g.id, g]));
  const fuse = new Fuse(docs, fuseOptions);

  return function search(query: string, limit = 20): SearchHit[] {
    const terms = tokenize(query);
    if (terms.length === 0) return [];

    const aggregate = new Map<string, { total: number; matched: number }>();

    for (const term of terms) {
      const results = fuse.search(term);
      const bestQuality = results.length > 0 ? 1 - (results[0].score ?? 1) : 0;
      for (const result of results) {
        const quality = 1 - (result.score ?? 1);
        // Sehr schwache Zufallstreffer (z. B. ähnliche Buchstabenfolgen in langen Texten) ignorieren
        if (quality < MIN_TERM_QUALITY || quality < bestQuality * RELATIVE_TERM_QUALITY) continue;
        const entry = aggregate.get(result.item.id) ?? { total: 0, matched: 0 };
        entry.total += quality;
        entry.matched += 1;
        aggregate.set(result.item.id, entry);
      }
    }

    // Gesamter Suchtext als zusätzlicher Bonus für passende Formulierungen
    const phrase = normalize(query);
    if (terms.length > 1 && phrase.length <= 32) {
      for (const result of fuse.search(phrase)) {
        const entry = aggregate.get(result.item.id);
        if (entry) entry.total += (1 - (result.score ?? 1)) * 0.5;
      }
    }

    const hits: SearchHit[] = [];
    for (const [id, { total, matched }] of aggregate) {
      const guide = byId.get(id);
      if (!guide) continue;
      hits.push({ guide, matchedTerms: matched, score: 1 - total / (terms.length + 0.5) });
    }

    hits.sort((a, b) => b.matchedTerms - a.matchedTerms || a.score - b.score);

    // Wenn einige Anleitungen alle Wörter treffen, schwache Einzeltreffer ausblenden.
    const best = hits[0]?.matchedTerms ?? 0;
    const filtered = best >= 2 ? hits.filter((h) => h.matchedTerms >= best - 1) : hits;

    return filtered.slice(0, limit);
  };
}

/** Beispiel-Suchanfragen für die Startseite und die Suchseite. */
export const exampleQueries = [
  "Handy lauter machen",
  "Schrift größer",
  "WLAN funktioniert nicht",
  "WhatsApp installieren",
  "Kontakt speichern",
  "Bilder verschicken",
  "Speicher voll",
];

import type { Guide } from "@/types";
import { apps } from "./apps";
import { einstellungen } from "./einstellungen";
import { ersteSchritte } from "./erste-schritte";
import { internet } from "./internet";
import { kamera } from "./kamera";
import { nachrichten } from "./nachrichten";
import { probleme } from "./probleme";
import { telefonieren } from "./telefonieren";

/**
 * Alle Anleitungen. Neue Anleitungen in der passenden Kategorie-Datei ergänzen –
 * sie erscheinen dann automatisch in Suche, Kategorien und Sitemap.
 */
export const rawGuides: Guide[] = [
  ...ersteSchritte,
  ...telefonieren,
  ...nachrichten,
  ...kamera,
  ...internet,
  ...einstellungen,
  ...apps,
  ...probleme,
];

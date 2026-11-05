"use client";

import { useMemo } from "react";
import { guides } from "@/lib/guides";
import { createSearcher, type SearchHit } from "@/lib/search";

let searcher: ReturnType<typeof createSearcher> | null = null;

function getSearcher() {
  if (!searcher) searcher = createSearcher(guides);
  return searcher;
}

/** Live-Suche: liefert Treffer für den aktuellen Suchtext. */
export function useSearch(query: string, limit = 20): SearchHit[] {
  return useMemo(() => {
    if (query.trim().length < 2) return [];
    return getSearcher()(query, limit);
  }, [query, limit]);
}

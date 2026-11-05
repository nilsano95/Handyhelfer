"use client";

import { useCallback, useMemo } from "react";
import { favoritesStorageSchema } from "@/lib/schema";
import { STORAGE_KEYS, readStorage, writeStorage } from "@/lib/storage";
import { useStoredValue } from "./use-stored-value";

function parseFavorites(raw: string | null): string[] {
  if (!raw) return [];
  try {
    const parsed = favoritesStorageSchema.safeParse(JSON.parse(raw));
    return parsed.success ? parsed.data : [];
  } catch {
    return [];
  }
}

export function useFavorites() {
  const { raw, ready } = useStoredValue(STORAGE_KEYS.favoriten);
  const favorites = useMemo(() => parseFavorites(raw), [raw]);

  const toggleFavorite = useCallback((id: string) => {
    const current = parseFavorites(readStorage(STORAGE_KEYS.favoriten));
    const next = current.includes(id) ? current.filter((f) => f !== id) : [...current, id];
    writeStorage(STORAGE_KEYS.favoriten, JSON.stringify(next));
  }, []);

  const clearFavorites = useCallback(() => writeStorage(STORAGE_KEYS.favoriten, null), []);

  const isFavorite = useCallback((id: string) => favorites.includes(id), [favorites]);

  return { favorites, isFavorite, toggleFavorite, clearFavorites, ready };
}

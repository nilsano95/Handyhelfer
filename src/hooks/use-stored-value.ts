"use client";

import { useSyncExternalStore } from "react";
import { readStorage, subscribeStorage } from "@/lib/storage";

/**
 * Liest einen Rohwert aus localStorage. Auf dem Server und beim ersten
 * Rendern im Browser ist der Wert `null` – so gibt es keine Hydration-Fehler.
 */
export function useStoredValue(key: string): { raw: string | null; ready: boolean } {
  const raw = useSyncExternalStore(
    subscribeStorage,
    () => readStorage(key),
    () => null,
  );
  const ready = useSyncExternalStore(
    subscribeStorage,
    () => true,
    () => false,
  );
  return { raw, ready };
}

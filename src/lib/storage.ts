/**
 * Kleine, SSR-sichere Hülle um localStorage, die mit useSyncExternalStore
 * zusammenarbeitet. Änderungen werden an alle geöffneten Komponenten
 * (und über das „storage“-Ereignis an andere Browser-Tabs) gemeldet.
 */

export const STORAGE_KEYS = {
  favoriten: "see:favoriten",
  geraet: "see:geraet",
} as const;

type Listener = () => void;
const listeners = new Set<Listener>();

export function subscribeStorage(listener: Listener): () => void {
  listeners.add(listener);
  if (typeof window !== "undefined") window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    if (typeof window !== "undefined") window.removeEventListener("storage", listener);
  };
}

export function readStorage(key: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function writeStorage(key: string, value: string | null): void {
  if (typeof window === "undefined") return;
  try {
    if (value === null) window.localStorage.removeItem(key);
    else window.localStorage.setItem(key, value);
  } catch {
    // Speicher nicht verfügbar (z. B. privater Modus) – still ignorieren.
  }
  listeners.forEach((l) => l());
}

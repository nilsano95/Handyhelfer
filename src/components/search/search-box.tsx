"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useId, useState, type FormEvent } from "react";
import { ArrowRight, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCategory } from "@/data/categories";
import { useSearch } from "@/hooks/use-search";
import { cn } from "@/lib/utils";

interface SearchBoxProps {
  className?: string;
  autoFocus?: boolean;
  placeholder?: string;
}

/**
 * Prominentes Suchfeld mit Live-Vorschlägen.
 * Enter oder „Suchen“ führt zur vollständigen Ergebnisseite.
 */
export function SearchBox({ className, autoFocus, placeholder = "Wonach suchen Sie?" }: SearchBoxProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const hits = useSearch(query, 5);
  const listId = useId();
  const showList = focused && query.trim().length >= 2;

  function submit(event: FormEvent) {
    event.preventDefault();
    const q = query.trim();
    if (!q) return;
    router.push(`/suche?q=${encodeURIComponent(q)}`);
  }

  return (
    <div className={cn("relative", className)}>
      <form role="search" onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor={`${listId}-input`} className="sr-only">
          Suchbegriff eingeben
        </label>
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute top-1/2 left-5 size-6 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <input
            id={`${listId}-input`}
            type="search"
            value={query}
            autoFocus={autoFocus}
            autoComplete="off"
            enterKeyHint="search"
            placeholder={placeholder}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 150)}
            aria-controls={showList ? listId : undefined}
            aria-autocomplete="list"
            className="min-h-16 w-full rounded-2xl border-2 border-border bg-card pr-14 pl-14 text-lg shadow-soft outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-ring/20 [&::-webkit-search-cancel-button]:hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute top-1/2 right-3 flex size-10 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground hover:bg-muted"
              aria-label="Suchtext löschen"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          )}
        </div>
        <Button type="submit" size="lg" className="min-h-16 sm:px-8">
          Suchen
        </Button>
      </form>

      {showList && (
        <div
          id={listId}
          className="absolute inset-x-0 top-full z-30 mt-2 animate-fade-in overflow-hidden rounded-2xl border border-border bg-popover shadow-lift"
        >
          {hits.length === 0 ? (
            <p className="px-5 py-4 text-base text-muted-foreground">
              Noch nichts gefunden. Versuchen Sie es mit einem anderen Wort, z. B. „WLAN“ oder „Foto“.
            </p>
          ) : (
            <ul>
              {hits.map(({ guide }) => (
                <li key={guide.id} className="border-b border-border last:border-0">
                  <Link
                    href={`/anleitung/${guide.slug}`}
                    className="flex min-h-16 items-center justify-between gap-3 px-5 py-3 hover:bg-accent"
                  >
                    <span>
                      <span className="block text-base font-semibold">{guide.titel}</span>
                      <span className="block text-sm text-muted-foreground">{getCategory(guide.kategorie)?.name}</span>
                    </span>
                    <ArrowRight className="size-5 shrink-0 text-primary" aria-hidden="true" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`/suche?q=${encodeURIComponent(query.trim())}`}
                  className="flex min-h-14 items-center justify-center bg-muted/60 px-5 text-base font-semibold text-primary hover:bg-accent"
                >
                  Alle Ergebnisse anzeigen
                </Link>
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

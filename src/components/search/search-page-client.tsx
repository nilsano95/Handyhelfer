"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { SearchX, Search, X } from "lucide-react";
import { GuideCard } from "@/components/guide/guide-card";
import { categories } from "@/data/categories";
import { useSearch } from "@/hooks/use-search";
import { exampleQueries } from "@/lib/search";
import { CategoryIcon } from "@/components/category-icon";
import type { CategorySlug } from "@/types";

/** Live-Suche mit Ergebnisliste, gruppiert nach Kategorien. */
export function SearchPageClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState(() => searchParams.get("q") ?? "");
  const hits = useSearch(query, 30);
  const trimmed = query.trim();

  function update(value: string) {
    setQuery(value);
    const params = new URLSearchParams();
    if (value.trim()) params.set("q", value.trim());
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  const grouped = useMemo(() => {
    const map = new Map<CategorySlug, number>();
    for (const h of hits) map.set(h.guide.kategorie, (map.get(h.guide.kategorie) ?? 0) + 1);
    return categories.filter((c) => map.has(c.slug)).map((c) => ({ category: c, count: map.get(c.slug) ?? 0 }));
  }, [hits]);

  return (
    <div className="mt-8">
      <form role="search" onSubmit={(e) => e.preventDefault()} className="relative max-w-3xl">
        <label htmlFor="suche-eingabe" className="sr-only">
          Suchbegriff
        </label>
        <Search className="pointer-events-none absolute top-1/2 left-5 size-6 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <input
          id="suche-eingabe"
          type="search"
          value={query}
          onChange={(e) => update(e.target.value)}
          placeholder="z. B. „Handy lauter machen“"
          autoComplete="off"
          enterKeyHint="search"
          className="min-h-16 w-full rounded-2xl border-2 border-border bg-card pr-14 pl-14 text-lg shadow-soft outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-ring/20 [&::-webkit-search-cancel-button]:hidden"
        />
        {query && (
          <button
            type="button"
            onClick={() => update("")}
            className="absolute top-1/2 right-3 flex size-10 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground hover:bg-muted"
            aria-label="Suchtext löschen"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        )}
      </form>

      <div aria-live="polite" className="mt-8">
        {trimmed.length < 2 ? (
          <div>
            <p className="text-lg font-semibold">Beliebte Suchanfragen:</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {exampleQueries.map((q) => (
                <li key={q}>
                  <button
                    type="button"
                    onClick={() => update(q)}
                    className="min-h-12 rounded-full border border-border bg-card px-5 text-base font-medium hover:border-primary/40 hover:text-primary"
                  >
                    {q}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : hits.length === 0 ? (
          <NoResults query={trimmed} onPick={update} />
        ) : (
          <>
            <p className="text-lg">
              <strong>{hits.length}</strong> {hits.length === 1 ? "Anleitung gefunden" : "Anleitungen gefunden"} für „{trimmed}“
            </p>
            {grouped.length > 1 && (
              <ul className="mt-3 flex flex-wrap gap-2" aria-label="Gefunden in diesen Themen">
                {grouped.map(({ category, count }) => (
                  <li key={category.slug}>
                    <Link
                      href={`/kategorie/${category.slug}`}
                      className="inline-flex min-h-10 items-center gap-2 rounded-full bg-secondary px-4 text-sm font-semibold text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                    >
                      <CategoryIcon name={category.icon} className="size-4" />
                      {category.name} ({count})
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {hits.map(({ guide }) => (
                <li key={guide.id} className="animate-fade-up">
                  <GuideCard guide={guide} />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

function NoResults({ query, onPick }: { query: string; onPick: (q: string) => void }) {
  return (
    <div className="rounded-3xl border-2 border-dashed border-border bg-card p-6 text-center sm:p-10">
      <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <SearchX className="size-8" aria-hidden="true" />
      </span>
      <h2 className="mt-4 text-2xl">Leider nichts gefunden für „{query}“</h2>
      <p className="mx-auto mt-3 max-w-xl text-lg text-muted-foreground">
        Versuchen Sie ein anderes, einfaches Wort – zum Beispiel <strong>„WLAN“</strong>, <strong>„Foto“</strong> oder{" "}
        <strong>„lauter“</strong>. Oder stöbern Sie in den Themen.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {exampleQueries.slice(0, 5).map((q) => (
          <button
            key={q}
            type="button"
            onClick={() => onPick(q)}
            className="min-h-12 rounded-full border border-border bg-background px-5 text-base font-medium hover:border-primary/40 hover:text-primary"
          >
            {q}
          </button>
        ))}
      </div>
      <Link href="/kategorien" className="mt-6 inline-flex min-h-12 items-center text-lg font-semibold text-primary underline-offset-4 hover:underline">
        Alle Themen ansehen
      </Link>
    </div>
  );
}

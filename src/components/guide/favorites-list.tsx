"use client";

import Link from "next/link";
import { Heart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GuideCard } from "@/components/guide/guide-card";
import { useFavorites } from "@/hooks/use-favorites";
import { getGuideById } from "@/lib/guides";
import type { Guide } from "@/types";

export function FavoritesList() {
  const { favorites, toggleFavorite, clearFavorites, ready } = useFavorites();

  if (!ready) {
    return <div className="h-48 rounded-3xl bg-muted/60" aria-hidden="true" />;
  }

  const list = favorites.map(getGuideById).filter((g): g is Guide => Boolean(g));

  if (list.length === 0) {
    return (
      <div className="rounded-3xl border-2 border-dashed border-border bg-card p-8 text-center sm:p-12">
        <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Heart className="size-8" aria-hidden="true" />
        </span>
        <h2 className="mt-4 text-2xl">Noch keine Favoriten</h2>
        <p className="mx-auto mt-3 max-w-lg text-lg text-muted-foreground">
          Tippen Sie bei einer Anleitung auf <strong>„Als Favorit merken“</strong>. Dann finden Sie sie hier schnell wieder.
        </p>
        <Button asChild size="lg" className="mt-6">
          <Link href="/kategorien">Anleitungen ansehen</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {list.map((g) => (
          <li key={g.id} className="flex flex-col gap-2">
            <GuideCard guide={g} />
            <Button variant="ghost" size="sm" className="self-start text-muted-foreground" onClick={() => toggleFavorite(g.id)}>
              <Heart aria-hidden="true" className="fill-current" />
              Aus Favoriten entfernen
            </Button>
          </li>
        ))}
      </ul>
      <Button variant="outline" className="mt-10" onClick={clearFavorites}>
        <Trash2 aria-hidden="true" />
        Alle Favoriten löschen
      </Button>
    </div>
  );
}

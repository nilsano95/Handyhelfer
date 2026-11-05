"use client";

import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFavorites } from "@/hooks/use-favorites";
import { cn } from "@/lib/utils";

export function FavoriteButton({ guideId, className }: { guideId: string; className?: string }) {
  const { isFavorite, toggleFavorite, ready } = useFavorites();
  const active = ready && isFavorite(guideId);

  return (
    <Button
      type="button"
      variant={active ? "secondary" : "outline"}
      onClick={() => toggleFavorite(guideId)}
      aria-pressed={active}
      className={cn(active && "text-primary", className)}
    >
      <Heart aria-hidden="true" className={cn(active && "fill-current")} />
      {active ? "In Favoriten gespeichert" : "Als Favorit merken"}
    </Button>
  );
}

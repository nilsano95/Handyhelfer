import Link from "next/link";
import { ChevronRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CategoryIcon } from "@/components/category-icon";
import { getCategory } from "@/data/categories";
import { difficultyLabel, formatDuration, cn } from "@/lib/utils";
import type { Guide } from "@/types";

interface GuideCardProps {
  guide: Guide;
  showCategory?: boolean;
  className?: string;
}

export function GuideCard({ guide, showCategory = true, className }: GuideCardProps) {
  const category = getCategory(guide.kategorie);
  return (
    <Link
      href={`/anleitung/${guide.slug}`}
      className={cn(
        "group flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lift",
        className,
      )}
    >
      {showCategory && category && (
        <span className="flex items-center gap-2 text-sm font-semibold text-primary">
          <CategoryIcon name={category.icon} className="size-5" />
          {category.name}
        </span>
      )}
      <span className="block">
        <span className="block text-xl font-bold leading-snug text-foreground">{guide.titel}</span>
        <span className="mt-2 block text-base text-muted-foreground">{guide.beschreibung}</span>
      </span>
      <span className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
        <span className="flex flex-wrap gap-2">
          <Badge variant="secondary">
            <Clock aria-hidden="true" />
            {formatDuration(guide.dauerMinuten)}
          </Badge>
          <Badge variant="outline">{difficultyLabel[guide.schwierigkeit]}</Badge>
        </span>
        <span className="flex items-center gap-1 text-base font-semibold text-primary">
          Ansehen
          <ChevronRight className="size-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </span>
    </Link>
  );
}

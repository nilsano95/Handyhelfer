import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { CategoryIcon } from "@/components/category-icon";
import { categories } from "@/data/categories";
import { countByCategory } from "@/lib/guides";

export function CategoryGrid() {
  const counts = countByCategory();
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((c, i) => (
        <li key={c.slug} className="animate-fade-up" style={{ animationDelay: `${i * 40}ms` }}>
          <Link
            href={`/kategorie/${c.slug}`}
            className="group flex h-full items-center gap-4 rounded-3xl border border-border bg-card p-5 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lift sm:flex-col sm:items-start sm:p-6"
          >
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <CategoryIcon name={c.icon} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-lg font-bold leading-snug">{c.name}</span>
              <span className="mt-1 block text-base text-muted-foreground">{c.kurzbeschreibung}</span>
              <span className="mt-2 hidden text-sm font-semibold text-primary sm:block">
                {counts[c.slug]} {counts[c.slug] === 1 ? "Anleitung" : "Anleitungen"}
              </span>
            </span>
            <ChevronRight className="size-6 shrink-0 text-primary sm:hidden" aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

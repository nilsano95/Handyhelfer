import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { CategoryIcon } from "@/components/category-icon";
import { PageContainer } from "@/components/section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { categories } from "@/data/categories";
import { getGuidesByCategory } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Alle Themen",
  description: "Alle Themen und Anleitungen zu Samsung-Galaxy-Smartphones auf einen Blick.",
  alternates: { canonical: "/kategorien" },
};

export default function CategoriesPage() {
  return (
    <PageContainer>
      <Breadcrumbs items={[{ label: "Themen" }]} />
      <h1 className="text-3xl sm:text-4xl">Alle Themen</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        Hier finden Sie alle Anleitungen, sortiert nach Themen.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {categories.map((c) => {
          const list = getGuidesByCategory(c.slug);
          return (
            <section key={c.slug} aria-labelledby={`k-${c.slug}`} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <Link href={`/kategorie/${c.slug}`} className="group flex items-center gap-4">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <CategoryIcon name={c.icon} />
                </span>
                <span className="flex-1">
                  <h2 id={`k-${c.slug}`} className="text-xl group-hover:text-primary">
                    {c.name}
                  </h2>
                  <span className="text-base text-muted-foreground">{c.kurzbeschreibung}</span>
                </span>
                <ChevronRight className="size-6 text-primary" aria-hidden="true" />
              </Link>
              <ul className="mt-4 grid gap-1 border-t border-border pt-3">
                {list.map((g) => (
                  <li key={g.id}>
                    <Link
                      href={`/anleitung/${g.slug}`}
                      className="flex min-h-12 items-center justify-between gap-3 rounded-xl px-3 text-base font-medium hover:bg-accent hover:text-primary"
                    >
                      {g.titel}
                      <ChevronRight className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </PageContainer>
  );
}

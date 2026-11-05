import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CategoryIcon } from "@/components/category-icon";
import { GuideCard } from "@/components/guide/guide-card";
import { PageContainer } from "@/components/section";
import { SearchBox } from "@/components/search/search-box";
import { categories, getCategory } from "@/data/categories";
import { getGuidesByCategory } from "@/lib/guides";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.beschreibung,
    alternates: { canonical: `/kategorie/${category.slug}` },
    openGraph: { title: category.name, description: category.beschreibung, url: `/kategorie/${category.slug}` },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const list = getGuidesByCategory(category.slug);

  return (
    <PageContainer>
      <Breadcrumbs items={[{ label: "Themen", href: "/kategorien" }, { label: category.name }]} />

      <header className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <span className="flex size-18 shrink-0 items-center justify-center rounded-3xl bg-primary text-primary-foreground shadow-lift">
          <CategoryIcon name={category.icon} className="size-9" />
        </span>
        <div>
          <h1 className="text-3xl sm:text-4xl">{category.name}</h1>
          <p className="mt-2 max-w-2xl text-lg text-muted-foreground">{category.beschreibung}</p>
        </div>
      </header>

      <SearchBox className="mt-8 max-w-3xl" placeholder="Andere Anleitung suchen …" />

      <h2 className="mt-12 mb-5 text-2xl">
        {list.length} {list.length === 1 ? "Anleitung" : "Anleitungen"}
      </h2>
      {list.length > 0 ? (
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((g) => (
            <li key={g.id}>
              <GuideCard guide={g} showCategory={false} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="rounded-3xl border border-dashed border-border p-8 text-lg text-muted-foreground">
          Zu diesem Thema gibt es bald neue Anleitungen.
        </p>
      )}
    </PageContainer>
  );
}

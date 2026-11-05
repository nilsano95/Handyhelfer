import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarCheck, Clock, Gauge, Lightbulb, Smartphone, TriangleAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { GuideCard } from "@/components/guide/guide-card";
import { GuideFigure } from "@/components/guide/guide-figure";
import { GuideSteps } from "@/components/guide/guide-steps";
import { FavoriteButton } from "@/components/guide/favorite-button";
import { DeviceCompatibility } from "@/components/guide/device-compatibility";
import { PageContainer } from "@/components/section";
import { getCategory } from "@/data/categories";
import { seriesLabel } from "@/data/devices";
import { getGuideBySlug, getRelatedGuides, guides } from "@/lib/guides";
import { siteConfig } from "@/lib/site";
import { difficultyLabel, formatDate, formatDuration } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.titel,
    description: guide.beschreibung,
    keywords: [...guide.keywords, ...guide.synonyme],
    alternates: { canonical: `/anleitung/${guide.slug}` },
    openGraph: {
      type: "article",
      title: guide.titel,
      description: guide.beschreibung,
      url: `/anleitung/${guide.slug}`,
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const category = getCategory(guide.kategorie);
  const related = getRelatedGuides(guide);
  const heroImage = guide.bilder[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: guide.titel,
    description: guide.beschreibung,
    totalTime: `PT${guide.dauerMinuten}M`,
    inLanguage: "de-DE",
    dateModified: guide.pruefdatum,
    url: `${siteConfig.url}/anleitung/${guide.slug}`,
    step: guide.schritte.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.titel,
      text: s.text,
    })),
  };

  return (
    <PageContainer>
      <script
        type="application/ld+json"
        // Strukturierte Daten für Suchmaschinen (nur eigene, statische Inhalte)
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Breadcrumbs
        items={[
          { label: "Themen", href: "/kategorien" },
          ...(category ? [{ label: category.name, href: `/kategorie/${category.slug}` }] : []),
          { label: guide.titel },
        ]}
      />

      <article>
        <header className="grid gap-8 lg:grid-cols-[1fr_20rem] lg:items-start">
          <div>
            {category && (
              <Link href={`/kategorie/${category.slug}`} className="text-base font-semibold text-primary hover:underline">
                {category.name}
              </Link>
            )}
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl">{guide.titel}</h1>
            <p className="mt-4 text-xl text-muted-foreground">{guide.beschreibung}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="secondary">
                <Clock aria-hidden="true" />
                {formatDuration(guide.dauerMinuten)}
              </Badge>
              <Badge variant="secondary">
                <Gauge aria-hidden="true" />
                {difficultyLabel[guide.schwierigkeit]}
              </Badge>
              <Badge variant="outline">
                <CalendarCheck aria-hidden="true" />
                Geprüft am {formatDate(guide.pruefdatum)}
              </Badge>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <FavoriteButton guideId={guide.id} />
            </div>

            <div className="mt-6">
              <DeviceCompatibility guide={guide} />
            </div>
          </div>

          {heroImage && <GuideFigure image={heroImage} eager className="mx-auto w-full max-w-sm lg:max-w-none" />}
        </header>

        {guide.warnhinweise.length > 0 && (
          <aside
            aria-label="Wichtige Hinweise"
            className="mt-10 rounded-3xl border-2 border-warning/30 bg-warning/8 p-5 sm:p-6"
          >
            <h2 className="flex items-center gap-2 text-xl text-warning-foreground">
              <TriangleAlert className="size-6" aria-hidden="true" />
              Bitte beachten
            </h2>
            <ul className="mt-3 grid gap-2 text-lg">
              {guide.warnhinweise.map((w) => (
                <li key={w} className="flex gap-2">
                  <span aria-hidden="true" className="mt-3 size-2 shrink-0 rounded-full bg-warning" />
                  {w}
                </li>
              ))}
            </ul>
          </aside>
        )}

        <div className="mt-12">
          <GuideSteps guide={guide} />
        </div>

        {guide.tipps.length > 0 && (
          <aside aria-label="Tipps" className="mt-10 rounded-3xl bg-secondary p-5 sm:p-6">
            <h2 className="flex items-center gap-2 text-xl text-secondary-foreground">
              <Lightbulb className="size-6" aria-hidden="true" />
              Gut zu wissen
            </h2>
            <ul className="mt-3 grid gap-2 text-lg">
              {guide.tipps.map((t) => (
                <li key={t} className="flex gap-2">
                  <span aria-hidden="true" className="mt-3 size-2 shrink-0 rounded-full bg-primary" />
                  {t}
                </li>
              ))}
            </ul>
          </aside>
        )}

        <section aria-labelledby="geraete-titel" className="mt-10 rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-6">
          <h2 id="geraete-titel" className="flex items-center gap-2 text-xl">
            <Smartphone className="size-6 text-primary" aria-hidden="true" />
            Für welche Geräte gilt diese Anleitung?
          </h2>
          <p className="mt-3 text-lg">
            {guide.geraeteSerien.map((s) => seriesLabel[s]).join(", ")} mit One UI {guide.oneUiVersionen.join(", ")}.
          </p>
          <p className="mt-2 text-base text-muted-foreground">
            Ihre Version finden Sie unter „Einstellungen“ › „Telefoninfo“ › „Softwareinformationen“. Je nach Modell und
            Mobilfunkanbieter können einzelne Bezeichnungen leicht abweichen.
          </p>
        </section>
      </article>

      {related.length > 0 && (
        <section aria-labelledby="weitere-titel" className="mt-16">
          <h2 id="weitere-titel" className="mb-5 text-2xl">
            Das könnte Sie auch interessieren
          </h2>
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {related.map((g) => (
              <li key={g.id}>
                <GuideCard guide={g} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </PageContainer>
  );
}

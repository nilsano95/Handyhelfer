import Link from "next/link";
import { ArrowRight, LifeBuoy, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GuideCard } from "@/components/guide/guide-card";
import { CategoryGrid } from "@/components/home/category-grid";
import { DeviceTeaser } from "@/components/home/device-teaser";
import { HelpSection } from "@/components/home/help-section";
import { SearchBox } from "@/components/search/search-box";
import { PageContainer, Section } from "@/components/section";
import { getPopularGuides, guides } from "@/lib/guides";
import { exampleQueries } from "@/lib/search";

const popularTopics = [
  { label: "WhatsApp", href: "/kategorie/nachrichten-und-whatsapp" },
  { label: "WLAN", href: "/anleitung/mit-wlan-verbinden" },
  { label: "Schrift größer", href: "/anleitung/schrift-groesser-machen" },
  { label: "Fotos verschicken", href: "/anleitung/bilder-verschicken-whatsapp" },
  { label: "Lautstärke", href: "/anleitung/lautstaerke-aendern" },
  { label: "Kontakte", href: "/anleitung/kontakt-speichern" },
  { label: "Speicher voll", href: "/anleitung/speicher-voll" },
  { label: "Bildschirmfoto", href: "/anleitung/bildschirmfoto-erstellen" },
];

export default function HomePage() {
  const popular = getPopularGuides(6);

  return (
    <>
      {/* Begrüßung + Suche */}
      <section className="relative overflow-hidden border-b border-border bg-linear-to-b from-secondary via-background to-background">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-[-10rem] size-[32rem] rounded-full bg-primary/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl px-4 pt-12 pb-14 text-center sm:px-6 sm:pt-20 sm:pb-20">
          <p className="mx-auto inline-flex animate-fade-up items-center gap-2 rounded-full bg-card px-4 py-1.5 text-sm font-semibold text-primary shadow-soft">
            <Sparkles className="size-4" aria-hidden="true" />
            {guides.length} Anleitungen in einfacher Sprache
          </p>
          <h1 className="mt-6 animate-fade-up text-4xl sm:text-5xl lg:text-6xl">
            Ihr Samsung-Handy –<br className="hidden sm:block" /> <span className="text-primary">einfach erklärt.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl animate-fade-up text-lg text-muted-foreground sm:text-xl">
            Schön, dass Sie da sind! Hier finden Sie Schritt für Schritt Hilfe zu Ihrem Galaxy-Smartphone. Schreiben Sie
            einfach, wobei Sie Hilfe brauchen.
          </p>

          <SearchBox className="mx-auto mt-8 max-w-3xl text-left" />

          <div className="mt-5 flex flex-wrap justify-center gap-2" aria-label="Beispiele für Suchanfragen">
            <span className="w-full text-base text-muted-foreground sm:w-auto sm:py-2">Zum Beispiel:</span>
            {exampleQueries.slice(0, 4).map((q) => (
              <Link
                key={q}
                href={`/suche?q=${encodeURIComponent(q)}`}
                className="inline-flex min-h-11 items-center rounded-full border border-border bg-card px-4 text-base font-medium hover:border-primary/40 hover:text-primary"
              >
                „{q}“
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageContainer className="pt-0 sm:pt-0">
        <Section id="beliebte-themen" title="Beliebte Themen">
          <ul className="flex flex-wrap gap-3">
            {popularTopics.map((t) => (
              <li key={t.href}>
                <Link
                  href={t.href}
                  className="inline-flex min-h-14 items-center rounded-2xl bg-secondary px-6 text-lg font-semibold text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {t.label}
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="kategorien"
          title="Alle Themen im Überblick"
          intro="Wählen Sie ein Thema – dort finden Sie alle passenden Anleitungen."
        >
          <CategoryGrid />
        </Section>

        <Section
          id="haeufig-gesucht"
          title="Häufig gesuchte Anleitungen"
          action={
            <Button asChild variant="outline">
              <Link href="/kategorien">
                Alle Anleitungen
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          }
        >
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {popular.map((g) => (
              <li key={g.id}>
                <GuideCard guide={g} />
              </li>
            ))}
          </ul>
        </Section>

        <section
          id="hilfe"
          aria-labelledby="hilfe-titel"
          className="mt-16 scroll-mt-28 rounded-[2rem] border border-warning/20 bg-warning/5 p-5 sm:mt-20 sm:p-8 lg:p-10"
        >
          <div className="mb-6 flex items-start gap-4">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-warning text-white">
              <LifeBuoy className="size-7" aria-hidden="true" />
            </span>
            <div>
              <h2 id="hilfe-titel" className="text-2xl sm:text-3xl">
                Hilfe! Was ist passiert?
              </h2>
              <p className="mt-1 text-lg text-muted-foreground">Keine Sorge – tippen Sie einfach an, was gerade los ist.</p>
            </div>
          </div>
          <HelpSection />
        </section>

        <Section id="geraet" title="Welches Handy haben Sie?">
          <div className="rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-8">
            <DeviceTeaser />
          </div>
        </Section>
      </PageContainer>
    </>
  );
}

import type { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageContainer } from "@/components/section";
import { SearchPageClient } from "@/components/search/search-page-client";

export const metadata: Metadata = {
  title: "Suche",
  description: "Durchsuchen Sie alle Anleitungen – auch mit Alltagsbegriffen und kleinen Tippfehlern.",
  alternates: { canonical: "/suche" },
};

export default function SearchPage() {
  return (
    <PageContainer>
      <Breadcrumbs items={[{ label: "Suche" }]} />
      <h1 className="text-3xl sm:text-4xl">Anleitung suchen</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        Schreiben Sie einfach in Ihren eigenen Worten, wobei Sie Hilfe brauchen. Kleine Tippfehler sind kein Problem.
      </p>
      <Suspense fallback={<div className="mt-8 h-16 rounded-2xl bg-muted" aria-hidden="true" />}>
        <SearchPageClient />
      </Suspense>
    </PageContainer>
  );
}

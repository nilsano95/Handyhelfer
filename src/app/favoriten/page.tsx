import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageContainer } from "@/components/section";
import { FavoritesList } from "@/components/guide/favorites-list";

export const metadata: Metadata = {
  title: "Meine Favoriten",
  description: "Ihre gemerkten Anleitungen – gespeichert nur in Ihrem Browser.",
  alternates: { canonical: "/favoriten" },
  robots: { index: false, follow: true },
};

export default function FavoritesPage() {
  return (
    <PageContainer>
      <Breadcrumbs items={[{ label: "Favoriten" }]} />
      <h1 className="text-3xl sm:text-4xl">Meine Favoriten</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        Hier finden Sie alle Anleitungen, die Sie sich gemerkt haben. Sie werden nur auf diesem Gerät in Ihrem Browser
        gespeichert.
      </p>
      <div className="mt-8">
        <FavoritesList />
      </div>
    </PageContainer>
  );
}

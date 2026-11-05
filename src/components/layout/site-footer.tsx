import Link from "next/link";
import { categories } from "@/data/categories";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-card pb-28 md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-extrabold uppercase tracking-wide">Samsung einfach erklärt</p>
          <p className="mt-2 text-muted-foreground">{siteConfig.untertitel}</p>
        </div>
        <div>
          <h2 className="text-base">Themen</h2>
          <ul className="mt-3 grid gap-2 text-base">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/kategorie/${c.slug}`} className="text-muted-foreground hover:text-primary hover:underline">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-base">Gut zu wissen</h2>
          <p className="mt-3 text-base text-muted-foreground">
            Dies ist ein unabhängiges Hilfsangebot und steht in keiner Verbindung zur Samsung Electronics Co., Ltd. „Samsung“
            und „Galaxy“ sind Marken ihrer jeweiligen Inhaber. Bezeichnungen in den Menüs können je nach Modell und
            Software-Version leicht abweichen.
          </p>
          <p className="mt-3 text-base text-muted-foreground">
            Abbildungen sind vereinfachte Illustrationen und keine echten Bildschirmfotos.
          </p>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-sm text-muted-foreground">
        © {siteConfig.name} · Ihre Favoriten und Ihr Gerät werden nur in Ihrem Browser gespeichert.
      </div>
    </footer>
  );
}

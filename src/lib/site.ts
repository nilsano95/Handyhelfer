export const siteConfig = {
  name: "Samsung einfach erklärt",
  untertitel: "Das digitale Nachschlagewerk für Eltern.",
  beschreibung:
    "Einfache Schritt-für-Schritt-Anleitungen für Samsung-Galaxy-Smartphones – in klarer Sprache, mit großer Schrift und ohne Fachchinesisch.",
  /** Wird über die Umgebungsvariable NEXT_PUBLIC_SITE_URL in Vercel überschrieben. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://samsung-einfach-erklaert.vercel.app").replace(/\/$/, ""),
  locale: "de_DE",
} as const;

export const mainNav = [
  { href: "/", label: "Start" },
  { href: "/kategorien", label: "Themen" },
  { href: "/suche", label: "Suche" },
  { href: "/favoriten", label: "Favoriten" },
  { href: "/mein-geraet", label: "Mein Gerät" },
] as const;

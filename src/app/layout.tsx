import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { BottomNav } from "@/components/layout/bottom-nav";
import { siteConfig } from "@/lib/site";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} – ${siteConfig.untertitel}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.beschreibung,
  applicationName: siteConfig.name,
  keywords: ["Samsung", "Galaxy", "Anleitung", "Handy", "Smartphone", "Senioren", "Eltern", "einfach erklärt", "One UI"],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.beschreibung,
    url: "/",
  },
  twitter: {
    card: "summary",
    title: siteConfig.name,
    description: siteConfig.beschreibung,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1d5bc7",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="de">
      <body className="flex min-h-dvh flex-col">
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-xl focus:bg-primary focus:px-4 focus:py-3 focus:text-primary-foreground"
        >
          Zum Inhalt springen
        </a>
        <SiteHeader />
        <main id="inhalt" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <BottomNav />
      </body>
    </html>
  );
}

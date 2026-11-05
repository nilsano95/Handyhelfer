import Link from "next/link";
import { Smartphone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { DesktopNav } from "./desktop-nav";
import { MobileMenu } from "./mobile-menu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20">
        <Link href="/" className="flex items-center gap-3 rounded-xl py-1" aria-label={`${siteConfig.name} – zur Startseite`}>
          <span className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm lg:size-12">
            <Smartphone className="size-6" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-extrabold uppercase tracking-wide text-foreground sm:text-lg">Samsung einfach erklärt</span>
            <span className="hidden text-sm text-muted-foreground sm:block">{siteConfig.untertitel}</span>
          </span>
        </Link>
        <DesktopNav />
        <MobileMenu />
      </div>
    </header>
  );
}

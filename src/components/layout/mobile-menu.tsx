"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/categories";
import { CategoryIcon } from "@/components/category-icon";
import { cn } from "@/lib/utils";
import { isActive, navItems } from "./nav-items";

/** Ausklappbares Menü für Smartphone und Tablet (Hochformat). */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <Button
        variant="outline"
        size="icon"
        aria-expanded={open}
        aria-controls="mobiles-menue"
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </Button>

      {open && (
        <div
          id="mobiles-menue"
          className="fixed inset-x-0 top-18 bottom-0 z-50 animate-fade-in overflow-y-auto border-t border-border bg-background px-4 pb-32 pt-6 sm:px-6"
        >
          <nav aria-label="Menü" className="mx-auto max-w-2xl">
            <ul className="grid gap-2 sm:grid-cols-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={close}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex min-h-16 items-center gap-4 rounded-2xl border-2 px-5 text-lg font-semibold",
                        active ? "border-primary bg-primary/10 text-primary" : "border-border bg-card",
                      )}
                    >
                      <Icon className="size-6" aria-hidden="true" />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <h2 className="mt-8 mb-3 text-lg">Alle Themen</h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/kategorie/${c.slug}`}
                    onClick={close}
                    className="flex min-h-14 items-center gap-3 rounded-2xl px-4 text-base font-medium hover:bg-accent"
                  >
                    <CategoryIcon name={c.icon} className="size-6 text-primary" />
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

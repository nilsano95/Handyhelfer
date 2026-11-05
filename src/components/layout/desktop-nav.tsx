"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { isActive, navItems } from "./nav-items";

/** Hauptnavigation für Tablet (Querformat) und Desktop. */
export function DesktopNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Hauptnavigation" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {navItems.map((item) => {
          const active = isActive(pathname, item.href);
          const Icon = item.icon;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex min-h-12 items-center gap-2 rounded-2xl px-4 text-base font-semibold transition-colors",
                  active ? "bg-primary/10 text-primary" : "text-foreground hover:bg-accent",
                )}
              >
                <Icon className="size-5" aria-hidden="true" />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

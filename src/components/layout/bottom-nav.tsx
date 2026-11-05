"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { isActive, navItems } from "./nav-items";

/**
 * Feste Navigationsleiste am unteren Rand – nur auf dem Smartphone.
 * Große Flächen, gut mit dem Daumen erreichbar.
 */
export function BottomNav() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Schnellnavigation"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
    >
      <ul className="grid grid-cols-5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex min-h-16 flex-col items-center justify-center gap-1 px-1 text-[0.8rem] font-semibold leading-none",
                  active ? "text-primary" : "text-muted-foreground",
                )}
              >
                <span className={cn("flex h-8 w-12 items-center justify-center rounded-full transition-colors", active && "bg-primary/12")}>
                  <Icon className="size-6" aria-hidden="true" strokeWidth={active ? 2.4 : 1.9} />
                </span>
                {item.shortLabel ?? item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

import Link from "next/link";
import { HardDrive, Signal, RotateCw, Snowflake, Type, Volume2, WifiOff, type LucideIcon } from "lucide-react";

interface HelpItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

const helpItems: HelpItem[] = [
  { label: "Das Handy reagiert nicht mehr", href: "/anleitung/handy-reagiert-nicht", icon: Snowflake },
  { label: "Der Speicher ist voll", href: "/anleitung/speicher-voll", icon: HardDrive },
  { label: "Kein Internet / WLAN geht nicht", href: "/anleitung/mit-wlan-verbinden", icon: WifiOff },
  { label: "Ich höre nichts – zu leise", href: "/anleitung/lautstaerke-aendern", icon: Volume2 },
  { label: "Die Schrift ist zu klein", href: "/anleitung/schrift-groesser-machen", icon: Type },
  { label: "Der Bildschirm dreht sich nicht", href: "/anleitung/bildschirm-dreht-sich-nicht", icon: RotateCw },
  { label: "Unterwegs kein Internet", href: "/anleitung/mobile-daten-einschalten", icon: Signal },
];

export function HelpSection() {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {helpItems.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className="flex min-h-18 items-center gap-4 rounded-2xl border border-warning/25 bg-card px-5 py-4 text-lg font-semibold shadow-soft transition-all hover:-translate-y-0.5 hover:border-warning/50 hover:shadow-lift"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-warning/12 text-warning">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

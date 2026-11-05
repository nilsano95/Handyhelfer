import { Heart, House, LayoutGrid, Search, Smartphone, type LucideIcon } from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  /** Kurzform für die untere Leiste auf dem Smartphone */
  shortLabel?: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { href: "/", label: "Start", icon: House },
  { href: "/kategorien", label: "Themen", icon: LayoutGrid },
  { href: "/suche", label: "Suche", icon: Search },
  { href: "/favoriten", label: "Favoriten", icon: Heart },
  { href: "/mein-geraet", label: "Mein Gerät", shortLabel: "Gerät", icon: Smartphone },
];

export function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  if (href === "/kategorien") return pathname.startsWith("/kategorie");
  return pathname.startsWith(href);
}

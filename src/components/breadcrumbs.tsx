import Link from "next/link";
import { ChevronRight, House } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Sie sind hier" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-base text-muted-foreground">
        <li>
          <Link href="/" className="flex min-h-10 items-center gap-1.5 rounded-lg px-1 hover:text-primary">
            <House className="size-4" aria-hidden="true" />
            Start
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight className="size-4" aria-hidden="true" />
            {item.href ? (
              <Link href={item.href} className="flex min-h-10 items-center rounded-lg px-1 hover:text-primary">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="px-1 font-semibold text-foreground">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

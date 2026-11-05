import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
  action?: ReactNode;
}

export function Section({ id, title, intro, children, className, action }: SectionProps) {
  const headingId = id ? `${id}-titel` : undefined;
  return (
    <section id={id} aria-labelledby={headingId} className={cn("mt-16 scroll-mt-28 sm:mt-20", className)}>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 id={headingId} className="text-2xl sm:text-3xl">
            {title}
          </h2>
          {intro && <p className="mt-2 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

export function PageContainer({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4 pt-8 sm:px-6 sm:pt-12", className)}>{children}</div>;
}

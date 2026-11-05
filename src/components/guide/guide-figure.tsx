import Image from "next/image";
import { ImageIcon } from "lucide-react";
import type { GuideImage } from "@/types";
import { cn } from "@/lib/utils";

const kindLabel: Record<GuideImage["art"], string> = {
  screenshot: "Bildschirmfoto",
  illustration: "Illustration – kein echtes Bildschirmfoto",
  platzhalter: "Platzhalter – Bild folgt",
};

/** Zeigt ein Bild mit gut sichtbarer Kennzeichnung und Bildbeschreibung. */
export function GuideFigure({ image, className, eager }: { image: GuideImage; className?: string; eager?: boolean }) {
  return (
    <figure className={cn("overflow-hidden rounded-3xl border border-border bg-card shadow-soft", className)}>
      <div className="relative flex justify-center bg-linear-to-b from-secondary/70 to-card px-6 pt-6">
        <Image
          src={image.src}
          alt={image.alt}
          width={360}
          height={420}
          unoptimized
          loading={eager ? "eager" : "lazy"}
          className="h-auto w-full max-w-[18rem]"
        />
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-card/95 px-3 py-1 text-xs font-semibold text-muted-foreground shadow-sm">
          <ImageIcon className="size-4" aria-hidden="true" />
          {kindLabel[image.art]}
        </span>
      </div>
      <figcaption className="border-t border-border px-5 py-4 text-base text-muted-foreground">{image.beschreibung}</figcaption>
    </figure>
  );
}

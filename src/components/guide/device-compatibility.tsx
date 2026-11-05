"use client";

import Link from "next/link";
import { CircleCheck, Smartphone, TriangleAlert } from "lucide-react";
import { useDevice } from "@/hooks/use-device";
import { isGuideCompatible } from "@/lib/guides";
import type { Guide } from "@/types";

/** Zeigt an, ob die Anleitung zum ausgewählten Gerät passt. */
export function DeviceCompatibility({ guide }: { guide: Guide }) {
  const { device, ready } = useDevice();

  if (!ready) {
    return <div className="h-16 rounded-2xl bg-muted/60" aria-hidden="true" />;
  }

  if (!device) {
    return (
      <Link
        href="/mein-geraet"
        className="flex min-h-16 items-center gap-3 rounded-2xl border-2 border-dashed border-border px-5 py-3 text-base hover:border-primary/40 hover:bg-accent"
      >
        <Smartphone className="size-6 shrink-0 text-primary" aria-hidden="true" />
        <span>
          <strong>Tipp:</strong> Wählen Sie Ihr Handy-Modell aus, dann sehen Sie, ob diese Anleitung passt.
        </span>
      </Link>
    );
  }

  const ok = isGuideCompatible(guide, device);
  return ok ? (
    <p className="flex min-h-16 items-center gap-3 rounded-2xl bg-success/10 px-5 py-3 text-base text-success">
      <CircleCheck className="size-6 shrink-0" aria-hidden="true" />
      <span>
        Passt zu Ihrem <strong>{device.name}</strong>.{" "}
        <Link href="/mein-geraet" className="underline underline-offset-2">
          Ändern
        </Link>
      </span>
    </p>
  ) : (
    <p className="flex min-h-16 items-center gap-3 rounded-2xl bg-warning/12 px-5 py-3 text-base text-warning-foreground">
      <TriangleAlert className="size-6 shrink-0" aria-hidden="true" />
      <span>
        Diese Anleitung wurde für Ihr <strong>{device.name}</strong> noch nicht geprüft. Die Schritte können abweichen.
      </span>
    </p>
  );
}

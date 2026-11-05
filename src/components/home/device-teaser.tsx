"use client";

import Link from "next/link";
import { ChevronRight, Smartphone } from "lucide-react";
import { devices } from "@/data/devices";
import { useDevice } from "@/hooks/use-device";
import { cn } from "@/lib/utils";

/** Kompakte Gerätemodellauswahl für die Startseite. */
export function DeviceTeaser() {
  const { device, setDevice, ready } = useDevice();

  return (
    <div className="grid gap-5">
      <p className="text-lg text-muted-foreground">
        {ready && device ? (
          <>
            Ausgewählt: <strong className="text-foreground">{device.name}</strong>. Bei jeder Anleitung sehen Sie, ob sie zu
            Ihrem Gerät passt.
          </>
        ) : (
          "Welches Samsung-Handy haben Sie? Tippen Sie auf Ihr Modell."
        )}
      </p>
      <div className="flex flex-wrap gap-2">
        {devices.slice(0, 7).map((d) => {
          const selected = ready && device?.id === d.id;
          return (
            <button
              key={d.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setDevice(d.id)}
              className={cn(
                "min-h-12 rounded-full border-2 px-5 text-base font-semibold transition-colors",
                selected ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary/40",
              )}
            >
              {d.name.split(" / ")[0]}
            </button>
          );
        })}
        <Link
          href="/mein-geraet"
          className="flex min-h-12 items-center gap-1 rounded-full px-4 text-base font-semibold text-primary hover:bg-accent"
        >
          <Smartphone className="size-5" aria-hidden="true" />
          Alle Modelle
          <ChevronRight className="size-5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

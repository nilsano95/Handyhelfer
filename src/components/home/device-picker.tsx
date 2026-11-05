"use client";

import { Check, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { devices, seriesLabel } from "@/data/devices";
import { useDevice } from "@/hooks/use-device";
import { cn } from "@/lib/utils";
import type { DeviceSeries } from "@/types";

const seriesOrder: DeviceSeries[] = ["galaxy-s", "galaxy-a", "galaxy-z"];

/** Auswahl des eigenen Samsung-Modells (wird im Browser gespeichert). */
export function DevicePicker({ compact = false }: { compact?: boolean }) {
  const { device, setDevice, ready } = useDevice();

  return (
    <div className="grid gap-6">
      <div
        className="flex min-h-16 flex-col gap-3 rounded-2xl bg-secondary px-5 py-4 text-secondary-foreground sm:flex-row sm:items-center sm:justify-between"
        aria-live="polite"
      >
        <span className="flex items-center gap-3 text-lg">
          <Smartphone className="size-6 shrink-0" aria-hidden="true" />
          {ready && device ? (
            <span>
              Ihr Gerät: <strong>{device.name}</strong>
            </span>
          ) : (
            <span>Noch kein Gerät ausgewählt.</span>
          )}
        </span>
        {ready && device && (
          <Button variant="outline" size="sm" onClick={() => setDevice(null)}>
            Auswahl löschen
          </Button>
        )}
      </div>

      {seriesOrder.map((serie) => {
        const list = devices.filter((d) => d.serie === serie);
        return (
          <fieldset key={serie}>
            <legend className="mb-3 text-lg font-bold">{seriesLabel[serie]}</legend>
            <div className={cn("grid gap-3 sm:grid-cols-2", !compact && "lg:grid-cols-3")}>
              {list.map((d) => {
                const selected = ready && device?.id === d.id;
                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setDevice(d.id)}
                    aria-pressed={selected}
                    className={cn(
                      "flex min-h-16 items-center justify-between gap-3 rounded-2xl border-2 bg-card px-5 py-3 text-left text-base font-semibold transition-all",
                      selected ? "border-primary bg-primary/8 text-primary shadow-soft" : "border-border hover:border-primary/40",
                    )}
                  >
                    <span>
                      {d.name}
                      <span className="block text-sm font-normal text-muted-foreground">
                        One UI {d.oneUiVersionen.join(", ")}
                      </span>
                    </span>
                    {selected && <Check className="size-6 shrink-0" aria-hidden="true" />}
                  </button>
                );
              })}
            </div>
          </fieldset>
        );
      })}
    </div>
  );
}

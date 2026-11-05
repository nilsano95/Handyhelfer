"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Info, List, PartyPopper, Play, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GuideFigure } from "@/components/guide/guide-figure";
import type { Guide } from "@/types";
import { cn } from "@/lib/utils";

type Mode = "liste" | "schritt";

/**
 * Handlungsschritte einer Anleitung – wahlweise als Liste oder
 * im Schritt-für-Schritt-Modus mit großen Weiter-/Zurück-Schaltflächen.
 */
export function GuideSteps({ guide }: { guide: Guide }) {
  const [mode, setMode] = useState<Mode>("liste");
  const [current, setCurrent] = useState(0);
  const [done, setDone] = useState(false);
  const total = guide.schritte.length;

  function startStepMode() {
    setCurrent(0);
    setDone(false);
    setMode("schritt");
  }

  return (
    <section aria-labelledby="schritte-titel" className="scroll-mt-28" id="schritte">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 id="schritte-titel" className="text-2xl sm:text-3xl">
          So geht&apos;s – in {total} Schritten
        </h2>
        <div className="flex gap-2 rounded-2xl bg-muted p-1.5" role="group" aria-label="Darstellung wählen">
          <Button
            variant={mode === "liste" ? "default" : "ghost"}
            size="sm"
            className="min-h-11 flex-1 sm:flex-none"
            aria-pressed={mode === "liste"}
            onClick={() => setMode("liste")}
          >
            <List aria-hidden="true" />
            Alle Schritte
          </Button>
          <Button
            variant={mode === "schritt" ? "default" : "ghost"}
            size="sm"
            className="min-h-11 flex-1 sm:flex-none"
            aria-pressed={mode === "schritt"}
            onClick={startStepMode}
          >
            <Play aria-hidden="true" />
            Schritt für Schritt
          </Button>
        </div>
      </div>

      {mode === "liste" ? (
        <ol className="grid gap-4">
          {guide.schritte.map((step, index) => (
            <li key={index} className="flex gap-4 rounded-3xl border border-border bg-card p-5 shadow-soft sm:gap-5 sm:p-6">
              <span
                className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-primary-foreground"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl">
                  <span className="sr-only">Schritt {index + 1}: </span>
                  {step.titel}
                </h3>
                <p className="mt-1.5 text-lg">{step.text}</p>
                {step.hinweis && <StepHint text={step.hinweis} />}
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <div className="animate-fade-in rounded-3xl border-2 border-primary/25 bg-card p-5 shadow-lift sm:p-8">
          {done ? (
            <div className="flex flex-col items-center gap-5 py-8 text-center">
              <span className="flex size-20 items-center justify-center rounded-full bg-success/12 text-success">
                <PartyPopper className="size-10" aria-hidden="true" />
              </span>
              <h3 className="text-3xl">Geschafft!</h3>
              <p className="max-w-md text-lg text-muted-foreground">Sie haben alle {total} Schritte erledigt. Sehr gut gemacht.</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" variant="outline" onClick={startStepMode}>
                  <RotateCcw aria-hidden="true" />
                  Noch einmal
                </Button>
                <Button size="lg" onClick={() => setMode("liste")}>
                  <List aria-hidden="true" />
                  Alle Schritte ansehen
                </Button>
              </div>
            </div>
          ) : (
            <StepView guide={guide} index={current} />
          )}

          {!done && (
            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
              <Button
                size="lg"
                variant="outline"
                onClick={() => setCurrent((c) => Math.max(0, c - 1))}
                disabled={current === 0}
                className="w-full sm:w-auto"
              >
                <ArrowLeft aria-hidden="true" />
                Zurück
              </Button>
              {current < total - 1 ? (
                <Button size="lg" onClick={() => setCurrent((c) => Math.min(total - 1, c + 1))} className="w-full sm:w-auto">
                  Weiter
                  <ArrowRight aria-hidden="true" />
                </Button>
              ) : (
                <Button size="lg" onClick={() => setDone(true)} className="w-full bg-success hover:bg-success/90 sm:w-auto">
                  <Check aria-hidden="true" />
                  Fertig
                </Button>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

function StepView({ guide, index }: { guide: Guide; index: number }) {
  const step = guide.schritte[index];
  const total = guide.schritte.length;
  const image = step.bild !== undefined ? guide.bilder[step.bild] : undefined;
  const progress = Math.round(((index + 1) / total) * 100);

  return (
    <div key={index} className="animate-fade-up" aria-live="polite">
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between text-base font-semibold">
          <span className="text-primary">
            Schritt {index + 1} von {total}
          </span>
          <span className="text-muted-foreground">{progress} %</span>
        </div>
        <div
          className="h-3 overflow-hidden rounded-full bg-muted"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={total}
          aria-valuenow={index + 1}
          aria-label="Fortschritt"
        >
          <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className={cn("grid gap-6", image && "md:grid-cols-[1fr_18rem] md:items-start")}>
        <div>
          <h3 className="text-2xl sm:text-3xl">{step.titel}</h3>
          <p className="mt-3 text-xl leading-relaxed">{step.text}</p>
          {step.hinweis && <StepHint text={step.hinweis} />}
        </div>
        {image && <GuideFigure image={image} />}
      </div>
    </div>
  );
}

function StepHint({ text }: { text: string }) {
  return (
    <p className="mt-3 flex gap-2 rounded-2xl bg-secondary px-4 py-3 text-base text-secondary-foreground">
      <Info className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
      <span>{text}</span>
    </p>
  );
}

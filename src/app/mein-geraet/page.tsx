import type { Metadata } from "next";
import { Info } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageContainer } from "@/components/section";
import { DevicePicker } from "@/components/home/device-picker";

export const metadata: Metadata = {
  title: "Mein Gerät",
  description: "Wählen Sie Ihr Samsung-Galaxy-Modell aus, um passende Anleitungen zu erkennen.",
  alternates: { canonical: "/mein-geraet" },
};

export default function DevicePage() {
  return (
    <PageContainer>
      <Breadcrumbs items={[{ label: "Mein Gerät" }]} />
      <h1 className="text-3xl sm:text-4xl">Welches Samsung-Handy haben Sie?</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        Tippen Sie auf Ihr Modell. Bei jeder Anleitung sehen Sie dann, ob sie zu Ihrem Gerät passt. Die Auswahl wird nur
        in Ihrem Browser gespeichert.
      </p>

      <div className="mt-6 flex max-w-3xl gap-3 rounded-2xl border border-border bg-card p-5 text-base shadow-soft">
        <Info className="mt-0.5 size-6 shrink-0 text-primary" aria-hidden="true" />
        <p>
          <strong>So finden Sie Ihr Modell:</strong> Öffnen Sie „Einstellungen“ und tippen Sie ganz unten auf „Telefoninfo“.
          Dort steht der Modellname. Unter „Softwareinformationen“ sehen Sie die One-UI-Version.
        </p>
      </div>

      <div className="mt-10">
        <DevicePicker />
      </div>
    </PageContainer>
  );
}

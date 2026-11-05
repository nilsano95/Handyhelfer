import type { DeviceModel } from "@/types";

/**
 * Auswahl gängiger Samsung-Galaxy-Modelle.
 * `oneUiVersionen` nennt nur die One-UI-Hauptversionen ab 6, die für das
 * jeweilige Modell erschienen sind (Stand der Prüfung: siehe README).
 * Vor Erweiterungen bitte mit den offiziellen Samsung-Update-Informationen abgleichen.
 */
export const devices: DeviceModel[] = [
  { id: "galaxy-s25", name: "Galaxy S25 / S25+ / S25 Ultra", serie: "galaxy-s", oneUiVersionen: ["7", "8"] },
  { id: "galaxy-s24", name: "Galaxy S24 / S24+ / S24 Ultra", serie: "galaxy-s", oneUiVersionen: ["6", "7", "8"] },
  { id: "galaxy-s23", name: "Galaxy S23 / S23+ / S23 Ultra", serie: "galaxy-s", oneUiVersionen: ["6", "7", "8"] },
  { id: "galaxy-a56", name: "Galaxy A56", serie: "galaxy-a", oneUiVersionen: ["7", "8"] },
  { id: "galaxy-a55", name: "Galaxy A55", serie: "galaxy-a", oneUiVersionen: ["6", "7", "8"] },
  { id: "galaxy-a36", name: "Galaxy A36", serie: "galaxy-a", oneUiVersionen: ["7", "8"] },
  { id: "galaxy-a35", name: "Galaxy A35", serie: "galaxy-a", oneUiVersionen: ["6", "7", "8"] },
  { id: "galaxy-a25", name: "Galaxy A25", serie: "galaxy-a", oneUiVersionen: ["6", "7", "8"] },
  { id: "galaxy-a15", name: "Galaxy A15", serie: "galaxy-a", oneUiVersionen: ["6", "7", "8"] },
  { id: "galaxy-z-flip6", name: "Galaxy Z Flip6", serie: "galaxy-z", oneUiVersionen: ["6", "7", "8"] },
  { id: "galaxy-z-fold6", name: "Galaxy Z Fold6", serie: "galaxy-z", oneUiVersionen: ["6", "7", "8"] },
];

export function getDevice(id: string | null | undefined): DeviceModel | undefined {
  if (!id) return undefined;
  return devices.find((d) => d.id === id);
}

export const seriesLabel: Record<DeviceModel["serie"], string> = {
  "galaxy-s": "Galaxy S-Serie",
  "galaxy-a": "Galaxy A-Serie",
  "galaxy-z": "Galaxy Z-Serie (Klapphandys)",
};

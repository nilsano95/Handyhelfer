import { categories } from "@/data/categories";
import { rawGuides } from "@/data/guides";
import { guideSchema } from "@/lib/schema";
import type { CategorySlug, DeviceModel, Guide } from "@/types";

/**
 * Prüft alle Anleitungen beim Laden mit Zod. Fehlerhafte Inhalte führen
 * schon beim Build zu einer verständlichen Fehlermeldung.
 */
function validateGuides(list: Guide[]): Guide[] {
  const ids = new Set<string>();
  const slugs = new Set<string>();
  for (const guide of list) {
    const result = guideSchema.safeParse(guide);
    if (!result.success) {
      throw new Error(
        `Anleitung "${guide.id}" ist ungültig: ${result.error.issues
          .map((i) => `${i.path.join(".")}: ${i.message}`)
          .join("; ")}`,
      );
    }
    if (ids.has(guide.id)) throw new Error(`Doppelte Anleitungs-ID: ${guide.id}`);
    if (slugs.has(guide.slug)) throw new Error(`Doppelter Anleitungs-Slug: ${guide.slug}`);
    ids.add(guide.id);
    slugs.add(guide.slug);
  }
  return list;
}

export const guides: Guide[] = validateGuides(rawGuides);

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getGuideById(id: string): Guide | undefined {
  return guides.find((g) => g.id === id);
}

export function getGuidesByCategory(slug: CategorySlug): Guide[] {
  return guides.filter((g) => g.kategorie === slug);
}

export function getPopularGuides(limit = 6): Guide[] {
  return guides.filter((g) => g.beliebt).slice(0, limit);
}

export function getProblemGuides(): Guide[] {
  return getGuidesByCategory("probleme-loesen");
}

export function getRelatedGuides(guide: Guide, limit = 3): Guide[] {
  return guides.filter((g) => g.kategorie === guide.kategorie && g.id !== guide.id).slice(0, limit);
}

export function countByCategory(): Record<CategorySlug, number> {
  const counts = Object.fromEntries(categories.map((c) => [c.slug, 0])) as Record<CategorySlug, number>;
  for (const g of guides) counts[g.kategorie] += 1;
  return counts;
}

/** Passt eine Anleitung zu einem ausgewählten Gerät? */
export function isGuideCompatible(guide: Guide, device: DeviceModel): boolean {
  return (
    guide.geraeteSerien.includes(device.serie) &&
    guide.oneUiVersionen.some((v) => device.oneUiVersionen.includes(v))
  );
}

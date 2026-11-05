import { z } from "zod";

export const categorySlugSchema = z.enum([
  "erste-schritte",
  "telefonieren-und-kontakte",
  "nachrichten-und-whatsapp",
  "kamera-und-fotos",
  "internet-und-wlan",
  "einstellungen",
  "apps-und-anwendungen",
  "probleme-loesen",
]);

export const guideImageSchema = z.object({
  src: z.string().startsWith("/images/"),
  alt: z.string().min(5),
  beschreibung: z.string().min(10),
  art: z.enum(["screenshot", "illustration", "platzhalter"]),
});

export const guideStepSchema = z.object({
  titel: z.string().min(3),
  text: z.string().min(10),
  bild: z.number().int().nonnegative().optional(),
  hinweis: z.string().optional(),
});

export const guideSchema = z
  .object({
    id: z.string().regex(/^[a-z0-9-]+$/),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    titel: z.string().min(5),
    beschreibung: z.string().min(20),
    kategorie: categorySlugSchema,
    keywords: z.array(z.string().min(2)).min(3),
    synonyme: z.array(z.string().min(2)),
    probleme: z.array(z.string().min(3)),
    schwierigkeit: z.enum(["leicht", "mittel", "anspruchsvoll"]),
    dauerMinuten: z.number().int().positive().max(60),
    geraeteSerien: z.array(z.enum(["galaxy-s", "galaxy-a", "galaxy-z"])).min(1),
    oneUiVersionen: z.array(z.enum(["6", "7", "8"])).min(1),
    schritte: z.array(guideStepSchema).min(2),
    bilder: z.array(guideImageSchema).min(1),
    tipps: z.array(z.string().min(5)),
    warnhinweise: z.array(z.string().min(5)),
    pruefdatum: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    beliebt: z.boolean().optional(),
  })
  .refine(
    (g) => g.schritte.every((s) => s.bild === undefined || s.bild < g.bilder.length),
    { message: "Ein Schritt verweist auf ein Bild, das nicht existiert." },
  );

export const deviceModelSchema = z.object({
  id: z.string(),
  name: z.string(),
  serie: z.enum(["galaxy-s", "galaxy-a", "galaxy-z"]),
  oneUiVersionen: z.array(z.enum(["6", "7", "8"])).min(1),
});

/** Gespeicherte Favoriten im Browser (localStorage). */
export const favoritesStorageSchema = z.array(z.string()).max(500);

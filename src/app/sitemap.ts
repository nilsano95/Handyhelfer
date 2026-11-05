import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { guides } from "@/lib/guides";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticPages: MetadataRoute.Sitemap = ["", "/kategorien", "/suche", "/mein-geraet"].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.6,
  }));
  const categoryPages: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${base}/kategorie/${c.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));
  const guidePages: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${base}/anleitung/${g.slug}`,
    lastModified: g.pruefdatum,
    changeFrequency: "monthly",
    priority: 0.9,
  }));
  return [...staticPages, ...categoryPages, ...guidePages];
}

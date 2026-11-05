# Samsung einfach erklärt

**Das digitale Nachschlagewerk für Eltern.**

Eine Web-App mit Schritt-für-Schritt-Anleitungen für Samsung-Galaxy-Smartphones – in einfacher Sprache, mit großer Schrift, großen Touch-Flächen und klarer Navigation. Gebaut für Menschen, die wenig Erfahrung mit Technik haben.

## Funktionen

- **Startseite** mit Begrüßung, prominenter Suche, beliebten Themen, acht Kategorien, häufig gesuchten Anleitungen, Bereich „Hilfe! Was ist passiert?“ und Gerätemodellauswahl
- **Stichwortsuche (Fuse.js)** mit Live-Vorschlägen, Tippfehler-Toleranz, Synonymen und Alltagsformulierungen („Handy lauter machen“, „Speicher voll“ …), Gruppierung nach Kategorien und verständlicher Anzeige ohne Treffer
- **8 Kategorien** mit eigener Seite (`/kategorie/<slug>`)
- **17 vollständige Anleitungen** mit eigener URL (`/anleitung/<slug>`)
- **Schritt-für-Schritt-Modus** mit Fortschrittsbalken und großen Weiter-/Zurück-Schaltflächen
- **Favoriten** und **Modellauswahl** – nur lokal im Browser gespeichert (localStorage), keine Datenbank
- **Responsive Layouts**: Smartphone (untere Navigationsleiste), Tablet (Menü-Schaltfläche, zweispaltig), Desktop (obere Navigation, dreispaltig)
- **SEO**: Metadaten je Seite, Open Graph, `sitemap.xml`, `robots.txt`, strukturierte Daten (schema.org `HowTo`)
- **Barrierearm**: 18 px Grundschrift, hohe Kontraste, Fokus-Rahmen, „Zum Inhalt springen“, reduzierte Animationen bei entsprechender Systemeinstellung

## Technik

Next.js (App Router) · React · TypeScript · Tailwind CSS 4 · shadcn/ui-Komponenten · Lucide React · Fuse.js · Zod. Vollständig statisch erzeugbar und mit Vercel kompatibel.

## Projektstruktur

```
src/
  app/            Seiten (App Router), Layout, globale Styles, Sitemap, robots
  components/     UI-Bausteine (ui/ = shadcn/ui), Layout, Suche, Anleitung, Startseite
  data/           Inhalte: Kategorien, Geräte, Anleitungen (data/guides/*.ts)
  hooks/          Favoriten, Gerät, Suche, localStorage
  lib/            Suche, Zod-Schemas, Hilfsfunktionen, Seitenkonfiguration
  types/          TypeScript-Typen
public/images/    Illustrationen je Anleitung, Ordner für echte Screenshots
```

## Neue Anleitung hinzufügen

1. In `src/data/guides/` die passende Kategorie-Datei öffnen.
2. Einen neuen Eintrag nach dem Muster der bestehenden Anleitungen ergänzen (ID, Slug, Titel, Schritte, Keywords, Synonyme, Probleme, Bilder …).
3. Bild in `public/images/anleitungen/<slug>/` ablegen.
4. Beim Build prüft Zod automatisch, ob alle Pflichtfelder stimmen.

Die Anleitung erscheint danach automatisch in Suche, Kategorie, Sitemap und unter eigener URL.

## Lokal starten (optional, nur für Entwickler)

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Produktionsbuild
npm run lint       # ESLint
npm run typecheck  # TypeScript
```

Voraussetzung: Node.js 20.9 oder neuer.

## Umgebungsvariable (optional)

`NEXT_PUBLIC_SITE_URL` – die endgültige Adresse der Seite (z. B. `https://meine-domain.de`). Wird für Sitemap und Suchmaschinen-Links genutzt. Ohne Angabe wird `https://samsung-einfach-erklaert.vercel.app` verwendet.

## Inhaltliche Hinweise

- Menüpfade beziehen sich auf One UI 6 bis 8 (deutsche Menüsprache). Je nach Modell, Anbieter und Update können Bezeichnungen leicht abweichen. Jede Anleitung trägt ein Prüfdatum.
- Alle Abbildungen sind **als Illustration gekennzeichnete Schemazeichnungen**, keine echten Samsung-Bildschirmfotos.
- Unabhängiges Angebot, keine Verbindung zu Samsung. „Samsung“ und „Galaxy“ sind Marken der Samsung Electronics Co., Ltd.

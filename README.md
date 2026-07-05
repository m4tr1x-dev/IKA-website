# Bar IKA — oficjalna strona internetowa

Oficjalne repozytorium kodu strony internetowej **Baru IKA** w Niechorzu — rodzinnej smażalni ryb tuż przy plaży i pod latarnią morską nad Bałtykiem.

> **Status:** projekt ukończony — strona opublikowana na żywo. ✅
>
> 🌐 **[m4tr1x-dev.github.io/IKA-website](https://m4tr1x-dev.github.io/IKA-website/)**

## O projekcie

Bar IKA to rodzinna smażalnia ryb dziesięć metrów od morza i 250 metrów od latarni w Niechorzu — świeże ryby prosto z patelni (dorsz, sandacz, halibut), ryby zapiekane, domowe pierogi, owoce morza i regionalne piwo. Prosto, świeżo i bez kombinowania.

- **Adres:** ul. Starowiejska 3A, 72-350 Niechorze
- **Telefon:** [601 366 921](tel:+48601366921)
- **Facebook:** [/ikaniechorze](https://www.facebook.com/ikaniechorze)

Strona jest lekka, szybka i responsywna (mobile-first), zbudowana jako pojedyncza strona statyczna i hostowana na **GitHub Pages**.

## Stack

- **Frontend:** HTML5 + CSS (zewnętrzny arkusz, zmienne CSS, klasy BEM) — bez frameworków i bez kroku budowania
- **JavaScript:** minimalny, progresywny (`assets/js/map.js`) — wyłącznie do ładowania mapy Google za zgodą użytkownika (RODO) i aktualizacji roku w stopce; strona działa w pełni bez JS
- **Fonty:** Bricolage Grotesque, Instrument Sans, Caveat — **self-hosted** (woff2, subsety latin + latin-ext), bez zapytań do serwerów Google (RODO)
- **Hosting:** GitHub Pages (treść statyczna, `.nojekyll`)

## SEO, dostępność i bezpieczeństwo

- Pełne meta dane: `title`, `description`, canonical, Open Graph + Twitter Card (dedykowany obraz `og-image.jpg` 1200×630)
- Dane strukturalne **JSON-LD `Restaurant`** (adres, godziny otwarcia, telefon, kuchnia) — zasilają wizytówkę Google
- `robots.txt`, `sitemap.xml`, `404.html`, favicony (SVG + PNG + apple-touch-icon), `site.webmanifest`
- Dostępność: `lang="pl"`, skip-link, landmarki i semantyczny HTML (`main`, `address`, `figure`/`blockquote` dla opinii), `aria-label` dla ocen gwiazdkowych, `aria-hidden` na emoji dekoracyjnych, kontrasty min. 4,5:1 (WCAG AA), `prefers-reduced-motion`, widoczny `:focus-visible`
- Bezpieczeństwo/prywatność: meta **Content-Security-Policy** (bez inline styles/skryptów), `rel="noopener noreferrer"` na linkach zewnętrznych, mapa Google ładowana **dopiero po kliknięciu** (żadnych ciasteczek Google bez zgody), fonty serwowane lokalnie
- Wydajność: preload fontów i hero, `fetchpriority="high"` na LCP, `width`/`height` na obrazach (zero CLS), `loading="lazy"` na galerii, zoptymalizowane WebP

## Zawartość strony

- **Hero** — „Świeże ryby dziesięć metrów od morza" (z oceną Google i wezwaniem do działania)
- **Atuty** — „Tuż przy plaży", „Zawsze świeże ryby", „Zimne piwo", „Rodzinnie i miło"
- **Menu** („Nasze menu") — ryby w zestawach, ryby zapiekane, pierogi, owoce morza & fast food + galeria zdjęć
- **Opinie** („Po prostu bomba!") — opinie gości
- **Kontakt** („Godziny i dojazd") — adres, telefon, Facebook i mapa Google (ładowana za zgodą)

## Struktura

```
IKA-website/
├── index.html               # cała treść strony (jedna podstrona)
├── 404.html                 # strona błędu (GitHub Pages)
├── robots.txt               # dyrektywy dla robotów + link do sitemapy
├── sitemap.xml              # mapa strony
├── site.webmanifest         # manifest (ikony, kolory marki)
├── assets/
│   ├── css/
│   │   └── style.css        # wszystkie style (@font-face, tokeny, komponenty)
│   ├── js/
│   │   └── map.js           # zgoda na mapę Google + rok w stopce
│   ├── fonts/               # woff2 self-hosted (latin + latin-ext)
│   ├── favicon.svg          # favicona (SVG)
│   └── img/
│       ├── hero.webp        # zdjęcie główne (1600×1200, LCP)
│       ├── galeria-1.webp   # taras / miejsca na zewnątrz
│       ├── galeria-2.webp   # drink
│       ├── galeria-3.webp   # bar / wybór piwa
│       ├── og-image.jpg     # obraz do udostępnień (1200×630)
│       ├── apple-touch-icon.png
│       ├── icon-192.png
│       └── icon-512.png
├── .nojekyll                # serwowanie statyku bez Jekylla
├── .gitignore
└── README.md
```

## Uruchomienie lokalne

```bash
python3 -m http.server 8000
# następnie otwórz http://localhost:8000
```

## Wdrożenie (GitHub Pages)

Strona jest opublikowana pod adresem:

```
https://m4tr1x-dev.github.io/IKA-website/
```

Źródło: gałąź `main`, katalog `/ (root)`. Każdy push na `main` automatycznie publikuje aktualną wersję.

## Kontakt i mapa

Sekcja kontaktu działa **bez backendu**: klikalny numer telefonu (`tel:`), link do Facebooka oraz mapa Google ładowana **dopiero po kliknięciu** (zgoda użytkownika — bez ciasteczek Google przy samym wejściu na stronę). Dostępny jest też bezpośredni link do mapy w nowej karcie.

## Zdjęcia

Wszystkie zdjęcia to autorskie fotografie Baru IKA — zoptymalizowane do formatu WebP, z kadrem 1:1 w galerii i usuniętymi metadanymi (EXIF/GPS).

## Kolory marki

- morski (główny) `#1A7E97`
- granat tła `#0E3F4C`
- bursztyn (akcent) `#EFA43C`
- krem `#FBF4E7`

## Wersje językowe (PL / DE)

Strona ma wbudowany przełącznik języka **PL | DE** (nawigacja). Polski jest językiem domyślnym i źródłem treści w HTML — strona działa w pełni także bez JavaScriptu (wtedy po polsku). Tłumaczenie niemieckie znajduje się w `assets/js/i18n.js`; wybór języka zapisywany jest w `localStorage`, a skrypt podmienia również `<html lang>`, `<title>`, meta description oraz teksty alternatywne i etykiety ARIA.

## SEO

Strona jest zoptymalizowana pod lokalne wyszukiwania („smażalnia ryb Niechorze", „gdzie zjeść w Niechorzu"): dane strukturalne schema.org (Restaurant z geolokalizacją i pełnym menu z cenami, FAQPage), sekcje treściowe „O nas" i „Częste pytania", sitemap z obrazami, spójne title/description. Ocena i liczba opinii na stronie odpowiadają wizytówce Google.

## Wykonanie

Strona zaprojektowana i wykonana przez **CBprojekt sp. z o.o.** — developer **M4tr1x** (Mateusz Gumuła).

## Prawa autorskie

© Bar IKA · Niechorze. Wszelkie prawa zastrzeżone. Zdjęcia są własnością Baru IKA. Kod oraz materiały służą wyłącznie potrzebom Baru IKA.

---

Repozytorium prowadzone przez [@m4tr1x-dev](https://github.com/m4tr1x-dev).

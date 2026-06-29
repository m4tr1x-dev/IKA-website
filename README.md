# Bar IKA — oficjalna strona internetowa

Oficjalne repozytorium kodu strony internetowej **Baru IKA** w Niechorzu — rodzinnej smażalni ryb tuż przy plaży i pod latarnią morską nad Bałtykiem.

> **Status:** projekt ukończony — strona opublikowana na żywo. ✅
>
> 🌐 **[m4tr1x-dev.github.io/IKA-website](https://m4tr1x-dev.github.io/IKA-website/)**

## O projekcie

Bar IKA to rodzinna smażalnia ryb dziesięć metrów od morza i 250 metrów od latarni w Niechorzu — świeże ryby prosto z patelni (dorsz, sandacz, halibut), domowe zupy i pierogi, regionalne piwo, drinki i churros. Prosto, świeżo i bez kombinowania.

- **Adres:** ul. Starowiejska 3A, Niechorze
- **Telefon:** [609 536 920](tel:+48609536920)
- **Facebook:** [/ikaniechorze](https://www.facebook.com/ikaniechorze)

Strona jest lekka, szybka i responsywna (mobile-first), zbudowana jako pojedyncza strona statyczna i hostowana na **GitHub Pages**.

## Stack

- **Frontend:** HTML5 + CSS (style inline) + Google Fonts — bez frameworków, bez JavaScriptu i bez kroku budowania
- **Hosting:** GitHub Pages (treść statyczna, `.nojekyll`)

## Zawartość strony

- **Hero** — „Świeże ryby dziesięć metrów od morza" (z oceną Google i wezwaniem do działania)
- **Atuty** — „Tuż przy plaży", „Zawsze świeże ryby", „Zimne piwo", „Rodzinnie i miło"
- **Menu** („Nasze menu") — ryby, zupy, pierogi i naleśniki, piwo i napoje + galeria zdjęć
- **Opinie** („Po prostu bomba!") — opinie gości
- **Kontakt** („Godziny i dojazd") — adres, telefon, Facebook i osadzona mapa Google

Dodatkowo: responsywny układ, animacje CSS przy ładowaniu, klikalny telefon i kotwice do sekcji.

## Struktura

```
IKA-website/
├── index.html              # cała strona (jedna podstrona, style inline)
├── assets/
│   └── img/
│       ├── hero.webp        # zdjęcie główne (hero)
│       ├── galeria-1.webp   # taras / miejsca na zewnątrz
│       ├── galeria-2.webp   # drink
│       └── galeria-3.webp   # bar / wybór piwa
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

Sekcja kontaktu działa **bez backendu**: klikalny numer telefonu (`tel:`), link do Facebooka oraz osadzona **mapa Google** z lokalizacją baru przy ul. Starowiejskiej 3A w Niechorzu.

## Zdjęcia

Wszystkie zdjęcia to autorskie fotografie Baru IKA — zoptymalizowane do formatu WebP, z kadrem 1:1 w galerii i usuniętymi metadanymi (EXIF/GPS).

## Kolory marki

- morski (główny) `#1A7E97`
- granat tła `#0E3F4C`
- bursztyn (akcent) `#EFA43C`
- krem `#FBF4E7`

## Wykonanie

Strona zaprojektowana i wykonana przez **CBprojekt sp. z o.o.** — developer **M4tr1x** (Mateusz Gumuła).

## Prawa autorskie

© Bar IKA · Niechorze. Wszelkie prawa zastrzeżone. Zdjęcia są własnością Baru IKA. Kod oraz materiały służą wyłącznie potrzebom Baru IKA.

---

Repozytorium prowadzone przez [@m4tr1x-dev](https://github.com/m4tr1x-dev).

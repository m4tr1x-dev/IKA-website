# Bar IKA — Niechorze · oficjalna strona internetowa

Oficjalne repozytorium kodu strony internetowej **Baru IKA** w Niechorzu — nadmorskiej miejscowości nad Bałtykiem (województwo zachodniopomorskie).

> **Status:** pierwsza wersja gotowa — strona statyczna z treścią i zdjęciami. Pozostaje konfiguracja GitHub Pages.

## O projekcie

Bar IKA to rodzinna smażalnia ryb w Niechorzu — kilka metrów od plaży i tuż przy latarni morskiej. W ofercie świeże ryby prosto z patelni (dorsz bałtycki, sandacz, halibut, łosoś), domowe zupy i pierogi, regionalne oraz lane piwo, drinki i desery.

- **Adres:** Starowiejska 3A, Niechorze
- **Telefon:** 609 536 920
- **Facebook:** [/ikaniechorze](https://www.facebook.com/ikaniechorze)

Strona jest lekka, szybka i responsywna (mobile-first), zbudowana jako pojedyncza strona statyczna i przeznaczona do hostingu na **GitHub Pages**.

## Stack

- **Frontend:** HTML5 + CSS (style inline) + Google Fonts — bez frameworków i bez kroku budowania
- **Hosting:** GitHub Pages (treść statyczna)

## Struktura

```
IKA-website/
├── index.html              # cała strona (jedna podstrona)
├── assets/
│   └── img/
│       ├── hero.webp        # zdjęcie główne (hero)
│       ├── galeria-1.webp   # taras / miejsca na zewnątrz
│       ├── galeria-2.webp   # drink
│       └── galeria-3.webp   # bar / wybór piwa
├── .gitignore
└── README.md
```

## Uruchomienie lokalne

```bash
python3 -m http.server 8000
# następnie otwórz http://localhost:8000
```

## Wdrożenie (GitHub Pages)

Konfiguracja Pages w toku. Docelowy adres:

```
https://m4tr1x-dev.github.io/IKA-website/
```

> Uwaga: GitHub Pages dla repozytorium **prywatnego** wymaga płatnego planu (Pro/Team). Na planie darmowym repozytorium trzeba ustawić jako publiczne.

## Wykonanie

Strona zaprojektowana i wykonana przez **CBprojekt sp. z o.o.** — developer **M4tr1x** (Mateusz Gumuła).

## Prawa autorskie

© Bar IKA, Niechorze. Wszelkie prawa zastrzeżone. Zdjęcia są własnością Baru IKA. Kod oraz materiały służą wyłącznie potrzebom Baru IKA.

---

Repozytorium prowadzone przez [@m4tr1x-dev](https://github.com/m4tr1x-dev).

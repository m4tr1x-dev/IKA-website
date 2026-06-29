# Bar IKA — Niechorze · oficjalna strona internetowa

Oficjalne repozytorium kodu strony internetowej **Baru IKA** w Niechorzu — nadmorskiej miejscowości nad Bałtykiem (województwo zachodniopomorskie).

> **Status:** w budowie. Repozytorium jest na etapie konfiguracji; kod strony zostanie dodany w kolejnych krokach.

## O projekcie

Bar IKA to _[krótki opis baru — do uzupełnienia: charakter lokalu, oferta, lokalizacja, sezon i godziny otwarcia]_.

Celem projektu jest lekka, szybka i responsywna strona (podejście **mobile-first** — większość gości trafia na nią z telefonu), zbudowana jako strona statyczna i hostowana przez **GitHub Pages**.

## Stack (planowany)

- **Frontend:** HTML5 + CSS3 + JavaScript, bez ciężkich zależności
- **Hosting:** GitHub Pages
- Opcjonalnie w przyszłości generator stron statycznych lub framework, jeśli zakres na to wskaże

## Planowana struktura

```
IKA-website/
├── index.html          # strona główna
├── assets/
│   ├── css/            # style
│   ├── js/             # skrypty
│   └── img/            # grafiki, zdjęcia
├── .gitignore
└── README.md
```

## Uruchomienie lokalne

Po dodaniu kodu strony wystarczy otworzyć `index.html` w przeglądarce albo uruchomić lokalny serwer:

```bash
# Python 3
python3 -m http.server 8000
# potem otwórz http://localhost:8000
```

## Wdrożenie (GitHub Pages)

Konfiguracja GitHub Pages zostanie dodana w następnym kroku. Docelowy adres strony:

```
https://m4tr1x-dev.github.io/IKA-website/
```

## Prawa autorskie

© Bar IKA, Niechorze. Wszelkie prawa zastrzeżone. Kod oraz materiały służą wyłącznie potrzebom Baru IKA.

---

Repozytorium prowadzone przez [@m4tr1x-dev](https://github.com/m4tr1x-dev).

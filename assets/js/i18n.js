/* Bar IKA — przełącznik języka PL/DE.
   HTML jest źródłem prawdy dla polskiego (działa też bez JS);
   niemiecki pochodzi ze słownika poniżej. Wybór zapisywany w localStorage. */
(function () {
  'use strict';

  var KEY = 'ika-lang';

  var DE = {
    'skip': 'Zum Inhalt springen',
    'nav.aria': 'Hauptnavigation',
    'lang.aria': 'Sprachauswahl',
    'nav.menu': 'Speisekarte',
    'nav.reviews': 'Bewertungen',
    'nav.contact': 'Kontakt',
    'hero.alt': 'Bar IKA in Niechorze — Theke mit Fischkarte und buntem Wandbild',
    'hero.badge': '4,6 bei Google · Nr. 1 in Niechorze',
    'hero.lead': 'Familiäre Fischbraterei direkt am Leuchtturm. Frisch aus der Pfanne: Dorsch, Zander und Heilbutt, dazu hausgemachte Piroggen und kaltes regionales Bier.',
    'hero.cta1': 'Speisekarte ansehen →',
    'hero.cta2': 'Anrufen & reservieren',
    'features.aria': 'Unsere Stärken',
    'f1.title': 'Direkt am Strand',
    'f1.text': '10 Meter vom Meer, 250 Meter vom Leuchtturm in Niechorze.',
    'f2.title': 'Immer frischer Fisch',
    'f2.text': 'Frisch gebraten, dazu hausgemachte Suppen und vor Ort handgemachte Piroggen.',
    'f3.title': 'Kaltes Bier',
    'f3.text': 'Große Auswahl — irische, tschechische und regionale Biere vom Fass.',
    'f4.title': 'Familiär & herzlich',
    'f4.text': 'Freundliches Team und kurze Wartezeiten — auch in der Hochsaison.',
    'menu.kicker': 'frisch aus der Pfanne',
    'menu.title': 'Unsere Speisekarte',
    'menu.sub': 'Saisonale Karte — Richtpreise. Das vollständige Tagesangebot finden Sie auf der Tafel im Lokal.',
    'menu.c1.title': 'Fisch — Menüs',
    'menu.c1.note': 'mit Pommes und Salat · 530–550 g',
    'menu.c1.i1': 'Dorsch',
    'menu.c1.i2': 'Zander',
    'menu.c1.i3': 'Heilbutt',
    'menu.c1.i4': 'Hoki (Blauer Seehecht)',
    'menu.c2.title': 'Überbackener Fisch',
    'menu.c2.note': 'in Soße, mit Pommes und Salat',
    'menu.c2.i1': 'Dorsch in Sahne-Lauch-Soße',
    'menu.c2.i2': 'Dorsch mit getrockneten Tomaten und Blauschimmelkäse',
    'menu.c2.i3': 'Dorsch mit Spinat und Parmesan',
    'menu.c2.i4': 'Lachs in Zitronen-Butter-Soße',
    'menu.c3.title': 'Piroggen',
    'menu.c3.note': 'hausgemacht, handgeformt · 7 Stück',
    'menu.c3.i1': 'Ruskie (Kartoffeln & Quark)',
    'menu.c3.i2': 'Mit Fleisch',
    'menu.c3.i3': 'Mit Spinat und Mozzarella',
    'menu.c3.i4': 'Mit Käse und Champignons',
    'menu.c4.title': 'Meeresfrüchte & Fast Food',
    'menu.c4.note': 'Garnelen, Calamari & Klassiker auf die Hand',
    'menu.c4.i1': 'Garnelen im Backteig',
    'menu.c4.i2': 'Calamari im Backteig',
    'menu.c4.i3': 'Fish & Chips',
    'menu.c4.i4': 'Chicken Strips',
    'menu.c4.i5': 'Chicken Nuggets',
    'g1.alt': 'Terrasse der Bar IKA mit Sonnenschirmen und Außenplätzen',
    'g2.alt': 'Fruchtiger Eisdrink, serviert in der Bar IKA',
    'g3.alt': 'Bar mit Auswahl an regionalen Bieren und Fassbier',
    'g4.alt': 'Zweifarbiges, geschichtetes Bier, serviert in der Bar IKA',
    'rev.kicker': 'das sagen unsere Gäste',
    'rev.title': 'Einfach bombig!',
    'rev.rating': 'Bewertung: 4,6 von 5 Sternen',
    'rev.count': '· über 300 Google-Bewertungen',
    'rev.stars5': '5 Sterne',
    'rev1.meta': 'Gast vom Strand',
    'rev2.meta': 'kommt jedes Jahr wieder',
    'rev3.meta': 'Urlaub in Niechorze',
    'con.kicker': 'besuchen Sie uns',
    'con.title': 'Öffnungszeiten & Anfahrt',
    'con.addr': '72-350 Niechorze · 10 m vom Strand, 250 m vom Leuchtturm',
    'con.hours': 'Täglich 10:00 – 22:00 Uhr',
    'con.hours.sub': 'in der Sommersaison · außerhalb der Saison bitte anrufen',
    'con.phone.sub': 'Reservierungen und Gästezimmer',
    'con.cta': 'Jetzt anrufen',
    'map.load': 'Google Maps laden',
    'map.open': 'oder Karte in neuem Tab öffnen →',
    'footer.info': 'Bar & Fischbraterei · ul. Starowiejska 3A, Niechorze',
    'nav.faq': 'FAQ',
    'about.kicker': 'lernen Sie uns kennen',
    'about.title': 'Fischbraterei im Herzen von Niechorze',
    'about.p1': 'Die Bar IKA ist eine familiäre Fischbraterei in Niechorze — buchstäblich zehn Meter vom Strandzugang und rund 250 Meter vom berühmten Leuchtturm entfernt. Seit Jahren servieren wir frisch gebratenen Fisch: Dorsch, Zander, Heilbutt und Hoki, dazu hausgemachte Suppen und vor Ort handgeformte Piroggen.',
    'about.p2': 'Sie kommen direkt vom Strand zu uns — ohne Reservierung und ohne langes Warten: Die meisten Gerichte sind auch in der Hochsaison in wenigen Minuten fertig. Für Kinder gibt es einen Hochstuhl und schnelle Klassiker, für die Großen kaltes regionales Bier vom Fass.',
    'about.p3': 'Urlaub in Rewal, Pogorzelica oder Trzęsacz? Zur IKA sind es nur ein paar Minuten — und der Spaziergang an der Promenade mit dem Leuchtturm im Blick ist das beste Dessert.',
    'faq.kicker': 'gut zu wissen',
    'faq.title': 'Häufige Fragen',
    'faq.q1': 'Muss man einen Tisch reservieren?',
    'faq.a1': 'Nein — wir funktionieren wie eine klassische Fischbraterei am Meer: Sie bestellen am Fenster und nehmen auf der Terrasse Platz. Für größere Gruppen oder außerhalb der Saison rufen Sie am besten vorher an: 601 366 921.',
    'faq.q2': 'Wie lange haben Sie geöffnet?',
    'faq.a2': 'In der Sommersaison täglich von 10:00 bis 22:00 Uhr. Außerhalb der Saison können die Zeiten abweichen — rufen Sie am besten kurz vorher an.',
    'faq.q3': 'Welche Fische stehen auf der Karte?',
    'faq.a3': 'Immer frisch: Dorsch, Zander, Heilbutt und Hoki — frisch gebraten, als Menü mit Pommes und Salat. Dazu überbackener Fisch in Soßen, Meeresfrüchte und hausgemachte Piroggen. Das komplette Tagesangebot steht auf der Tafel an der Bar.',
    'faq.q4': 'Gibt es etwas für Kinder?',
    'faq.a4': 'Ja — Chicken Nuggets, Hähnchen-Strips und Pommes sind bei den Kleinsten am schnellsten weg. Ein Hochstuhl ist vor Ort vorhanden.',
    'faq.q5': 'Wie finden wir Sie?',
    'faq.a5': 'Ul. Starowiejska 3A in Niechorze — 10 Meter vom Strandzugang und etwa 250 Meter vom Leuchtturm. Halten Sie Ausschau nach den grünen Sonnenschirmen und dem bunten IKA-Schild.'
  };

  var DE_HTML = {
    'hero.title': 'Frischer Fisch<br>zehn Meter<br>vom Meer',
    'rev1.q': '„Fantastische Fischsuppe, mit keiner anderen in Niechorze zu vergleichen! Großartiger Dorsch mit richtig leckeren Pommes. Einfach bombig!“',
    'rev2.q': '„Ausgezeichnete Piroggen, besonders die mit Käse und Pilzen — alles sehr reichhaltig. Sehr nettes Personal und kurze Wartezeiten.“',
    'rev3.q': '„Große Bierauswahl, frischer Fisch und Preise, die den Geldbeutel schonen. Eine Küche, die man wirklich empfehlen kann.“',
    'map.consent': 'Die Google-Karte wird erst nach Ihrer Zustimmung geladen — mit dem Klick verbinden Sie sich mit den Servern von Google (siehe <a class="map-placeholder__link" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google-Datenschutzerklärung</a>).',
    'footer.credits': 'Website erstellt von <strong>CBprojekt sp. z o.o.</strong> · Entwickler <strong>M4tr1x</strong> (Mateusz Gumuła)'
  };

  var DE_META = {
    title: 'Bar IKA Niechorze — Fischbraterei 10 m vom Strand | frischer Fisch, Piroggen, Bier',
    desc: 'Bar IKA in Niechorze — familiäre Fischbraterei direkt am Strand und am Leuchtturm. Frischer Dorsch, Zander und Heilbutt aus der Pfanne, hausgemachte Piroggen, Meeresfrüchte und kaltes regionales Bier. Täglich 10:00–22:00, ul. Starowiejska 3A.'
  };

  /* Polski „słownik" zbieramy z HTML przy starcie — zero duplikacji treści. */
  var PL = {}, PL_HTML = {}, PL_ARIA = {}, PL_ALT = {};
  var metaDesc = document.querySelector('meta[name="description"]');
  var PL_META = { title: document.title, desc: metaDesc ? metaDesc.getAttribute('content') : '' };

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    PL[el.getAttribute('data-i18n')] = el.textContent;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    PL_HTML[el.getAttribute('data-i18n-html')] = el.innerHTML;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
    PL_ARIA[el.getAttribute('data-i18n-aria')] = el.getAttribute('aria-label') || '';
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
    PL_ALT[el.getAttribute('data-i18n-alt')] = el.getAttribute('alt') || '';
  });

  function apply(lang) {
    var de = lang === 'de';
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = de ? DE[el.getAttribute('data-i18n')] : PL[el.getAttribute('data-i18n')];
      if (typeof v === 'string') el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = de ? DE_HTML[el.getAttribute('data-i18n-html')] : PL_HTML[el.getAttribute('data-i18n-html')];
      if (typeof v === 'string') el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var v = de ? DE[el.getAttribute('data-i18n-aria')] : PL_ARIA[el.getAttribute('data-i18n-aria')];
      if (typeof v === 'string') el.setAttribute('aria-label', v);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var v = de ? DE[el.getAttribute('data-i18n-alt')] : PL_ALT[el.getAttribute('data-i18n-alt')];
      if (typeof v === 'string') el.setAttribute('alt', v);
    });
    document.documentElement.lang = de ? 'de' : 'pl';
    document.title = de ? DE_META.title : PL_META.title;
    if (metaDesc) metaDesc.setAttribute('content', de ? DE_META.desc : PL_META.desc);
    document.querySelectorAll('.lang-switch__btn').forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    try { localStorage.setItem(KEY, lang); } catch (e) { /* tryb prywatny — trudno */ }
  }

  document.querySelectorAll('.lang-switch__btn').forEach(function (b) {
    b.addEventListener('click', function () { apply(b.getAttribute('data-lang')); });
  });

  var saved = 'pl';
  try { saved = localStorage.getItem(KEY) || 'pl'; } catch (e) {}
  if (saved === 'de') { apply('de'); }
})();

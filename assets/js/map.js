/* Bar IKA — ładowanie mapy Google dopiero za zgodą użytkownika (RODO)
   + automatyczny rok w stopce. Strona działa w pełni także bez JS. */
(function () {
  'use strict';

  var btn = document.getElementById('map-load');
  var box = document.getElementById('map-box');
  if (btn && box) {
    btn.addEventListener('click', function () {
      var iframe = document.createElement('iframe');
      iframe.title = document.documentElement.lang === 'de' ? 'Karte — Bar IKA Niechorze' : 'Mapa — Bar IKA Niechorze';
      iframe.src = 'https://www.google.com/maps?q=Bar%20Ika%20Starowiejska%203A%20Niechorze&output=embed';
      iframe.loading = 'lazy';
      iframe.className = 'map-iframe';
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
      box.replaceChildren(iframe);
    });
  }

  var rok = document.getElementById('rok');
  if (rok) {
    rok.textContent = String(new Date().getFullYear());
  }
})();

(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const icon = (id) => `<svg class="ic" aria-hidden="true"><use href="#${id}"/></svg>`;

  /* ---------- menu ---------- */
  const burger = $('.burger'), nav = $('#nav');
  burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
    nav.classList.toggle('is-open', open);
  });
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) { nav.classList.remove('is-open'); burger.setAttribute('aria-expanded', 'false'); }
  });

  /* ---------- hero video ---------- */
  document.querySelectorAll('video').forEach((v) => {
    if (reduce) { v.removeAttribute('autoplay'); v.pause(); return; }
    if (v.preload === 'none' && 'IntersectionObserver' in window) {
      v.removeAttribute('autoplay');
      new IntersectionObserver(([en]) => { en.isIntersecting ? v.play().catch(() => {}) : v.pause(); }, { rootMargin: '200px' }).observe(v);
    }
  });

  /* ---------- configurator ---------- */
  const MODS = [
    ['i-stats', 'Statystyki bez cookies', 'Liczymy także odwiedzających, którzy odrzucili cookies, obok GA4 i Search Console. Raport gotowy co rano.', [['Wizyty', 'pełny obraz ruchu'], ['Kanały', 'źródła i konwersje'], ['Prywatność', 'bez zapisu IP']]],
    ['i-consent', 'Baner zgód', 'Baner cookies w Twoim stylu, polityka generowana z listy dostawców na stronie i raport zgód.', [['Wygląd', 'Twoje kolory i teksty'], ['Polityka', 'zawsze aktualna'], ['Raport', 'zgody dziennie']]],
    ['i-seo', 'Szanse SEO', 'Co miesiąc analiza Search Console, GA4, crawla i szybkości strony. Szanse ułożone według wpływu.', [['Lista', 'od największego wpływu'], ['Konkurencja', 'frazy i linki'], ['Pomiar', 'czy zmiana zadziałała']]],
    ['i-aivis', 'Widoczność w AI', 'Sprawdzamy, czy ChatGPT, Claude, Gemini, Perplexity i Google AI polecają Twoją firmę, i co zrobić, by robiły to częściej.', [['Pytania', 'jak zadają klienci'], ['Pozycja', 'Ty i konkurenci'], ['Źródła', 'co cytuje AI']]],
    ['i-cms', 'Edytor strony', 'Teksty, wpisy, realizacje i banery edytujesz w portalu. Podgląd przed publikacją, bez osobnego CMS.', [['Podgląd', 'przed publikacją'], ['Frazy', 'wolumen w edytorze'], ['Logowanie', 'jedno, firmowe']]],
    ['i-mail', 'Newsletter', 'Zapisy z podwójnym potwierdzeniem, zapis treści zgody i automatyczne czyszczenie niepotwierdzonych adresów.', [['Zgody', 'z wersją treści'], ['RODO', 'eksport i usunięcie'], ['Higiena', 'czyszczenie po 30 dniach']]],
    ['i-campaign', 'Studio kampanii', 'AI przygotowuje kampanię w pięciu krokach: rozpoznanie, strategia, struktura, kreacje, przegląd. Ty decydujesz na każdym etapie.', [['Kroki', '5 etapów z akceptacją'], ['Kreacje', 'teksty i warianty'], ['Koszty', 'AI na kampanię']]],
    ['i-style', 'Księga marki', 'Kolory, typografia, przyciski i komponenty na jednej stronie, czytelne także dla asystentów AI piszących kod.', [['Komponenty', 'kiedy używać'], ['Link', 'do udostępnienia'], ['AI', 'czyta zasady marki']]],
    ['i-chat', 'Czat i skrzynka', 'Czat AI na stronie odpowiada z Twojej bazy wiedzy, a pracownik przejmuje rozmowę bez zaczynania od nowa.', [['Baza', 'tylko Twoje dokumenty'], ['Przejęcie', 'płynne, przez człowieka'], ['Skrzynka', 'wszystkie kanały w jednym']]],
    ['i-funnel', 'Leady', 'Zapytania ze strony trafiają do lejka z kanałem i kampanią. Wartość, szansa i następny krok w widoku listy lub tablicy.', [['Źródło', 'kanał i kampania'], ['Lejek', 'lista albo tablica'], ['Follow-up', 'automatyczne maile']]],
    ['i-share', 'Plany dla klientów', 'Udostępniasz plany, dashboardy i prototypy unikalnym linkiem z hasłem i datą ważności.', [['Dostęp', 'hasło i termin'], ['Wersje', 'pod tym samym linkiem'], ['Śledzenie', 'kiedy otwarto ofertę']]],
    ['i-ask', 'Asystent danych', 'Pytasz o liczby, rozmowy i leady zwykłym językiem. Odpowiedź przychodzi z wykresem z Twoich danych.', [['Pytania', 'zwykłym językiem'], ['Odpowiedzi', 'z wykresami'], ['Działania', 'tylko po akceptacji']]],
    ['i-wave', 'Transkrypcje', 'Wgrywasz nagranie spotkania, dostajesz pełny zapis i podsumowanie najważniejszych ustaleń.', [['Zapis', 'pełna transkrypcja'], ['Skrót', 'decyzje i zadania'], ['Eksport', 'Word, PDF, Markdown']]],
    ['i-plug', 'Integracje', 'Wszystkie połączenia w jednym miejscu: status, ostatnia synchronizacja i alarm, gdy coś przestało działać.', [['Status', 'każdego połączenia'], ['Alarm', 'gdy dane nie płyną'], ['Na życzenie', 'nowe integracje']]],
    ['i-lock', 'Centrum bezpieczeństwa', 'Skany według harmonogramu, znaleziska uszeregowane według priorytetu, role, uprawnienia i 2FA dla każdego.', [['Skany', 'cykliczne'], ['Priorytety', 'z dowodem i zaleceniem'], ['Dostęp', 'role i 2FA']]]
  ];
  const plates = $('.cfg__plates'), list = $('#cfgList'), main = $('#cfgMain'), count = $('#cfgCount');
  if (plates) {
  const on = new Set([0, 8, 11]);
  let active = 11;

  MODS.forEach(([ic, name], i) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'mod'; b.dataset.i = i;
    b.setAttribute('aria-pressed', on.has(i));
    b.innerHTML = `<span class="mod__ic">${icon(ic)}</span><span class="mod__name">${name}</span><span class="mod__no">Moduł ${String(i + 1).padStart(2, '0')}</span><span class="mod__state" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="m7 16.5 6 6L25 10"/></svg></span>`;
    plates.appendChild(b);
  });

  const renderMain = () => {
    if (!on.size) { main.innerHTML = '<p class="win__empty">Portal jest pusty. Wybierz moduły po lewej.</p>'; return; }
    const [ic, name, desc, rows] = MODS[active];
    main.innerHTML = `<span class="mno">Moduł ${String(active + 1).padStart(2, '0')}</span><h3>${name}</h3><p>${desc}</p><ul>${rows.map(([a, b]) => `<li><b>${a}</b>${b}</li>`).join('')}</ul>`;
  };
  const renderList = (fresh) => {
    list.innerHTML = '';
    [...on].sort((a, b) => a - b).forEach((i) => {
      const li = document.createElement('li');
      li.innerHTML = `${icon(MODS[i][0])}${MODS[i][1]}`;
      if (i === active) li.classList.add('is-active');
      if (i !== fresh) li.style.animation = 'none';
      li.addEventListener('click', () => { active = i; renderList(); renderMain(); });
      list.appendChild(li);
    });
    count.textContent = on.size;
  };
  plates.addEventListener('click', (e) => {
    const b = e.target.closest('.mod'); if (!b) return;
    const i = +b.dataset.i;
    if (on.has(i)) {
      on.delete(i); b.setAttribute('aria-pressed', 'false');
      if (active === i) active = [...on][on.size - 1] ?? 0;
      renderList();
    } else {
      on.add(i); b.setAttribute('aria-pressed', 'true'); active = i;
      renderList(i);
    }
    renderMain();
  });
  renderList(); renderMain();
  }

  /* ---------- demo chart ---------- */
  const g = $('#bars');
  if (g) {
  const data = [318, 326, 322, 341, 336, 352, 349, 366, 371, 384, 380, 412];
  const x0 = 52, w = 34, gap = 11.5, yOf = (v) => 185 - (v - 300) * 1.1;
  g.innerHTML = data.map((v, i) => {
    const x = x0 + i * (w + gap), y = yOf(v);
    return `<rect x="${x}" y="${y}" width="${w}" height="${212 - y}" rx="6" data-i="${i}"></rect><text x="${x + w / 2}" y="232">T${i + 1}</text>`;
  }).join('');
  const hot = (idx) => g.querySelectorAll('rect').forEach((r) => r.classList.toggle('is-hot', idx.includes(+r.dataset.i)));
  hot([11]);

  /* ---------- demo chat ---------- */
  const QA = [
    { q: 'Dlaczego rośnie przychód?', hi: [9, 10, 11],
      a: 'Przychód wzrósł o <b>8,4%</b> tydzień do tygodnia. Trzy czwarte wzrostu dały dwie rzeczy: powrót <b>14 klientów hurtowych</b> po promocji z T10 oraz kampania „Jesień” w Google Ads z kosztem zamówienia niższym o 11%. Sprzedaż detaliczna stoi w miejscu.' },
    { q: 'Co powinno mnie martwić?', hi: [11],
      a: 'Marża spadła o <b>1,3 pp</b>. Główna przyczyna to rabaty powyżej 12% udzielane w dwóch regionach i droższa dostawa od jednego przewoźnika. Dodatkowo <b>6 klientów</b>, którzy kupowali co tydzień, nie złożyło zamówienia od 21 dni. Czy przygotować listę do kontaktu dla handlowców?' },
    { q: 'Gdzie przesunąć budżet reklam?', hi: [8, 9, 10, 11],
      a: 'Kampania produktowa „Akcesoria” ma koszt zamówienia <b>14,20 zł</b> przy średniej 23,90 zł i jest ograniczona budżetem. Proponuję przesunąć na nią <b>1 500 zł tygodniowo</b> z kampanii brandowej. Zmiana wymaga Twojej akceptacji, sam niczego nie uruchomię.' }
  ];
  const log = $('#chatLog'), qs = $('#chatQs');
  let busy = false;
  const add = (cls, html) => { const p = document.createElement('p'); p.className = `msg ${cls}`; p.innerHTML = html; log.appendChild(p); log.scrollTop = log.scrollHeight; return p; };
  qs.addEventListener('click', (e) => {
    const b = e.target.closest('.chip'); if (!b || busy) return;
    busy = true;
    const item = QA[+b.dataset.q];
    qs.querySelectorAll('.chip').forEach((c) => { c.disabled = true; c.setAttribute('aria-pressed', c === b); });
    add('msg--me', item.q);
    hot(item.hi);
    const p = add('msg--ai msg--typing', '');
    const finish = () => { p.innerHTML = item.a; p.classList.remove('msg--typing'); log.scrollTop = log.scrollHeight; busy = false; qs.querySelectorAll('.chip').forEach((c) => { c.disabled = false; }); };
    if (reduce) return finish();
    const plain = item.a.replace(/<[^>]+>/g, '');
    let n = 0;
    const t = setInterval(() => {
      n += 3; p.textContent = plain.slice(0, n); log.scrollTop = log.scrollHeight;
      if (n >= plain.length) { clearInterval(t); finish(); }
    }, 16);
  });
  }

  /* ---------- flow wires: systems → core → outcomes ---------- */
  const stage = $('#flowStage');
  if (stage) {
    const svg = $('#flowWires'), NS = 'http://www.w3.org/2000/svg';
    const draw = () => {
      svg.innerHTML = '';
      if (getComputedStyle(svg).display === 'none') return;
      const S = stage.getBoundingClientRect(), core = $('.core', stage).getBoundingClientRect();
      const rel = (r) => ({ l: r.left - S.left, r: r.right - S.left, cy: r.top - S.top + r.height / 2 });
      const C = rel(core), paths = [];
      const srcs = [...stage.querySelectorAll('.src')], outs = [...stage.querySelectorAll('.res')];
      srcs.forEach((el, i) => {
        const a = rel(el.getBoundingClientRect()), y2 = C.cy + (i - (srcs.length - 1) / 2) * 10, mx = (a.r + C.l) / 2;
        paths.push([`M${a.r},${a.cy} C${mx},${a.cy} ${mx},${y2} ${C.l},${y2}`, i * 0.35]);
      });
      outs.forEach((el, i) => {
        const b = rel(el.getBoundingClientRect()), y1 = C.cy + (i - 1) * 14, mx = (C.r + b.l) / 2;
        paths.push([`M${C.r},${y1} C${mx},${y1} ${mx},${b.cy} ${b.l},${b.cy}`, 1.2 + i * 0.5]);
      });
      paths.forEach(([d, delay], i) => {
        const base = document.createElementNS(NS, 'path'); base.setAttribute('d', d); base.setAttribute('class', 'w'); base.id = 'fw' + i; svg.appendChild(base);
        const live = document.createElementNS(NS, 'path'); live.setAttribute('d', d); live.setAttribute('class', 'w w--live'); svg.appendChild(live);
        if (reduce) return;
        const c = document.createElementNS(NS, 'circle'); c.setAttribute('r', '4'); c.setAttribute('class', 'pk');
        const am = document.createElementNS(NS, 'animateMotion');
        am.setAttribute('dur', '2.6s'); am.setAttribute('repeatCount', 'indefinite'); am.setAttribute('begin', delay + 's');
        const mp = document.createElementNS(NS, 'mpath'); mp.setAttribute('href', '#fw' + i);
        am.appendChild(mp); c.appendChild(am); svg.appendChild(c);
      });
    };
    let raf; const redraw = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); };
    new ResizeObserver(redraw).observe(stage);
    document.fonts && document.fonts.ready.then(redraw);
    redraw();
  }

  /* ---------- pricing estimator ---------- */
  const est = $('#est');
  if (est) {
    const f = est.querySelector('.est__form');
    const v = (n) => +(f.querySelector('[name=' + n + ']:checked') || f.querySelector('[name=' + n + ']')).value;
    const o = (n, x) => { f.querySelector('[name=' + n + ']').value = x; };
    const INCLUDED = { 9900: 2, 24900: 4, 19900: 5 };
    const zl = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' zł';
    const calc = () => {
      const base = v('base'), ints = v('int'), mods = v('mod'), care = v('care');
      o('intOut', ints); o('modOut', mods);
      const one = base + Math.max(0, ints - INCLUDED[base]) * 1900 + mods * 2900;
      $('#estOne').textContent = zl(one);
      $('#estMon').textContent = care ? zl(care) : '0 zł';
    };
    f.addEventListener('input', calc);
    calc();
  }

  /* ---------- catalog filter ---------- */
  const filters = $('.filters');
  if (filters) {
    const cards = [...document.querySelectorAll('.app')];
    filters.addEventListener('click', (e) => {
      const b = e.target.closest('.filter'); if (!b) return;
      filters.querySelectorAll('.filter').forEach((x) => x.setAttribute('aria-pressed', x === b));
      const k = b.dataset.f;
      cards.forEach((c) => { c.hidden = k !== 'all' && c.dataset.d !== k; });
    });
  }

  /* ---------- FAQ search ---------- */
  const fs = $('#faqSearch');
  if (fs) {
    const groups = [...document.querySelectorAll('.faqx__group')];
    const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ł/g, 'l');
    fs.addEventListener('input', () => {
      const q = norm(fs.value.trim());
      let any = false;
      groups.forEach((g2) => {
        let vis = 0;
        g2.querySelectorAll('details').forEach((d) => {
          const hit = !q || norm(d.textContent).includes(q);
          d.hidden = !hit; if (hit) vis++;
          if (q && hit) d.open = true;
        });
        g2.hidden = !vis; if (vis) any = true;
      });
      $('#faqNone').hidden = any;
    });
  }
})();

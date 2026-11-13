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
    if (v.preload === 'none' && !v.closest('.dgen') && 'IntersectionObserver' in window) {
      v.removeAttribute('autoplay');
      const arm = () => new IntersectionObserver(([en]) => { en.isIntersecting ? v.play().catch(() => {}) : v.pause(); }, { rootMargin: '200px' }).observe(v);
      if (document.readyState === 'complete') setTimeout(arm, 1200); else addEventListener('load', () => setTimeout(arm, 1200), { once: true });
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

  /* ---------- hero: typed questions in portal search ---------- */
  const askEl = $('#askType');
  if (askEl && !reduce) {
    const Q = ['Dlaczego spadła marża w tym tygodniu?', 'Którzy klienci zamawiają rzadziej?', 'Ile mamy należności po terminie?', 'Gdzie przesunąć budżet reklam?'];
    let qi = 0;
    const type = () => {
      const q = Q[qi % Q.length]; let n = 0; askEl.classList.add('is-typing');
      const t = setInterval(() => {
        askEl.textContent = q.slice(0, ++n);
        if (n >= q.length) { clearInterval(t); setTimeout(() => { qi++; type(); }, 2600); }
      }, 45);
    };
    setTimeout(type, 1200);
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

  /* ---------- DEMO: generator treści (dane przygotowane z góry) ---------- */
  const demo = $('#demoApp');
  if (demo && window.MODERA_DEMO) {
    const P = window.MODERA_DEMO;
    const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const len = (s) => [...s].length;
    const cnt = (s, max) => `<span class="cc ${len(s) > max ? 'cc--bad' : ''}">${len(s)}/${max}</span>`;
    const copyBtn = (txt, label = 'Kopiuj') => `<button type="button" class="cpy" data-copy="${esc(txt)}">${icon('i-copy')}<span>${label}</span></button>`;
    const ICONS = { cup: 'i-cup', bag: 'i-bag', lamp: 'i-lamp' };
    const form = $('#demoForm', demo), input = $('#demoUrl', demo), steps = $('#demoSteps', demo), out = $('#demoOut', demo), note = $('#demoNote', demo);
    let cur = P[0], tab = 'facts', metaLen = 'medium', mailSub = 'subjects', bodyLen = 'standard', previewI = 0, timer;

    const fc = (f) => f ? `<span class="fx">${f.split(',').map((x) => `<a href="#" data-fact="${x}">F${x.slice(1)}</a>`).join('')}</span>` : `<span class="fx fx--none">bez faktu</span>`;
    const productCard = (p) => `
      <div class="pc__img"><img src="assets/prod-${p.id}.jpg" alt="${esc(p.short)}" width="600" height="600"></div>
      <p class="pc__cat">${esc(p.category)}</p>
      <h3>${esc(p.name)}</h3>
      <p class="pc__price">${esc(p.price)}</p>
      <p class="pc__stat"><b>${p.facts.length}</b> potwierdzonych faktów · <b>${p.missing.length}</b> braki</p>
      <p class="pc__h">Dla kogo</p><p class="pc__aud">${esc(p.audience)}</p>
      <p class="pc__src">Źródło: ${esc(p.url.replace('https://', ''))}</p>`;

    const rsa = (p) => {
      const h = p.google.headlines.map((x) => x[0]), d = p.google.descriptions.map((x) => x[0]), n = h.length, i = previewI % n;
      return `<div class="serp"><p class="serp__ad"><b>Sponsorowane</b> · sklep-demo.pl</p><p class="serp__h">${esc(h[i])} | ${esc(h[(i + 4) % n])} | ${esc(h[(i + 9) % n])}</p><p class="serp__d">${esc(d[previewI % d.length])}</p>
        <p class="serp__sl">${p.google.sitelinks.map((s) => `<span>${esc(s[0])}</span>`).join('')}</p><p class="serp__co">${p.google.callouts.map((c) => esc(c[0])).join(' · ')}</p></div>`;
    };
    const rows = (arr, max) => `<ol class="rows">${arr.map((r) => { const t = r[0], f = r[r.length - 1]; return `<li><span class="rows__t">${esc(t)}</span>${fc(f)}${max ? cnt(t, max) : ''}${copyBtn(t)}</li>`; }).join('')}</ol>`;
    const H = (t, s) => `<h4 class="ob__h">${t}${s ? ` <small>${s}</small>` : ''}</h4>`;
    const LEN = { short: 'Krótka', medium: 'Średnia', long: 'Długa' };
    const MSUB = { subjects: 'Tematy', pre: 'Preheadery', heads: 'Nagłówki i hasła', ctas: 'Przyciski CTA', body: 'Treść maila', seq: 'Sekwencje', ab: 'Plan testów A/B' };
    const BODY = { short: 'Krótka', standard: 'Standardowa', long: 'Rozbudowana' };
    const seg = (map, curV, attr, label) => `<div class="seg" role="group" aria-label="${label}">${Object.entries(map).map(([k, v]) => `<button type="button" data-${attr}="${k}" aria-pressed="${k === curV}">${v}</button>`).join('')}</div>`;

    const views = {
      facts: (p) => `
        <div class="ob__bar"><h3>Karta faktów</h3><div class="ob__acts">${copyBtn(p.facts.map((f) => `F${f.id.slice(1)} ${f.label}: ${f.value} (${f.src})`).join('\n'), 'Kopiuj fakty')}</div></div>
        <p class="ob__lead">Wszystko, co system przeczytał na stronie produktu. Każda treść w pozostałych zakładkach ma znacznik faktu, z którego wynika. Kliknij znacznik, a wrócisz tutaj do źródła.</p>
        <div class="facts">${p.facts.map((f) => `<article class="fact" id="fact-${f.id}"><span class="fact__n">F${f.id.slice(1)}</span><div><p class="fact__l">${esc(f.label)}</p><p class="fact__v">${esc(f.value)}</p><p class="fact__q"><small>${esc(f.src)}</small> „${esc(f.quote)}”</p></div></article>`).join('')}</div>
        <div class="miss">${H('Czego brakuje na stronie produktu', 'system tego nie wymyśla')}<ul>${p.missing.map((m) => `<li>${esc(m)}</li>`).join('')}</ul><p>Te informacje nie pojawią się w żadnej treści, dopóki ich nie uzupełnisz.</p></div>`,
      google: (p) => { const g = p.google; return `
        <div class="ob__bar"><h3>Kampania w wyszukiwarce Google</h3><div class="ob__acts"><button type="button" class="pill pill--ghost pill--sm" id="rsaNext">Inny wariant podglądu</button><button type="button" class="pill pill--accent pill--sm" id="csvBtn">Pobierz CSV do Google Ads Editor</button></div></div>
        <div id="rsaBox">${rsa(p)}</div>
        ${H('Grupy reklam', `${g.groups.length} grupy według intencji`)}
        <div class="groups">${g.groups.map((x) => `<article class="grp"><b>${esc(x.name)}</b><small>${esc(x.intent)}</small><ul>${x.kw.map(([k, m]) => `<li><span>${esc(k)}</span><em>${esc(m)}</em></li>`).join('')}</ul></article>`).join('')}</div>
        ${H('Nagłówki', '15 z 15 · limit 30 znaków')}${rows(g.headlines, 30)}
        ${H('Opisy', '4 z 4 · limit 90 znaków')}${rows(g.descriptions, 90)}
        ${H('Linki do podstron', 'limit 25 / 35 znaków')}
        <div class="sls">${g.sitelinks.map((s) => `<div class="sl"><b>${esc(s[0])}</b> ${cnt(s[0], 25)}<span>${esc(s[1])}</span><span>${esc(s[2])}</span></div>`).join('')}</div>
        <div class="kw"><div>${H('Objaśnienia', 'limit 25 znaków')}${rows(g.callouts, 25)}</div>
        <div>${H('Rozszerzenie informacji', esc(g.snippet[0]))}<p class="tags">${g.snippet[1].map((k) => `<span>${esc(k)}</span>`).join('')}</p>
        ${H('Słowa wykluczające')}<p class="tags tags--neg">${g.negative.map((k) => `<span>−${esc(k)}</span>`).join('')}</p></div></div>`; },
      meta: (p) => { const m = p.meta; return `
        <div class="ob__bar"><h3>Reklamy na Facebooku i Instagramie</h3><div class="ob__acts">${seg(LEN, metaLen, 'len', 'Długość tekstu')}${copyBtn(m.angles.map((a) => `[${a.angle}]\n${a[metaLen]}`).join('\n\n'), 'Kopiuj wszystkie')}</div></div>
        <p class="ob__lead">${m.angles.length} kątów sprzedażowych, każdy w 3 długościach. Długość zmienisz przyciskami powyżej.</p>
        <div class="fbs">${m.angles.map((a, i) => `<article class="fb">
          <p class="fb__angle">Kąt: ${esc(a.angle)} ${fc(a.f)}</p>
          <header><span class="fb__av">SD</span><div><b>Sklep Demo</b><small>Sponsorowane</small></div></header>
          <p class="fb__txt">${esc(a[metaLen]).replace(/\n/g, '<br>')}</p>
          <div class="fb__img"><img src="assets/prod-${p.id}.jpg" alt="" width="600" height="600" loading="lazy"></div>
          <footer><div><small>sklep-demo.pl</small><b>${esc(m.headlines[i][0])}</b></div><span class="fb__cta">Kup teraz</span></footer>
          <div class="fb__copy">${copyBtn(a[metaLen] + '\n\nNagłówek: ' + m.headlines[i][0])}</div>
        </article>`).join('')}</div>
        ${H('Nagłówki reklam', `${m.headlines.length} wariantów · limit 40 znaków`)}${rows(m.headlines, 40)}
        ${H('Opisy linku')}${rows(m.linkDesc, 30)}
        <div class="kw"><div>${H('Grupy odbiorców')}<ul class="lst">${m.audiences.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>
        <div>${H('Scenariusz Reels / Stories', '10 sekund')}<ol class="lst lst--num">${m.reels.map((x) => `<li>${esc(x)}</li>`).join('')}</ol></div></div>`; },
      desc: (p) => {
        const d = p.description, s = d.seo, spec = p.facts.filter((f) => f.id !== 'f16');
        const html = `<h1>${d.titles[0][1]}</h1>\n<p>${d.intro}</p>\n` + d.sections.map(([h, t]) => `<h2>${h}</h2>\n<p>${t}</p>`).join('\n') + `\n<h2>Specyfikacja</h2>\n<table>\n${spec.map((f) => `<tr><th>${f.label}</th><td>${f.value}</td></tr>`).join('\n')}\n</table>\n<h2>Najczęstsze pytania</h2>\n` + d.faq.map(([q, a]) => `<h3>${q}</h3>\n<p>${a}</p>`).join('\n');
        return `
        <div class="ob__bar"><h3>Opis produktu do sklepu</h3><div class="ob__acts">${copyBtn(html, 'Kopiuj HTML')}</div></div>
        ${H('Tytuły produktu', '3 wersje pod kanały')}
        <ol class="rows">${d.titles.map(([l, t], i) => `<li><span class="rows__t"><small class="rows__l">${esc(l)}</small>${esc(t)}</span>${i === 1 ? cnt(t, 75) : ''}${copyBtn(t)}</li>`).join('')}</ol>
        <div class="seo"><p class="seo__h">Podgląd w Google</p><p class="seo__t">${esc(s.metaTitle)}</p><p class="seo__u">sklep-demo.pl${esc(s.url)}</p><p class="seo__d">${esc(s.metaDesc)}</p>
          <p class="seo__c">Meta title ${cnt(s.metaTitle, 60)} · Meta description ${cnt(s.metaDesc, 160)}</p></div>
        <article class="doc"><h4>${esc(d.titles[0][1])}</h4>
          <p class="doc__k">Krótki opis</p><p class="doc__lead">${esc(d.short)}</p>
          <p class="doc__k">Wstęp</p><p>${esc(d.intro)}</p>
          ${d.sections.map(([h, t, f]) => `<h5>${esc(h)} ${fc(f)}</h5><p>${esc(t)}</p>`).join('')}
          <h5>Cecha → korzyść</h5><div class="tblw"><table class="tbl"><tbody>${d.benefits.map(([a, b, f]) => `<tr><th>${esc(a)}</th><td>${esc(b)}</td><td>${fc(f)}</td></tr>`).join('')}</tbody></table></div>
          <h5>Specyfikacja</h5><div class="tblw"><table class="tbl"><tbody>${spec.map((f) => `<tr><th>${esc(f.label)}</th><td>${esc(f.value)}</td><td>${fc(f.id)}</td></tr>`).join('')}</tbody></table></div>
          <h5>Dla kogo</h5><p>${esc(d.forWho)}</p>
          <h5>Co wyróżnia produkt</h5><ul class="lst">${d.standout.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
          <h5>Najczęstsze pytania (${d.faq.length})</h5>${d.faq.map(([q, a, f]) => `<p><b>${esc(q)}</b> ${fc(f)}<br>${esc(a)}</p>`).join('')}
        </article>
        <div class="kw"><div>${H('Słowa kluczowe SEO', 'i gdzie je umieścić')}<ul class="lst">${s.keywords.map(([k, w]) => `<li><b>${esc(k)}</b> · ${esc(w)}</li>`).join('')}</ul></div>
        <div>${H('Teksty alternatywne zdjęć')}<ul class="lst">${s.alts.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div></div>`;
      },
      mail: (p) => {
        const m = p.mailing;
        const sub = {
          subjects: () => `${H('Tematy maili', `${m.subjects.length} wariantów w 5 stylach`)}<ol class="rows">${m.subjects.map(([t, st, f]) => `<li><span class="rows__t"><small class="rows__l">${esc(st)}</small>${esc(t)}</span>${fc(f)}${cnt(t, 50)}${copyBtn(t)}</li>`).join('')}</ol>`,
          pre: () => `${H('Preheadery', `${m.preheaders.length} wariantów · zalecane do 60 znaków`)}${rows(m.preheaders, 60)}`,
          heads: () => `${H('Nagłówki w treści', m.headlines.length + ' wariantów')}${rows(m.headlines)}${H('Hasła', m.slogans.length + ' wariantów')}${rows(m.slogans)}`,
          ctas: () => `${H('Przyciski CTA', m.ctas.length + ' wariantów')}<p class="ctas">${m.ctas.map((c) => `<span class="mail__cta">${esc(c)}</span>`).join('')}</p>`,
          body: () => `<div class="ob__sub">${seg(BODY, bodyLen, 'body', 'Długość maila')}${copyBtn(`Temat: ${m.subjects[0][0]}\nPreheader: ${m.preheaders[0][0]}\n\n${m.body[bodyLen]}`, 'Kopiuj mail')}</div>
            <article class="mail"><header><p><small>Temat</small><b>${esc(m.subjects[0][0])}</b></p><p><small>Preheader</small>${esc(m.preheaders[0][0])}</p></header>
            <div class="mail__body">${esc(m.body[bodyLen]).replace(/\[(.+?)\]/g, '<span class="mail__cta">$1</span>').replace(/\n/g, '<br>')}</div></article>`,
          seq: () => m.sequences.map((s) => `<article class="seq">${H(esc(s.name), 'cel: ' + esc(s.goal))}<ol>${s.emails.map(([w, t, ph, d, f]) => `<li><span class="seq__w">${esc(w)}</span><div><b>${esc(t)}</b><small>${esc(ph)}</small><p>${esc(d)}</p>${fc(f)}</div></li>`).join('')}</ol></article>`).join(''),
          ab: () => `${H('Plan testów A/B', 'najpierw tematy, potem przyciski')}<ol class="lst lst--num">${m.ab.map((x) => `<li>${esc(x)}</li>`).join('')}</ol>`
        };
        return `<div class="ob__bar"><h3>Mailing</h3></div>
        <div class="mtabs" role="group" aria-label="Elementy mailingu">${Object.entries(MSUB).map(([k, v]) => `<button type="button" data-msub="${k}" aria-pressed="${k === mailSub}">${v}</button>`).join('')}</div>
        ${sub[mailSub]()}`;
      },
      blog: (p) => {
        const b = p.blog;
        return `
        <div class="ob__bar"><h3>Artykuły na bloga</h3><div class="ob__acts">${copyBtn(`${b.title}\n\n${b.intro}\n\n` + b.outline.map(([h, x]) => `## ${h}\n- ${x}`).join('\n'), 'Kopiuj szkic')}</div></div>
        ${H('Pomysły na tematy', b.ideas.length + ' propozycji')}
        <ol class="ideas">${b.ideas.map(([t, k], i) => `<li class="${i === 0 ? 'is-on' : ''}"><span>${esc(t)}</span><small>${esc(k)}</small></li>`).join('')}</ol>
        <article class="doc"><h4>${esc(b.title)}</h4><p class="seo__c">Meta description ${cnt(b.metaDesc, 160)}</p><p class="doc__lead">${esc(b.intro)}</p>
          <p class="pc__h">Struktura artykułu</p><ol class="outline">${b.outline.map(([h, x]) => `<li><b>${esc(h)}</b><small>${esc(x)}</small></li>`).join('')}</ol>
          <p class="doc__note">W pełnej wersji system pisze cały artykuł (1 200–1 800 słów) z linkiem do produktu i sekcją FAQ.</p></article>`;
      }
    };

    const renderTab = () => {
      $('#demoPanel', demo).innerHTML = views[tab](cur);
      demo.querySelectorAll('.otabs [role=tab]').forEach((t) => t.setAttribute('aria-selected', t.dataset.tab === tab));
    };
    const show = (p) => {
      cur = p; previewI = 0;
      $('#demoProduct', demo).innerHTML = productCard(p);
      demo.querySelectorAll('.dchip').forEach((c) => c.setAttribute('aria-pressed', c.dataset.p === p.id));
      renderTab();
    };
    const run = (p, msg) => {
      clearTimeout(timer); input.value = p.url; note.hidden = !msg; if (msg) note.textContent = msg;
      out.classList.add('is-loading'); steps.hidden = false;
      const gen = $('#demoGen', demo); if (gen && !reduce) { gen.classList.add('is-on'); const gv = gen.querySelector('video'); gv.play().catch(() => {}); }
      const li = [...steps.querySelectorAll('li')]; li.forEach((x) => x.className = '');
      const step = reduce ? 0 : 520;
      li.forEach((x, i) => setTimeout(() => { li.forEach((y, j) => { y.className = j < i ? 'is-done' : j === i ? 'is-now' : ''; }); }, i * step));
      timer = setTimeout(() => { li.forEach((y) => y.className = 'is-done'); out.classList.remove('is-loading'); const gen = $('#demoGen', demo); if (gen) { gen.classList.remove('is-on'); setTimeout(() => gen.querySelector('video').pause(), 400); } show(p); }, li.length * step + 80);
    };
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const v = input.value.trim().toLowerCase();
      const hit = P.find((p) => v.includes(p.id) || v === p.url);
      if (hit) run(hit);
      else run(cur, 'W wersji demo treści powstają tylko dla trzech przykładowych produktów. Pełna wersja przeczyta dowolny link z Twojego sklepu.');
    });
    demo.addEventListener('click', (e) => {
      const chip = e.target.closest('.dchip'); if (chip) { run(P.find((p) => p.id === chip.dataset.p)); return; }
      const t = e.target.closest('.otabs [role=tab]'); if (t) { tab = t.dataset.tab; renderTab(); return; }
      const fx = e.target.closest('[data-fact]'); if (fx) { e.preventDefault(); tab = 'facts'; renderTab(); const el = $('#fact-' + fx.dataset.fact, demo); if (el) { el.scrollIntoView({ block: 'center', behavior: reduce ? 'auto' : 'smooth' }); el.classList.add('is-hl'); setTimeout(() => el.classList.remove('is-hl'), 1600); } return; }
      const sg = e.target.closest('[data-len],[data-msub],[data-body]'); if (sg) { if (sg.dataset.len) metaLen = sg.dataset.len; if (sg.dataset.msub) mailSub = sg.dataset.msub; if (sg.dataset.body) bodyLen = sg.dataset.body; renderTab(); return; }
      if (e.target.closest('#rsaNext')) { previewI++; $('#rsaBox', demo).innerHTML = rsa(cur); return; }
      if (e.target.closest('#csvBtn')) {
        const g = cur.google, q = (s) => `"${String(s).replace(/"/g, '""')}"`;
        const H1 = g.headlines.map((x) => x[0]), D1 = g.descriptions.map((x) => x[0]);
        const head = ['Campaign', 'Ad group', 'Keyword', 'Criterion Type', ...H1.map((_, i) => 'Headline ' + (i + 1)), ...D1.map((_, i) => 'Description ' + (i + 1)), 'Final URL'];
        const MT = { fraza: 'Phrase', 'ścisłe': 'Exact', 'przybliżone': 'Broad' };
        const lines = [head.map(q).join(',')];
        g.groups.forEach((gr) => { lines.push(['MODERA demo', gr.name, '', '', ...H1, ...D1, cur.url].map(q).join(',')); gr.kw.forEach(([k, m]) => lines.push(['MODERA demo', gr.name, k.replace(/[[\]]/g, ''), MT[m] || 'Broad', ...H1.map(() => ''), ...D1.map(() => ''), ''].map(q).join(','))); });
        const blob = new Blob(['﻿' + lines.join('\n') + '\n'], { type: 'text/csv;charset=utf-8' });
        const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `google-ads-${cur.id}.csv`; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
        return;
      }
      const c = e.target.closest('.cpy');
      if (c) {
        const done = () => { const s = c.querySelector('span'); const o = s.textContent; c.classList.add('is-ok'); s.textContent = 'Skopiowano'; setTimeout(() => { c.classList.remove('is-ok'); s.textContent = o; }, 1400); };
        (navigator.clipboard ? navigator.clipboard.writeText(c.dataset.copy) : Promise.reject()).then(done, () => {
          const ta = document.createElement('textarea'); ta.value = c.dataset.copy; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); done(); } catch {} ta.remove();
        });
      }
    });
    const start = P.find((p) => location.hash === '#' + p.id) || P[0];
    show(start); input.value = start.url;
  }

  /* ---------- comparison bars ---------- */
  const bars = $('.bars');
  if (bars && !reduce && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('js-anim');
    new IntersectionObserver(([en], o) => { if (en.isIntersecting) { bars.classList.add('is-in'); o.disconnect(); } }, { threshold: .4 }).observe(bars);
  }

  /* ---------- pricing billing toggle ---------- */
  const bill = $('#billToggle');
  if (bill) {
    bill.addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return;
      const yearly = b.dataset.bill === 'year';
      bill.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', x === b));
      document.querySelectorAll('[data-m]').forEach((el) => { el.classList.remove('is-swap'); void el.offsetWidth; el.textContent = yearly ? el.dataset.y : el.dataset.m; el.classList.add('is-swap'); });
      document.querySelectorAll('.bill-note').forEach((el) => { el.textContent = yearly ? 'netto / mies., płatne rocznie' : 'netto / mies.'; });
    });
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

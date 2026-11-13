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
    let cur = P[0], tab = 'google', mailI = 0, previewI = 0, timer;

    const productCard = (p) => `
      <div class="pc__img"><svg class="ic" aria-hidden="true"><use href="#${ICONS[p.icon]}"/></svg></div>
      <p class="pc__cat">${esc(p.category)}</p>
      <h3>${esc(p.name)}</h3>
      <p class="pc__price">${esc(p.price)}</p>
      <dl class="pc__facts">${p.facts.map(([a, b]) => `<div><dt>${esc(a)}</dt><dd>${esc(b)}</dd></div>`).join('')}</dl>
      <p class="pc__h">Dla kogo</p><p class="pc__aud">${esc(p.audience)}</p>
      <p class="pc__h">Kluczowe korzyści</p><ul class="pc__ben">${p.benefits.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
      <p class="pc__src">Źródło: ${esc(p.url.replace('https://', ''))}</p>`;

    const rsa = (p) => {
      const h = p.google.headlines, d = p.google.descriptions, n = h.length;
      const i = previewI % n;
      return `<div class="serp"><p class="serp__ad"><b>Sponsorowane</b> · sklep-demo.pl</p><p class="serp__h">${esc(h[i])} | ${esc(h[(i + 4) % n])} | ${esc(h[(i + 9) % n])}</p><p class="serp__d">${esc(d[previewI % d.length])}</p></div>`;
    };

    const views = {
      google: (p) => `
        <div class="ob__bar"><h3>Reklama elastyczna w wyszukiwarce</h3><div class="ob__acts"><button type="button" class="pill pill--ghost pill--sm" id="rsaNext">Inny wariant podglądu</button><button type="button" class="pill pill--accent pill--sm" id="csvBtn">Pobierz CSV do Google Ads Editor</button></div></div>
        <div id="rsaBox">${rsa(p)}</div>
        <h4 class="ob__h">Nagłówki <small>${p.google.headlines.length} z 15 · limit 30 znaków</small></h4>
        <ol class="rows">${p.google.headlines.map((h) => `<li><span class="rows__t">${esc(h)}</span>${cnt(h, 30)}${copyBtn(h)}</li>`).join('')}</ol>
        <h4 class="ob__h">Opisy <small>4 z 4 · limit 90 znaków</small></h4>
        <ol class="rows">${p.google.descriptions.map((h) => `<li><span class="rows__t">${esc(h)}</span>${cnt(h, 90)}${copyBtn(h)}</li>`).join('')}</ol>
        <div class="kw"><div><h4 class="ob__h">Słowa kluczowe</h4><p class="tags">${p.google.keywords.map((k) => `<span>${esc(k)}</span>`).join('')}</p></div>
        <div><h4 class="ob__h">Wykluczające</h4><p class="tags tags--neg">${p.google.negative.map((k) => `<span>−${esc(k)}</span>`).join('')}</p></div></div>`,
      meta: (p) => `
        <div class="ob__bar"><h3>Reklamy na Facebooku i Instagramie</h3><div class="ob__acts">${copyBtn(p.meta.map((m) => `[${m.angle}]\n${m.text}\nNagłówek: ${m.headline}`).join('\n\n'), 'Kopiuj wszystkie')}</div></div>
        <div class="fbs">${p.meta.map((m) => `<article class="fb">
          <p class="fb__angle">Kąt: ${esc(m.angle)}</p>
          <header><span class="fb__av">SD</span><div><b>Sklep Demo</b><small>Sponsorowane</small></div></header>
          <p class="fb__txt">${esc(m.text).replace(/\n/g, '<br>')}</p>
          <div class="fb__img"><svg class="ic" aria-hidden="true"><use href="#${ICONS[p.icon]}"/></svg></div>
          <footer><div><small>sklep-demo.pl</small><b>${esc(m.headline)}</b></div><span class="fb__cta">${esc(m.cta)}</span></footer>
          <div class="fb__copy">${copyBtn(m.text + '\n\nNagłówek: ' + m.headline)}</div>
        </article>`).join('')}</div>`,
      desc: (p) => {
        const d = p.description;
        const html = `<h1>${d.title}</h1>\n<p>${d.short}</p>\n` + d.sections.map(([h, t]) => `<h2>${h}</h2>\n<p>${t}</p>`).join('\n') + `\n<h2>Najczęstsze pytania</h2>\n` + d.faq.map(([q, a]) => `<h3>${q}</h3>\n<p>${a}</p>`).join('\n');
        return `
        <div class="ob__bar"><h3>Opis produktu do sklepu</h3><div class="ob__acts">${copyBtn(html, 'Kopiuj HTML')}</div></div>
        <div class="seo"><p class="seo__h">Podgląd w Google</p><p class="seo__t">${esc(d.metaTitle)}</p><p class="seo__u">sklep-demo.pl › ${esc(p.id)}</p><p class="seo__d">${esc(d.metaDesc)}</p>
          <p class="seo__c">Meta title ${cnt(d.metaTitle, 60)} · Meta description ${cnt(d.metaDesc, 160)}</p></div>
        <article class="doc"><h4>${esc(d.title)}</h4><p class="doc__lead">${esc(d.short)}</p>
          ${d.sections.map(([h, t]) => `<h5>${esc(h)}</h5><p>${esc(t)}</p>`).join('')}
          <h5>Najczęstsze pytania</h5>${d.faq.map(([q, a]) => `<p><b>${esc(q)}</b><br>${esc(a)}</p>`).join('')}</article>`;
      },
      mail: (p) => {
        const m = p.mailing[mailI];
        return `
        <div class="ob__bar"><h3>Mailingi i sekwencje</h3><div class="ob__acts">${copyBtn(`Temat: ${m.subject}\nPreheader: ${m.preheader}\n\n${m.body}`, 'Kopiuj ten mail')}</div></div>
        <div class="mails"><div class="mails__list" role="tablist" aria-label="Maile w sekwencji">${p.mailing.map((x, i) => `<button type="button" role="tab" aria-selected="${i === mailI}" data-mail="${i}"><b>${esc(x.name)}</b><small>${esc(x.subject)}</small></button>`).join('')}</div>
        <article class="mail"><header><p><small>Temat</small><b>${esc(m.subject)}</b></p><p><small>Preheader</small>${esc(m.preheader)}</p></header>
          <div class="mail__body">${esc(m.body).replace(/\[(.+?)\]/g, '').trim().replace(/\n/g, '<br>')}<p><span class="mail__cta">${esc(m.cta)}</span></p></div></article></div>`;
      },
      blog: (p) => {
        const b = p.blog;
        return `
        <div class="ob__bar"><h3>Artykuły na bloga</h3><div class="ob__acts">${copyBtn(`${b.title}\n\n${b.intro}\n\n` + b.outline.map((o) => '## ' + o).join('\n'), 'Kopiuj szkic')}</div></div>
        <h4 class="ob__h">Pomysły na tematy</h4>
        <ol class="ideas">${b.ideas.map((x, i) => `<li class="${i === 0 ? 'is-on' : ''}">${esc(x)}</li>`).join('')}</ol>
        <article class="doc"><h4>${esc(b.title)}</h4><p class="seo__c">Meta description ${cnt(b.metaDesc, 160)}</p><p class="doc__lead">${esc(b.intro)}</p>
          <p class="pc__h">Struktura artykułu</p><ol class="outline">${b.outline.map((o) => `<li>${esc(o)}</li>`).join('')}</ol>
          <p class="doc__note">W pełnej wersji system pisze cały artykuł (1 200–1 800 słów) z linkiem do produktu i sekcją FAQ.</p></article>`;
      }
    };

    const renderTab = () => {
      $('#demoPanel', demo).innerHTML = views[tab](cur);
      demo.querySelectorAll('.otabs [role=tab]').forEach((t) => t.setAttribute('aria-selected', t.dataset.tab === tab));
    };
    const show = (p) => {
      cur = p; mailI = 0; previewI = 0;
      $('#demoProduct', demo).innerHTML = productCard(p);
      demo.querySelectorAll('.dchip').forEach((c) => c.setAttribute('aria-pressed', c.dataset.p === p.id));
      renderTab();
    };
    const run = (p, msg) => {
      clearTimeout(timer); input.value = p.url; note.hidden = !msg; if (msg) note.textContent = msg;
      out.classList.add('is-loading'); steps.hidden = false;
      const li = [...steps.querySelectorAll('li')]; li.forEach((x) => x.className = '');
      const step = reduce ? 0 : 520;
      li.forEach((x, i) => setTimeout(() => { li.forEach((y, j) => { y.className = j < i ? 'is-done' : j === i ? 'is-now' : ''; }); }, i * step));
      timer = setTimeout(() => { li.forEach((y) => y.className = 'is-done'); out.classList.remove('is-loading'); show(p); }, li.length * step + 80);
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
      const m = e.target.closest('[data-mail]'); if (m) { mailI = +m.dataset.mail; renderTab(); return; }
      if (e.target.closest('#rsaNext')) { previewI++; $('#rsaBox', demo).innerHTML = rsa(cur); return; }
      if (e.target.closest('#csvBtn')) {
        const g = cur.google, q = (s) => `"${String(s).replace(/"/g, '""')}"`;
        const head = ['Campaign', 'Ad group', ...g.headlines.map((_, i) => `Headline ${i + 1}`), ...g.descriptions.map((_, i) => `Description ${i + 1}`), 'Final URL'];
        const row = ['MODERA demo', cur.short, ...g.headlines, ...g.descriptions, cur.url];
        const blob = new Blob(['﻿' + head.map(q).join(',') + '\n' + row.map(q).join(',') + '\n'], { type: 'text/csv;charset=utf-8' });
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

  /* ---------- pricing billing toggle ---------- */
  const bill = $('#billToggle');
  if (bill) {
    bill.addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return;
      const yearly = b.dataset.bill === 'year';
      bill.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', x === b));
      document.querySelectorAll('[data-m]').forEach((el) => { el.textContent = yearly ? el.dataset.y : el.dataset.m; });
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

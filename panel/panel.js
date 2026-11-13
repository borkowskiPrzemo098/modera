/* MODERA — panel klienta (prototyp bez AI i bez serwera). Dane demo + localStorage. */
(() => {
  const app = document.getElementById('app');
  const P = window.MODERA_DEMO || [], B = window.MODERA_BRIEF || {};
  const KEY = 'modera-panel-v1';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const ic = (id, c = '') => `<svg class="ic ${c}" aria-hidden="true"><use href="#${id}"/></svg>`;
  const len = (s) => [...String(s)].length;

  /* ---------- Stan ---------- */
  const fresh = () => ({
    user: null,
    plan: { name: 'Sklep', limit: 200, used: 37, price: 449, renew: '13.12.2026' },
    brand: { name: 'Kawowy Kąt', url: 'kawowykat-demo.pl', complete: 92 },
    products: P.map((p, i) => ({ id: p.id, added: ['12.11.2026', '10.11.2026', '07.11.2026'][i], status: ['review', 'approved', 'draft'][i] })),
    edits: {}, votes: {}, approved: {},
    history: [
      { when: '13.11.2026 09:42', what: 'Wygenerowano komplet treści', prod: 'kaffo', who: 'Ty' },
      { when: '12.11.2026 16:10', what: 'Zatwierdzono reklamy Google', prod: 'treko', who: 'Anna (zespół)' },
      { when: '12.11.2026 15:58', what: 'Zmieniono styl na „Ciepły”', prod: 'treko', who: 'Ty' },
      { when: '10.11.2026 11:05', what: 'Eksport CSV do Google Ads', prod: 'treko', who: 'Ty' },
      { when: '07.11.2026 13:20', what: 'Dodano produkt z linku', prod: 'luma', who: 'Ty' }
    ]
  });
  let S; try { S = JSON.parse(localStorage.getItem(KEY)) || fresh(); } catch { S = fresh(); }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch {} };
  const prod = (id) => P.find((p) => p.id === id);
  const toast = (t) => { const el = document.getElementById('toast'); el.textContent = t; el.classList.add('is-on'); clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove('is-on'), 2200); };
  const log = (what, prodId) => { const d = new Date(); const p2 = (n) => String(n).padStart(2, '0'); S.history.unshift({ when: `${p2(d.getDate())}.${p2(d.getMonth() + 1)}.${d.getFullYear()} ${p2(d.getHours())}:${p2(d.getMinutes())}`, what, prod: prodId, who: 'Ty' }); S.history = S.history.slice(0, 40); };

  const STATUS = { draft: ['Szkic', 'st--draft'], review: ['Do akceptacji', 'st--review'], approved: ['Zatwierdzony', 'st--ok'] };
  const STG = { cold: 'Zimny odbiorca', warm: 'Rozważa zakup', cart: 'Porzucił koszyk' };
  const STY = { rzeczowy: 'Rzeczowy', opisowy: 'Opisowy', zabawny: 'Zabawny', premium: 'Premium', ekspercki: 'Ekspercki', cieply: 'Ciepły' };
  const LEN = { short: 'Krótko', medium: 'Standard', long: 'Długo' };
  const ui = { stage: 'cold', style: 'rzeczowy', length: 'medium', tab: 'google', mailSub: 'subjects' };

  /* ---------- Logowanie ---------- */
  const login = () => `
    <main class="login">
      <section class="login__card">
        <a class="brand" href="../index.html"><svg class="brand__logo" aria-hidden="true"><use href="#logo-mark"/></svg><span class="brand__word">modera</span></a>
        <h1>Zaloguj się do panelu</h1>
        <p class="muted">To wersja demonstracyjna. Wpisz dowolny adres e-mail: hasło nie jest sprawdzane, a dane zostają tylko w Twojej przeglądarce.</p>
        <form id="loginForm" class="form">
          <label class="fld"><span>E-mail</span><input id="lEmail" type="email" autocomplete="email" required value="demo@kawowykat-demo.pl"></label>
          <label class="fld"><span>Hasło</span><input id="lPass" type="password" autocomplete="current-password" placeholder="dowolne w wersji demo"></label>
          <button class="btn btn--accent btn--block" type="submit">Zaloguj się</button>
        </form>
        <p class="login__foot"><a href="../index.html">← Wróć na stronę MODERA</a></p>
      </section>
      <aside class="login__side" aria-hidden="true">
        <p class="kick">Co znajdziesz w panelu</p>
        <ul>
          <li>${ic('i-link')}Produkty z linku lub pliku</li>
          <li>${ic('i-flag')}Brief i strategia przed pisaniem</li>
          <li>${ic('i-style')}6 stylów i 3 długości tekstu</li>
          <li>${ic('i-yes')}Akceptacja i eksport do kampanii</li>
        </ul>
      </aside>
    </main>`;

  /* ---------- Szkielet ---------- */
  const NAV = [['pulpit', 'Pulpit', 'i-stats'], ['produkty', 'Produkty', 'i-cart'], ['marki', 'Marki', 'i-flag'], ['historia', 'Historia', 'i-clock'], ['konto', 'Konto i abonament', 'i-users']];
  const shell = (route, body) => `
    <div class="shell">
      <aside class="side" id="side">
        <a class="brand brand--dark" href="#/pulpit"><svg class="brand__logo" aria-hidden="true"><use href="#logo-mark"/></svg><span class="brand__word">modera</span></a>
        <nav class="side__nav" aria-label="Panel">${NAV.map(([r, t, i]) => `<a href="#/${r}" ${route === r ? 'aria-current="page"' : ''}>${ic(i)}${t}</a>`).join('')}</nav>
        <div class="side__plan">
          <p>Pakiet <b>${S.plan.name}</b></p>
          <div class="meter"><i style="width:${Math.round(S.plan.used / S.plan.limit * 100)}%"></i></div>
          <p class="muted">${S.plan.used} z ${S.plan.limit} produktów w tym miesiącu</p>
        </div>
        <div class="side__user"><span class="av">${esc((S.user || 'D')[0].toUpperCase())}</span><div><b>${esc(S.user)}</b><small>${esc(S.brand.name)}</small></div><button type="button" class="iconbtn" data-act="logout" aria-label="Wyloguj">${ic('i-arrow')}</button></div>
      </aside>
      <div class="main">
        <header class="top">
          <button type="button" class="iconbtn top__menu" data-act="menu" aria-label="Menu" aria-controls="side" aria-expanded="false"><span></span><span></span></button>
          <p class="top__demo">${ic('i-spark')}Wersja demo<span class="top__more"> · treści przygotowane wcześniej, bez AI</span></p>
          <button type="button" class="btn btn--accent btn--sm" data-act="add">${ic('i-link')}Dodaj produkt</button>
        </header>
        <main class="view" id="view" tabindex="-1">${body}</main>
      </div>
    </div>
    <div class="modal" id="modal" hidden></div>`;

  /* ---------- Widoki ---------- */
  const statusChip = (s) => `<span class="st ${STATUS[s][1]}">${STATUS[s][0]}</span>`;
  const V = {};
  V.pulpit = () => {
    const pct = Math.round(S.plan.used / S.plan.limit * 100);
    const cnt = (s) => S.products.filter((p) => p.status === s).length;
    return `
      <div class="vhead"><div><p class="kick">Dzień dobry</p><h1>Pulpit</h1></div><a class="btn btn--ghost" href="../demo.html">Zobacz publiczne demo</a></div>
      <div class="kpis">
        <article class="kpi kpi--dark"><p>Wykorzystanie pakietu</p><b>${S.plan.used}<small> / ${S.plan.limit}</small></b><div class="meter meter--dark"><i style="width:${pct}%"></i></div><small>Odnowienie ${S.plan.renew}</small></article>
        <article class="kpi"><p>Do akceptacji</p><b>${cnt('review')}</b><small>produkty czekają na Twoją decyzję</small></article>
        <article class="kpi"><p>Zatwierdzone</p><b>${cnt('approved')}</b><small>gotowe do eksportu</small></article>
        <article class="kpi"><p>Karta marki</p><b>${S.brand.complete}%</b><small>${esc(S.brand.name)} · <a href="#/marki">uzupełnij</a></small></article>
      </div>
      <div class="grid2">
        <section class="card"><div class="card__h"><h2>Ostatnie produkty</h2><a href="#/produkty">Wszystkie</a></div>
          <ul class="plist">${S.products.map((sp) => { const p = prod(sp.id); return `<li><a href="#/produkt/${p.id}"><img src="../assets/prod-${p.id}.jpg" alt="" width="48" height="48" loading="lazy"><span><b>${esc(p.short)}</b><small>${esc(p.category)} · dodano ${sp.added}</small></span>${statusChip(sp.status)}</a></li>`; }).join('')}</ul>
        </section>
        <section class="card"><div class="card__h"><h2>Aktywność</h2><a href="#/historia">Historia</a></div>
          <ol class="feed">${S.history.slice(0, 5).map((h) => `<li><span class="feed__dot"></span><div><b>${esc(h.what)}</b><small>${esc(prod(h.prod)?.short || '')} · ${esc(h.when)} · ${esc(h.who)}</small></div></li>`).join('')}</ol>
        </section>
      </div>
      <section class="card card--cta"><div><h2>Dodaj kolejny produkt</h2><p class="muted">Wklej link ze sklepu. System przeczyta stronę, przygotuje kartę faktów i komplet treści.</p></div><button type="button" class="btn btn--accent" data-act="add">${ic('i-link')}Dodaj produkt</button></section>`;
  };
  V.produkty = () => `
    <div class="vhead"><div><p class="kick">${S.products.length} produkty</p><h1>Produkty</h1></div><div class="vhead__acts"><button type="button" class="btn btn--ghost" data-act="bulk">${ic('i-sheet')}Wgraj plik</button><button type="button" class="btn btn--accent" data-act="add">${ic('i-link')}Dodaj z linku</button></div></div>
    <section class="card card--flush">
      <table class="tbl"><thead><tr><th scope="col">Produkt</th><th scope="col">Kategoria</th><th scope="col">Fakty</th><th scope="col">Status</th><th scope="col"><span class="sr">Akcje</span></th></tr></thead>
      <tbody>${S.products.map((sp) => { const p = prod(sp.id); return `<tr><td><a class="tprod" href="#/produkt/${p.id}"><img src="../assets/prod-${p.id}.jpg" alt="" width="44" height="44" loading="lazy"><span><b>${esc(p.short)}</b><small>${esc(p.url.replace('https://', ''))}</small></span></a></td><td data-l="Kategoria">${esc(p.category)}</td><td data-l="Fakty">${p.facts.length} <small class="muted">· ${p.missing.length} braki</small></td><td data-l="Status">${statusChip(sp.status)}</td><td><a class="btn btn--ghost btn--sm" href="#/produkt/${p.id}">Otwórz</a></td></tr>`; }).join('')}</tbody></table>
    </section>`;

  /* --- Widok produktu --- */
  const k = (pid, key) => `${pid}:${key}`;
  const val = (pid, key, orig) => S.edits[k(pid, key)] ?? orig;
  const item = (pid, key, text, { max, f, label } = {}) => {
    const t = val(pid, key, text), v = S.votes[k(pid, key)], ok = S.approved[k(pid, key)];
    return `<li class="it ${ok ? 'is-ok' : ''}" data-key="${key}">
      ${label ? `<small class="it__l">${esc(label)}</small>` : ''}
      <div class="it__t" contenteditable="true" spellcheck="true" data-edit="${key}" ${max ? `data-max="${max}"` : ''}>${esc(t)}</div>
      <div class="it__m">${f ? `<span class="fx">${f.split(',').map((x) => `<span title="Fakt ${x.slice(1)}">F${x.slice(1)}</span>`).join('')}</span>` : ''}${max ? `<span class="cc ${len(t) > max ? 'cc--bad' : ''}" data-cc="${key}">${len(t)}/${max}</span>` : ''}
        <span class="it__acts"><button type="button" class="vb ${v === 1 ? 'is-on' : ''}" data-vote="${key}" data-v="1" aria-label="Dobre">👍</button><button type="button" class="vb ${v === -1 ? 'is-on' : ''}" data-vote="${key}" data-v="-1" aria-label="Słabe">👎</button><button type="button" class="okb" data-ok="${key}" aria-pressed="${!!ok}">${ic('i-yes')}<span>${ok ? 'Zatwierdzone' : 'Zatwierdź'}</span></button></span></div></li>`;
  };
  const list = (pid, prefix, arr, opt = {}) => `<ol class="its">${arr.map((r, i) => { const a = Array.isArray(r) ? r : [r]; return item(pid, `${prefix}.${i}`, a[0], { ...opt, f: a[a.length - 1] !== a[0] ? a[a.length - 1] : '', label: opt.labelIdx != null ? a[opt.labelIdx] : '' }); }).join('')}</ol>`;
  const seg = (map, cur, attr) => `<div class="seg" role="group">${Object.entries(map).map(([kk, v]) => `<button type="button" data-${attr}="${kk}" aria-pressed="${kk === cur}">${v}</button>`).join('')}</div>`;

  const TABS = { google: 'Google Ads', meta: 'Facebook i Instagram', desc: 'Opis produktu', mail: 'Mailing', blog: 'Blog' };
  const tabBody = (p) => {
    const id = p.id;
    if (ui.tab === 'google') { const g = p.google; return `
      <h3 class="h3">Nagłówki <small>limit 30 znaków</small></h3>${list(id, 'g.h', g.headlines, { max: 30 })}
      <h3 class="h3">Opisy <small>limit 90 znaków</small></h3>${list(id, 'g.d', g.descriptions, { max: 90 })}
      <h3 class="h3">Objaśnienia <small>limit 25 znaków</small></h3>${list(id, 'g.c', g.callouts, { max: 25 })}
      <h3 class="h3">Grupy reklam i słowa kluczowe</h3><div class="groups">${g.groups.map((x) => `<article class="grp"><b>${esc(x.name)}</b><small>${esc(x.intent)}</small><ul>${x.kw.map(([kw, m]) => `<li><span>${esc(kw)}</span><em>${esc(m)}</em></li>`).join('')}</ul></article>`).join('')}</div>`; }
    if (ui.tab === 'meta') { const m = p.meta, L = ui.length; return `
      <p class="note">Długość tekstu: <b>${LEN[L]}</b>. Zmienisz ją przełącznikiem na górze.</p>
      ${list(id, `m.${L}`, m.angles.map((a) => [a[L], a.angle, a.f]), { labelIdx: 1 })}
      <h3 class="h3">Nagłówki reklam <small>limit 40 znaków</small></h3>${list(id, 'm.h', m.headlines, { max: 40 })}`; }
    if (ui.tab === 'desc') { const d = p.description; return `
      <h3 class="h3">Tytuły</h3>${list(id, 'd.t', d.titles.map(([l, t]) => [t, l, '']), { labelIdx: 1 })}
      <h3 class="h3">Krótki opis i wstęp</h3>${list(id, 'd.s', [[d.short, 'Krótki opis', ''], [d.intro, 'Wstęp', '']], { labelIdx: 1 })}
      <h3 class="h3">Sekcje opisu</h3>${list(id, 'd.sec', d.sections.map(([h, t, f]) => [t, h, f]), { labelIdx: 1 })}
      <h3 class="h3">FAQ</h3>${list(id, 'd.faq', d.faq.map(([q, a, f]) => [a, q, f]), { labelIdx: 1 })}
      <h3 class="h3">SEO</h3>${list(id, 'd.seo', [[d.seo.metaTitle, 'Meta title', ''], [d.seo.metaDesc, 'Meta description', '']], { labelIdx: 1 })}`; }
    if (ui.tab === 'mail') { const m = p.mailing; const SUB = { subjects: 'Tematy', pre: 'Preheadery', body: 'Treść', seq: 'Sekwencje' };
      const b = { subjects: () => list(id, 'ml.s', m.subjects.map(([t, st, f]) => [t, st, f]), { labelIdx: 1, max: 50 }), pre: () => list(id, 'ml.p', m.preheaders, { max: 60 }),
        body: () => list(id, `ml.b.${ui.length}`, [[m.body[{ short: 'short', medium: 'standard', long: 'long' }[ui.length]], `Treść maila · ${LEN[ui.length]}`, '']], { labelIdx: 1 }),
        seq: () => m.sequences.map((s, si) => `<h3 class="h3">${esc(s.name)} <small>cel: ${esc(s.goal)}</small></h3>${list(id, `ml.q${si}`, s.emails.map(([w, t, ph, d, f]) => [t, w + ' · ' + ph, f]), { labelIdx: 1 })}`).join('') };
      return `${seg(SUB, ui.mailSub, 'msub')}${b[ui.mailSub]()}`; }
    const bl = p.blog; return `
      <h3 class="h3">Tematy artykułów</h3>${list(id, 'b.i', bl.ideas.map(([t, ty]) => [t, ty, '']), { labelIdx: 1 })}
      <h3 class="h3">Wybrany artykuł</h3>${list(id, 'b.a', [[bl.title, 'Tytuł', ''], [bl.metaDesc, 'Meta description', ''], [bl.intro, 'Wstęp', '']], { labelIdx: 1 })}`;
  };
  const progress = (p) => { const keys = [...document.querySelectorAll('[data-key]')].map((e) => e.dataset.key); return keys; };
  V.produkt = (id) => {
    const p = prod(id); if (!p) return V.produkty();
    const sp = S.products.find((x) => x.id === id), b = B[id], s = b?.stages[ui.stage], st = b?.styles[ui.style];
    const approvedCount = Object.keys(S.approved).filter((x) => x.startsWith(id + ':') && S.approved[x]).length;
    return `
      <div class="vhead"><div><p class="kick"><a href="#/produkty">Produkty</a> / ${esc(p.category)}</p><h1>${esc(p.short)}</h1></div>
        <div class="vhead__acts">${statusChip(sp.status)}<div class="dd"><button type="button" class="btn btn--ghost" data-act="exportmenu" aria-expanded="false">${ic('i-share')}Eksport</button>
          <div class="dd__m" hidden><button type="button" data-export="csv">CSV do Google Ads Editor</button><button type="button" data-export="html">HTML opisu do sklepu</button><button type="button" data-export="txt">Wszystkie teksty (.txt)</button></div></div>
          <button type="button" class="btn btn--accent" data-act="approveall">${ic('i-yes')}Zatwierdź produkt</button></div></div>
      <div class="pw">
        <aside class="pw__side">
          <section class="card card--tight"><img class="pw__img" src="../assets/prod-${p.id}.jpg" alt="${esc(p.short)}" width="600" height="600"><p class="pw__price">${esc(p.price)}</p><p class="muted">${esc(p.url.replace('https://', ''))}</p></section>
          <section class="card card--tight"><div class="card__h"><h2>Karta faktów</h2><span class="muted">${p.facts.length}</span></div>
            <dl class="facts">${p.facts.map((f) => `<div><dt>F${f.id.slice(1)} · ${esc(f.label)}</dt><dd>${esc(f.value)}</dd></div>`).join('')}</dl>
            <div class="miss"><b>Brakuje na stronie</b><ul>${p.missing.map((m) => `<li>${esc(m)}</li>`).join('')}</ul></div></section>
        </aside>
        <div class="pw__main">
          <section class="card ctl">
            <div class="ctl__row"><span class="ctl__l">Etap zakupu</span>${seg(STG, ui.stage, 'stage')}</div>
            <div class="ctl__row"><span class="ctl__l">Styl</span>${seg(STY, ui.style, 'style')}</div>
            <div class="ctl__row"><span class="ctl__l">Długość</span>${seg(LEN, ui.length, 'len')}</div>
          </section>
          ${s ? `<section class="card brief"><div class="brief__main"><p class="kick">Strategia · ${STG[ui.stage]}</p><p class="brief__p">${esc(s.promise[0])}</p><p class="muted">Cel: ${esc(s.goal)}. Kąty: ${s.angles.map((a) => esc(a[0])).join(', ')}. CTA: „${esc(s.cta)}”.</p></div>
            <div class="brief__style"><p class="kick">Przekaz w stylu: ${STY[ui.style]}</p><p class="brief__h">${esc(st.h)}</p><p>${esc(ui.length === 'long' ? st.long : st.short)}</p></div></section>` : ''}
          <section class="card">
            <div class="tabs" role="tablist">${Object.entries(TABS).map(([kk, v]) => `<button type="button" role="tab" data-tab="${kk}" aria-selected="${kk === ui.tab}">${v}</button>`).join('')}</div>
            <div class="tabp">${tabBody(p)}</div>
          </section>
          <p class="note">Kliknij w tekst, żeby go edytować. Zmiany, oceny i akceptacje zapisują się automatycznie. Zatwierdzonych elementów: <b id="okCount">${approvedCount}</b>.</p>
        </div>
      </div>`;
  };
  V.marki = () => `
    <div class="vhead"><div><p class="kick">1 z 3 w pakiecie</p><h1>Marki</h1></div><button type="button" class="btn btn--ghost" data-act="soon">+ Dodaj markę</button></div>
    <section class="card brandc"><div class="brandc__l"><span class="av av--lg">K</span><div><h2>${esc(S.brand.name)}</h2><p class="muted">${esc(S.brand.url)} · sklep z ekspresami i kawą</p></div></div>
      <div class="ring" style="--p:${S.brand.complete}"><b>${S.brand.complete}%</b><small>karty marki</small></div></section>
    <div class="grid3">
      <section class="card"><h2>Do kogo piszemy</h2><ul class="bul"><li>Przechodzi z kapsułek</li><li>Domowy barista</li></ul></section>
      <section class="card"><h2>Głos marki</h2><p>Ciepły, prosto, na „Ty”, z emotikonami.</p><p class="muted">Zakazane: najlepszy na rynku, tani, okazja życia</p></section>
      <section class="card"><h2>Braki</h2><ul class="bul"><li>Nagrody i certyfikaty</li><li>Aktualna promocja</li></ul></section>
    </div>
    <section class="card card--cta"><div><h2>Edytuj kartę marki</h2><p class="muted">Wywiad o firmie: klienci, obiekcje, wyróżniki z dowodami, konkurencja i głos marki.</p></div><a class="btn btn--accent" href="../marka.html">Otwórz kreator</a></section>`;
  V.historia = () => `
    <div class="vhead"><div><p class="kick">Ostatnie 40 zdarzeń</p><h1>Historia</h1></div></div>
    <section class="card card--flush"><table class="tbl"><thead><tr><th scope="col">Kiedy</th><th scope="col">Co</th><th scope="col">Produkt</th><th scope="col">Kto</th></tr></thead>
    <tbody>${S.history.map((h) => `<tr><td>${esc(h.when)}</td><td data-l="Co"><b>${esc(h.what)}</b></td><td data-l="Produkt">${h.prod ? `<a href="#/produkt/${h.prod}">${esc(prod(h.prod)?.short || '')}</a>` : ''}</td><td data-l="Kto">${esc(h.who)}</td></tr>`).join('')}</tbody></table></section>`;
  V.konto = () => `
    <div class="vhead"><div><p class="kick">${esc(S.user)}</p><h1>Konto i abonament</h1></div></div>
    <div class="grid2">
      <section class="card card--dark"><p class="kick kick--hi">Twój pakiet</p><h2>${S.plan.name}</h2><p class="big">${S.plan.price} zł <small>netto / mies.</small></p>
        <div class="meter meter--dark"><i style="width:${Math.round(S.plan.used / S.plan.limit * 100)}%"></i></div><p>${S.plan.used} z ${S.plan.limit} produktów · odnowienie ${S.plan.renew}</p>
        <div class="row"><a class="btn btn--light" href="../cennik.html">Zmień pakiet</a><button type="button" class="btn btn--ghostd" data-act="soon">Dokup +100 produktów</button></div></section>
      <section class="card"><h2>Zespół</h2><ul class="team"><li><span class="av">${esc((S.user || 'D')[0].toUpperCase())}</span><div><b>${esc(S.user)}</b><small>Właściciel</small></div></li><li><span class="av av--soft">A</span><div><b>anna@kawowykat-demo.pl</b><small>Edytor · zatwierdza treści</small></div></li></ul><button type="button" class="btn btn--ghost btn--sm" data-act="soon">+ Zaproś osobę</button></section>
    </div>
    <section class="card card--flush"><div class="card__h card__h--pad"><h2>Faktury</h2></div><table class="tbl"><thead><tr><th scope="col">Numer</th><th scope="col">Data</th><th scope="col">Kwota</th><th scope="col"><span class="sr">Pobierz</span></th></tr></thead>
      <tbody>${[['FV/11/2026/014', '13.11.2026'], ['FV/10/2026/011', '13.10.2026'], ['FV/09/2026/009', '13.09.2026']].map(([n, d]) => `<tr><td><b>${n}</b></td><td data-l="Data">${d}</td><td data-l="Kwota">552,27 zł brutto</td><td><button type="button" class="btn btn--ghost btn--sm" data-act="soon">PDF</button></td></tr>`).join('')}</tbody></table></section>
    <p class="note"><button type="button" class="linkb" data-act="reset">Wyczyść dane demo</button> (przywraca stan początkowy panelu)</p>`;

  /* ---------- Modale ---------- */
  const modalAdd = () => `
    <div class="modal__box" role="dialog" aria-modal="true" aria-labelledby="mAddH">
      <button type="button" class="iconbtn modal__x" data-act="close" aria-label="Zamknij">×</button>
      <h2 id="mAddH">Dodaj produkt z linku</h2>
      <p class="muted">W wersji demo każdy link zostanie zamieniony na jeden z trzech przykładowych produktów.</p>
      <form id="addForm" class="form"><label class="fld"><span>Link do produktu</span><input id="addUrl" type="url" required placeholder="https://twojsklep.pl/produkt"></label>
      <ol class="steps" id="addSteps" hidden><li>Pobieram stronę produktu</li><li>Wyciągam fakty i parametry</li><li>Układam brief strategiczny</li><li>Piszę treści do 5 kanałów</li><li>Sprawdzam limity i fakty</li></ol>
      <button class="btn btn--accent btn--block" type="submit">Przeczytaj produkt</button></form>
    </div>`;
  const openModal = (html) => { const m = document.getElementById('modal'); m.innerHTML = html; m.hidden = false; requestAnimationFrame(() => m.classList.add('is-on')); m.querySelector('input,button')?.focus(); };
  const closeModal = () => { const m = document.getElementById('modal'); if (!m) return; m.classList.remove('is-on'); setTimeout(() => { m.hidden = true; m.innerHTML = ''; }, reduce ? 0 : 200); };

  /* ---------- Eksport ---------- */
  const download = (name, text, type) => { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob(['﻿' + text], { type })); a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000); };
  const doExport = (p, kind) => {
    const q = (s) => `"${String(s).replace(/"/g, '""')}"`, g = p.google;
    if (kind === 'csv') {
      const H = g.headlines.map((h, i) => val(p.id, `g.h.${i}`, h[0])), D = g.descriptions.map((d, i) => val(p.id, `g.d.${i}`, d[0]));
      const head = ['Campaign', 'Ad group', ...H.map((_, i) => 'Headline ' + (i + 1)), ...D.map((_, i) => 'Description ' + (i + 1)), 'Final URL'];
      download(`google-ads-${p.id}.csv`, [head, ...g.groups.map((gr) => ['MODERA', gr.name, ...H, ...D, p.url])].map((r) => r.map(q).join(',')).join('\n'), 'text/csv;charset=utf-8');
    } else if (kind === 'html') {
      const d = p.description;
      download(`opis-${p.id}.html`, `<h1>${val(p.id, 'd.t.0', d.titles[0][1])}</h1>\n<p>${val(p.id, 'd.s.1', d.intro)}</p>\n` + d.sections.map(([h, t], i) => `<h2>${h}</h2>\n<p>${val(p.id, `d.sec.${i}`, t)}</p>`).join('\n') + '\n<h2>Najczęstsze pytania</h2>\n' + d.faq.map(([qq, a], i) => `<h3>${qq}</h3>\n<p>${val(p.id, `d.faq.${i}`, a)}</p>`).join('\n'), 'text/html;charset=utf-8');
    } else {
      const lines = [`${p.name}\n`, 'GOOGLE: NAGŁÓWKI', ...g.headlines.map((h, i) => '- ' + val(p.id, `g.h.${i}`, h[0])), '', 'GOOGLE: OPISY', ...g.descriptions.map((h, i) => '- ' + val(p.id, `g.d.${i}`, h[0])), '', 'FACEBOOK / INSTAGRAM', ...p.meta.angles.map((a, i) => `[${a.angle}] ${val(p.id, `m.medium.${i}`, a.medium)}`), '', 'MAILING: TEMATY', ...p.mailing.subjects.map((s, i) => '- ' + val(p.id, `ml.s.${i}`, s[0]))];
      download(`tresci-${p.id}.txt`, lines.join('\n'), 'text/plain;charset=utf-8');
    }
    log(`Eksport ${kind.toUpperCase()}`, p.id); save(); toast('Plik pobrany');
  };

  /* ---------- Router ---------- */
  let route = 'pulpit', param = '';
  const render = (focus) => {
    if (!S.user) { app.innerHTML = login(); document.title = 'Zaloguj się — MODERA'; return; }
    const h = location.hash.replace(/^#\/?/, '').split('/'); route = V[h[0]] ? h[0] : 'pulpit'; param = h[1] || '';
    app.innerHTML = shell(route === 'produkt' ? 'produkty' : route, V[route](param));
    document.title = (route === 'produkt' ? prod(param)?.short : NAV.find((n) => n[0] === route)?.[1]) + ' — Panel MODERA';
    if (focus) { document.getElementById('view').focus({ preventScroll: true }); scrollTo(0, 0); }
  };
  const rerenderView = () => { const v = document.getElementById('view'); const y = scrollY; v.innerHTML = V[route](param); scrollTo(0, y); };
  addEventListener('hashchange', () => render(true));

  /* ---------- Zdarzenia ---------- */
  app.addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id === 'loginForm') { S.user = document.getElementById('lEmail').value.trim() || 'demo@kawowykat-demo.pl'; save(); if (!location.hash) location.hash = '#/pulpit'; render(true); return; }
  });
  document.addEventListener('submit', (e) => {
    if (e.target.id !== 'addForm') return; e.preventDefault();
    const url = document.getElementById('addUrl').value, steps = document.getElementById('addSteps'), li = [...steps.querySelectorAll('li')]; steps.hidden = false;
    e.target.querySelector('button[type=submit]').disabled = true;
    const d = reduce ? 0 : 520;
    li.forEach((x, i) => setTimeout(() => li.forEach((y, j) => { y.className = j < i ? 'is-done' : j === i ? 'is-now' : ''; }), i * d));
    setTimeout(() => {
      const v = url.toLowerCase(); const hit = P.find((p) => v.includes(p.id)) || P[Math.floor(Math.random() * P.length)];
      const sp = S.products.find((x) => x.id === hit.id); sp.status = 'review'; S.plan.used = Math.min(S.plan.limit, S.plan.used + 1);
      log('Dodano produkt z linku', hit.id); save(); closeModal(); toast('Treści gotowe do akceptacji'); location.hash = '#/produkt/' + hit.id;
    }, li.length * d + 150);
  });
  document.addEventListener('click', (e) => {
    const t = e.target.closest('button,[data-act]'); if (!t) { const dm = document.querySelector('.dd__m:not([hidden])'); if (dm && !e.target.closest('.dd')) dm.hidden = true; return; }
    const act = t.dataset.act;
    if (act === 'logout') { S.user = null; save(); location.hash = ''; render(); return; }
    if (act === 'menu') { const s = document.getElementById('side'); const on = s.classList.toggle('is-open'); t.setAttribute('aria-expanded', on); return; }
    if (act === 'add') { openModal(modalAdd()); return; }
    if (act === 'close') { closeModal(); return; }
    if (act === 'bulk' || act === 'soon') { toast('W pełnej wersji. W demo ta funkcja jest wyłączona.'); return; }
    if (act === 'reset') { const u = S.user; S = fresh(); S.user = u; save(); render(); toast('Przywrócono dane demo'); return; }
    if (act === 'exportmenu') { const m = t.nextElementSibling; m.hidden = !m.hidden; t.setAttribute('aria-expanded', !m.hidden); return; }
    if (t.dataset.export) { doExport(prod(param), t.dataset.export); t.closest('.dd__m').hidden = true; return; }
    if (act === 'approveall') { const sp = S.products.find((x) => x.id === param); sp.status = 'approved'; document.querySelectorAll('[data-key]').forEach((el) => { S.approved[k(param, el.dataset.key)] = true; }); log('Zatwierdzono produkt', param); save(); rerenderView(); toast('Produkt zatwierdzony'); return; }
    if (t.dataset.stage) { ui.stage = t.dataset.stage; rerenderView(); return; }
    if (t.dataset.style) { ui.style = t.dataset.style; log(`Zmieniono styl na „${STY[ui.style]}”`, param); save(); rerenderView(); return; }
    if (t.dataset.len) { ui.length = t.dataset.len; rerenderView(); return; }
    if (t.dataset.tab) { ui.tab = t.dataset.tab; rerenderView(); return; }
    if (t.dataset.msub) { ui.mailSub = t.dataset.msub; rerenderView(); return; }
    if (t.dataset.vote) { const key = k(param, t.dataset.vote), v = +t.dataset.v; S.votes[key] = S.votes[key] === v ? 0 : v; save(); t.parentElement.querySelectorAll('.vb').forEach((b) => b.classList.toggle('is-on', +b.dataset.v === S.votes[key])); if (v === -1 && S.votes[key] === -1) toast('Zapisano. W pełnej wersji system zaproponuje nową wersję.'); return; }
    if (t.dataset.ok) { const key = k(param, t.dataset.ok); S.approved[key] = !S.approved[key]; const sp = S.products.find((x) => x.id === param); if (sp.status === 'draft') sp.status = 'review'; save(); const li = t.closest('.it'); li.classList.toggle('is-ok', S.approved[key]); t.setAttribute('aria-pressed', S.approved[key]); t.querySelector('span').textContent = S.approved[key] ? 'Zatwierdzone' : 'Zatwierdź'; const c = document.getElementById('okCount'); if (c) c.textContent = Object.keys(S.approved).filter((x) => x.startsWith(param + ':') && S.approved[x]).length; return; }
  });
  document.addEventListener('input', (e) => {
    const el = e.target.closest('[data-edit]'); if (!el) return;
    const key = el.dataset.edit, txt = el.innerText.replace(/\n+$/, ''); S.edits[k(param, key)] = txt;
    const max = +el.dataset.max; if (max) { const c = document.querySelector(`[data-cc="${key}"]`); c.textContent = `${len(txt)}/${max}`; c.classList.toggle('cc--bad', len(txt) > max); }
    clearTimeout(save.t); save.t = setTimeout(save, 400);
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeModal(); document.getElementById('side')?.classList.remove('is-open'); } });
  document.addEventListener('click', (e) => { if (e.target.id === 'modal') closeModal(); });
  render();
})();

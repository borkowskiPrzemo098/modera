/* MODERA — Etap 1: wywiad o firmie (Karta marki). Prototyp bez AI: propozycje są przygotowane dla przykładowej firmy. */
(() => {
  const root = document.getElementById('brandApp');
  if (!root) return;
  const KEY = 'modera-brand-v1';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const ic = (id) => `<svg class="ic" aria-hidden="true"><use href="#${id}"/></svg>`;

  /* ---------- Przykładowa firma: to, co „przeczytał” system ---------- */
  const P = (v, src) => ({ v, st: 'prop', src });
  const M = () => ({ v: '', st: 'miss', src: '' });
  const SAMPLE = () => ({
    url: 'https://kawowykat-demo.pl',
    firm: {
      name: P('Kawowy Kąt', 'stopka strony'),
      what: P('Sklep internetowy z ekspresami ciśnieniowymi, młynkami i kawą ziarnistą z polskich palarni.', 'strona główna, nagłówek'),
      since: P('2019', '/o-nas: „Działamy od 2019 roku”'),
      where: P('Cała Polska (wysyłka kurierem), showroom w Poznaniu', '/kontakt'),
      model: P('Sklep internetowy (B2C)', 'struktura strony: koszyk, kategorie'),
      size: M()
    },
    personas: [
      { st: 'prop', src: 'opisy kategorii i poradniki na blogu', name: 'Przechodzi z kapsułek', who: '28–40 lat, pracuje w biurze lub zdalnie, pije 2–3 kawy dziennie', wants: 'Lepszy smak niż z kapsułek, bez kursu baristy', fears: 'Że ekspres kolbowy jest trudny w obsłudze i wymaga czasu', words: '„jak w kawiarni”, „bez kapsułek”, „łatwy w obsłudze”' },
      { st: 'prop', src: 'kategoria „Dla zaawansowanych”, opinie produktów', name: 'Domowy barista', who: '30–50 lat, interesuje się kawą specialty, porównuje parametry', wants: 'Kontrola nad parzeniem: mielenie, ciśnienie, temperatura', fears: 'Przepłacenie za markę zamiast za realne parametry', words: '„ekstrakcja”, „manometr”, „żarna stożkowe”' }
    ],
    reasons: [
      { st: 'prop', src: 'sekcja „Dlaczego my” na stronie głównej', why: 'Chcą dobrej kawy w domu bez wychodzenia do kawiarni', obj: '„Ekspres to duży wydatek”', ans: 'Raty 0% i 30 dni na zwrot (regulamin sklepu)' },
      { st: 'prop', src: 'FAQ sklepu', why: 'Szukają pomocy w wyborze modelu', obj: '„Nie wiem, który ekspres wybrać”', ans: 'Bezpłatna konsultacja telefoniczna z baristą (strona /kontakt)' },
      { st: 'prop', src: 'FAQ sklepu', why: 'Chcą mieć serwis pod ręką', obj: '„Co, jeśli się zepsuje?”', ans: 'Własny serwis w Poznaniu i odbiór kurierem na koszt sklepu' }
    ],
    usp: [
      { st: 'prop', src: '/o-nas', what: 'Każdy ekspres testowany przez baristę przed wysyłką', proof: 'Deklaracja na stronie /o-nas, zdjęcia z testów' },
      { st: 'prop', src: '/kontakt', what: 'Bezpłatne konsultacje z baristą przed zakupem', proof: 'Numer telefonu i godziny konsultacji na /kontakt' },
      { st: 'prop', src: 'strona główna', what: 'Najlepsze ceny w Polsce', proof: '' }
    ],
    proofs: {
      reviews: P('4,8/5 z 1 240 opinii', 'widżet opinii w stopce'),
      warranty: P('Gwarancja producenta + 30 dni na zwrot', 'regulamin, §7'),
      awards: M(),
      numbers: P('Ponad 9 000 wysłanych ekspresów', '/o-nas')
    },
    competitors: [
      { st: 'prop', url: 'konkurent-a-demo.pl', msg: 'Niskie ceny i szybka wysyłka, mało porad', diff: 'My: doradztwo baristy i testy przed wysyłką' },
      { st: 'prop', url: 'konkurent-b-demo.pl', msg: 'Ekspresy premium, ton ekskluzywny, wysokie ceny', diff: 'My: profesjonalnie, ale przystępnie, także w średniej półce' }
    ],
    voice: { st: 'prop', src: 'teksty na blogu i w opisach', form: 'ty', tone: 1, detail: 0, emoji: true, banned: ['najlepszy na rynku', 'tani', 'okazja życia'], liked: ['świeżo mielona', 'jak w kawiarni', 'po baristowsku'], example: 'Dobra kawa nie musi być skomplikowana. Pokażemy Ci, jak zrobić espresso, które smakuje jak w ulubionej kawiarni.' },
    offer: {
      shipping: P('Darmowa dostawa od 199 zł, wysyłka w 24 h', 'pasek nad nagłówkiem'),
      payment: P('Raty 0% do 20 miesięcy', 'karta produktu'),
      returns: P('30 dni na zwrot', 'regulamin, §7'),
      promo: M()
    },
    limits: { st: 'prop', src: 'propozycja systemu dla branży', items: ['Nie obiecujemy „najniższej ceny” bez porównania cen', 'Nie podajemy terminów dostawy krótszych niż w regulaminie', 'Nie używamy nazw marek konkurencji w reklamach'] }
  });

  /* ---------- Stan ---------- */
  let S; try { S = JSON.parse(localStorage.getItem(KEY)); } catch { S = null; }
  let step = S ? (S._step ?? 1) : 0;
  const save = () => { if (!S) return; S._step = step; try { localStorage.setItem(KEY, JSON.stringify(S)); } catch {} };

  const STEPS = [
    ['Start', 'i-link'], ['Firma', 'i-build'], ['Klienci', 'i-people'], ['Motywy i obiekcje', 'i-ask'],
    ['Wyróżniki i dowody', 'i-flag'], ['Konkurencja', 'i-stats'], ['Głos marki', 'i-chat'], ['Oferta i zasady', 'i-cart'], ['Karta marki', 'i-yes']
  ];

  /* ---------- Głos marki: próbka tekstu na żywo ---------- */
  const TONES = ['Rzeczowy', 'Ciepły', 'Zabawny'];
  const DETAIL = ['Prosto', 'Ekspercko'];
  const SAMPLES = {
    '0-0': ['Ekspres z młynkiem. Świeża kawa w 30 sekund.', 'Ekspres z młynkiem. Świeża kawa w 30 sekund.'],
    '0-1': ['Młynek stożkowy, 15 stopni mielenia i ciśnienie 15 bar. Pełna kontrola nad ekstrakcją.', 'Młynek stożkowy, 15 stopni mielenia i ciśnienie 15 bar. Pełna kontrola nad ekstrakcją.'],
    '1-0': ['Twoja poranna kawa może smakować jak w ulubionej kawiarni. Wystarczy 30 sekund.', 'Poranna kawa może smakować jak w ulubionej kawiarni. Wystarczy Panu/Pani 30 sekund.'],
    '1-1': ['Ustawisz mielenie pod swoje ziarna, a manometr pokaże Ci, czy ekstrakcja idzie dobrze.', 'Mielenie ustawi Pan/Pani pod swoje ziarna, a manometr pokaże, czy ekstrakcja przebiega prawidłowo.'],
    '2-0': ['Kapsułki? Dziękujemy, postoimy. Ten ekspres mieli ziarna szybciej, niż zdążysz ziewnąć.', 'Kapsułki? Dziękujemy, postoimy. Ten ekspres mieli ziarna szybciej, niż zdąży Pan/Pani ziewnąć.'],
    '2-1': ['15 barów, 15 stopni mielenia i zero wymówek. Twoje espresso właśnie dostało awans.', '15 barów, 15 stopni mielenia i zero wymówek. Espresso właśnie dostało awans.']
  };
  const sample = (v) => SAMPLES[`${v.tone}-${v.detail}`][v.form === 'ty' ? 0 : 1] + (v.emoji ? ' ☕' : '');

  /* ---------- Pomocnicze: statusy i pola ---------- */
  const badge = (o) => o.st === 'ok' ? `<span class="bst bst--ok">${ic('i-yes')}Zatwierdzone</span>`
    : o.st === 'prop' ? `<span class="bst bst--prop">${ic('i-spark')}Propozycja systemu</span>`
    : `<span class="bst bst--miss">Brak danych</span>`;
  const srcLine = (o) => o.st === 'prop' && o.src ? `<p class="bsrc">Źródło: ${esc(o.src)}</p>` : o.st === 'miss' ? `<p class="bsrc">Nie znaleziono na stronie. Uzupełnij albo zostaw puste: system nie będzie tego zgadywać.</p>` : '';
  const acceptBtn = (path) => `<button type="button" class="pill pill--ghost pill--sm" data-accept="${path}">${ic('i-yes')}Zatwierdź</button>`;
  const field = (path, label, o, { area = false, ph = '' } = {}) => `
    <div class="bf bf--${o.st}">
      <div class="bf__top"><label for="f-${path}">${esc(label)}</label>${badge(o)}</div>
      ${area ? `<textarea id="f-${path}" data-path="${path}" rows="3" placeholder="${esc(ph)}">${esc(o.v)}</textarea>` : `<input id="f-${path}" data-path="${path}" value="${esc(o.v)}" placeholder="${esc(ph)}">`}
      <div class="bf__foot">${srcLine(o)}${o.st === 'prop' ? acceptBtn(path) : ''}</div>
    </div>`;
  const get = (path) => path.split('.').reduce((o, k) => o[k], S);
  const allItems = () => [
    ...Object.values(S.firm), ...S.personas, ...S.reasons, ...S.usp, ...Object.values(S.proofs), ...S.competitors, S.voice, ...Object.values(S.offer), S.limits
  ];
  const stats = () => { const a = allItems(); return { ok: a.filter((x) => x.st === 'ok').length, prop: a.filter((x) => x.st === 'prop').length, miss: a.filter((x) => x.st === 'miss').length, all: a.length }; };

  const card = (kind, i, o, inner) => `
    <article class="bcard bcard--${o.st}">
      <div class="bf__top"><b>${inner.title}</b>${badge(o)}</div>
      ${inner.body}
      <div class="bf__foot">${srcLine(o)}<span class="bcard__acts">${o.st === 'prop' ? acceptBtn(`${kind}.${i}`) : ''}<button type="button" class="pill pill--ghost pill--sm bdel" data-del="${kind}.${i}" aria-label="Usuń">Usuń</button></span></div>
    </article>`;
  const sub = (path, label, val, area) => `<label class="bsub"><span>${esc(label)}</span>${area ? `<textarea data-path="${path}" rows="2">${esc(val)}</textarea>` : `<input data-path="${path}" value="${esc(val)}">`}</label>`;

  /* ---------- Widoki kroków ---------- */
  const tip = (t) => `<aside class="btip">${ic('i-spark')}<p><b>Jak myśli marketer:</b> ${t}</p></aside>`;
  const V = {
    0: () => `
      <div class="bstart">
        <h2>Zacznijmy od strony Twojej firmy</h2>
        <p>System przeczyta stronę główną, „O nas”, kontakt, regulamin i FAQ. Na tej podstawie zaproponuje odpowiedzi. Ty tylko je zatwierdzasz albo poprawiasz. Zajmie to około 10 minut, raz na markę.</p>
        <form class="dapp__form" id="brandForm">
          <label class="dapp__url"><span class="sr">Adres strony firmy</span>${ic('i-link')}<input id="brandUrl" type="url" inputmode="url" value="https://kawowykat-demo.pl" autocomplete="off"></label>
          <button class="pill pill--accent" type="submit">Przeczytaj stronę</button>
        </form>
        <p class="bnote">W wersji demo system zawsze wczytuje przykładowy sklep „Kawowy Kąt”.</p>
        <ol class="dsteps bread" id="brandRead" hidden><li>Strona główna i nawigacja</li><li>O nas i kontakt</li><li>Regulamin, dostawa i zwroty</li><li>Opinie i FAQ</li><li>Teksty na blogu: głos marki</li><li>Porównanie z konkurencją</li></ol>
      </div>`,
    1: () => `
      <div class="bhead"><h2>Firma</h2><p>Podstawy, które trafią do kontekstu każdej treści.</p></div>
      ${tip('zanim napisze cokolwiek, musi wiedzieć, co firma sprzedaje, komu i od kiedy. „Działamy od 2019 roku” to też argument.')}
      <div class="bgrid">${field('firm.name', 'Nazwa firmy', S.firm.name)}${field('firm.since', 'Na rynku od', S.firm.since)}
      ${field('firm.what', 'Czym się zajmujecie (jednym zdaniem)', S.firm.what, { area: true })}${field('firm.where', 'Gdzie działacie', S.firm.where, { area: true })}
      ${field('firm.model', 'Model sprzedaży', S.firm.model)}${field('firm.size', 'Wielkość firmy (opcjonalnie)', S.firm.size, { ph: 'np. 8 osób' })}</div>`,
    2: () => `
      <div class="bhead"><h2>Klienci</h2><p>1–3 typy klientów. Każda treść będzie pisana do konkretnej osoby, nie do „wszystkich”.</p></div>
      ${tip('najważniejsze pole to „jak mówi”. Reklama brzmi naturalnie, gdy używa słów klienta, a nie słów producenta.')}
      <div class="bcards">${S.personas.map((p, i) => card('personas', i, p, { title: esc(p.name || 'Nowy klient'), body: `
        ${sub(`personas.${i}.name`, 'Nazwa robocza', p.name)}${sub(`personas.${i}.who`, 'Kim jest', p.who, true)}
        ${sub(`personas.${i}.wants`, 'Czego chce', p.wants, true)}${sub(`personas.${i}.fears`, 'Czego się obawia', p.fears, true)}${sub(`personas.${i}.words`, 'Jak mówi (jego słowa)', p.words, true)}` })).join('')}
      ${S.personas.length < 3 ? `<button type="button" class="badd" data-add="personas">+ Dodaj typ klienta</button>` : ''}</div>`,
    3: () => `
      <div class="bhead"><h2>Motywy i obiekcje</h2><p>Dlaczego klienci kupują, co ich powstrzymuje i jak na to odpowiadacie.</p></div>
      ${tip('każda obiekcja bez odpowiedzi to porzucony koszyk. Te pary trafią do maili, FAQ i reklam remarketingowych.')}
      <div class="bcards">${S.reasons.map((r, i) => card('reasons', i, r, { title: `Motyw ${i + 1}`, body: `
        ${sub(`reasons.${i}.why`, 'Dlaczego kupują', r.why, true)}
        <div class="bpair">${sub(`reasons.${i}.obj`, 'Obiekcja', r.obj, true)}<span class="bpair__arr" aria-hidden="true">→</span>${sub(`reasons.${i}.ans`, 'Odpowiedź firmy', r.ans, true)}</div>` })).join('')}
      <button type="button" class="badd" data-add="reasons">+ Dodaj motyw</button></div>`,
    4: () => `
      <div class="bhead"><h2>Wyróżniki i dowody</h2><p>Czym różnicie się od konkurencji. Każdy wyróżnik potrzebuje dowodu.</p></div>
      ${tip('wyróżnik bez dowodu to puste hasło. System nie użyje go w treściach, dopóki nie dodasz dowodu.')}
      <div class="bcards">${S.usp.map((u, i) => card('usp', i, u, { title: esc(u.what || 'Nowy wyróżnik'), body: `
        ${sub(`usp.${i}.what`, 'Wyróżnik', u.what, true)}${sub(`usp.${i}.proof`, 'Dowód', u.proof, true)}
        ${u.proof.trim() ? '' : `<p class="bwarn">${ic('i-no')}Brak dowodu: ten wyróżnik nie trafi do treści. Dodaj dowód albo usuń hasło.</p>`}` })).join('')}
      <button type="button" class="badd" data-add="usp">+ Dodaj wyróżnik</button></div>
      <h3 class="bh3">Dowody zaufania</h3>
      <div class="bgrid">${field('proofs.reviews', 'Opinie klientów', S.proofs.reviews)}${field('proofs.warranty', 'Gwarancja i zwroty', S.proofs.warranty)}
      ${field('proofs.numbers', 'Liczby (sprzedaż, klienci, lata)', S.proofs.numbers)}${field('proofs.awards', 'Nagrody i certyfikaty', S.proofs.awards, { ph: 'np. Laur Konsumenta 2025' })}</div>`,
    5: () => `
      <div class="bhead"><h2>Konkurencja</h2><p>System streszcza przekaz konkurentów, żeby Twoje treści się od nich odróżniały.</p></div>
      ${tip('jeśli wszyscy mówią „niskie ceny”, to „niskie ceny” nikogo nie przekonają. Szukamy miejsca, którego nikt nie zajął.')}
      <div class="bcards">${S.competitors.map((c, i) => card('competitors', i, c, { title: esc(c.url || 'Nowy konkurent'), body: `
        ${sub(`competitors.${i}.url`, 'Strona konkurenta', c.url)}${sub(`competitors.${i}.msg`, 'Ich główny przekaz', c.msg, true)}${sub(`competitors.${i}.diff`, 'Jak się odróżniamy', c.diff, true)}` })).join('')}
      <button type="button" class="badd" data-add="competitors">+ Dodaj konkurenta</button></div>`,
    6: () => { const v = S.voice; return `
      <div class="bhead"><h2>Głos marki</h2><p>Jak mówicie do klientów. To styl domyślny. Przy każdej treści i tak można go zmienić.</p></div>
      <div class="bvoice">
        <div class="bvoice__ctl">
          <div class="bf__top"><b>Ustawienia</b>${badge(v)}</div>
          <p class="bsub"><span>Forma zwracania się</span></p>${segm('form', [['ty', 'Na „Ty”'], ['pan', 'Pan / Pani']], v.form)}
          <p class="bsub"><span>Ton</span></p>${segm('tone', TONES.map((t, i) => [i, t]), v.tone)}
          <p class="bsub"><span>Poziom szczegółów</span></p>${segm('detail', DETAIL.map((t, i) => [i, t]), v.detail)}
          <p class="bsub"><span>Emotikony</span></p>${segm('emoji', [[true, 'Tak'], [false, 'Nie']], v.emoji)}
          <div class="bf__foot">${srcLine(v)}${v.st === 'prop' ? acceptBtn('voice') : ''}</div>
        </div>
        <div class="bvoice__prev" aria-live="polite">
          <p class="bvoice__k">Tak zabrzmi reklama przykładowego ekspresu</p>
          <p class="bvoice__s">${esc(sample(v))}</p>
          <p class="bvoice__m">${TONES[v.tone]} · ${DETAIL[v.detail]} · ${v.form === 'ty' ? 'na „Ty”' : 'Pan / Pani'}${v.emoji ? ' · z emotikonami' : ''}</p>
        </div>
      </div>
      <div class="bgrid">
        <div class="bf"><div class="bf__top"><b>Słowa, których używamy</b></div>${chips('liked', v.liked)}</div>
        <div class="bf"><div class="bf__top"><b>Słowa zakazane</b></div>${chips('banned', v.banned, true)}</div>
      </div>
      <div class="bf"><div class="bf__top"><label for="f-voice-ex">Przykład tekstu, który Wam się podoba</label></div><textarea id="f-voice-ex" data-path="voice.example" rows="3">${esc(v.example)}</textarea><p class="bsrc">System uczy się z przykładów rytmu zdań i słownictwa marki.</p></div>`; },
    7: () => `
      <div class="bhead"><h2>Oferta i zasady</h2><p>Stałe warunki, które mogą trafić do reklam, oraz granice, których nie przekraczamy.</p></div>
      ${tip('„Darmowa dostawa od 199 zł” to często najmocniejszy argument w reklamie. Promocje podajemy tylko z datą końca, nigdy wymyślone.')}
      <div class="bgrid">${field('offer.shipping', 'Dostawa', S.offer.shipping)}${field('offer.payment', 'Płatności i raty', S.offer.payment)}
      ${field('offer.returns', 'Zwroty', S.offer.returns)}${field('offer.promo', 'Aktualna promocja (z datą końca)', S.offer.promo, { ph: 'np. −10% na młynki do 30.11' })}</div>
      <div class="bf bf--${S.limits.st}"><div class="bf__top"><b>Czego nigdy nie piszemy</b>${badge(S.limits)}</div>${chips('limits', S.limits.items, true)}<div class="bf__foot">${srcLine(S.limits)}${S.limits.st === 'prop' ? acceptBtn('limits') : ''}</div></div>`,
    8: () => { const s = stats(), pct = Math.round(s.ok / s.all * 100), v = S.voice;
      const weak = S.usp.filter((u) => !u.proof.trim());
      return `
      <div class="bsum">
        <div class="bsum__head">
          <div><p class="bvoice__k">Karta marki</p><h2>${esc(S.firm.name.v || 'Twoja firma')}</h2><p>${esc(S.firm.what.v)}</p></div>
          <div class="bmeter" style="--p:${pct}"><b>${pct}%</b><small>zatwierdzone</small></div>
        </div>
        <ul class="bsum__stats"><li><b>${s.ok}</b> zatwierdzone</li><li><b>${s.prop}</b> do sprawdzenia</li><li><b>${s.miss}</b> braki</li></ul>
        ${s.prop ? `<p class="bnote">Pola „do sprawdzenia” są używane w treściach dopiero po zatwierdzeniu. <button type="button" class="linkb" data-acceptall>Zatwierdź wszystkie propozycje</button></p>` : ''}
        <div class="bsum__grid">
          <section><h3>Do kogo piszemy</h3>${S.personas.map((p) => `<p><b>${esc(p.name)}</b> · ${esc(p.who)}<br><small>Chce: ${esc(p.wants)}. Boi się: ${esc(p.fears)}.</small></p>`).join('')}</section>
          <section><h3>Główne argumenty</h3><ul>${S.usp.filter((u) => u.proof.trim()).map((u) => `<li>${esc(u.what)} <small>(dowód: ${esc(u.proof)})</small></li>`).join('')}</ul>
            ${weak.length ? `<p class="bwarn">${ic('i-no')}Pominięte bez dowodu: ${weak.map((u) => `„${esc(u.what)}”`).join(', ')}</p>` : ''}</section>
          <section><h3>Obiekcje i odpowiedzi</h3><ul>${S.reasons.map((r) => `<li>${esc(r.obj)} → ${esc(r.ans)}</li>`).join('')}</ul></section>
          <section><h3>Głos marki</h3><p>${TONES[v.tone]}, ${DETAIL[v.detail].toLowerCase()}, ${v.form === 'ty' ? 'na „Ty”' : 'na Pan / Pani'}${v.emoji ? ', z emotikonami' : ''}.</p><p class="bvoice__s bvoice__s--sm">${esc(sample(v))}</p>
            <p><small>Zakazane: ${v.banned.map(esc).join(', ') || '—'}</small></p></section>
          <section><h3>Oferta</h3><ul>${Object.values(S.offer).filter((o) => o.v).map((o) => `<li>${esc(o.v)}</li>`).join('')}</ul></section>
          <section><h3>Odróżniamy się od konkurencji</h3><ul>${S.competitors.map((c) => `<li>${esc(c.diff)}</li>`).join('')}</ul></section>
        </div>
        <div class="bsum__acts"><button type="button" class="pill pill--accent" id="brandJson">Pobierz kartę marki (JSON)</button><a class="pill pill--ghost" href="demo.html">Zobacz, jak powstają treści</a><button type="button" class="linkb" id="brandReset">Zacznij od nowa</button></div>
        <p class="bnote">W pełnej wersji ta karta jest dołączana do każdego zlecenia: model najpierw ustala strategię na jej podstawie, a dopiero potem pisze.</p>
      </div>`; }
  };
  function segm(key, opts, cur) { return `<div class="seg" role="group">${opts.map(([v, l]) => `<button type="button" data-voice="${key}" data-val="${v}" aria-pressed="${String(v) === String(cur)}">${esc(l)}</button>`).join('')}</div>`; }
  function chips(key, arr, neg) { return `<div class="bchips">${arr.map((w, i) => `<span class="bchip ${neg ? 'bchip--neg' : ''}">${esc(w)}<button type="button" data-chipdel="${key}" data-i="${i}" aria-label="Usuń ${esc(w)}">×</button></span>`).join('')}<form class="bchip__add" data-chipadd="${key}"><input aria-label="Dodaj" placeholder="+ dodaj"></form></div>`; }

  /* ---------- Render ---------- */
  const nav = $('.bnav'), panel = $('.bpanel'), foot = $('.bfoot');
  function $(s) { return root.querySelector(s); }
  function render(focus) {
    nav.innerHTML = STEPS.map(([t, icon], i) => {
      const dis = !S && i > 0;
      return `<li><button type="button" data-step="${i}" ${dis ? 'disabled' : ''} aria-current="${i === step ? 'step' : 'false'}" class="${S && i < step ? 'is-done' : ''}"><span class="bnav__n">${i < step && S ? ic('i-yes') : i}</span><span class="bnav__t">${t}</span></button></li>`;
    }).join('');
    panel.innerHTML = V[step]();
    if (S && step > 0 && step < 8) { const s = stats(); foot.hidden = false; foot.innerHTML = `
      <button type="button" class="pill pill--ghost" data-go="-1">Wstecz</button>
      <span class="bfoot__st"><b>${s.ok}</b>/${s.all} zatwierdzone</span>
      <button type="button" class="pill pill--accent" data-go="1">${step === 7 ? 'Zobacz kartę marki' : 'Dalej'}</button>`; }
    else foot.hidden = true;
    if (focus) { panel.focus({ preventScroll: true }); const top = root.getBoundingClientRect().top + scrollY - 90; if (scrollY > top) scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' }); }
  }

  /* ---------- Zdarzenia ---------- */
  const setPath = (path, val) => { const k = path.split('.'); const last = k.pop(); const o = k.reduce((a, x) => a[x], S); o[last] = val; };
  const itemOf = (path) => { const k = path.split('.'); if (k[0] === 'voice' || k[0] === 'limits') return S[k[0]]; return k.length >= 2 ? S[k[0]][k[1]] : null; };
  const SIMPLE = ['firm', 'proofs', 'offer'];
  const resolve = (path) => { const k = path.split('.'); if (SIMPLE.includes(k[0])) return { item: S[k[0]][k[1]], key: 'v' }; if (k[0] === 'voice') return { item: S.voice, key: k[1] }; return { item: S[k[0]][+k[1]], key: k[2] }; };
  root.addEventListener('input', (e) => {
    const p = e.target.dataset.path; if (!p) return;
    const { item, key } = resolve(p); item[key] = e.target.value;
    const st = key === 'v' ? (e.target.value.trim() ? 'ok' : 'miss') : 'ok';
    if (st !== item.st) {
      item.st = st; const box = e.target.closest('.bf,.bcard');
      if (box) { box.className = box.className.replace(/(b(?:f|card))--w+/, '$1--' + st); const b = box.querySelector('.bst'); if (b) b.outerHTML = badge(item); box.querySelector('[data-accept]')?.remove(); box.querySelector('.bsrc')?.remove(); }
    }
    save();
  });
  root.addEventListener('change', (e) => { if (e.target.dataset.path && step === 4) render(); });
  root.addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id === 'brandForm') return read();
    const key = e.target.dataset.chipadd; if (!key) return;
    const v = e.target.querySelector('input').value.trim(); if (!v) return;
    (key === 'limits' ? S.limits.items : S.voice[key]).push(v); if (key === 'limits') S.limits.st = 'ok'; save(); render();
    root.querySelector(`[data-chipadd="${key}"] input`)?.focus();
  });
  root.addEventListener('click', (e) => {
    const t = e.target.closest('button,[data-step]'); if (!t) return;
    if (t.dataset.step !== undefined) { step = +t.dataset.step; save(); render(true); return; }
    if (t.dataset.go) { step = Math.min(8, Math.max(1, step + +t.dataset.go)); save(); render(true); return; }
    if (t.dataset.accept) { const p = t.dataset.accept; (['voice', 'limits'].includes(p) ? S[p] : resolve(p + (SIMPLE.includes(p.split('.')[0]) ? '' : '.x')).item).st = 'ok'; save(); render(); return; }
    if (t.dataset.del) { const [k, i] = t.dataset.del.split('.'); S[k].splice(+i, 1); save(); render(); return; }
    if (t.dataset.add) { const k = t.dataset.add; const blank = { personas: { name: '', who: '', wants: '', fears: '', words: '' }, reasons: { why: '', obj: '', ans: '' }, usp: { what: '', proof: '' }, competitors: { url: '', msg: '', diff: '' } }[k]; S[k].push({ st: 'miss', src: '', ...blank }); save(); render(); return; }
    if (t.dataset.voice) { const k = t.dataset.voice, raw = t.dataset.val; S.voice[k] = k === 'form' ? raw : k === 'emoji' ? raw === 'true' : +raw; S.voice.st = 'ok'; save(); render(); return; }
    if (t.dataset.chipdel) { const k = t.dataset.chipdel; (k === 'limits' ? S.limits.items : S.voice[k]).splice(+t.dataset.i, 1); save(); render(); return; }
    if (t.hasAttribute('data-acceptall')) { allItems().forEach((x) => { if (x.st === 'prop') x.st = 'ok'; }); save(); render(); return; }
    if (t.id === 'brandJson') { const { _step, ...data } = S; const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })); a.download = 'karta-marki.json'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000); return; }
    if (t.id === 'brandReset') { S = null; step = 0; try { localStorage.removeItem(KEY); } catch {} render(true); }
  });

  function read() {
    const list = $('#brandRead'); const li = [...list.querySelectorAll('li')]; list.hidden = false;
    root.querySelector('#brandForm button').disabled = true;
    const d = reduce ? 0 : 450;
    li.forEach((x, i) => setTimeout(() => li.forEach((y, j) => { y.className = j < i ? 'is-done' : j === i ? 'is-now' : ''; }), i * d));
    setTimeout(() => { S = SAMPLE(); S.url = $('#brandUrl').value || S.url; step = 1; save(); render(true); }, li.length * d + 200);
  }
  render();
})();

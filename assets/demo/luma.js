/* MODERA demo — LUMA Desk Pro (produkt i marka fikcyjne). Każda treść ma odwołania do faktów [f..]. */
(window.MODERA_DEMO = window.MODERA_DEMO || []).push({
  id: 'luma', icon: 'lamp',
  url: 'https://sklep-demo.pl/lampka-luma-desk-pro',
  name: 'LUMA Desk Pro — lampka biurkowa LED z ładowarką Qi',
  short: 'Lampka LUMA Desk Pro', category: 'Oświetlenie / Biuro', price: '279 zł',
  audience: 'Osoby pracujące i uczące się przy biurku, zwłaszcza wieczorami, które chcą dopasować światło do zadania',
  facts: [
    { id: 'f1', label: 'Barwy światła', value: '5 trybów, 2700–6500 K', src: 'Specyfikacja', quote: 'Temperatura barwowa: 2700–6500 K, 5 trybów' },
    { id: 'f2', label: 'Jasność', value: '10 poziomów', src: 'Specyfikacja', quote: 'Regulacja jasności: 10 poziomów' },
    { id: 'f3', label: 'Wierność barw', value: 'CRI > 95', src: 'Specyfikacja', quote: 'Współczynnik oddawania barw CRI > 95' },
    { id: 'f4', label: 'Ładowarka', value: 'Qi, 10 W, w podstawie', src: 'Opis', quote: 'Ładowarka bezprzewodowa Qi 10 W w podstawie' },
    { id: 'f5', label: 'Timer', value: 'wyłączenie po 45 min', src: 'Opis', quote: 'Timer automatycznego wyłączenia: 45 min' },
    { id: 'f6', label: 'Pobór mocy', value: '10 W', src: 'Specyfikacja', quote: 'Moc: 10 W' },
    { id: 'f7', label: 'Ramię', value: 'regulowane 0–90°', src: 'Opis', quote: 'Ramię regulowane w zakresie 0–90°' },
    { id: 'f8', label: 'Głowica', value: 'obrót 180°', src: 'Opis', quote: 'Głowica obracana o 180°' },
    { id: 'f9', label: 'Sterowanie', value: 'dotykowy panel', src: 'Opis', quote: 'Dotykowy panel sterowania' },
    { id: 'f10', label: 'Pamięć ustawień', value: 'tak', src: 'Opis', quote: 'Pamięć ostatnich ustawień' },
    { id: 'f11', label: 'Migotanie', value: 'bez migotania (wg producenta)', src: 'Opis', quote: 'Światło bez migotania (deklaracja producenta)' },
    { id: 'f12', label: 'Materiał', value: 'aluminium + drewno dębowe', src: 'Specyfikacja', quote: 'Materiał: aluminium, podstawa z drewna dębowego' },
    { id: 'f13', label: 'Zasilanie', value: 'zasilacz w zestawie', src: 'Zawartość zestawu', quote: 'W zestawie: zasilacz sieciowy' },
    { id: 'f14', label: 'Wysokość', value: '42 cm', src: 'Specyfikacja', quote: 'Wysokość: 42 cm' },
    { id: 'f15', label: 'Gwarancja', value: '2 lata', src: 'Karta produktu', quote: 'Gwarancja: 2 lata' },
    { id: 'f16', label: 'Cena', value: '279 zł', src: 'Karta produktu', quote: '279,00 zł' }
  ],
  missing: ['Strumień świetlny w lumenach', 'Certyfikat migotania (tylko deklaracja producenta)', 'Żywotność diod LED', 'Opinie klientów (brak na stronie)'],
  google: {
    groups: [
      { name: 'Lampka na biurko', intent: 'Szuka kategorii produktu', kw: [['lampka biurkowa led', 'fraza'], ['lampka na biurko', 'fraza'], ['[lampka biurkowa z regulacją barwy]', 'ścisłe'], ['lampka do pracy przy komputerze', 'fraza']] },
      { name: 'Ładowarka w lampce', intent: 'Szuka 2 w 1', kw: [['lampka z ładowarką indukcyjną', 'fraza'], ['lampka z ładowarką qi', 'fraza'], ['lampka biurkowa z ładowarką', 'fraza']] },
      { name: 'Nauka i wzrok', intent: 'Dba o komfort oczu', kw: [['lampka do nauki', 'fraza'], ['lampka bez migotania', 'fraza'], ['lampka biurkowa cri 95', 'przybliżone']] }
    ],
    headlines: [
      ['Lampka LUMA Desk Pro', 'f16'], ['5 barw światła do wyboru', 'f1'], ['Ładowarka Qi w podstawie', 'f4'], ['10 poziomów jasności', 'f2'], ['Wierne barwy CRI > 95', 'f3'],
      ['Światło bez migotania', 'f11'], ['Timer 45 minut', 'f5'], ['Pobór tylko 10 W', 'f6'], ['Aluminium i drewno dębowe', 'f12'], ['2 lata gwarancji', 'f15'],
      ['Ramię 0–90°, głowica 180°', 'f7,f8'], ['Dotykowy panel', 'f9'], ['Pamięta Twoje ustawienia', 'f10'], ['Lampka LED za 279 zł', 'f16'], ['Lampka do pracy i nauki', 'f1,f2']
    ],
    descriptions: [
      ['5 barw od 2700 do 6500 K i 10 poziomów jasności. Światło dopasujesz do zadania.', 'f1,f2'],
      ['Ładowarka Qi 10 W w podstawie. Odłóż telefon, a lampka go naładuje.', 'f4'],
      ['CRI > 95 i światło bez migotania wg producenta. Timer 45 min i pamięć ustawień.', 'f3,f5,f10,f11'],
      ['Aluminium i dąb, ramię 0–90° i głowica 180°. LUMA Desk Pro za 279 zł.', 'f7,f8,f12,f16']
    ],
    sitelinks: [
      ['Barwy i jasność', '5 trybów, 2700–6500 K', '10 poziomów jasności'],
      ['Ładowarka Qi', 'Ładowarka 10 W w podstawie', 'Ładuj telefon na biurku'],
      ['Specyfikacja', 'CRI > 95, pobór 10 W', 'Wysokość 42 cm'],
      ['Gwarancja 2 lata', 'Gwarancja producenta', 'Szczegóły na karcie']
    ],
    callouts: [['Ładowarka Qi 10 W', 'f4'], ['CRI > 95', 'f3'], ['5 barw światła', 'f1'], ['Timer 45 min', 'f5'], ['Zasilacz w zestawie', 'f13'], ['Gwarancja 2 lata', 'f15']],
    snippet: ['Funkcje', ['5 barw światła', '10 poziomów jasności', 'Ładowarka Qi', 'Timer 45 min']],
    negative: ['lampa sufitowa', 'żyrandol', 'żarówka', 'kinkiet', 'lampka nocna dla dzieci', 'używana', 'naprawa', 'ikea']
  },
  meta: {
    angles: [
      { angle: 'Korzyść', f: 'f1,f2', short: 'Światło dopasowane do zadania.', medium: 'Rano zimne światło do pracy, wieczorem ciepłe do czytania 💡 LUMA Desk Pro ma 5 barw od 2700 do 6500 K i 10 poziomów jasności.', long: 'Rano zimne światło do pracy, wieczorem ciepłe do czytania 💡\n\nLUMA Desk Pro ma 5 barw światła w zakresie 2700–6500 K i 10 poziomów jasności. Ustawisz je dotykiem, a lampka zapamięta ostatni wybór.\n\n✔ CRI > 95\n✔ ładowarka Qi 10 W\n✔ 2 lata gwarancji' },
      { angle: 'Porządek na biurku', f: 'f4', short: 'Lampka i ładowarka w jednym.', medium: 'Jedna rzecz mniej na biurku. W podstawie LUMA Desk Pro jest ładowarka Qi 10 W: odkładasz telefon i się ładuje.', long: 'Jedna rzecz mniej na biurku.\n\nW podstawie LUMA Desk Pro jest bezprzewodowa ładowarka Qi o mocy 10 W. Odkładasz telefon obok lampki i się ładuje. Zasilacz masz w zestawie.' },
      { angle: 'Wieczorna nauka', f: 'f5,f11', short: 'Nauka do późna, bez migotania.', medium: 'Uczysz się wieczorami? LUMA Desk Pro daje światło bez migotania (wg producenta), a timer wyłączy ją po 45 minutach.', long: 'Uczysz się lub pracujesz wieczorami?\n\nLUMA Desk Pro daje światło bez migotania (deklaracja producenta) i ciepłą barwę 2700 K na późne godziny. Timer wyłączy lampkę po 45 minutach, gdy zapomnisz.' },
      { angle: 'Dla twórców', f: 'f3', short: 'Kolory takie, jakie są.', medium: 'Rysujesz, szyjesz, malujesz? Współczynnik CRI > 95 oznacza, że przy LUMA Desk Pro widzisz kolory wiernie.', long: 'Rysujesz, szyjesz, malujesz albo robisz zdjęcia produktów?\n\nLUMA Desk Pro ma współczynnik oddawania barw CRI > 95, więc kolory przy biurku wyglądają wiernie. Ramię ustawisz w zakresie 0–90°, a głowicę obrócisz o 180°.' },
      { angle: 'Design', f: 'f12', short: 'Aluminium i dąb na Twoim biurku.', medium: 'Lampka, która dobrze wygląda także wyłączona. Aluminium i podstawa z drewna dębowego, 42 cm wysokości.', long: 'Lampka, która dobrze wygląda także wyłączona.\n\nLUMA Desk Pro łączy aluminium z podstawą z drewna dębowego. Ma 42 cm wysokości, regulowane ramię i dotykowy panel.' },
      { angle: 'Oferta', f: 'f15,f16', short: 'Lampka z ładowarką za 279 zł.', medium: 'LUMA Desk Pro za 279 zł: 5 barw, 10 poziomów jasności, ładowarka Qi i CRI > 95. Do tego 2 lata gwarancji.', long: 'LUMA Desk Pro za 279 zł to:\n\n• 5 barw światła 2700–6500 K i 10 poziomów jasności\n• ładowarka Qi 10 W w podstawie\n• CRI > 95 i światło bez migotania wg producenta\n• timer 45 min i pamięć ustawień\n• 2 lata gwarancji' }
    ],
    headlines: [['Światło na każdą porę', 'f1'], ['Lampka + ładowarka Qi', 'f4'], ['Nauka bez migotania', 'f11'], ['Kolory jak w rzeczywistości', 'f3'], ['Aluminium i dąb', 'f12'], ['10 poziomów jasności', 'f2'], ['Sama się wyłączy', 'f5'], ['Pamięta Twoje ustawienia', 'f10'], ['2 lata gwarancji', 'f15'], ['Lampka LED za 279 zł', 'f16']],
    linkDesc: [['5 barw, Qi 10 W, CRI > 95', 'f1,f3,f4'], ['Pobór tylko 10 W', 'f6'], ['2 lata gwarancji', 'f15']],
    audiences: ['Zainteresowania: praca zdalna, home office, design wnętrz, rysunek', 'Demografia: studenci i osoby 20–45 lat', 'Remarketing: odwiedzający kategorię oświetlenia w ostatnich 30 dniach', 'Lookalike 1%: kupujący akcesoria biurowe'],
    reels: ['0–2 s: ciemne biurko, dotyk panelu, lampka się zapala. Napis: „Jeden dotyk.”', '2–5 s: przejście barw od ciepłej do zimnej. Napis: „5 barw · 2700–6500 K”', '5–8 s: telefon odłożony na podstawę, ikona ładowania. Napis: „Ładowarka Qi 10 W”', '8–10 s: lampka na biurku z drewnem dębowym. Napis: „LUMA Desk Pro · 279 zł”']
  },
  description: {
    titles: [
      ['Sklep', 'Lampka biurkowa LED LUMA Desk Pro z ładowarką Qi – 5 barw, 10 poziomów jasności, CRI > 95'],
      ['Allegro (do 75 zn.)', 'Lampka biurkowa LED z ładowarką Qi LUMA Desk Pro 5 barw CRI 95 dąb'],
      ['Google Shopping', 'LUMA Desk Pro Lampka biurkowa LED ładowarka Qi 10 W 2700–6500 K aluminium']
    ],
    short: 'Lampka biurkowa LED z 5 barwami światła (2700–6500 K), 10 poziomami jasności i ładowarką bezprzewodową Qi 10 W w podstawie. CRI > 95, timer 45 min, aluminium i drewno dębowe. 2 lata gwarancji.',
    intro: 'LUMA Desk Pro to lampka dla osób, które spędzają przy biurku wiele godzin. Pozwala dopasować barwę i jasność światła do zadania, a w podstawie ma ładowarkę Qi, dzięki której telefon ładuje się, gdy tylko go odłożysz.',
    sections: [
      ['Światło dopasowane do pory dnia', 'Pięć trybów barwy w zakresie od 2700 K (ciepłe) do 6500 K (zimne) i 10 poziomów jasności pozwalają ustawić światło do pracy, nauki lub czytania. Lampka zapamiętuje ostatnie ustawienia.', 'f1,f2,f10'],
      ['Wierne kolory i komfort', 'Współczynnik oddawania barw CRI > 95 sprawia, że kolory przy biurku wyglądają naturalnie. Według producenta światło nie migocze.', 'f3,f11'],
      ['Ładowarka Qi w podstawie', 'W podstawie wbudowano bezprzewodową ładowarkę Qi o mocy 10 W. Zasilacz sieciowy znajduje się w zestawie.', 'f4,f13'],
      ['Ustawisz ją tak, jak potrzebujesz', 'Ramię regulujesz w zakresie 0–90°, a głowicę obrócisz o 180°. Wszystkim sterujesz dotykowym panelem, a timer wyłączy lampkę po 45 minutach.', 'f5,f7,f8,f9'],
      ['Materiały, które dobrze wyglądają', 'Konstrukcja z aluminium i podstawa z drewna dębowego pasują do domowego biura. Lampka ma 42 cm wysokości i pobiera tylko 10 W. Producent udziela 2 lat gwarancji.', 'f6,f12,f14,f15']
    ],
    benefits: [['5 barw 2700–6500 K', 'Światło dopasowane do zadania i pory dnia', 'f1'], ['10 poziomów jasności', 'Dokładnie tyle światła, ile potrzeba', 'f2'], ['CRI > 95', 'Wierne kolory przy pracy twórczej', 'f3'], ['Ładowarka Qi 10 W', 'Mniej kabli na biurku', 'f4'], ['Timer 45 min', 'Lampka nie świeci, gdy zapomnisz', 'f5'], ['Pamięć ustawień', 'Bez ustawiania od nowa', 'f10']],
    forWho: 'Dla osób pracujących i uczących się przy biurku, także wieczorami, oraz dla tych, którzy potrzebują wiernego oddania kolorów, np. przy rysunku czy szyciu.',
    standout: ['Ładowarka Qi 10 W wbudowana w podstawę', 'CRI > 95 i 5 barw światła w jednej lampce', 'Aluminium z podstawą z drewna dębowego'],
    faq: [
      ['Ile barw światła ma lampka?', '5 trybów w zakresie 2700–6500 K.', 'f1'], ['Ile jest poziomów jasności?', '10.', 'f2'], ['Jaki jest współczynnik CRI?', 'Powyżej 95.', 'f3'], ['Czy ładowarka działa z każdym telefonem?', 'Ładowarka działa w standardzie Qi i ma moc 10 W. Telefon musi obsługiwać ładowanie Qi.', 'f4'],
      ['Czy lampka sama się wyłącza?', 'Tak, timer wyłącza ją po 45 minutach.', 'f5'], ['Ile prądu pobiera?', '10 W.', 'f6'], ['Czy zasilacz jest w zestawie?', 'Tak.', 'f13'], ['Jaka jest gwarancja?', '2 lata.', 'f15']
    ],
    seo: {
      metaTitle: 'Lampka biurkowa LED z ładowarką Qi LUMA Desk Pro | CRI 95',
      metaDesc: 'Lampka biurkowa LED z 5 barwami światła, 10 poziomami jasności i ładowarką Qi 10 W. CRI > 95, timer 45 min, aluminium i dąb.',
      url: '/lampka-biurkowa-led-z-ladowarka-qi-luma-desk-pro',
      keywords: [['lampka biurkowa led', 'tytuł, H1, pierwsze zdanie'], ['lampka z ładowarką indukcyjną', 'tytuł, sekcja 3'], ['lampka do nauki', 'sekcja 2, meta description'], ['lampka z regulacją barwy', 'sekcja 1, FAQ']],
      alts: ['Lampka biurkowa LUMA Desk Pro z podstawą z drewna dębowego', 'Telefon ładowany na podstawie lampki LUMA Desk Pro', 'Dotykowy panel sterowania lampki LUMA Desk Pro']
    }
  },
  mailing: {
    subjects: [
      ['Światło dopasowane do Twojego dnia', 'Korzyść', 'f1'], ['Lampka, która ładuje Twój telefon', 'Korzyść', 'f4'], ['Wierne kolory przy biurku', 'Korzyść', 'f3'],
      ['Jakim światłem pracujesz wieczorem?', 'Pytanie', 'f1'], ['Ile kabli masz na biurku?', 'Pytanie', 'f4'], ['Uczysz się do późna?', 'Pytanie', 'f5,f11'],
      ['Co oznacza CRI > 95?', 'Ciekawość', 'f3'], ['2700 K czy 6500 K? Różnica jest duża', 'Ciekawość', 'f1'], ['Ta lampka pamięta, jak ją lubisz', 'Ciekawość', 'f10'],
      ['5 barw i 10 poziomów jasności', 'Konkret', 'f1,f2'], ['Lampka z ładowarką za 279 zł', 'Konkret', 'f16'], ['2 lata gwarancji na LUMA', 'Konkret', 'f15'],
      ['Jedna rzecz mniej na biurku', 'Zmiana', 'f4'], ['Lepsze światło od dzisiaj', 'Zmiana', 'f1,f2'], ['Pożegnaj migoczącą lampkę', 'Zmiana', 'f11']
    ],
    preheaders: [
      ['5 barw, 10 poziomów jasności i ładowarka Qi', 'f1,f2,f4'], ['Od 2700 K do pracy po 6500 K do skupienia', 'f1'], ['Ładowarka Qi 10 W w podstawie', 'f4'], ['CRI > 95: kolory takie, jakie są', 'f3'], ['Timer wyłączy ją po 45 minutach', 'f5'],
      ['Aluminium i drewno dębowe', 'f12'], ['Ramię 0–90° i głowica 180°', 'f7,f8'], ['Pobiera tylko 10 W', 'f6'], ['2 lata gwarancji', 'f15'], ['LUMA Desk Pro za 279 zł', 'f16']
    ],
    headlines: [['Światło na każdą porę dnia', 'f1'], ['Ładuje telefon, gdy pracujesz', 'f4'], ['Kolory bez przekłamań', 'f3'], ['Dokładnie tyle światła, ile trzeba', 'f2'], ['Sama się wyłączy', 'f5'], ['Pamięta Twoje ustawienia', 'f10'], ['Aluminium i dąb', 'f12'], ['Ustawisz ją, jak chcesz', 'f7,f8']],
    slogans: [['Twoje światło. Twoje biurko.', 'f1'], ['Świeci i ładuje.', 'f4'], ['Kolory takie, jakie są.', 'f3'], ['Jeden dotyk, idealne światło.', 'f9'], ['Ciepło wieczorem, jasno rano.', 'f1'], ['Mniej kabli, więcej miejsca.', 'f4'], ['Pamięta, jak ją lubisz.', 'f10'], ['Dąb, aluminium i światło.', 'f12']],
    ctas: ['Zobacz lampkę', 'Sprawdź barwy', 'Wybierz LUMA', 'Zamów teraz', 'Zobacz specyfikację', 'Dodaj do koszyka', 'Poznaj szczegóły', 'Wróć do koszyka'],
    body: {
      short: 'Cześć!\n\nLUMA Desk Pro ma 5 barw światła i 10 poziomów jasności, a w podstawie ładowarkę Qi 10 W. Odkładasz telefon i się ładuje.\n\n[Zobacz lampkę]',
      standard: 'Cześć!\n\nDobre światło przy biurku to mniej zmęczenia i więcej skupienia. LUMA Desk Pro daje Ci nad nim pełną kontrolę.\n\n• 5 barw w zakresie 2700–6500 K i 10 poziomów jasności.\n• CRI > 95: kolory wyglądają wiernie.\n• Ładowarka Qi 10 W w podstawie.\n• Timer 45 min i pamięć ostatnich ustawień.\n\nAluminium, podstawa z drewna dębowego i 2 lata gwarancji.\n\n[Zobacz lampkę]',
      long: 'Cześć!\n\nJeśli spędzasz przy biurku wiele godzin, ten mail jest dla Ciebie.\n\nŚWIATŁO DO ZADANIA\nLUMA Desk Pro ma 5 barw w zakresie od 2700 K (ciepłe, do czytania) do 6500 K (zimne, do skupienia) i 10 poziomów jasności. Zapamiętuje ostatnie ustawienia.\n\nWIERNE KOLORY\nWspółczynnik CRI > 95. Według producenta światło nie migocze.\n\nŁADOWARKA\nW podstawie jest ładowarka Qi 10 W. Zasilacz masz w zestawie.\n\nUSTAWIENIA\nRamię 0–90°, głowica obracana o 180°, dotykowy panel i timer 45 min.\n\nNAJCZĘSTSZE PYTANIA\nIle prądu pobiera? 10 W.\nJaka wysokość? 42 cm.\n\n[Zobacz LUMA Desk Pro]\n\nP.S. Lampka ma 2 lata gwarancji.'
    },
    sequences: [
      { name: 'Porzucony koszyk', goal: 'Dokończenie zamówienia', emails: [
        ['po 1 godz.', 'Twoja lampka LUMA czeka w koszyku', 'Dokończ zamówienie jednym kliknięciem', 'Przypomnienie: zdjęcie, cena 279 zł, przycisk powrotu do koszyka.', 'f16'],
        ['po 24 godz.', 'Czy Twój telefon naładuje się na LUMA?', 'Ładowarka w standardzie Qi, 10 W', 'Rozwiewa najczęstszą wątpliwość: zgodność ładowarki.', 'f4'],
        ['po 72 godz.', '2 lata gwarancji na Twoją lampkę', 'Ostatnie przypomnienie o koszyku', 'Argument bezpieczeństwa: gwarancja i zasilacz w zestawie.', 'f13,f15']
      ] },
      { name: 'Po zakupie', goal: 'Zadowolenie i opinia', emails: [
        ['w dniu dostawy', 'Którą barwę wybrać do czego?', 'Przewodnik po 5 trybach światła', 'Krótka ściąga: barwa ciepła do czytania, zimna do skupienia.', 'f1,f2'],
        ['po 5 dniach', 'Ustaw lampkę idealnie w 1 minutę', 'Ramię, głowica i timer', 'Poradnik ustawienia ramienia, głowicy i timera.', 'f5,f7,f8'],
        ['po 14 dniach', 'Jak sprawdza się LUMA?', 'Podziel się opinią, pomożesz innym', 'Prośba o opinię w sklepie. Bez obietnic nagród, jeśli sklep ich nie podał.', '']
      ] },
      { name: 'Premiera / kampania', goal: 'Sprzedaż do bazy', emails: [
        ['dzień 1', 'Światło dopasowane do Twojego dnia', '5 barw, 10 poziomów jasności, ładowarka Qi', 'Mail produktowy w wersji standardowej.', 'f1,f2,f4'],
        ['dzień 3', 'Co oznacza CRI > 95?', 'Dlaczego kolory przy biurku mają znaczenie', 'Mail edukacyjny o oddawaniu barw.', 'f3'],
        ['dzień 6', 'Jedna rzecz mniej na biurku', 'Lampka i ładowarka w jednym', 'Mail o ładowarce Qi i porządku na biurku.', 'f4,f13']
      ] }
    ],
    ab: ['Test 1: temat „Korzyść” vs „Pytanie” („Światło dopasowane do Twojego dnia” vs „Jakim światłem pracujesz wieczorem?”). Mierzymy otwarcia.', 'Test 2: przycisk „Zobacz lampkę” vs „Sprawdź barwy”. Mierzymy kliknięcia.', 'Test 3: zdjęcie lampki z telefonem na podstawie vs sama lampka. Mierzymy kliknięcia.']
  },
  blog: {
    ideas: [['Jak wybrać lampkę biurkową do pracy i nauki', 'poradnik'], ['Temperatura barwowa: 2700 K czy 6500 K?', 'edukacja'], ['Co to jest CRI i dlaczego ma znaczenie', 'edukacja'], ['Migotanie światła: jak je sprawdzić', 'jak to zrobić'], ['Lampka z ładowarką Qi: czy warto', 'porównanie'], ['Jak oświetlić domowe biuro', 'poradnik'], ['Ergonomia biurka: światło, ekran, krzesło', 'lista'], ['Lampka do rysowania i szycia: na co patrzeć', 'poradnik'], ['Ile prądu zużywa lampka LED', 'edukacja'], ['Światło do nauki wieczorem', 'poradnik']],
    title: 'Jak wybrać lampkę biurkową do pracy i nauki',
    metaDesc: 'Barwa światła, jasność, CRI, migotanie i funkcje dodatkowe. Na co patrzeć przy wyborze lampki biurkowej LED.',
    outline: [['Temperatura barwowa', 'co oznacza zakres 2700–6500 K'], ['Jasność i jej regulacja', 'ile poziomów to wygoda (przykład: 10)'], ['CRI i wierność kolorów', 'kiedy CRI > 95 ma znaczenie'], ['Migotanie', 'deklaracja producenta a certyfikat'], ['Funkcje dodatkowe', 'ładowarka Qi, timer, pamięć ustawień'], ['Lista kontrolna przed zakupem', '8 pytań do karty produktu'], ['FAQ', '5 pytań z odpowiedziami']],
    intro: 'Lampka biurkowa wpływa na komfort pracy bardziej, niż się wydaje. Zanim wybierzesz model, sprawdź kilka parametrów: zakres barwy światła, regulację jasności, współczynnik CRI i to, czy światło nie migocze. Omawiamy je po kolei, na przykładzie konkretnych wartości z kart produktów.'
  }
});

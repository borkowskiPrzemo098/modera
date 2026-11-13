/* MODERA demo — KAFFO Barista 15 (produkt i marka fikcyjne). Każda treść ma odwołania do faktów [f..]. */
(window.MODERA_DEMO = window.MODERA_DEMO || []).push({
  id: 'kaffo', icon: 'cup',
  url: 'https://sklep-demo.pl/ekspres-kaffo-barista-15',
  name: 'KAFFO Barista 15 — ekspres ciśnieniowy z młynkiem',
  short: 'Ekspres KAFFO Barista 15', category: 'AGD / Kawa', price: '1 299 zł',
  audience: 'Osoby, które chcą pić w domu espresso i kawy mleczne ze świeżo mielonych ziaren, bez kapsułek',
  facts: [
    { id: 'f1', label: 'Ciśnienie pompy', value: '15 bar', src: 'Specyfikacja', quote: 'Ciśnienie pompy: 15 bar' },
    { id: 'f2', label: 'Młynek', value: 'stożkowy, stalowe żarna', src: 'Opis', quote: 'Wbudowany młynek stożkowy ze stalowymi żarnami' },
    { id: 'f3', label: 'Regulacja mielenia', value: '15 stopni', src: 'Specyfikacja', quote: 'Stopnie mielenia: 15' },
    { id: 'f4', label: 'Pojemnik na ziarna', value: '250 g', src: 'Specyfikacja', quote: 'Pojemność pojemnika na ziarna: 250 g' },
    { id: 'f5', label: 'Spieniacz', value: 'parowy, dysza obrotowa', src: 'Opis', quote: 'Parowa dysza do spieniania mleka, obrotowa' },
    { id: 'f6', label: 'Zbiornik na wodę', value: '1,8 l, wyjmowany', src: 'Specyfikacja', quote: 'Zbiornik na wodę: 1,8 l (wyjmowany)' },
    { id: 'f7', label: 'Nagrzewanie', value: 'ok. 30 s (thermoblock)', src: 'Opis', quote: 'System thermoblock: gotowość w ok. 30 sekund' },
    { id: 'f8', label: 'Manometr', value: 'tak, na froncie', src: 'Opis', quote: 'Manometr ciśnienia na panelu przednim' },
    { id: 'f9', label: 'W zestawie', value: 'sitka 1 i 2 filiżanki, dzbanek 350 ml, ubijak', src: 'Zawartość zestawu', quote: 'Sitka na 1 i 2 filiżanki, dzbanek do spieniania 350 ml, ubijak' },
    { id: 'f10', label: 'Obudowa', value: 'stal nierdzewna', src: 'Specyfikacja', quote: 'Materiał obudowy: stal nierdzewna' },
    { id: 'f11', label: 'Płyta grzewcza', value: 'podgrzewanie filiżanek', src: 'Opis', quote: 'Podgrzewana płyta na filiżanki' },
    { id: 'f12', label: 'Moc', value: '1600 W', src: 'Specyfikacja', quote: 'Moc: 1600 W' },
    { id: 'f13', label: 'Wymiary / waga', value: '33 × 31 × 40 cm, 8,2 kg', src: 'Specyfikacja', quote: 'Wymiary: 33 × 31 × 40 cm; Waga: 8,2 kg' },
    { id: 'f14', label: 'Auto-wyłączanie', value: 'po 30 min bezczynności', src: 'Opis', quote: 'Automatyczne wyłączenie po 30 minutach' },
    { id: 'f15', label: 'Gwarancja', value: '3 lata', src: 'Karta produktu', quote: 'Gwarancja producenta: 3 lata' },
    { id: 'f16', label: 'Cena', value: '1 299 zł', src: 'Karta produktu', quote: '1 299,00 zł' }
  ],
  missing: ['Kraj produkcji', 'Certyfikaty i nagrody', 'Opinie klientów (brak na stronie)', 'Czy można używać kawy mielonej'],
  google: {
    groups: [
      { name: 'Ekspres z młynkiem', intent: 'Szuka konkretnego typu urządzenia', kw: [['ekspres z młynkiem', 'fraza'], ['ekspres ciśnieniowy z młynkiem', 'fraza'], ['ekspres kolbowy z młynkiem', 'fraza'], ['[ekspres z młynkiem do domu]', 'ścisłe']] },
      { name: 'Kawa jak w kawiarni', intent: 'Szuka efektu, nie urządzenia', kw: [['ekspres do latte i cappuccino', 'fraza'], ['ekspres ze spieniaczem mleka', 'fraza'], ['jak zrobić espresso w domu', 'przybliżone']] },
      { name: 'Zamiast kapsułek', intent: 'Chce zmienić kapsułki na ziarno', kw: [['ekspres na kawę ziarnistą', 'fraza'], ['ekspres bez kapsułek', 'fraza'], ['ekspres 15 bar', 'fraza']] }
    ],
    headlines: [
      ['Ekspres KAFFO Barista 15', 'f16'], ['Kawa jak z kawiarni w domu', 'f1,f2'], ['Młynek stożkowy w zestawie', 'f2'], ['Świeżo mielona kawa', 'f2'], ['Gotowy do pracy w 30 s', 'f7'],
      ['Ciśnienie 15 bar', 'f1'], ['Spieniacz mleka parowy', 'f5'], ['15 stopni mielenia', 'f3'], ['Stalowa obudowa', 'f10'], ['3 lata gwarancji', 'f15'],
      ['Ubijak i dzbanek w zestawie', 'f9'], ['Manometr na froncie', 'f8'], ['Zbiornik 1,8 l wody', 'f6'], ['Ekspres z młynkiem 1299 zł', 'f16'], ['Latte i cappuccino w domu', 'f5']
    ],
    descriptions: [
      ['Młynek stożkowy, 15 stopni mielenia i ciśnienie 15 bar. Świeże espresso w domu.', 'f1,f2,f3'],
      ['Gotowy w ok. 30 s dzięki thermoblock. Parowy spieniacz do latte i cappuccino.', 'f5,f7'],
      ['Stalowa obudowa, manometr i 3 lata gwarancji. W zestawie ubijak i dzbanek 350 ml.', 'f8,f9,f10,f15'],
      ['Zbiornik 1,8 l i pojemnik na 250 g ziaren. Ekspres z młynkiem za 1299 zł.', 'f4,f6,f16']
    ],
    sitelinks: [
      ['Specyfikacja techniczna', 'Ciśnienie, moc, wymiary', 'Pełna lista parametrów'],
      ['Co jest w zestawie', 'Sitka, dzbanek 350 ml', 'Ubijak w komplecie'],
      ['Gwarancja 3 lata', 'Gwarancja producenta', 'Szczegóły na karcie'],
      ['Jak ustawić mielenie', '15 stopni regulacji', 'Poradnik krok po kroku']
    ],
    callouts: [['Młynek w zestawie', 'f2'], ['Nagrzewanie ok. 30 s', 'f7'], ['Ciśnienie 15 bar', 'f1'], ['Gwarancja 3 lata', 'f15'], ['Obudowa ze stali', 'f10'], ['Ubijak w komplecie', 'f9']],
    snippet: ['W zestawie', ['Sitko 1 filiżanka', 'Sitko 2 filiżanki', 'Dzbanek 350 ml', 'Ubijak']],
    negative: ['kapsułki', 'kapsułkowy', 'serwis', 'naprawa', 'instrukcja pdf', 'używany', 'części zamienne', 'odkamieniacz']
  },
  meta: {
    angles: [
      { angle: 'Korzyść', f: 'f1,f2', short: 'Kawa jak z kawiarni. W Twojej kuchni.', medium: 'Kawa jak z ulubionej kawiarni, tylko w Twojej kuchni ☕\nKAFFO Barista 15 mieli ziarna tuż przed parzeniem, a pompa 15 bar wydobywa z nich pełen smak espresso.', long: 'Kawa jak z ulubionej kawiarni, tylko w Twojej kuchni ☕\n\nKAFFO Barista 15 ma wbudowany młynek stożkowy, więc ziarna mielisz tuż przed parzeniem. Pompa 15 bar daje gęstą cremę, a parowy spieniacz robi piankę do latte i cappuccino.\n\n✔ 15 stopni mielenia\n✔ gotowość w ok. 30 s\n✔ 3 lata gwarancji' },
      { angle: 'Problem', f: 'f2,f3,f7', short: 'Pożegnaj kapsułki.', medium: 'Masz dość kapsułek i kawy, która zawsze smakuje tak samo?\nZ KAFFO Barista 15 sam decydujesz o smaku: świeże ziarna, 15 stopni mielenia i gotowość w ok. 30 sekund.', long: 'Masz dość kapsułek i kawy, która zawsze smakuje tak samo?\n\nW KAFFO Barista 15 to Ty ustawiasz smak. Młynek ma 15 stopni mielenia: drobniej pod mocne espresso, grubiej pod łagodniejszą kawę. Ekspres nagrzewa się w ok. 30 sekund, więc poranna kawa nie wymaga czekania.\n\nŚwieże ziarna zamiast kapsułek.' },
      { angle: 'Rytuał poranka', f: 'f7,f11', short: 'Poranna kawa w 30 sekund.', medium: 'Twój poranek, Twoje espresso. KAFFO Barista 15 jest gotowy w ok. 30 s, a podgrzewana płyta trzyma filiżanki w cieple.', long: 'Twój poranek, Twoje espresso.\n\nKAFFO Barista 15 nagrzewa się w ok. 30 sekund dzięki systemowi thermoblock. Na górze ekspresu jest podgrzewana płyta, więc kawa nie stygnie w zimnej filiżance. A po 30 minutach bezczynności ekspres sam się wyłączy.' },
      { angle: 'Dla miłośnika latte', f: 'f5,f9', short: 'Pianka do latte jak u baristy.', medium: 'Lubisz latte i cappuccino? Parowa, obrotowa dysza KAFFO robi aksamitną piankę z mleka. Dzbanek 350 ml masz w zestawie.', long: 'Lubisz latte i cappuccino?\n\nKAFFO Barista 15 ma parową dyszę do spieniania, którą obrócisz pod wygodnym kątem. W zestawie jest dzbanek 350 ml i ubijak, więc od pierwszego dnia masz wszystko, czego potrzebujesz do kaw mlecznych.' },
      { angle: 'Kontrola i precyzja', f: 'f3,f8', short: 'Widzisz ciśnienie. Ustawiasz smak.', medium: 'Dla tych, którzy lubią mieć kontrolę: manometr na froncie pokazuje ciśnienie parzenia, a 15 stopni mielenia pozwala dopracować każde espresso.', long: 'Dla tych, którzy lubią mieć kontrolę.\n\nManometr na panelu przednim pokazuje ciśnienie podczas parzenia, więc od razu widzisz, czy mielenie jest dobrane. 15 stopni regulacji młynka pozwala dopasować ekspres do każdej kawy.' },
      { angle: 'Oferta', f: 'f9,f15,f16', short: 'Ekspres z młynkiem za 1 299 zł.', medium: 'Ekspres z młynkiem, spieniaczem i stalową obudową za 1 299 zł. W zestawie ubijak i dzbanek, do tego 3 lata gwarancji.', long: 'KAFFO Barista 15 za 1 299 zł to komplet do domowej kawy:\n\n• młynek stożkowy z 15 stopniami mielenia\n• pompa 15 bar i manometr\n• parowy spieniacz, dzbanek 350 ml i ubijak w zestawie\n• obudowa ze stali nierdzewnej\n• 3 lata gwarancji' }
    ],
    headlines: [['Kawiarnia w Twojej kuchni', 'f1'], ['Pożegnaj kapsułki', 'f2'], ['Espresso w 30 sekund', 'f7'], ['Latte jak u baristy', 'f5'], ['Młynek w zestawie', 'f2'], ['15 stopni mielenia', 'f3'], ['3 lata gwarancji', 'f15'], ['Widzisz ciśnienie parzenia', 'f8'], ['Komplet: ubijak i dzbanek', 'f9'], ['Ekspres z młynkiem 1 299 zł', 'f16']],
    linkDesc: [['Młynek, 15 bar, spieniacz', 'f1,f2,f5'], ['Gotowy w ok. 30 s', 'f7'], ['3 lata gwarancji', 'f15']],
    audiences: ['Zainteresowania: kawa specialty, espresso, latte art, ekspresy do kawy', 'Zachowania: niedawni kupujący AGD kuchenne', 'Remarketing: odwiedzający stronę ekspresu w ostatnich 30 dniach', 'Lookalike 1%: klienci, którzy kupili ziarna kawy'],
    reels: ['0–2 s: zbliżenie na młynek, dźwięk mielenia. Napis: „Świeżo mielona. Codziennie.”', '2–5 s: manometr wskazuje ciśnienie, espresso spływa do filiżanki. Napis: „15 bar”', '5–8 s: dysza spienia mleko w dzbanku 350 ml. Napis: „Latte w domu”', '8–10 s: gotowa kawa na podgrzewanej płycie. Napis: „KAFFO Barista 15 · 1 299 zł”']
  },
  description: {
    titles: [
      ['Sklep', 'Ekspres ciśnieniowy z młynkiem KAFFO Barista 15 – 15 bar, spieniacz mleka, stal nierdzewna'],
      ['Allegro (do 75 zn.)', 'Ekspres z młynkiem KAFFO Barista 15 15 bar spieniacz stal 3 lata gwarancji'],
      ['Google Shopping', 'KAFFO Barista 15 Ekspres ciśnieniowy z młynkiem 15 bar 1600 W stal nierdzewna']
    ],
    short: 'Ekspres ciśnieniowy z wbudowanym młynkiem stożkowym, pompą 15 bar i parową dyszą do spieniania mleka. Gotowy do pracy w ok. 30 sekund, w stalowej obudowie, z 3-letnią gwarancją producenta.',
    intro: 'KAFFO Barista 15 to ekspres dla osób, które chcą w domu pić espresso, latte i cappuccino ze świeżo mielonych ziaren. Łączy w jednym urządzeniu młynek, pompę 15 bar i parowy spieniacz, a dzięki systemowi thermoblock jest gotowy do parzenia w około 30 sekund.',
    sections: [
      ['Świeżo mielona kawa przy każdej filiżance', 'Wbudowany młynek stożkowy ze stalowymi żarnami mieli ziarna bezpośrednio przed parzeniem, dzięki czemu kawa zachowuje aromat. Pojemnik mieści 250 g ziaren, a 15 stopni regulacji pozwala dopasować grubość mielenia do rodzaju kawy: drobniej pod intensywne espresso, grubiej pod łagodniejsze napary.', 'f2,f3,f4'],
      ['Ciśnienie 15 bar pod pełną kontrolą', 'Pompa o ciśnieniu 15 bar wydobywa z kawy gęstą cremę. Manometr na panelu przednim pokazuje ciśnienie w trakcie parzenia, więc od razu widać, czy mielenie i ubicie kawy są dobrane prawidłowo.', 'f1,f8'],
      ['Gotowy w około 30 sekund', 'System thermoblock nagrzewa wodę w około 30 sekund. Podgrzewana płyta na górze ekspresu ogrzewa filiżanki, a funkcja automatycznego wyłączenia po 30 minutach bezczynności dba o oszczędność energii.', 'f7,f11,f14'],
      ['Latte i cappuccino jak w kawiarni', 'Parowa dysza do spieniania mleka jest obrotowa, więc łatwo ustawić ją pod dzbanek. W zestawie znajdziesz dzbanek o pojemności 350 ml, a także ubijak i sitka na jedną lub dwie filiżanki.', 'f5,f9'],
      ['Solidna konstrukcja na lata', 'Obudowa ze stali nierdzewnej jest odporna i łatwa w utrzymaniu czystości. Wyjmowany zbiornik na 1,8 l wody wygodnie napełnisz pod kranem. Producent udziela 3 lat gwarancji.', 'f6,f10,f15']
    ],
    benefits: [['Młynek stożkowy, 15 stopni', 'Kawa mielona tuż przed parzeniem, smak dopasowany do ziaren', 'f2,f3'], ['Pompa 15 bar + manometr', 'Gęsta crema i widoczna kontrola parzenia', 'f1,f8'], ['Thermoblock ok. 30 s', 'Poranna kawa bez czekania', 'f7'], ['Parowa dysza obrotowa', 'Pianka do latte i cappuccino', 'f5'], ['Zbiornik 1,8 l, wyjmowany', 'Rzadsze i wygodne dolewanie wody', 'f6'], ['3 lata gwarancji', 'Spokój na dłużej', 'f15']],
    forWho: 'Dla osób, które piją kawę codziennie i chcą przejść z kapsułek lub kawy rozpuszczalnej na świeżo mielone ziarna, a przy tym przygotowywać w domu kawy mleczne.',
    standout: ['Młynek, pompa 15 bar i spieniacz w jednym urządzeniu', 'Manometr pozwala widzieć ciśnienie parzenia', 'Komplet akcesoriów w zestawie: ubijak, dzbanek 350 ml i dwa sitka'],
    faq: [
      ['Jakie jest ciśnienie pompy?', 'Pompa pracuje z ciśnieniem 15 bar.', 'f1'], ['Ile stopni mielenia ma młynek?', 'Młynek stożkowy ma 15 stopni regulacji.', 'f3'], ['Ile ziaren mieści pojemnik?', 'Pojemnik mieści 250 g ziaren.', 'f4'], ['Jak długo ekspres się nagrzewa?', 'Dzięki systemowi thermoblock jest gotowy w około 30 sekund.', 'f7'],
      ['Co jest w zestawie?', 'Sitka na 1 i 2 filiżanki, dzbanek do spieniania 350 ml i ubijak.', 'f9'], ['Czy zbiornik na wodę jest wyjmowany?', 'Tak, zbiornik o pojemności 1,8 l można wyjąć.', 'f6'], ['Czy ekspres sam się wyłącza?', 'Tak, po 30 minutach bezczynności.', 'f14'], ['Jaka jest gwarancja?', 'Producent udziela 3 lat gwarancji.', 'f15']
    ],
    seo: {
      metaTitle: 'Ekspres z młynkiem KAFFO Barista 15 | 15 bar, spieniacz',
      metaDesc: 'Ekspres ciśnieniowy z młynkiem stożkowym, 15 bar i parowym spieniaczem. Gotowy w ok. 30 s, stalowa obudowa, 3 lata gwarancji.',
      url: '/ekspres-cisnieniowy-z-mlynkiem-kaffo-barista-15',
      keywords: [['ekspres z młynkiem', 'tytuł, H1, pierwsze zdanie'], ['ekspres ciśnieniowy', 'tytuł, sekcja 2'], ['spieniacz mleka', 'sekcja 4, FAQ'], ['ekspres 15 bar', 'sekcja 2, meta description']],
      alts: ['Ekspres ciśnieniowy KAFFO Barista 15 z młynkiem, widok z przodu', 'Manometr i panel sterowania ekspresu KAFFO Barista 15', 'Parowa dysza do spieniania mleka i dzbanek 350 ml']
    }
  },
  mailing: {
    subjects: [
      ['Kawa jak z kawiarni. Bez wychodzenia z domu', 'Korzyść', 'f1,f2'], ['Świeżo mielona kawa w 30 sekund', 'Korzyść', 'f2,f7'], ['Twoje espresso, Twoje ustawienia', 'Korzyść', 'f3'],
      ['Wiesz, ile kosztuje Cię kawa z kapsułek?', 'Pytanie', 'f2'], ['Latte w domu? Sprawdź, jak to zrobić', 'Pytanie', 'f5'], ['Gotowy na lepszą poranną kawę?', 'Pytanie', 'f7'],
      ['Sekret gęstej cremy to 15 bar', 'Ciekawość', 'f1'], ['Co pokazuje manometr na ekspresie?', 'Ciekawość', 'f8'], ['15 stopni mielenia. Po co aż tyle?', 'Ciekawość', 'f3'],
      ['Ubijak i dzbanek masz już w zestawie', 'Konkret', 'f9'], ['Ekspres z młynkiem za 1 299 zł', 'Konkret', 'f16'], ['3 lata gwarancji na Twój ekspres', 'Konkret', 'f15'],
      ['Pożegnaj kapsułki na dobre', 'Zmiana', 'f2'], ['Od dziś mielisz ziarna sam', 'Zmiana', 'f2'], ['Poranek bez czekania na kawę', 'Zmiana', 'f7']
    ],
    preheaders: [
      ['Młynek, 15 bar i spieniacz w jednym ekspresie', 'f1,f2,f5'], ['Gotowy do parzenia w około 30 sekund', 'f7'], ['15 stopni mielenia, smak dopasujesz do ziaren', 'f3'], ['W zestawie dzbanek 350 ml i ubijak', 'f9'], ['Manometr pokaże, czy espresso wyjdzie idealne', 'f8'],
      ['Stalowa obudowa i 3 lata gwarancji', 'f10,f15'], ['Pojemnik na 250 g ziaren i zbiornik 1,8 l', 'f4,f6'], ['Podgrzewana płyta trzyma filiżanki w cieple', 'f11'], ['Parowa dysza do latte i cappuccino', 'f5'], ['KAFFO Barista 15 za 1 299 zł', 'f16']
    ],
    headlines: [['Świeżo mielona kawa przy każdej filiżance', 'f2'], ['15 bar. Gęsta crema.', 'f1'], ['Gotowy w 30 sekund', 'f7'], ['Latte i cappuccino w domu', 'f5'], ['Ty ustawiasz smak', 'f3'], ['Kontrola, którą widać', 'f8'], ['Komplet od pierwszego dnia', 'f9'], ['Stal nierdzewna, 3 lata gwarancji', 'f10,f15']],
    slogans: [['Ziarno. Młynek. Espresso.', 'f2'], ['Kawiarnia w Twojej kuchni.', 'f1'], ['Poranek w 30 sekund.', 'f7'], ['Bez kapsułek. Z charakterem.', 'f2'], ['15 stopni Twojego smaku.', 'f3'], ['Pianka jak u baristy.', 'f5'], ['Widzisz ciśnienie. Czujesz smak.', 'f8'], ['Stal, która wytrzyma lata.', 'f10']],
    ctas: ['Zobacz ekspres', 'Sprawdź szczegóły', 'Wybierz KAFFO', 'Zamów teraz', 'Zobacz, co w zestawie', 'Dodaj do koszyka', 'Poznaj specyfikację', 'Wróć do koszyka'],
    body: {
      short: 'Cześć!\n\nKAFFO Barista 15 mieli ziarna tuż przed parzeniem, a pompa 15 bar wydobywa z nich pełen smak. Jest gotowy w ok. 30 sekund, a parową dyszą zrobisz piankę do latte.\n\n[Zobacz ekspres]',
      standard: 'Cześć!\n\nWyobraź sobie poranek, w którym pierwsza kawa smakuje jak w ulubionej kawiarni. KAFFO Barista 15 łączy w jednym urządzeniu wszystko, czego do tego potrzebujesz.\n\n• Młynek stożkowy z 15 stopniami mielenia: ziarna mielisz tuż przed parzeniem.\n• Pompa 15 bar i manometr: gęsta crema i widoczna kontrola parzenia.\n• Thermoblock: gotowość w około 30 sekund.\n• Parowa dysza obrotowa: pianka do latte i cappuccino.\n\nW zestawie dostajesz dzbanek 350 ml, ubijak i dwa sitka. Producent daje 3 lata gwarancji.\n\n[Zobacz ekspres]',
      long: 'Cześć!\n\nJeśli codzienna kawa to dla Ciebie mały rytuał, ten mail jest dla Ciebie.\n\nDLACZEGO ŚWIEŻO MIELONA?\nKawa traci aromat szybko po zmieleniu. Dlatego KAFFO Barista 15 ma wbudowany młynek stożkowy ze stalowymi żarnami i pojemnikiem na 250 g ziaren. 15 stopni regulacji pozwala dobrać mielenie do każdej kawy.\n\nESPRESSO POD KONTROLĄ\nPompa 15 bar daje gęstą cremę, a manometr na froncie pokazuje ciśnienie w trakcie parzenia.\n\nBEZ CZEKANIA\nSystem thermoblock nagrzewa ekspres w około 30 sekund. Podgrzewana płyta ogrzewa filiżanki, a po 30 minutach bezczynności ekspres sam się wyłącza.\n\nKAWY MLECZNE\nParowa, obrotowa dysza zrobi piankę do latte i cappuccino. Dzbanek 350 ml masz w zestawie.\n\nNAJCZĘSTSZE PYTANIA\nIle wody mieści zbiornik? 1,8 l, zbiornik jest wyjmowany.\nCo jest w zestawie? Sitka na 1 i 2 filiżanki, dzbanek 350 ml, ubijak.\n\n[Zobacz KAFFO Barista 15]\n\nP.S. Producent udziela na ekspres 3 lat gwarancji.'
    },
    sequences: [
      { name: 'Porzucony koszyk', goal: 'Dokończenie zamówienia', emails: [
        ['po 1 godz.', 'Twój ekspres KAFFO czeka w koszyku', 'Dokończ zamówienie jednym kliknięciem', 'Przypomnienie bez nacisku: zdjęcie, cena 1 299 zł, przycisk powrotu do koszyka.', 'f16'],
        ['po 24 godz.', 'Co dostajesz w zestawie z KAFFO?', 'Dzbanek 350 ml, ubijak i dwa sitka', 'Rozwiewa wątpliwość „co jeszcze muszę dokupić”: lista zawartości zestawu.', 'f9'],
        ['po 72 godz.', '3 lata gwarancji na Twój ekspres', 'Ostatnie przypomnienie o koszyku', 'Argument bezpieczeństwa zakupu: gwarancja producenta i stalowa obudowa.', 'f10,f15']
      ] },
      { name: 'Po zakupie', goal: 'Zadowolenie i opinia', emails: [
        ['w dniu dostawy', 'Pierwsze espresso z KAFFO: 3 kroki', 'Krótki start, zanim zaparzysz pierwszą kawę', 'Napełnienie zbiornika, ustawienie mielenia na środku skali, odczyt manometru.', 'f3,f6,f8'],
        ['po 5 dniach', 'Jak zrobić piankę do latte', 'Dysza parowa i dzbanek 350 ml w akcji', 'Poradnik spieniania krok po kroku, z odwołaniem do akcesoriów z zestawu.', 'f5,f9'],
        ['po 14 dniach', 'Jak smakuje Twoja kawa?', 'Podziel się opinią, pomożesz innym', 'Prośba o opinię w sklepie. Bez obietnic nagród, jeśli sklep ich nie podał.', '']
      ] },
      { name: 'Premiera / kampania', goal: 'Sprzedaż do bazy', emails: [
        ['dzień 1', 'Kawa jak z kawiarni. Bez wychodzenia z domu', 'Młynek, 15 bar i spieniacz w jednym', 'Mail produktowy w wersji standardowej.', 'f1,f2,f5'],
        ['dzień 3', 'Sekret gęstej cremy to 15 bar', 'Co pokazuje manometr i po co Ci on', 'Mail edukacyjny o ciśnieniu i manometrze, z linkiem do produktu.', 'f1,f8'],
        ['dzień 6', 'Pożegnaj kapsułki na dobre', 'Świeże ziarna i 15 stopni mielenia', 'Mail porównawczy: kapsułki a świeże ziarna, bez wymyślonych kosztów.', 'f2,f3']
      ] }
    ],
    ab: ['Test 1: temat „Korzyść” vs „Pytanie” (np. „Kawa jak z kawiarni…” vs „Wiesz, ile kosztuje Cię kawa z kapsułek?”). Mierzymy otwarcia.', 'Test 2: przycisk „Zobacz ekspres” vs „Zobacz, co w zestawie”. Mierzymy kliknięcia.', 'Test 3: treść standardowa vs rozbudowana dla segmentu, który otwierał maile w ostatnich 30 dniach.']
  },
  blog: {
    ideas: [['Jak wybrać ekspres ciśnieniowy z młynkiem? Poradnik', 'poradnik'], ['Ekspres kolbowy czy automatyczny: co wybrać do domu', 'porównanie'], ['Stopień mielenia kawy: jak go ustawić pod espresso', 'jak to zrobić'], ['Do czego służy manometr w ekspresie', 'edukacja'], ['Latte, cappuccino, flat white: różnice i przepisy', 'przepisy'], ['Jak spienić mleko dyszą parową krok po kroku', 'jak to zrobić'], ['Czym jest thermoblock i jak działa', 'edukacja'], ['Kapsułki czy świeże ziarna: co wybrać', 'porównanie'], ['Jak dbać o ekspres z młynkiem', 'poradnik'], ['Ile kawy na espresso: sitko na 1 i 2 filiżanki', 'jak to zrobić']],
    title: 'Jak wybrać ekspres ciśnieniowy z młynkiem? Poradnik',
    metaDesc: 'Ciśnienie, rodzaj młynka, regulacja mielenia, spieniacz i czas nagrzewania. Na co patrzeć przy wyborze ekspresu z młynkiem do domu.',
    outline: [['Dlaczego młynek w ekspresie ma znaczenie', 'świeżość mielenia, pojemnik na ziarna (przykład: 250 g)'], ['Ciśnienie pompy i manometr', 'co daje 15 bar, po co manometr'], ['Regulacja mielenia', 'ile stopni to wygoda (przykład: 15)'], ['Spieniacz parowy', 'dysza obrotowa, dzbanek w zestawie'], ['Czas nagrzewania', 'thermoblock, ok. 30 s'], ['Lista kontrolna przed zakupem', '8 pytań do karty produktu'], ['FAQ', '5 pytań z odpowiedziami']],
    intro: 'Ekspres z wbudowanym młynkiem to najprostszy sposób na kawę ze świeżo mielonych ziaren. Zanim jednak wybierzesz model, sprawdź kilka parametrów, które realnie wpływają na smak i wygodę: ciśnienie pompy, rodzaj młynka, liczbę stopni mielenia, sposób spieniania mleka i czas nagrzewania. Omawiamy je po kolei, na przykładzie konkretnych wartości z kart produktów.'
  }
});

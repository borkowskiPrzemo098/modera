/* MODERA demo — TREKO City 25 (produkt i marka fikcyjne). Każda treść ma odwołania do faktów [f..]. */
(window.MODERA_DEMO = window.MODERA_DEMO || []).push({
  id: 'treko', icon: 'bag',
  url: 'https://sklep-demo.pl/plecak-treko-city-25',
  name: 'TREKO City 25 — plecak miejski na laptopa 16"',
  short: 'Plecak TREKO City 25', category: 'Torby i plecaki', price: '349 zł',
  audience: 'Osoby dojeżdżające do pracy lub na uczelnię i podróżujące z laptopem, które chcą mieć rzeczy bezpieczne i suche',
  facts: [
    { id: 'f1', label: 'Pojemność', value: '25 l', src: 'Specyfikacja', quote: 'Pojemność: 25 l' },
    { id: 'f2', label: 'Komora na laptopa', value: 'do 16"', src: 'Opis', quote: 'Wyściełana komora na laptopa do 16 cali' },
    { id: 'f3', label: 'Materiał', value: 'poliester 600D, powłoka PU 2000 mm', src: 'Specyfikacja', quote: 'Materiał: poliester 600D z powłoką PU (2000 mm)' },
    { id: 'f4', label: 'Kieszeń antykradzieżowa', value: 'ukryta, na plecach', src: 'Opis', quote: 'Ukryta kieszeń antykradzieżowa od strony pleców' },
    { id: 'f5', label: 'Port USB', value: 'tak (powerbank nie w zestawie)', src: 'Opis', quote: 'Zewnętrzny port USB; powerbank nie jest dołączony' },
    { id: 'f6', label: 'Waga', value: '0,9 kg', src: 'Specyfikacja', quote: 'Waga: 0,9 kg' },
    { id: 'f7', label: 'Wymiary', value: '46 × 31 × 16 cm', src: 'Specyfikacja', quote: 'Wymiary: 46 × 31 × 16 cm' },
    { id: 'f8', label: 'Pas na walizkę', value: 'tak', src: 'Opis', quote: 'Pas do mocowania na rączce walizki' },
    { id: 'f9', label: 'Panel pleców', value: 'pianka EVA', src: 'Opis', quote: 'Panel pleców z pianki EVA' },
    { id: 'f10', label: 'Szelki', value: 'regulowane, wyściełane', src: 'Opis', quote: 'Regulowane, wyściełane szelki' },
    { id: 'f11', label: 'Kieszenie boczne', value: '2, na butelkę', src: 'Opis', quote: 'Dwie boczne kieszenie na butelkę' },
    { id: 'f12', label: 'Kieszeń na tablet', value: 'do 11"', src: 'Opis', quote: 'Osobna kieszeń na tablet do 11 cali' },
    { id: 'f13', label: 'Zamki', value: 'z możliwością zapięcia na kłódkę', src: 'Opis', quote: 'Suwaki główne z oczkami na kłódkę' },
    { id: 'f14', label: 'Kolor', value: 'grafit', src: 'Karta produktu', quote: 'Kolor: grafit' },
    { id: 'f15', label: 'Gwarancja', value: '2 lata', src: 'Karta produktu', quote: 'Gwarancja: 24 miesiące' },
    { id: 'f16', label: 'Cena', value: '349 zł', src: 'Karta produktu', quote: '349,00 zł' }
  ],
  missing: ['Czy plecak mieści się w wymiarach bagażu podręcznego konkretnych linii', 'Kłódka (czy jest w zestawie)', 'Inne warianty kolorystyczne', 'Opinie klientów (brak na stronie)'],
  google: {
    groups: [
      { name: 'Plecak na laptopa', intent: 'Szuka plecaka pod konkretny sprzęt', kw: [['plecak na laptopa 16', 'fraza'], ['plecak na laptopa', 'fraza'], ['[plecak miejski na laptopa]', 'ścisłe'], ['plecak do pracy na laptopa', 'fraza']] },
      { name: 'Bezpieczeństwo', intent: 'Boi się kradzieży', kw: [['plecak antykradzieżowy', 'fraza'], ['plecak z ukrytą kieszenią', 'fraza'], ['plecak z zamkiem na kłódkę', 'fraza']] },
      { name: 'Podróże', intent: 'Bagaż do samolotu i pociągu', kw: [['plecak podróżny 25 l', 'fraza'], ['plecak z portem usb', 'fraza'], ['plecak do samolotu na laptopa', 'przybliżone']] }
    ],
    headlines: [
      ['Plecak TREKO City 25', 'f16'], ['Plecak na laptopa do 16"', 'f2'], ['Ukryta kieszeń na portfel', 'f4'], ['Wodoodporna powłoka PU', 'f3'], ['Tylko 0,9 kg wagi', 'f6'],
      ['Pojemność 25 litrów', 'f1'], ['Port USB do ładowania', 'f5'], ['Zamki na kłódkę', 'f13'], ['Pas na rączkę walizki', 'f8'], ['2 lata gwarancji', 'f15'],
      ['Kieszeń na tablet 11"', 'f12'], ['Plecy z pianki EVA', 'f9'], ['Plecak do pracy i podróży', 'f1,f8'], ['Plecak miejski 349 zł', 'f16'], ['Kolor grafit', 'f14']
    ],
    descriptions: [
      ['Komora na laptopa do 16", kieszeń na tablet 11" i 25 l. Wszystko na swoim miejscu.', 'f1,f2,f12'],
      ['Ukryta kieszeń antykradzieżowa i zamki na kłódkę. Twoje rzeczy są bezpieczne.', 'f4,f13'],
      ['Poliester 600D z powłoką PU 2000 mm. Waga 0,9 kg i panel pleców z pianki EVA.', 'f3,f6,f9'],
      ['Port USB, pas na walizkę i 2 lata gwarancji. Plecak TREKO City 25 za 349 zł.', 'f5,f8,f15,f16']
    ],
    sitelinks: [
      ['Wymiary i pojemność', '46 × 31 × 16 cm, 25 l', 'Sprawdź, co zmieścisz'],
      ['Bezpieczeństwo rzeczy', 'Ukryta kieszeń na plecach', 'Zamki z oczkami na kłódkę'],
      ['Plecak w podróży', 'Pas na rączkę walizki', 'Port USB do ładowania'],
      ['Gwarancja 2 lata', 'Gwarancja 24 miesiące', 'Szczegóły na karcie']
    ],
    callouts: [['Laptop do 16"', 'f2'], ['Powłoka PU 2000 mm', 'f3'], ['Waga 0,9 kg', 'f6'], ['Port USB', 'f5'], ['Zamki na kłódkę', 'f13'], ['Gwarancja 2 lata', 'f15']],
    snippet: ['Kieszenie', ['Laptop 16"', 'Tablet 11"', 'Antykradzieżowa', 'Boczne na butelkę']],
    negative: ['szkolny', 'dla dzieci', 'turystyczny 50 l', 'używany', 'allegro lokalnie', 'naprawa', 'tani', 'worek']
  },
  meta: {
    angles: [
      { angle: 'Korzyść', f: 'f1,f2,f6', short: 'Laptop, tablet i reszta dnia w 0,9 kg.', medium: 'Laptop do 16", tablet, ładowarka i obiad. TREKO City 25 ma na wszystko osobne miejsce, a sam waży tylko 0,9 kg 🎒', long: 'Laptop do 16", tablet, ładowarka i obiad.\n\nTREKO City 25 ma 25 litrów pojemności i osobne, wyściełane miejsce na laptopa oraz tablet do 11". Sam waży tylko 0,9 kg, a panel pleców z pianki EVA i regulowane szelki dbają o wygodę.\n\n✔ powłoka PU 2000 mm\n✔ port USB\n✔ 2 lata gwarancji' },
      { angle: 'Problem', f: 'f4,f13', short: 'Portfel tam, gdzie nikt nie sięgnie.', medium: 'Tłok w tramwaju i ręka w Twoim plecaku? W TREKO City 25 portfel i telefon chowasz w ukrytej kieszeni od strony pleców. Główne zamki zepniesz kłódką.', long: 'Tłok w tramwaju, kolejka na lotnisku, ręka w Twoim plecaku?\n\nTREKO City 25 ma ukrytą kieszeń antykradzieżową od strony pleców. Tam schowasz portfel, paszport albo telefon. Główne suwaki mają oczka na kłódkę, więc w podróży zepniesz je razem.' },
      { angle: 'Pogoda', f: 'f3', short: 'Deszcz? Laptop zostaje suchy.', medium: 'Deszcz w drodze do biura to nie powód do stresu. TREKO City 25 jest uszyty z poliestru 600D z powłoką PU 2000 mm.', long: 'Deszcz w drodze do biura to nie powód do stresu.\n\nTREKO City 25 jest uszyty z poliestru 600D z powłoką PU o parametrze 2000 mm. Laptop jedzie w wyściełanej komorze, a plecak waży tylko 0,9 kg.' },
      { angle: 'Podróżnik', f: 'f5,f8', short: 'Na walizkę i do ładowania w drodze.', medium: 'Lotnisko, dworzec, przesiadka. TREKO City 25 zapniesz na rączce walizki, a przez port USB naładujesz telefon z powerbanka.', long: 'Lotnisko, dworzec, przesiadka.\n\nTREKO City 25 ma pas do mocowania na rączce walizki, więc nie dźwigasz go na plecach. Zewnętrzny port USB pozwala ładować telefon z powerbanka schowanego w środku (powerbank nie jest w zestawie).' },
      { angle: 'Wygoda', f: 'f9,f10,f11', short: 'Lekki na plecach cały dzień.', medium: 'Panel pleców z pianki EVA, regulowane szelki i dwie boczne kieszenie na butelkę. Plecak, który nosi się wygodnie od rana do wieczora.', long: 'Plecak, który nosi się wygodnie od rana do wieczora.\n\n• panel pleców z pianki EVA\n• regulowane, wyściełane szelki\n• dwie boczne kieszenie na butelkę\n• waga tylko 0,9 kg' },
      { angle: 'Oferta', f: 'f15,f16', short: 'Plecak miejski za 349 zł.', medium: 'TREKO City 25 za 349 zł: laptop do 16", ukryta kieszeń, port USB i powłoka PU. Do tego 2 lata gwarancji.', long: 'TREKO City 25 za 349 zł to:\n\n• komora na laptopa do 16" i kieszeń na tablet 11"\n• ukryta kieszeń antykradzieżowa i zamki na kłódkę\n• poliester 600D z powłoką PU 2000 mm\n• port USB i pas na walizkę\n• 2 lata gwarancji' }
    ],
    headlines: [['Laptop 16" w 0,9 kg', 'f2,f6'], ['Portfel w ukrytej kieszeni', 'f4'], ['Deszcz mu niestraszny', 'f3'], ['Zapnij na walizce', 'f8'], ['Ładuj telefon w drodze', 'f5'], ['Zamki na kłódkę', 'f13'], ['25 l na cały dzień', 'f1'], ['Wygodne plecy z EVA', 'f9'], ['2 lata gwarancji', 'f15'], ['Plecak miejski za 349 zł', 'f16']],
    linkDesc: [['Laptop 16", USB, PU 2000 mm', 'f2,f3,f5'], ['Waga tylko 0,9 kg', 'f6'], ['2 lata gwarancji', 'f15']],
    audiences: ['Zainteresowania: podróże służbowe, praca hybrydowa, laptopy, rower miejski', 'Demografia: 22–45 lat, miasta powyżej 100 tys. mieszkańców', 'Remarketing: odwiedzający kategorię plecaków w ostatnich 30 dniach', 'Lookalike 1%: kupujący akcesoria do laptopów'],
    reels: ['0–2 s: ręka sięga do plecaka w tłumie, cięcie. Napis: „Nie tym razem.”', '2–5 s: portfel znika w ukrytej kieszeni na plecach. Napis: „Ukryta kieszeń”', '5–8 s: laptop wsuwany do komory, plecak zapinany na walizce. Napis: „Laptop 16\" · pas na walizkę”', '8–10 s: plecak na plecach w deszczu. Napis: „TREKO City 25 · 349 zł”']
  },
  description: {
    titles: [
      ['Sklep', 'Plecak miejski TREKO City 25 na laptopa 16" – kieszeń antykradzieżowa, port USB, 25 l'],
      ['Allegro (do 75 zn.)', 'Plecak na laptopa 16" TREKO City 25 antykradzieżowy USB 25 l grafit'],
      ['Google Shopping', 'TREKO City 25 Plecak miejski na laptopa 16 cali 25 l poliester 600D grafit']
    ],
    short: 'Plecak miejski o pojemności 25 l z wyściełaną komorą na laptopa do 16", ukrytą kieszenią antykradzieżową i portem USB. Uszyty z poliestru 600D z powłoką PU 2000 mm, waży 0,9 kg. 2 lata gwarancji.',
    intro: 'TREKO City 25 to plecak dla osób, które codziennie noszą laptopa: do biura, na uczelnię i w podróż. Ma osobne miejsca na laptopa do 16" i tablet do 11", ukrytą kieszeń na najcenniejsze rzeczy oraz pas, którym zapniesz go na rączce walizki.',
    sections: [
      ['Miejsce na laptopa, tablet i resztę dnia', 'Pojemność 25 l mieści wszystko, czego potrzebujesz w ciągu dnia. Laptop do 16" jedzie w wyściełanej komorze, a tablet do 11" ma osobną kieszeń. Dwie boczne kieszenie zmieszczą butelki z wodą.', 'f1,f2,f11,f12'],
      ['Twoje rzeczy bezpieczne w tłumie', 'Ukryta kieszeń antykradzieżowa znajduje się od strony pleców, więc nikt nie sięgnie do niej niepostrzeżenie. Główne suwaki mają oczka, które zepniesz kłódką.', 'f4,f13'],
      ['Materiał gotowy na deszcz', 'Plecak uszyto z poliestru 600D z powłoką PU o parametrze 2000 mm. Grafitowy kolor dobrze wygląda zarówno w biurze, jak i w podróży.', 'f3,f14'],
      ['Wygodny przez cały dzień', 'Plecak waży tylko 0,9 kg. Panel pleców z pianki EVA oraz regulowane, wyściełane szelki pomagają wygodnie nosić go nawet przy pełnym obciążeniu.', 'f6,f9,f10'],
      ['Stworzony do podróży', 'Pas na tylnym panelu pozwala zamocować plecak na rączce walizki. Zewnętrzny port USB umożliwia ładowanie telefonu z powerbanka schowanego w środku (powerbank nie jest w zestawie). Wymiary: 46 × 31 × 16 cm.', 'f5,f7,f8']
    ],
    benefits: [['Komora na laptopa do 16"', 'Sprzęt bezpieczny i na swoim miejscu', 'f2'], ['Ukryta kieszeń antykradzieżowa', 'Portfel i paszport poza zasięgiem rąk', 'f4'], ['Powłoka PU 2000 mm', 'Spokój w deszczowy dzień', 'f3'], ['Waga 0,9 kg', 'Mniej ciężaru na plecach', 'f6'], ['Pas na walizkę', 'Wygodniej na lotnisku i dworcu', 'f8'], ['Port USB', 'Ładowanie telefonu w drodze', 'f5']],
    forWho: 'Dla osób, które codziennie dojeżdżają z laptopem do pracy lub na uczelnię, często podróżują i chcą mieć dokumenty oraz portfel w bezpiecznym miejscu.',
    standout: ['Ukryta kieszeń antykradzieżowa od strony pleców', 'Pas na walizkę i port USB w plecaku miejskim', 'Tylko 0,9 kg przy pojemności 25 l'],
    faq: [
      ['Jaki laptop zmieszczę?', 'Komora pomieści laptopa do 16 cali.', 'f2'], ['Jaka jest pojemność plecaka?', '25 litrów.', 'f1'], ['Czy plecak jest wodoodporny?', 'Materiał to poliester 600D z powłoką PU 2000 mm.', 'f3'], ['Czy powerbank jest w zestawie?', 'Nie, plecak ma port USB, ale powerbank trzeba dokupić.', 'f5'],
      ['Ile waży plecak?', '0,9 kg.', 'f6'], ['Jakie są wymiary?', '46 × 31 × 16 cm.', 'f7'], ['Czy zamki można zapiąć na kłódkę?', 'Tak, główne suwaki mają oczka na kłódkę.', 'f13'], ['Jaka jest gwarancja?', '2 lata (24 miesiące).', 'f15']
    ],
    seo: {
      metaTitle: 'Plecak na laptopa 16" TREKO City 25 | antykradzieżowy, USB',
      metaDesc: 'Plecak miejski 25 l z komorą na laptopa 16", ukrytą kieszenią antykradzieżową i portem USB. Powłoka PU 2000 mm, waga 0,9 kg.',
      url: '/plecak-miejski-na-laptopa-16-treko-city-25',
      keywords: [['plecak na laptopa 16', 'tytuł, H1, pierwsze zdanie'], ['plecak antykradzieżowy', 'tytuł, sekcja 2'], ['plecak z portem usb', 'sekcja 5, FAQ'], ['plecak miejski', 'meta description, sekcja 1']],
      alts: ['Plecak miejski TREKO City 25 w kolorze grafit, widok z przodu', 'Ukryta kieszeń antykradzieżowa od strony pleców', 'Plecak TREKO City 25 zamocowany na rączce walizki']
    }
  },
  mailing: {
    subjects: [
      ['Laptop, tablet i obiad w 0,9 kg', 'Korzyść', 'f2,f6'], ['Plecak, który zabierzesz wszędzie', 'Korzyść', 'f1,f8'], ['Twój portfel bezpieczny w tłumie', 'Korzyść', 'f4'],
      ['Gdzie trzymasz portfel w podróży?', 'Pytanie', 'f4'], ['Deszcz w drodze do biura?', 'Pytanie', 'f3'], ['Ile waży Twój plecak?', 'Pytanie', 'f6'],
      ['Ta kieszeń jest niewidoczna. Celowo', 'Ciekawość', 'f4'], ['Po co plecakowi port USB?', 'Ciekawość', 'f5'], ['Co znaczy 2000 mm na metce?', 'Ciekawość', 'f3'],
      ['Laptop do 16" i tablet do 11"', 'Konkret', 'f2,f12'], ['Plecak miejski za 349 zł', 'Konkret', 'f16'], ['2 lata gwarancji na TREKO', 'Konkret', 'f15'],
      ['Koniec z dźwiganiem na lotnisku', 'Zmiana', 'f8'], ['Lżej na plecach od jutra', 'Zmiana', 'f6,f9'], ['Nowy plecak na nowy sezon', 'Zmiana', 'f14']
    ],
    preheaders: [
      ['Komora na laptopa 16", ukryta kieszeń i port USB', 'f2,f4,f5'], ['Poliester 600D z powłoką PU 2000 mm', 'f3'], ['25 litrów i tylko 0,9 kg', 'f1,f6'], ['Zapniesz go na rączce walizki', 'f8'], ['Zamki z oczkami na kłódkę', 'f13'],
      ['Panel pleców z pianki EVA', 'f9'], ['Osobna kieszeń na tablet do 11"', 'f12'], ['Dwie boczne kieszenie na butelkę', 'f11'], ['2 lata gwarancji', 'f15'], ['TREKO City 25 za 349 zł', 'f16']
    ],
    headlines: [['Wszystko na swoim miejscu', 'f2,f12'], ['Bezpieczny w tłumie', 'f4'], ['Lekki: 0,9 kg', 'f6'], ['Gotowy na deszcz', 'f3'], ['Podróż bez dźwigania', 'f8'], ['Telefon naładowany w drodze', 'f5'], ['Wygoda od rana do wieczora', 'f9,f10'], ['25 litrów Twojego dnia', 'f1']],
    slogans: [['Miasto. Laptop. Spokój.', 'f2'], ['Lekki jak Twój plan dnia.', 'f6'], ['Portfel tam, gdzie trzeba.', 'f4'], ['Deszcz? Bez stresu.', 'f3'], ['Z biura prosto na lotnisko.', 'f8'], ['Naładowany w drodze.', 'f5'], ['25 litrów porządku.', 'f1'], ['Zapnij i jedź.', 'f13']],
    ctas: ['Zobacz plecak', 'Sprawdź kieszenie', 'Wybierz TREKO', 'Zamów teraz', 'Zobacz wymiary', 'Dodaj do koszyka', 'Poznaj szczegóły', 'Wróć do koszyka'],
    body: {
      short: 'Cześć!\n\nTREKO City 25 mieści laptopa do 16" i tablet do 11", a waży tylko 0,9 kg. Portfel schowasz w ukrytej kieszeni od strony pleców.\n\n[Zobacz plecak]',
      standard: 'Cześć!\n\nCodzienna droga z laptopem może być prostsza. TREKO City 25 ma osobne miejsce na wszystko, co nosisz.\n\n• Komora na laptopa do 16" i kieszeń na tablet do 11".\n• Ukryta kieszeń antykradzieżowa od strony pleców.\n• Poliester 600D z powłoką PU 2000 mm.\n• Port USB i pas do mocowania na walizce.\n\nPlecak ma 25 l pojemności, waży 0,9 kg i ma 2 lata gwarancji.\n\n[Zobacz plecak]',
      long: 'Cześć!\n\nJeśli codziennie nosisz laptopa, ten mail jest dla Ciebie.\n\nPORZĄDEK W ŚRODKU\nTREKO City 25 ma 25 l pojemności, wyściełaną komorę na laptopa do 16" i osobną kieszeń na tablet do 11". Butelki zmieszczą się w dwóch bocznych kieszeniach.\n\nBEZPIECZEŃSTWO\nUkryta kieszeń antykradzieżowa jest od strony pleców. Główne suwaki mają oczka na kłódkę.\n\nPOGODA\nPoliester 600D z powłoką PU 2000 mm.\n\nWYGODA\nPlecak waży tylko 0,9 kg. Panel pleców z pianki EVA i regulowane szelki pomagają przy pełnym obciążeniu.\n\nPODRÓŻ\nPas na rączkę walizki i port USB do ładowania telefonu z powerbanka (powerbank nie jest w zestawie).\n\nNAJCZĘSTSZE PYTANIA\nJakie wymiary? 46 × 31 × 16 cm.\nJaka gwarancja? 2 lata.\n\n[Zobacz TREKO City 25]'
    },
    sequences: [
      { name: 'Porzucony koszyk', goal: 'Dokończenie zamówienia', emails: [
        ['po 1 godz.', 'Twój plecak TREKO czeka w koszyku', 'Dokończ zamówienie jednym kliknięciem', 'Przypomnienie: zdjęcie, cena 349 zł, przycisk powrotu do koszyka.', 'f16'],
        ['po 24 godz.', 'Czy Twój laptop się zmieści?', 'Komora do 16", wymiary 46 × 31 × 16 cm', 'Rozwiewa najczęstszą wątpliwość: rozmiar laptopa i wymiary plecaka.', 'f2,f7'],
        ['po 72 godz.', '2 lata gwarancji na Twój plecak', 'Ostatnie przypomnienie o koszyku', 'Argument bezpieczeństwa: gwarancja i materiał z powłoką PU.', 'f3,f15']
      ] },
      { name: 'Po zakupie', goal: 'Zadowolenie i opinia', emails: [
        ['w dniu dostawy', '3 kieszenie, o których warto wiedzieć', 'Ukryta kieszeń, tablet i port USB', 'Przewodnik po kieszeniach, żeby klient od razu korzystał z funkcji.', 'f4,f5,f12'],
        ['po 7 dniach', 'Jak dopasować szelki', 'Wygodniej w 2 minuty', 'Krótki poradnik regulacji szelek.', 'f9,f10'],
        ['po 14 dniach', 'Jak sprawdza się TREKO?', 'Podziel się opinią, pomożesz innym', 'Prośba o opinię w sklepie. Bez obietnic nagród, jeśli sklep ich nie podał.', '']
      ] },
      { name: 'Premiera / kampania', goal: 'Sprzedaż do bazy', emails: [
        ['dzień 1', 'Laptop, tablet i obiad w 0,9 kg', 'Komora 16", ukryta kieszeń, port USB', 'Mail produktowy w wersji standardowej.', 'f2,f4,f5,f6'],
        ['dzień 3', 'Ta kieszeń jest niewidoczna. Celowo', 'Bezpieczeństwo rzeczy w tłumie', 'Mail o kieszeni antykradzieżowej i zamkach na kłódkę.', 'f4,f13'],
        ['dzień 6', 'Koniec z dźwiganiem na lotnisku', 'Pas na walizkę i port USB', 'Mail podróżny: funkcje przydatne w drodze.', 'f5,f8']
      ] }
    ],
    ab: ['Test 1: temat „Korzyść” vs „Ciekawość” („Laptop, tablet i obiad w 0,9 kg” vs „Ta kieszeń jest niewidoczna. Celowo”). Mierzymy otwarcia.', 'Test 2: przycisk „Zobacz plecak” vs „Sprawdź kieszenie”. Mierzymy kliknięcia.', 'Test 3: zdjęcie produktu vs zdjęcie plecaka na walizce w mailu kampanijnym.']
  },
  blog: {
    ideas: [['Jak wybrać plecak na laptopa? Poradnik', 'poradnik'], ['Plecak antykradzieżowy: na co zwrócić uwagę', 'poradnik'], ['Co oznacza 600D i 2000 mm na metce plecaka', 'edukacja'], ['Jak spakować się do pracy w 25 litrach', 'jak to zrobić'], ['Plecak czy torba na laptopa: co wybrać', 'porównanie'], ['Jak bezpiecznie podróżować z laptopem', 'poradnik'], ['Jak dopasować szelki plecaka', 'jak to zrobić'], ['Port USB w plecaku: jak działa', 'edukacja'], ['Jak dbać o plecak z powłoką PU', 'poradnik'], ['Bagaż podręczny: lista rzeczy do plecaka', 'lista']],
    title: 'Jak wybrać plecak na laptopa? Poradnik',
    metaDesc: 'Rozmiar komory, materiał, waga, kieszenie i bezpieczeństwo. Na co patrzeć przy wyborze plecaka na laptopa do pracy i podróży.',
    outline: [['Rozmiar komory na laptopa', 'jak zmierzyć laptopa (przykład: do 16")'], ['Materiał i odporność na deszcz', 'co znaczy 600D i powłoka PU 2000 mm'], ['Waga i wygoda', 'ile powinien ważyć (przykład: 0,9 kg), pianka EVA, szelki'], ['Bezpieczeństwo', 'ukryta kieszeń, zamki na kłódkę'], ['Funkcje podróżne', 'pas na walizkę, port USB'], ['Lista kontrolna przed zakupem', '8 pytań do karty produktu'], ['FAQ', '5 pytań z odpowiedziami']],
    intro: 'Dobry plecak na laptopa to nie tylko odpowiednia komora. Liczą się też materiał, waga, układ kieszeni i to, czy Twoje rzeczy są bezpieczne w tłumie. Omawiamy po kolei parametry, które warto sprawdzić w karcie produktu, na przykładzie konkretnych wartości.'
  }
});

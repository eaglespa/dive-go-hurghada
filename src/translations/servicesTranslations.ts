import { LanguageCode, ServiceTranslation } from './types';

export const SERVICES_TRANSLATIONS: Record<string, Record<LanguageCode, ServiceTranslation>> = {
  'srv-dgh-daily-dive': {
    en: {
      title: 'Daily Boat Diving & Intro Dives in Hurghada',
      description:
        'Introductory scuba dives and guided boat dives for beginners and certified divers. Experience spectacular Red Sea coral reefs accompanied by experienced PADI instructors, complete with comprehensive safety briefing, 2 guided dives, chef-prepared buffet lunch, and hotel transfers.',
      inclusions: ['2 Guided Dives', '12L Aluminum Tanks & Weights', 'Chef Lunch Buffet', 'Soft Drinks & Water', 'Hotel Transfers'],
    },
    de: {
      title: 'Tägliches Bootstauchen & Schnuppertauchen in Hurghada',
      description:
        'Schnuppertauchgänge und geführte Bootstauchgänge für Einsteiger und zertifizierte Taucher. Erleben Sie spektakuläre Riffe unter Anleitung erfahrener PADI-Instruktoren mit fundierter Sicherheitseinweisung, 2 Tauchgängen, Mittagsbuffet und Hoteltransfer.',
      inclusions: ['2 geführte Tauchgänge', '12L Tanks & Blei', 'Mittagsbuffet vom Chefkoch', 'Softdrinks & Wasser', 'Hoteltransfer inklusive'],
    },
    ru: {
      title: 'Дейли-дайвинг с яхты и пробные погружения в Хургаде',
      description:
        'Ознакомительные погружения для новичков и гидированные погружения для сертифицированных дайверов. Исследуйте яркие коралловые рифы в сопровождении инструкторов PADI с подробным инструктажем, 2 погружениями, обедом и трансфером.',
      inclusions: ['2 погружения с гидом', 'Баллоны 12л и груза', 'Шведский стол на яхте', 'Напитки и вода', 'Трансфер из отеля'],
    },
    ar: {
      title: 'رحلة الغوص اليومي باليخت والغوص التجريبي بالغردقة',
      description:
        'غطسات تجريبية للمبتدئين وغطسات إرشادية للمحترفين على أجمل شعاب البحر الأحمر بإشراف مدربي PADI المحترفين. تشمل شرحاً وافياً للأمان، غطستين باليخت، بوفيه غداء طازج وانتقالات مجانية من الفندق.',
      inclusions: ['غطستان بصحبة مرشد', 'أسطوانات 12 لتر وأوزان', 'بوفيه غداء على اليخت', 'مشروبات ومياه معدنية', 'توصيل من وإلى الفندق'],
    },
    fr: {
      title: 'Plongée quotidienne en bateau & baptêmes à Hurghada',
      description:
        'Baptêmes de plongée et plongées guidées en bateau pour débutants et plongeurs certifiés. Découvrez de magnifiques récifs coralliens encadrés par des instructeurs PADI avec briefing complet, 2 plongées, déjeuner buffet et transferts hôtel.',
      inclusions: ['2 plongées guidées', 'Bouteilles 12L & plombs', 'Déjeuner buffet du chef', 'Boissons & eau', 'Transferts hôtel inclus'],
    },
    pl: {
      title: 'Codzienne nurkowanie z łodzi i intro w Hurghadzie',
      description:
        'Nurkowania intro dla początkujących oraz nurkowania z przewodnikiem dla certyfikowanych nurków. Odkryj wspaniałe rafy koralowe Morza Czerwonego pod okiem instruktorów PADI z pełnym instruktażem, 2 nurkowaniami, obiadem i transferem.',
      inclusions: ['2 nurkowania z przewodnikiem', 'Butle 12L i balast', 'Obiad w formie bufetu', 'Napoje i woda', 'Transfer z hotelu'],
    },
    it: {
      title: 'Immersioni giornaliere in barca e battesimo del mare a Hurghada',
      description:
        'Battesimi del mare e immersioni guidate da barca per principianti e sub brevettati. Ammirate spettacolari barriere coralline con istruttori PADI, briefing completo di sicurezza, 2 immersioni, pranzo a buffet e trasferimenti hotel.',
      inclusions: ['2 immersioni guidate', 'Bombole 12L e zavorra', 'Pranzo a buffet a bordo', 'Bevande e acqua', 'Transfer da/per hotel'],
    },
    cs: {
      title: 'Denní potápění z lodi a zkušební ponory v Hurghadě',
      description:
        'Zkušební ponory pro začátečníky a ponory s průvodcem pro certifikované potápěče. Zažijte velkolepé korálové útesy pod vedením instruktorů PADI s podrobnou instruktáží, 2 ponory, obědem a transferem.',
      inclusions: ['2 ponory s průvodcem', '12L lahve a závaží', 'Oběd formou bufetu', 'Nealko nápoje a voda', 'Transfery z hotelu'],
    },
    nl: {
      title: 'Dagelijks bootduiken & introductieduiken in Hurghada',
      description:
        'Introductieduiken voor beginners en begeleide bootduiken voor gebrevetteerde duikers. Ervaar spectaculaire koraalriffen onder leiding van PADI-instructeurs, inclusief veiligheidsbriefing, 2 duiken, lunchbuffet en hoteltransfer.',
      inclusions: ['2 begeleide duiken', '12L tanks & lood', 'Vers lunchbuffet', 'Frisdrank & water', 'Hoteltransfers inbegrepen'],
    },
  },
  'srv-dgh-private-speedboat': {
    en: {
      title: 'Private Speedboat & Dolphin Watching (Orange Bay)',
      description:
        'Experience the Red Sea at its finest – fast, exclusive, and full of adventure! Explore the coast of Hurghada aboard our modern speedboat, enjoy wild dolphin encounters in their natural habitat, snorkeling on pristine coral reefs, and private island stops at stunning Orange Bay.',
      inclusions: ['Private Speedboat Charter with Captain', 'Wild Dolphin Spotting & Swimming', 'Snorkeling Masks & Life Vests', 'Orange Bay Island Stop', 'Fresh Fruits & Soft Drinks', 'Round-trip Hotel Transfers'],
    },
    de: {
      title: 'Privates Speedboat & Delfinbeobachtung (Orange Bay)',
      description:
        'Erleben Sie das Rote Meer schnell, exklusiv und voller Abenteuer! Erkunden Sie die Küste von Hurghada mit unserem modernen Speedboat, genießen Sie Delfinbeobachtung in freier Wildbahn, Schnorcheln an Korallenriffen und private Inselstopps an der Orange Bay.',
      inclusions: ['Privates Speedboot mit Kapitän', 'Delfinbeobachtung & Schwimmen', 'Schnorchelausrüstung & Westen', 'Stopp auf Orange Bay', 'Frische Früchte & Getränke', 'Hoteltransfer Hin- & Rückfahrt'],
    },
    ru: {
      title: 'Приватный скоростной катер и дельфины (Orange Bay)',
      description:
        'Откройте Красное море на максимальной скорости и с полным комфортом! Прогулка на современном скоростном катере, поиск дельфинов в открытом море, снорклинг на коралловых рифах и высадка на белоснежный остров Оранж Бэй.',
      inclusions: ['Индивидуальный катер с капитаном', 'Плавание рядом с дельфинами', 'Маски, трубки и жилеты', 'Остановка на острове Orange Bay', 'Свежие фрукты и напитки', 'Трансфер из отеля туда и обратно'],
    },
    ar: {
      title: 'لانش سريع خاص ورحلة الدلافين وجزيرة أورانج باي',
      description:
        'استمتع بأجمل ما في البحر الأحمر بخصوصية وسرعة وتشويق! جولة خاصة باللانش السريع على ساحل الغردقة لمشاهدة الدلافين في بيئتها الطبيعية، والسنوركلينج على أنقى الشعاب المرجانية وزيارة جزيرة أورانج باي الساحرة.',
      inclusions: ['إيجار لانش سريع خاص مع قبطان', 'مشاهدة الدلافين البرية والسباحة', 'معدات سنوركل وسترات نجاة', 'توقف في جزيرة أورانج باي', 'فواكه طازجة ومشروبات', 'انتقالات ذهاب وإياب من الفندق'],
    },
    fr: {
      title: 'Speedboat privé & observation des dauphins (Orange Bay)',
      description:
        'Vivez la Mer Rouge à grande vitesse en toute exclusivité ! Naviguez le long de Hurghada à bord de notre speedboat moderne, nagez près des dauphins sauvages, faites du snorkeling sur les récifs et profitez d’un arrêt sur l’île d’Orange Bay.',
      inclusions: ['Speedboat privé avec skipper', 'Rencontre avec les dauphins', 'Masques, tubas et gilets', 'Escale sur l’île Orange Bay', 'Fruits frais et rafraîchissements', 'Transferts hôtel aller-retour'],
    },
    pl: {
      title: 'Prywatny speedboat i pływanie z delfinami (Orange Bay)',
      description:
        'Poznaj Morze Czerwone w luksusowym i szybkim wydaniu! Popłyń nowoczesną motorówką wzdłuż wybrzeża Hurghady, spotkaj dzikie delfiny w naturalnym środowisku, nurkuj z rurką i odpocznij na rajskiej wyspie Orange Bay.',
      inclusions: ['Prywatna motorówka z kapitanem', 'Obserwacja dzikich delfinów', 'Maski, rurki i kamizelki', 'Postój na wyspie Orange Bay', 'Świeże owoce i napoje', 'Transfer z hotelu w obie strony'],
    },
    it: {
      title: 'Motoscafo privato e delfini (Orange Bay)',
      description:
        'Vivi il Mar Rosso in modo veloce, esclusivo e avventuroso! Naviga lungo la costa di Hurghada a bordo del nostro motoscafo moderno, avvista i delfini selvatici, fai snorkeling sulla barriera corallina e fermati all’isola di Orange Bay.',
      inclusions: ['Noleggio motoscafo privato con capitano', 'Nuoto vicino ai delfini', 'Maschere e giubbotti salvagente', 'Sosta all’isola di Orange Bay', 'Frutta fresca e bibite', 'Transfer a/r dal vostro hotel'],
    },
    cs: {
      title: 'Soukromý motorový člun a pozorování delfínů (Orange Bay)',
      description:
        'Poznejte Rudé moře rychle, exkluzivně a plné dobrodružství! Plavba na moderním motorovém člunu podél Hurghady, pozorování divokých delfínů, šnorchlování a zastávka na rajském ostrově Orange Bay.',
      inclusions: ['Soukromý člun s kapitánem', 'Plavání a pozorování delfínů', 'Šnorchlovací výstroj a vesty', 'Zastávka na Orange Bay', 'Čerstvé ovoce a nealko nápoje', 'Transfer z/do hotelu'],
    },
    nl: {
      title: 'Privé speedboot & dolfijnen spotten (Orange Bay)',
      description:
        'Ervaar de Rode Zee op zijn best: snel, exclusief en avontuurlijk! Vaar langs Hurghada met onze moderne speedboot, ontmoet wilde dolfijnen, snorkel op ongerepte riffen en geniet van een privéstop op Orange Bay.',
      inclusions: ['Privé speedboot met schipper', 'Wilde dolfijnen spotten & zwemmen', 'Snorkelmaskers & zwemvesten', 'Stop op Orange Bay eiland', 'Vers fruit & frisdrank', 'Retourtransfer vanaf hotel'],
    },
  },
  'srv-dgh-private-padi': {
    en: {
      title: 'Private Diving Lessons & PADI Certification',
      description:
        'Personalized 1-on-1 scuba diving course with seasoned PADI Master Diver instructors. Tailored entirely to your learning pace and comfort level – ideal for nervous beginners, families, or intensive scuba certifications.',
      inclusions: ['1-on-1 Personal Instructor', 'PADI e-Card Certification', 'Complete Rental Equipment', 'Confined & Open Water Boat Dives', 'Daily Lunch Buffet & Transfers'],
    },
    de: {
      title: 'Privater Tauchunterricht & PADI Zertifizierung',
      description:
        'Individuell gestalteter 1-zu-1 Tauchkurs mit erfahrenen PADI Master Diver Instruktoren. Angepasst an Ihr persönliches Lerntempo und Ihre Wünsche – besonders empfehlenswert für Gäste mit Angst vor dem Tauchen oder für intensives Lernen.',
      inclusions: ['Persönlicher 1-zu-1 Instruktor', 'Offizielle PADI e-Card Zertifizierung', 'Komplette Leihausrüstung', 'Pool- & Freiwassertauchgänge vom Boot', 'Tägliches Mittagsbuffet & Transfers'],
    },
    ru: {
      title: 'Индивидуальные курсы дайвинга и сертификат PADI',
      description:
        'Персональный курс дайвинга 1-на-1 с опытными инструкторами PADI Master Diver. Индивидуальный темп обучения без стресса — идеально для новичков, семей и тех, кто хочет получить международный сертификат дайвера.',
      inclusions: ['Персональный инструктор 1-на-1', 'Международный сертификат PADI e-Card', 'Полный комплект снаряжения', 'Погружения в бассейне и с яхты в море', 'Ежедневный обед и трансферы'],
    },
    ar: {
      title: 'تعليم غوص خاص 1-على-1 ورخصة PADI الدولية',
      description:
        'دورة تدريب غوص فردية مخصصة مع مدرب PADI Master Diver محترف. تناسب تماماً سرعة تعلمك وراحتك النفسية — مثالية للمبتدئين المتخوفين من الغوص، العائلات، أو الراغبين في نيل رخصة غوص دولية معتمدة.',
      inclusions: ['مدرب شخصي مخصص 1-على-1', 'بطاقة رخصة PADI الإلكترونية الدولية', 'معدات غوص كاملة وحديثة', 'تدريب عملي وغطسات يخت في البحر المفتوح', 'بوفيه غداء يومي وانتقالات مجانية'],
    },
    fr: {
      title: 'Cours de plongée privés & Certification PADI',
      description:
        'Formation sous-marine personnalisée 1-à-1 avec un instructeur PADI Master Diver chevronné. Adaptée à votre rythme d’apprentissage et à vos attentes — idéal pour les débutants anxieux ou pour un brevet accéléré.',
      inclusions: ['Instructeur personnel dédié 1-à-1', 'Certification officielle PADI e-Card', 'Équipement complet de location', 'Plongées en milieu protégé et depuis le bateau', 'Déjeuner buffet quotidien et transferts'],
    },
    pl: {
      title: 'Prywatny kurs nurkowania i certyfikat PADI',
      description:
        'Indywidualny kurs nurkowania 1 na 1 z doświadczonym instruktorem PADI Master Diver. Dostosowany do Twojego tempa i komfortu — idealny dla osób niepewnych pod wodą lub szukających intensywnego szkolenia.',
      inclusions: ['Osobisty instruktor 1 na 1', 'Certyfikat PADI e-Card', 'Kompletny sprzęt nurkowy', 'Zajęcia basenowe i nurkowania z łodzi', 'Codzienny obiad i transfery'],
    },
    it: {
      title: 'Lezioni private di subacquea e brevetto PADI',
      description:
        'Corso subacqueo personalizzato 1-a-1 con istruttori esperti PADI Master Diver. Adattato ai vostri ritmi di apprendimento — ideale per principianti timorosi o per chi desidera conseguire il brevetto internazionale.',
      inclusions: ['Istruttore personale 1-a-1', 'Brevetto internazionale PADI e-Card', 'Attrezzatura completa inclusa', 'Immersioni in piscina e da barca in mare', 'Pranzo a buffet giornaliero e transfer'],
    },
    cs: {
      title: 'Soukromé lekce potápění a certifikace PADI',
      description:
        'Individuální potápěčský kurz 1 na 1 se zkušenými instruktory PADI Master Diver. Přizpůsobený vašemu tempu a potřebám — ideální pro začátečníky s obavami z hloubky i pro intenzivní výuku.',
      inclusions: ['Osobní instruktor 1 na 1', 'Mezinárodní certifikát PADI e-Card', 'Kompletní výstroj v ceně', 'Trénink a ponory z lodi v moři', 'Denní obědový bufet a transfery'],
    },
    nl: {
      title: 'Privé duiklessen & PADI-certificering',
      description:
        'Gepersonaliseerde 1-op-1 duikcursus met ervaren PADI Master Diver instructeurs. Volledig afgestemd op jouw tempo en comfortniveau — ideaal voor nerveuze beginners of intensieve duikbrevetten.',
      inclusions: ['Persoonlijke 1-op-1 instructeur', 'Officiële PADI e-Card certificering', 'Complete duikuitrusting huur', 'Binnenwater- en bootduiken in zee', 'Dagelijks lunchbuffet & transfers'],
    },
  },
  'srv-dgh-tauchsafari': {
    en: {
      title: '7-Day Red Sea Liveaboard Diving Safari',
      description:
        'Experience the ultimate 7-day Red Sea diving adventure exploring North, South, Sharm El Sheikh, and Dahab. Dive world-famous shipwrecks and pristine deep-sea reefs aboard a luxury liveaboard with seasoned dive masters and full-board catering.',
      inclusions: ['7 Days / 6 Nights Luxury Liveaboard', 'Up to 3-4 Guided Dives Daily & Night Dives', 'Tanks & Weights Included', 'Full Board Buffet Lunch & Unlimited Drinks', 'Complimentary Hotel Transfers'],
    },
    de: {
      title: '7 Tage Tauchsafari Rotes Meer (Nord & Süd & Dahab)',
      description:
        'Erleben Sie das ultimative 7-Tage Tauchsafari-Abenteuer im Roten Meer über Nord, Süd, Sharm El Sheikh und Dahab. Spektakuläre Steilwände und legendäre Wracks mit erfahrenen Guides und Vollpension.',
      inclusions: ['7 Tage / 6 Nächte Luxus-Safarischiﬀ', 'Bis zu 3-4 Tauchgänge täglich & Nachttauchgänge', 'Tanks & Blei inklusive', 'Vollpension-Buffet & unbegrenzte Getränke', 'Hoteltransfers inklusive'],
    },
    ru: {
      title: '7-дневное дайвинг-сафари по Красному морю',
      description:
        'Незабываемое 7-дневное дайвинг-сафари на комфортабельной яхте: маршруты Север, Юг, Шарм-эль-Шейх и Дахаб. Легендарные рэки, отвесные рифы, погружения без ограничений и полный пансион.',
      inclusions: ['7 дней / 6 ночей на сафарийной яхте', 'До 3-4 погружений в день и ночные дайвы', 'Баллоны и груза включены', 'Шведский стол и напитки полный пансион', 'Трансфер из отеля'],
    },
    ar: {
      title: 'سفاري غوص البحر الأحمر 7 أيام (شمال، جنوب، شرم الشيخ، دهب)',
      description:
        'عِش أروع مغامرة غوص حية لمدة 7 أيام على متن يخت سفاري فاخر تجوب أجمل مسارات البحر الأحمر: الشمال، الجنوب، شرم الشيخ، ودهب. غوص غير محدود على أشهر السفن الغارقة والشعاب المرجانية مع إقامة وإعاشة كاملة.',
      inclusions: ['إقامة 7 أيام / 6 ليالي على يخت سفاري فاخر', 'حتى 3 إلى 4 غطسات يومياً وغطسات ليلية', 'أسطوانات وأوزان مجاناً', 'بوفيه طعام متكامل ومشروبات مستمرة', 'انتقالات فندقية مجانية'],
    },
    fr: {
      title: 'Safari Plongée Croisière 7 Jours Mer Rouge',
      description:
        'Vivez 7 jours exceptionnels en croisière plongée à la découverte du Nord, Sud, Charm el-Cheikh et Dahab. Épaves légendaires et tombants vertigineux à bord d’un bateau tout confort avec pension complète.',
      inclusions: ['7 Jours / 6 Nuits en bateau de croisière', '3 à 4 plongées guidées par jour et plongées de nuit', 'Bouteilles et plombs inclus', 'Pension complète et boissons à volonté', 'Transferts hôtel inclus'],
    },
    pl: {
      title: '7-dniowe safari nurkowe po Morzu Czerwonym',
      description:
        'Niezapomniana 7-dniowa wyprawa nurkowa liveaboard: Północ, Południe, Szarm el-Szejk i Dahab. Nielimitowane nurkowania na wrakach i rafach z pełnym wyżywieniem.',
      inclusions: ['7 dni / 6 nocy na luksusowej łodzi safari', 'Do 3-4 nurkowań dziennie i nurkowania nocne', 'Butle i balast w cenie', 'Pełne wyżywienie i napoje', 'Transfery z hotelu'],
    },
    it: {
      title: 'Safari Subacqueo 7 Giorni Mar Rosso',
      description:
        'Vivi un safari liveaboard di 7 giorni nel Mar Rosso esplorando Nord, Sud, Sharm El Sheikh e Dahab. Immersioni illimitate sui relitti più famosi e barriere incontaminate.',
      inclusions: ['7 giorni / 6 notti a bordo di yacht safari', 'Fino a 3-4 immersioni al giorno e notturne', 'Bombole e zavorra incluse', 'Pensione completa a buffet', 'Transfer da hotel inclusi'],
    },
    cs: {
      title: '7denní potápěčské safari po Rudém moři',
      description:
        'Zažijte 7denní safari na lodi v Rudém moři přes Sever, Jih, Šarm a Dahab. Vraky a korálové útesy s plnou penzí a neomezeným potápěním.',
      inclusions: ['7 dní / 6 nocí na safari lodi', '3-4 ponory denně včetně nočních', 'Lahve a zátěž v ceně', 'Plná penze formou bufetu a nápoje', 'Transfery z hotelu'],
    },
    nl: {
      title: '7-daagse Liveaboard Duiksafari Rode Zee',
      description:
        'Ultieme 7-daagse liveaboard duiksafari langs Noord, Zuid, Sharm El Sheikh en Dahab. Legendarische scheepswrakken en riffen met volpension.',
      inclusions: ['7 Dagen / 6 nachten op luxe liveaboard', 'Tot 3-4 duiken per dag & nachtduiken', 'Flessen en lood inbegrepen', 'Volpension buffet & drankjes', 'Hoteltransfers inbegrepen'],
    },
  },
  'srv-dgh-desert-safari': {
    en: {
      title: 'Hurghada Quad Desert Safari & Bedouin Adventure',
      description:
        'Ride your own ATV quad bike through the breathtaking desert landscapes of Hurghada. Guided by certified instructors with full safety gear, Bedouin village cultural tour, herbal tea, camel riding, and a barbecue dinner under starlit skies.',
      inclusions: ['Quad Bike ATV Ride (approx. 45km)', 'Spider Buggy & Camel Ride', 'Bedouin Village Tour & Tea', 'BBQ Dinner & Oriental Show', 'Hotel Transfers'],
    },
    de: {
      title: 'Quad-Safari in Hurghada – Abenteuer in der Wüste',
      description:
        'Fahrt mit dem Quad durch die faszinierende Wüstenlandschaft Hurghadas. Begleitung durch qualifiziertes Personal, gründliche Sicherheitseinweisung, Beduinendorf, traditioneller Beduinentee, Kamelreiten und BBQ unter dem Sternenhimmel.',
      inclusions: ['Quad-Fahrt (ca. 45 km)', 'Spider-Buggy & Kamelreiten', 'Beduinendorf & traditioneller Tee', 'BBQ-Abendessen & Show', 'Hoteltransfer Hin- & Rückfahrt'],
    },
    ru: {
      title: 'Сафари на квадроциклах в Хургаде и бедуинская деревня',
      description:
        'Гонка на мощных квадроциклах по песчаным каньонам египетской пустыни. Сопровождение опытных инструкторов, катание на багги и верблюдах, посещение аутентичной деревни бедуинов, бедуинский чай и барбекю-ужин под звездами.',
      inclusions: ['Заезд на квадроциклах (около 45 км)', 'Катание на спайдер-багги и верблюдах', 'Бедуинская деревня и травяной чай', 'Ужин-барбекю и восточное шоу', 'Трансфер из отеля'],
    },
    ar: {
      title: 'سفاري البيتش باجي في صحراء الغردقة وسهرة بدوية',
      description:
        'قيادة ممتعة للموتوسيكلات الصحراوية (البيتش باجي) بين جبال ووديان صحراء الغردقة الساحرة بصحبة مرشدين محترفين. تشمل زيارة قرية بدوية، شاي الأعشاب البدوي، ركوب الجمال، عشاء باربكيو مشوي وعروضاً شرقية.',
      inclusions: ['جولة بيتش باجي رباعي (حوالي 45 كم)', 'سبايدر باجي وركوب الجمال', 'زيارة القرية البدوية والشاي البدوي', 'عشاء مشويات وحفل فلكلوري', 'انتقالات الفندق ذهاباً وعودة'],
    },
    fr: {
      title: 'Safari Quad dans le Désert de Hurghada & Soirée Bédouine',
      description:
        'Pilotez votre propre quad à travers les paysages désertiques de Hurghada. Encadrement professionnel, visite d’un village bédouin traditionnel, dégustation de thé, balade à dos de chameau et dîner barbecue sous les étoiles.',
      inclusions: ['Circuit en quad (environ 45 km)', 'Buggy spider & balade en chameau', 'Village bédouin & thé traditionnel', 'Dîner barbecue & spectacle oriental', 'Transferts hôtel inclus'],
    },
    pl: {
      title: 'Safari na quadach w Hurghadzie i wioska beduińska',
      description:
        'Przejażdżka quadem przez malownicze pustynne krajobrazy Hurghady. Opieka instruktorów, jazda buggy i na wielbłądach, wizyta w tradycyjnej wiosce beduińskiej, herbata ziołowa oraz kolacja z grilla pod gwiazdami.',
      inclusions: ['Jazda na quadzie (ok. 45 km)', 'Spider buggy i jazda na wielbłądzie', 'Zwiedzanie wioski beduińskiej i herbata', 'Kolacja BBQ i pokaz orientalny', 'Transfer z hotelu'],
    },
    it: {
      title: 'Safari in Quad nel Deserto di Hurghada e Villaggio Beduino',
      description:
        'Guidate il vostro quad attraverso i suggestivi paesaggi desertici di Hurghada. Istruttori certificati, sosta in un autentico villaggio beduino, tè tradizionale, giro sul cammello e cena barbecue sotto le stelle.',
      inclusions: ['Guida su quad ATV (circa 45 km)', 'Spider buggy e cavalcata su cammello', 'Visita villaggio beduino e tè', 'Cena barbecue e spettacolo serale', 'Transfer da/per hotel'],
    },
    cs: {
      title: 'Safari na čtyřkolkách v poušti Hurghady a beduínská vesnice',
      description:
        'Jízda na čtyřkolkách úchvatnou pouštní krajinou Hurghady pod dohledem instruktorů. Zahrnuje jízdu buginou, svezení na velbloudu, návštěvu beduínské vesnice s tradičním čajem a grilovanou večeři pod hvězdami.',
      inclusions: ['Jízda na čtyřkolce (cca 45 km)', 'Spider bugina a jízda na velbloudu', 'Beduínská vesnice a čaj', 'Grilovaná večeře a orientální show', 'Transfery z hotelu'],
    },
    nl: {
      title: 'Quadsafari in de woestijn van Hurghada & Bedoeïenendorp',
      description:
        'Rijd op je eigen quad door de adembenemende woestijn van Hurghada. Begeleid door gecertificeerde instructeurs, bezoek aan een bedoeïenendorp, kameelrijden, kruidenthee en een barbecuediner onder de sterrenhemel.',
      inclusions: ['Quadrit (ong. 45 km)', 'Spider buggy & kameelrit', 'Bedoeïenendorp & traditionele thee', 'BBQ-diner & oosterse show', 'Hoteltransfers inbegrepen'],
    },
  },
  'srv-dgh-dolphin-house': {
    en: {
      title: 'Dolphin House Snorkeling Safari (Shaab El Erg)',
      description:
        'Full-day boat excursion to the famous Dolphin House (Shaab El Erg). Swim and snorkel near wild spinner dolphins in their protected marine lagoon, with 2 vibrant coral reef stops, fresh onboard lunch buffet, and unlimited soft drinks.',
      inclusions: ['Snorkeling Equipment (Mask, Snorkel, Fins)', 'Life Jackets', 'Chef Buffet Lunch & Unlimited Drinks', 'Banana Boat Water Fun', 'Hotel Transfers'],
    },
    de: {
      title: 'Dolphin House Schnorchelsafari (Shaab El Erg)',
      description:
        'Tagesausflug zum legendären Dolphin House (Shaab El Erg). Schwimmen und Schnorcheln in der Nähe von wilden Delfinen im geschützten Riffgebiet, 2 Schnorchelstopps mit bunten Fischen und Korallen, frisches Mittagsbuffet und Softdrinks.',
      inclusions: ['Komplette Schnorchelausrüstung', 'Rettungswesten für Groß & Klein', 'Mittagsbuffet vom Chefkoch & Getränke', 'Bananaboot-Wasserspaß', 'Hoteltransfer inklusive'],
    },
    ru: {
      title: 'Снорклинг с дельфинами в бухте Dolphin House (Шааб Эль Эрг)',
      description:
        'Морская прогулка на весь день в знаменитую бухту Dolphin House. Плавание и снорклинг рядом с дикими дельфинами в охраняемой лагуне, 2 остановки на ярких рифах, горячий обед от шеф-повара и напитки.',
      inclusions: ['Снаряжение для снорклинга (маски, трубки, ласты)', 'Спасательные жилеты', 'Шведский стол и напитки', 'Катание на банане', 'Трансфер из отеля туда и обратно'],
    },
    ar: {
      title: 'رحلة بيت الدلافين والسنوركلينج (شعب العرق)',
      description:
        'رحلة بحرية ليوم كامل إلى منطقة بيت الدلافين الشهيرة (شعب العرق). سباحة وسنوركلينج بالقرب من الدلافين البرية في محميتها الطبيعية، وتوقفان على شعاب مرجانية خلابة، وبوفيه غداء شهي ومشروبات مجانية.',
      inclusions: ['معدات سنوركلينج كاملة (نظارات وزعانف)', 'سترات نجاة آمنة للكبار والأطفال', 'بوفيه غداء ومشروبات غير محدودة', 'ألعاب مائية (بنانا بوت)', 'انتقالات الفندق ذهاباً وإياباً'],
    },
    fr: {
      title: 'Snorkeling aux Dauphins à Dolphin House (Shaab El Erg)',
      description:
        'Journée en mer vers le célèbre Dolphin House (Shaab El Erg). Nagez et observez les dauphins sauvages dans leur lagon préservé, 2 arrêts snorkeling sur des récifs colorés, buffet chaud à bord et boissons à volonté.',
      inclusions: ['Matériel de snorkeling complet', 'Gilets de sauvetage adaptés', 'Buffet préparé par le chef & boissons', 'Jeux nautiques (banane)', 'Transferts hôtel inclus'],
    },
    pl: {
      title: 'Rejs do Dolphin House i pływanie z delfinami (Shaab El Erg)',
      description:
        'Całodniowy rejs statkiem do słynnego Dolphin House. Pływanie i snorkeling w pobliżu dzikich delfinów w chronionej lagunie, 2 postoje na rafach koralowych, pyszny obiad w formie bufetu i nielimitowane napoje.',
      inclusions: ['Sprzęt do snorkelingu (maska, rurka, płetwy)', 'Kamizelki asekuracyjne', 'Obiad w formie bufetu i napoje bez ograniczeń', 'Atrakcje wodne (banan)', 'Transfer z hotelu'],
    },
    it: {
      title: 'Snorkeling con i Delfini a Dolphin House (Shaab El Erg)',
      description:
        'Escursione giornaliera in barca verso la celebre Dolphin House (Shaab El Erg). Nuotate e fate snorkeling vicino ai delfini selvatici nella laguna protetta, 2 soste sulla barriera corallina, pranzo a buffet e bevande.',
      inclusions: ['Attrezzatura da snorkeling completa', 'Giubbotti salvagente per tutti', 'Pranzo a buffet a bordo e bibite', 'Giro sulla banana boat', 'Transfer hotel a/r'],
    },
    cs: {
      title: 'Šnorchlování s delfíny v Dolphin House (Shaab El Erg)',
      description:
        'Celodenní lodní výlet k proslulému Dolphin House. Plavání a šnorchlování v blízkosti divokých delfínů v chráněné zátoce, 2 zastávky na korálových útesech, čerstvý obědový bufet a neomezené nealko nápoje.',
      inclusions: ['Šnorchlovací výstroj (maska, šnorchl, ploutve)', 'Záchranné vesty pro dospělé i děti', 'Čerstvý oběd a nápoje po celý den', 'Jízda na nafukovacím banánu', 'Transfer z/do hotelu'],
    },
    nl: {
      title: 'Dolphin House Snorkelsafari (Shaab El Erg)',
      description:
        'Hele dag bootexcursie naar het beroemde Dolphin House. Zwem en snorkel vlak bij wilde dolfijnen in een beschermde lagune, 2 kleurrijke rifstops, vers lunchbuffet en onbeperkt frisdrank aan boord.',
      inclusions: ['Snorkeluitrusting (masker, snorkel, vinnen)', 'Zwemvesten voor jong en oud', 'Vers lunchbuffet van de chef & drankjes', 'Bananenboot waterpret', 'Hoteltransfers inbegrepen'],
    },
  },
  'srv-dgh-giftun-island': {
    en: {
      title: 'Giftun Island Big Boat Trip',
      description:
        'Full-day luxury big boat excursion to the breathtaking Giftun Island — Hurghada\'s most iconic marine reserve. Snorkel crystal-clear turquoise waters with vibrant coral gardens, enjoy white sandy beaches, a fresh buffet lunch on board, and unlimited soft drinks. Perfect for families and all swimming levels.',
      inclusions: ['Snorkeling Equipment (Mask, Snorkel, Fins)', 'Life Jackets', 'Chef Buffet Lunch on Board', 'Unlimited Soft Drinks & Water', 'Banana Boat Fun Ride', 'Hotel Transfers'],
    },
    de: {
      title: 'Giftun Insel Großboot-Ausflug',
      description:
        'Ganztägiger Luxus-Bootsausflug zur atemberaubenden Giftun Insel — Hurghadas bekanntestes Meeresschutzgebiet. Schnorcheln in kristallklarem türkisfarbenem Wasser mit lebhaften Korallengärten, genießen Sie weiße Sandstrände, ein frisches Mittagsbuffet an Bord und unbegrenzte Softdrinks.',
      inclusions: ['Schnorchelausrüstung (Maske, Schnorchel, Flossen)', 'Schwimmwesten', 'Mittagsbuffet an Bord', 'Unbegrenzte Getränke & Wasser', 'Banana Boat Spaß', 'Hoteltransfer'],
    },
    ru: {
      title: 'Поездка на большой лодке к острову Гифтун',
      description:
        'Однодневная экскурсия на роскошном большом катере к живописному острову Гифтун — самому знаменитому морскому заповеднику Хургады. Снорклинг в кристально чистых бирюзовых водах с яркими коралловыми садами, белые песчаные пляжи, буфет на борту.',
      inclusions: ['Снаряжение для снорклинга (маска, трубка, ласты)', 'Спасательные жилеты', 'Обед-буфет на борту', 'Безлимитные напитки и вода', 'Банан', 'Трансфер из отеля'],
    },
    ar: {
      title: 'رحلة القارب الكبير لجزيرة جفتون',
      description:
        'رحلة يوم كامل على متن قارب كبير فاخر إلى الجزيرة الخلابة جفتون — أشهر محمية بحرية في الغردقة. سنوركلينج في المياه الفيروزية الصافية مع حدائق مرجانية نابضة، شواطئ رملية بيضاء، بوفيه غداء طازج على المتن، ومشروبات لا محدودة.',
      inclusions: ['معدات سنوركل كاملة', 'سترات نجاة', 'بوفيه غداء على المتن', 'مشروبات ومياه غير محدودة', 'بنانا بوت', 'انتقالات الفندق'],
    },
    fr: {
      title: 'Excursion en grand bateau à l\'île Giftun',
      description:
        'Excursion d\'une journée en grand bateau luxueux vers la magnifique île Giftun — la plus célèbre réserve marine d\'Hurghada. Snorkeling dans des eaux turquoise cristallines avec des jardins de coraux, plages de sable blanc, buffet déjeuner frais à bord et boissons à volonté.',
      inclusions: ['Matériel de snorkeling complet', 'Gilets de sauvetage', 'Buffet déjeuner à bord', 'Boissons & eau à volonté', 'Banane nautique', 'Transferts hôtel inclus'],
    },
    pl: {
      title: 'Wycieczka dużą łodzią na wyspę Giftun',
      description:
        'Całodniowa luksusowa wycieczka dużą łodzią na przepiękną wyspę Giftun — najsłynniejszy rezerwat morski Hurghady. Snorkeling w krystalicznie czystych turkusowych wodach z tętniącymi życiem ogrodami koralowymi, białe piaszczyste plaże, świeży bufet obiadowy na pokładzie.',
      inclusions: ['Sprzęt do snorkelingu (maska, rurka, płetwy)', 'Kamizelki asekuracyjne', 'Bufet obiadowy na pokładzie', 'Napoje i woda bez ograniczeń', 'Banana boat', 'Transfer z hotelu'],
    },
    it: {
      title: 'Gita in Grande Barca all\'Isola di Giftun',
      description:
        'Escursione di un giorno intero su un lussuoso grande barca alla meravigliosa Isola di Giftun — la riserva marina più iconica di Hurghada. Snorkeling in acque turchesi cristalline con giardini di coralli vibranti, spiagge di sabbia bianca, pranzo a buffet fresco a bordo e bevande illimitate.',
      inclusions: ['Attrezzatura snorkeling completa', 'Giubbotti salvagente', 'Pranzo a buffet a bordo', 'Bevande illimitate e acqua', 'Banana boat', 'Transfer hotel incluso'],
    },
    cs: {
      title: 'Výlet velkou lodí na ostrov Giftun',
      description:
        'Celodenní luxusní výlet velkou lodí na nádherný ostrov Giftun — nejznámější mořskou rezervaci Hurghady. Šnorchlování v křišťálově čistých tyrkysových vodách s živými korálovými zahradami, bílé písčité pláže, čerstvý obědový bufet na palubě.',
      inclusions: ['Šnorchlovací výstroj (maska, šnorchl, ploutve)', 'Záchranné vesty', 'Obědový bufet na palubě', 'Neomezené nápoje a voda', 'Banánový člun', 'Transfery z hotelu'],
    },
    nl: {
      title: 'Groot bootje uitstapje naar Giftun Eiland',
      description:
        'Dagexcursie op een luxe grote boot naar het prachtige Giftun Eiland — Hurghada\'s meest iconische zeereservaat. Snorkel in kristalhelder turquoise water met levendige koraaltuinen, geniet van witte zandstranden, vers lunchbuffet aan boord en onbeperkt frisdrank.',
      inclusions: ['Snorkeluitrusting (masker, snorkel, vinnen)', 'Zwemvesten', 'Vers lunchbuffet aan boord', 'Onbeperkt drankjes & water', 'Bananenboot', 'Hoteltransfers inbegrepen'],
    },
  },
  'srv-dgh-glass-boat': {
    en: {
      title: 'Glass Bottom Boat & Snorkeling for Non-Swimmers',
      description:
        'The perfect sea adventure for non-swimmers, families with young children, and those who prefer to stay dry! Glide over stunning Red Sea coral reefs through our transparent glass-bottom boat, watch colorful fish and corals without getting wet, followed by guided shallow snorkeling for those who wish to try.',
      inclusions: ['Glass Bottom Boat Tour', 'Snorkeling Gear (Optional)', 'Life Jackets', 'Fresh Fruits & Soft Drinks', 'Hotel Transfers'],
    },
    de: {
      title: 'Glasboden-Boot & Schnorcheln für Nichtschwimmer',
      description:
        'Das perfekte Meeresabenteuer für Nichtschwimmer, Familien mit kleinen Kindern und alle, die lieber trocken bleiben! Gleiten Sie über atemberaubende Korallenriffe durch unser transparentes Glasbodenboot und beobachten Sie bunte Fische und Korallen ohne ins Wasser zu gehen.',
      inclusions: ['Glasbodenboot-Tour', 'Schnorchelausrüstung (optional)', 'Schwimmwesten', 'Frische Früchte & Getränke', 'Hoteltransfer'],
    },
    ru: {
      title: 'Стеклянное дно и снорклинг для не умеющих плавать',
      description:
        'Идеальное морское приключение для тех, кто не умеет плавать, семей с маленькими детьми! Прогулка над коралловыми рифами на лодке со стеклянным дном — наблюдайте за рыбами и кораллами, не намокнув, затем — снорклинг на мелководье.',
      inclusions: ['Тур на лодке со стеклянным дном', 'Снаряжение для снорклинга (по желанию)', 'Спасательные жилеты', 'Фрукты и напитки', 'Трансфер из отеля'],
    },
    ar: {
      title: 'قارب القاع الزجاجي وسنوركلينج لغير السباحين',
      description:
        'المغامرة البحرية المثالية لغير السباحين والعائلات مع الأطفال الصغار وكل من يفضل البقاء جافاً! انزلق فوق شعاب البحر الأحمر الرائعة من خلال قارب ذو قاع زجاجي شفاف، شاهد الأسماك الملونة والمرجان دون أن تبلل.',
      inclusions: ['جولة بالقارب الزجاجي', 'معدات سنوركل (اختياري)', 'سترات نجاة', 'فواكه طازجة ومشروبات', 'انتقالات الفندق'],
    },
    fr: {
      title: 'Bateau à fond de verre & Snorkeling pour non-nageurs',
      description:
        'L\'aventure marine parfaite pour les non-nageurs, les familles avec de jeunes enfants et ceux qui préfèrent rester au sec! Glissez sur de superbes récifs coralliens à bord de notre bateau à fond transparent et observez poissons et coraux sans vous mouiller.',
      inclusions: ['Tour en bateau à fond de verre', 'Matériel de snorkeling (optionnel)', 'Gilets de sauvetage', 'Fruits frais & boissons', 'Transferts hôtel inclus'],
    },
    pl: {
      title: 'Łódź ze szklanym dnem & snorkeling dla nieumiejących pływać',
      description:
        'Idealna morska przygoda dla osób nieumiejących pływać, rodzin z małymi dziećmi i tych, którzy wolą pozostać suchymi! Płyń nad wspaniałymi rafami koralowymi przez naszą przezroczystą łódź ze szklanym dnem i obserwuj kolorowe ryby bez moczenia się.',
      inclusions: ['Rejs łodzią ze szklanym dnem', 'Sprzęt do snorkelingu (opcjonalnie)', 'Kamizelki asekuracyjne', 'Świeże owoce i napoje', 'Transfer z hotelu'],
    },
    it: {
      title: 'Barca con fondo di vetro & Snorkeling per chi non sa nuotare',
      description:
        'L\'avventura marina perfetta per chi non sa nuotare, famiglie con bambini piccoli e chi preferisce restare asciutto! Scivolate sulle splendide barriere coralline del Mar Rosso attraverso la nostra barca con fondo trasparente.',
      inclusions: ['Tour barca con fondo di vetro', 'Attrezzatura snorkeling (opzionale)', 'Giubbotti salvagente', 'Frutta fresca e bibite', 'Transfer hotel incluso'],
    },
    cs: {
      title: 'Loď se skleněným dnem & šnorchlování pro neplavce',
      description:
        'Dokonalé mořské dobrodružství pro neplavce, rodiny s malými dětmi a ty, kdo raději zůstanou suchí! Klouzejte nad úchvatnými korálovými útesy v naší průhledné lodi se skleněným dnem a pozorujte barevné ryby bez namočení.',
      inclusions: ['Prohlídka lodí se skleněným dnem', 'Šnorchlovací výstroj (volitelně)', 'Záchranné vesty', 'Čerstvé ovoce a nápoje', 'Transfery z hotelu'],
    },
    nl: {
      title: 'Glasbodemboot & snorkelen voor niet-zwemmers',
      description:
        'Het perfecte zee-avontuur voor niet-zwemmers, gezinnen met jonge kinderen en mensen die droog willen blijven! Glijd over prachtige koraalriffen in onze transparante glasbodemboot en bekijk kleurrijke vissen en koralen zonder nat te worden.',
      inclusions: ['Glasbodemboottour', 'Snorkeluitrusting (optioneel)', 'Zwemvesten', 'Vers fruit en frisdrank', 'Hoteltransfers inbegrepen'],
    },
  },
  'srv-dgh-orange-bay': {
    en: {
      title: 'Orange Bay Island & Snorkeling Sea Trip',
      description:
        'Experience the Egyptian Maldives at Orange Bay on Giftun Island! Relax for 2 hours on powdery white sand beaches, wooden sunbeds, overwater swings, and hammock photo spots. Includes 2 guided coral reef snorkeling stops, chef-prepared open buffet lunch on board, unlimited soft drinks, mineral water, fruits, banana boat & sofa water sports rides, and round-trip hotel transfers.',
      inclusions: [
        '2 Hours on Orange Bay Island Beach',
        '2 Guided Coral Reef Snorkeling Stops',
        'Snorkeling Equipment (Mask, Snorkel, Fins) & Life Jackets',
        'Chef Buffet Lunch on Yacht',
        'Unlimited Soft Drinks & Mineral Water',
        'Banana Boat & Water Sports Fun',
        'Round-Trip Hotel Transfers',
      ],
    },
    de: {
      title: 'Orange Bay Insel & Schnorchelausflug (Ägyptische Malediven)',
      description:
        'Erleben Sie die Malediven Ägyptens auf Orange Bay (Giftun Insel)! 2 Stunden Aufenthalt am Traumstrand mit Holzschaukeln im seichten Meer und Sonnenliegen. Inklusive 2 Schnorchelstopps an bunten Korallenriffen, Mittagsbuffet an Bord, Softdrinks, Bananaboot und Hoteltransfer.',
      inclusions: [
        '2 Stunden Aufenthalt auf Orange Bay',
        '2 geführte Schnorchelstopps',
        'Komplette Schnorchelausrüstung & Westen',
        'Frisches Mittagsbuffet auf der Yacht',
        'Unbegrenzte Softdrinks & Wasser',
        'Bananaboot-Wasserspaß',
        'Hoteltransfers Hin & Zurück',
      ],
    },
    ru: {
      title: 'Морская прогулка на остров Оранж Бэй и снорклинг',
      description:
        'Откройте для себя Египетские Мальдивы на острове Оранж Бэй (остров Гифтун)! 2 часа отдыха на белоснежном пляже с качелями прямо в воде и шезлонгами. Включены 2 остановки на коралловых рифах, горячий обед-буфет на яхте, напитки, катание на банане и трансфер.',
      inclusions: [
        '2 часа на острове Orange Bay',
        '2 остановки для снорклинга на рифах',
        'Снаряжение для плавания и жилеты',
        'Обед шведский стол на яхте',
        'Безалкогольные напитки и вода',
        'Катание на банане',
        'Трансфер из отеля и обратно',
      ],
    },
    ar: {
      title: 'رحلة جزيرة أورانج باي (مالديف مصر) والسنوركلينج',
      description:
        'عش تجربة مالديف مصر في جزيرة أورانج باي بمحمية جفتون! ساعتان من الاسترخاء على الرمال البيضاء الناعمة والمراجيح المائية وأماكن التصوير الخلابة. تشمل وقفتين سنوركلينج على أجمل الشعاب المرجانية، بوفيه غداء مفتوح على اليخت، مشروبات وفواكه، وألعاب مائية وانتقالات فندقية.',
      inclusions: [
        'ساعتان كاملتان على شاطئ جزيرة أورانج باي',
        'وقفتان سنوركلينج على الشعاب المرجانية',
        'معدات سنوركلينج كاملة وسترات نجاة',
        'بوفيه غداء طازج على اليخت',
        'مشروبات غازية ومياه معدنية غير محدودة',
        'ألعاب مائية (بنانا بوت وتيوب)',
        'توصيل ذهاب وإياب من الفندق',
      ],
    },
    fr: {
      title: 'Excursion sur l\'île d\'Orange Bay & Snorkeling',
      description:
        'Découvrez les Maldives égyptiennes à Orange Bay sur l\'île de Giftun ! 2 heures de détente sur une plage de sable blanc avec balançoires dans l\'eau, 2 arrêts snorkeling sur des récifs coralliens, buffet déjeuner à bord, boissons à volonté, banane nautique et transferts hôtel.',
      inclusions: [
        '2 heures sur la plage d\'Orange Bay',
        '2 arrêts snorkeling guidés',
        'Équipement complet & gilets de sauvetage',
        'Déjeuner buffet du chef à bord',
        'Boissons fraîches & eau minérale',
        'Jeux nautiques banane',
        'Transferts hôtel aller-retour',
      ],
    },
    pl: {
      title: 'Rejs na wyspę Orange Bay i snorkeling',
      description:
        'Odkryj egipskie Malediwy na wyspie Orange Bay (wyspa Giftun)! 2 godziny relaksu na białym piasku z huśtawkami w wodzie i leżakami. W cenie 2 postoje na rafach koralowych ze snorkelingiem, obiad w formie bufetu na jachcie, napoje, banan wodny oraz transfer.',
      inclusions: [
        '2 godziny na rajskiej plaży Orange Bay',
        '2 postoje na snorkeling z przewodnikiem',
        'Sprzęt do snorkelingu i kamizelki',
        'Obiad w formie bufetu na jachcie',
        'Nielimitowane napoje i woda',
        'Przejażdżka bananem wodnym',
        'Transfery z i do hotelu',
      ],
    },
    it: {
      title: 'Escursione all\'Isola di Orange Bay & Snorkeling',
      description:
        'Scoprite le Maldive d\'Egitto a Orange Bay sull\'Isola di Giftun ! 2 ore di relax sulla spiaggia bianca con altalene sull\'acqua e lettini. Include 2 soste snorkeling sulla barriera corallina, pranzo a buffet a bordo dello yacht, bevande illimitate, banana boat e transfer hotel.',
      inclusions: [
        '2 ore sulla spiaggia di Orange Bay',
        '2 soste snorkeling con guida',
        'Attrezzatura da snorkeling e giubbotti',
        'Pranzo a buffet sullo yacht',
        'Bibite fresche e acqua minerale',
        'Giro sulla banana boat',
        'Transfer a/r dal vostro hotel',
      ],
    },
    cs: {
      title: 'Výlet na ostrov Orange Bay & šnorchlování',
      description:
        'Zažijte egyptské Maledivy na ostrově Orange Bay (ostrov Giftun)! 2 hodiny odpočinku na bílém písku s dřevěnými houpačkami ve vodě. Zahrnuje 2 zastávky na šnorchlování u korálových útesů, oběd formou bufetu na lodi, nealko nápoje, jízdu na banánu a transfery.',
      inclusions: [
        '2 hodiny na pláži ostrova Orange Bay',
        '2 šnorchlovací zastávky s průvodcem',
        'Šnorchlovací výstroj a vesty',
        'Čerstvý obědový bufet na lodi',
        'Neomezené nealko nápoje a voda',
        'Jízda na nafukovacím banánu',
        'Transfery z/do hotelu',
      ],
    },
    nl: {
      title: 'Orange Bay Eiland & Snorkeltrip (Egyptische Malediven)',
      description:
        'Ervaar de Malediven van Egypte op Orange Bay (Giftun Eiland)! 2 uur ontspannen op een wit zandstrand met houten schommels in het water. Inclusief 2 snorkelstops bij koraalriffen, lunchbuffet op het jacht, frisdrank, bananenboot en hoteltransfer.',
      inclusions: [
        '2 uur op het strand van Orange Bay',
        '2 begeleide snorkelstops',
        'Snorkeluitrusting & zwemvesten',
        'Vers lunchbuffet op het jacht',
        'Onbeperkt frisdrank en mineraalwater',
        'Bananenboot waterpret',
        'Retourtransfer vanaf hotel',
      ],
    },
  },
  'srv-dgh-luxor-vip': {
    en: {
      title: 'Luxor Day Trip by VIP Mini Bus (Max 8 Persons)',
      description:
        'Explore the ancient wonders of Thebes on an exclusive VIP small-group day trip from Hurghada to Luxor by comfortable air-conditioned mini bus (strictly limited to 8 persons). Discover Karnak Temple, Valley of the Kings, Queen Hatshepsut Temple, Colossi of Memnon, and enjoy a traditional Nile boat crossing with a certified Egyptologist guide and lunch on the Nile.',
      inclusions: [
        'VIP AC Mini Bus Transportation (Max 8 Persons)',
        'Certified Egyptologist Tour Guide',
        'All Temple & Monument Entrance Tickets',
        'Karnak Temple & Valley of the Kings Entry',
        'Queen Hatshepsut Temple & Colossi of Memnon',
        'Traditional Egyptian Lunch on the Nile',
        'Motorboat Nile River Crossing',
        'Round-Trip Hotel Transfers & Bottled Water',
      ],
    },
    de: {
      title: 'Luxor-Tagesausflug im VIP-Minibus (Max. 8 Personen)',
      description:
        'Entdecken Sie die antiken Wunder von Theben auf einem exklusiven VIP-Kleingruppenausflug von Hurghada nach Luxor im klimatisierten Minibus (maximal 8 Personen). Besichtigen Sie den Karnak-Tempel, das Tal der Könige, den Hatschepsut-Tempel, die Memnonkolosse und genießen Sie eine Nilüberfahrt mit zertifiziertem Ägyptologen und Mittagessen am Nil.',
      inclusions: [
        'Fahrt im klimatisierten VIP-Minibus (max. 8 Gäste)',
        'Zertifizierter deutschsprachiger Ägyptologe',
        'Alle Eintrittskarten zu Tempeln & Gräbern',
        'Karnak-Tempel & Tal der Könige',
        'Hatschepsut-Tempel & Memnonkolosse',
        'Mittagessen in traditionellem Restaurant am Nil',
        'Motorbootfahrt über den Nil',
        'Hoteltransfer Hin & Zurück',
      ],
    },
    ru: {
      title: 'Экскурсия в Луксор на VIP-минивэне (максимум 8 человек)',
      description:
        'Откройте древние сокровища Фив в эксклюзивной мини-группе из Хургады в Луксор на комфортабельном кондиционированном минивэне (строго до 8 человек). Карнакский храм, Долина Царей, храм царицы Хатшепсут, Колоссы Мемнона, переправа по Нилу на катере, лицензированный гид-египтолог и обед на берегу Нила.',
      inclusions: [
        'Комфортабельный VIP-минивэн с кондиционером (до 8 чел.)',
        'Профессиональный русскоговорящий гид-египтолог',
        'Все входные билеты в храмы и гробницы',
        'Карнакский храм и Долина Царей',
        'Храм Хатшепсут и Колоссы Мемнона',
        'Обед в ресторане на берегу Нила',
        'Прогулка на моторной лодке по Нилу',
        'Трансфер из отеля и обратно',
      ],
    },
    ar: {
      title: 'رحلة الأقصر ومعالم الفراعنة بميني باص VIP (٨ أفراد فقط)',
      description:
        'استكشف أسرار الحضارة المصرية القديمة في رحلة يوم كامل حصرية من الغردقة إلى الأقصر بميني باص سياحي مكيف حديث لمجموعة صغيرة متميزة (بحد أقصى ٨ أفراد لضمان الراحة والخصوصية). تشمل زيارة معبد الكرنك، وادي الملوك ومقابر الفراعنة، معبد حتشبسوت، تمثالي ممنون، جولة نيلية باللانش، ومرشد سياحي متخصص وغداء شهي على النيل.',
      inclusions: [
        'انتقالات بميني باص سياحي VIP مكيف (٨ أفراد فقط)',
        'مرشد سياحي معتمد ومتخصص في علم المصريات',
        'جميع تذاكر ورسوم دخول المعابد والمزارات',
        'معبد الكرنك العظيم ووادي الملوك',
        'معبد الملكة حتشبسوت وتمثالا ممنون',
        'غداء مصري طازج في مطعم مطل على النيل',
        'جولة عبور النيل باللانش النهري',
        'انتقالات ذهاب وإياب من فندقك',
      ],
    },
    fr: {
      title: 'Excursion à Louxor en Minibus VIP (Max 8 Personnes)',
      description:
        'Découvrez les merveilles antiques de Thèbes lors d\'une excursion VIP exclusive en petit groupe de Hurghada à Louxor en minibus grand confort (limité à 8 personnes). Visitez le temple de Karnak, la Vallée des Rois, le temple d\'Hatchepsout, les Colosses de Memnon, traversée du Nil en bateau et déjeuner au bord du Nil avec égyptologue francophone certifié.',
      inclusions: [
        'Transport en Minibus VIP climatisé (max 8 personnes)',
        'Guide égyptologue officiel francophone',
        'Tous les billets d\'entrée des monuments',
        'Temple de Karnak & Vallée des Rois',
        'Temple d\'Hatchepsout & Colosses de Memnon',
        'Déjeuner au bord du Nil',
        'Traversée du Nil en bateau à moteur',
        'Transferts hôtel aller-retour',
      ],
    },
    pl: {
      title: 'Wycieczka do Luksoru minibusem VIP (Maks. 8 osób)',
      description:
        'Poznaj starożytne cuda Teb podczas ekskluzywnej wycieczki w małej grupie z Hurghady do Luksoru komfortowym klimatyzowanym minibusem (maksymalnie 8 osób). Świątynia w Karnaku, Dolina Królów, świątynia Hatszepsut, Kolosy Memnona, rejs motorówką po Nilu i obiad z przewodnikiem egiptologiem.',
      inclusions: [
        'Transport minibusem VIP z klimatyzacją (maks. 8 osób)',
        'Licencjonowany przewodnik egiptolog',
        'Wszystkie bilety wstępu do zabytków',
        'Świątynia Karnak i Dolina Królów',
        'Świątynia Hatszepsut i Kolosy Memnona',
        'Obiad w restauracji nad Nilem',
        'Przeprawa motorówką przez Nil',
        'Transfer z i do hotelu',
      ],
    },
    it: {
      title: 'Escursione a Luxor in Minibus VIP (Max 8 Persone)',
      description:
        'Esplorate le antiche meraviglie di Tebe con un\'esclusiva gita di un giorno in piccolo gruppo da Hurghada a Luxor in minibus VIP climatizzato (massimo 8 persone). Tempio di Karnak, Valle dei Re, Tempio di Hatshepsut, Colossi di Memnon, traversata del Nilo in barca e pranzo tipico con guida egittologa.',
      inclusions: [
        'Minibus VIP climatizzato (max 8 partecipanti)',
        'Guida egittologa ufficiale certificata',
        'Tutti i biglietti d\'ingresso inclusi',
        'Tempio di Karnak e Valle dei Re',
        'Tempio di Hatshepsut e Colossi di Memnone',
        'Pranzo sulle rive del Nilo',
        'Traversata del Nilo in motoscafo',
        'Transfer hotel a/r',
      ],
    },
    cs: {
      title: 'Výlet do Luxoru VIP minibusem (Max. 8 osob)',
      description:
        'Objevte starověké divy Théb na exkluzivním výletě v malé skupině z Hurghady do Luxoru klimatizovaným VIP minibusem (pouze pro 8 osob). Chrám v Karnaku, Údolí králů, chrám Hatšepsut, Memnonovy kolosy, plavba po Nilu s licencovaným egyptologem a oběd na břehu Nilu.',
      inclusions: [
        'Klimatizovaný VIP minibus (max. 8 osob)',
        'Licencovaný průvodce egyptolog',
        'Všechny vstupenky do chrámů v ceně',
        'Chrám Karnak a Údolí králů',
        'Chrám královny Hatšepsut a Memnonovy kolosy',
        'Oběd v restauraci u Nilu',
        'Přejezd Nilu motorovým člunem',
        'Transfery z/do hotelu',
      ],
    },
    nl: {
      title: 'Dagexcursie Luxor per VIP Minibus (Max. 8 Personen)',
      description:
        'Ontdek de eeuwenoude schatten van Thebe tijdens een exclusieve kleinschalige dagexcursie van Hurghada naar Luxor per luxe VIP minibus (maximaal 8 personen). Bezoek de Karnak-tempel, Vallei der Koningen, Hatsjepsoet-tempel, Kolossen van Memnon, Nijlovertocht en lunch met gecertificeerde egyptoloog.',
      inclusions: [
        'VIP Minibus met airco (maximaal 8 personen)',
        'Gecertificeerde egyptoloog-gids',
        'Alle officiële toegangskaarten voor tempels',
        'Karnak-tempel & Vallei der Koningen',
        'Hatsjepsoet-tempel & Kolossen van Memnon',
        'Traditionele lunch aan de Nijl',
        'Boottocht over de Nijl',
        'Retourtransfer vanaf uw hotel',
      ],
    },
  },
};

export function getServiceTranslation(serviceId: string, lang: LanguageCode): ServiceTranslation | null {
  return SERVICES_TRANSLATIONS[serviceId]?.[lang] || null;
}

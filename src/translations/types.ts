export type LanguageCode = 'en' | 'de' | 'ru' | 'ar' | 'fr' | 'pl' | 'it' | 'cs' | 'nl';

export interface LanguageInfo {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  rtl: boolean;
}

export interface ServiceTranslation {
  title: string;
  description: string;
  inclusions: string[];
}

export interface DiveSiteTranslation {
  name: string;
  type: string;
  highlights: string;
  level: string;
  marineBio: string;
  depth?: string;
  visibility?: string;
}

export interface TranslationDictionary {
  navbar: {
    location: string;
    followUs: string;
    wordmarkSub: string;
    excursions: string;
    dailyDiving: string;
    padiCourses: string;
    diveSites: string;
    about: string;
    reviews: string;
    faq: string;
    whatsappDesk: string;
    bookOnline: string;
    book: string;
    language: string;
    autoDetected: string;
  };
  hero: {
    liveKicker: string;
    weatherKicker: string;
    titlePart1: string;
    titleHighlight: string;
    description: string;
    selectExcursion: string;
    selectDate: string;
    guestsDivers: string;
    adultsLabel: string;
    bookNow: string;
    badgeCancellation: string;
    badgePickup: string;
    badgeLunch: string;
    badgePadi: string;
  };
  excursions: {
    kicker: string;
    title: string;
    description: string;
    filterAll: string;
    filterDiving: string;
    filterSeaTrip: string;
    filterSafari: string;
    perAdult: string;
    child: string;
    free: string;
    hoursDuration: string;
    inclusions: string;
    bookOnline: string;
    askAi: string;
  };
  diveSites: {
    kicker: string;
    title: string;
    description: string;
    depthLabel: string;
    visibilityLabel: string;
    bioLabel: string;
  };
  about: {
    kicker: string;
    title: string;
    p1: string;
    p2: string;
    statYears: string;
    statDives: string;
    statSafety: string;
    statScore: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    pillar4Title: string;
    pillar4Desc: string;
    fleetTitle: string;
    fleetDesc: string;
    socialKicker: string;
  };
  reviews: {
    kicker: string;
    title: string;
    description: string;
    reviewsCount: string;
    verifiedGuests: string;
    award: string;
    leaveReview: string;
    showing: string;
    of: string;
    catAll: string;
    catDiving: string;
    catDolphin: string;
    catPadi: string;
    catSafari: string;
    modalTitle: string;
    modalName: string;
    modalCity: string;
    modalTrip: string;
    modalRating: string;
    modalComment: string;
    modalSubmit: string;
    modalCancel: string;
    modalSuccess: string;
  };
  faq: {
    kicker: string;
    title: string;
    description: string;
    items: { q: string; a: string }[];
  };
  footer: {
    sub: string;
    desc: string;
    badge: string;
    headingExcursions: string;
    headingContact: string;
    headingHours: string;
    hoursDesk: string;
    hoursDepartures: string;
    hoursTransfers: string;
    hoursCancellation: string;
    rightsReserved: string;
    padiCertified: string;
    languagesText: string;
  };
  bookingDrawer: {
    title: string;
    sub: string;
    labelService: string;
    labelDate: string;
    labelTime: string;
    labelName: string;
    labelEmail: string;
    labelPhone: string;
    labelHotel: string;
    labelRoom: string;
    labelAdults: string;
    labelChildren: string;
    labelPayment: string;
    payCash: string;
    payCard: string;
    labelRequests: string;
    priceSummary: string;
    total: string;
    btnConfirm: string;
    errRequired: string;
    successTitle: string;
    successId: string;
    successNotice: string;
    btnWhatsapp: string;
    btnClose: string;
  };
  concierge: {
    title: string;
    sub: string;
    onlineBadge: string;
    welcomeMsg: string;
    placeholder: string;
    quickPrompt1: string;
    quickPrompt2: string;
    quickPrompt3: string;
    quickPrompt4: string;
    btnBook: string;
  };
}

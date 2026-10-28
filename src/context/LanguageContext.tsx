import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import {
  LanguageCode,
  LanguageInfo,
  TranslationDictionary,
  ServiceTranslation,
  DiveSiteTranslation,
} from '../translations/types';
import {
  SUPPORTED_LANGUAGES,
  DEFAULT_LANGUAGE,
  detectUserLanguage,
  getLanguageInfo,
} from '../translations/languages';
import { getTranslation } from '../translations';
import { getServiceTranslation } from '../translations/servicesTranslations';
import { getDiveSiteTranslation } from '../translations/diveSitesTranslations';
import { ServiceItem } from '../types';

interface LanguageContextType {
  language: LanguageCode;
  languageInfo: LanguageInfo;
  setLanguage: (code: LanguageCode) => void;
  t: TranslationDictionary;
  isRtl: boolean;
  isAutoDetected: boolean;
  detectedLang: LanguageCode;
  getLocalizedService: (service: ServiceItem) => {
    title: string;
    description: string;
    inclusions: string[];
  };
  getLocalizedDiveSite: (
    index: number,
    original: {
      name: string;
      type: string;
      highlights: string;
      level: string;
      marineBio: string;
      depth: string;
      visibility: string;
      coordinates: string;
      badgeColor: string;
    }
  ) => {
    name: string;
    type: string;
    highlights: string;
    level: string;
    marineBio: string;
    depth: string;
    visibility: string;
    coordinates: string;
    badgeColor: string;
  };
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [detectedLang] = useState<LanguageCode>(() => detectUserLanguage());
  const [isAutoDetected, setIsAutoDetected] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      return !window.localStorage.getItem('divego_preferred_lang');
    }
    return true;
  });

  const [language, setLanguageState] = useState<LanguageCode>(() => {
    // 1. If explicit preference saved, respect it
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = window.localStorage.getItem('divego_preferred_lang') as LanguageCode;
      if (saved && SUPPORTED_LANGUAGES.some((l) => l.code === saved)) {
        return saved;
      }
    }
    // 2. Otherwise use detected language (which defaults strictly to 'en' if not detected)
    return detectedLang;
  });

  const languageInfo = useMemo(() => getLanguageInfo(language), [language]);
  const isRtl = languageInfo.rtl;

  // Reactively apply HTML lang and dir attributes to the document
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
      if (isRtl) {
        document.body.classList.add('rtl-mode');
      } else {
        document.body.classList.remove('rtl-mode');
      }
    }
  }, [language, isRtl]);

  const setLanguage = (code: LanguageCode) => {
    setLanguageState(code);
    setIsAutoDetected(false);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('divego_preferred_lang', code);
      }
    } catch (e) {
      console.warn('Could not save language to localStorage', e);
    }
  };

  const t = useMemo(() => getTranslation(language), [language]);

  const getLocalizedService = (service: ServiceItem) => {
    const localized = getServiceTranslation(service.id, language);
    if (localized) {
      return {
        title: localized.title,
        description: localized.description,
        inclusions: localized.inclusions,
      };
    }
    return {
      title: service.title,
      description: service.description,
      inclusions: service.inclusions,
    };
  };

  const getLocalizedDiveSite = (
    index: number,
    original: {
      name: string;
      type: string;
      highlights: string;
      level: string;
      marineBio: string;
      depth: string;
      visibility: string;
      coordinates: string;
      badgeColor: string;
    }
  ) => {
    const localized = getDiveSiteTranslation(index, language);
    if (localized) {
      return {
        ...original,
        name: localized.name,
        type: localized.type,
        highlights: localized.highlights,
        level: localized.level,
        marineBio: localized.marineBio,
        depth: localized.depth || original.depth,
        visibility: localized.visibility || original.visibility,
      };
    }
    return original;
  };

  const value: LanguageContextType = {
    language,
    languageInfo,
    setLanguage,
    t,
    isRtl,
    isAutoDetected,
    detectedLang,
    getLocalizedService,
    getLocalizedDiveSite,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

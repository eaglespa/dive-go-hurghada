import { LanguageCode, TranslationDictionary } from './types';
import { en } from './en';
import { de } from './de';
import { ru } from './ru';
import { ar } from './ar';
import { fr } from './fr';
import { pl } from './pl';
import { it } from './it';
import { cs } from './cs';
import { nl } from './nl';

export * from './types';
export * from './languages';
export * from './servicesTranslations';
export * from './diveSitesTranslations';
export * from './reviewsTranslations';

export const TRANSLATIONS: Record<LanguageCode, TranslationDictionary> = {
  en,
  de,
  ru,
  ar,
  fr,
  pl,
  it,
  cs,
  nl,
};

export function getTranslation(lang: LanguageCode): TranslationDictionary {
  return TRANSLATIONS[lang] || TRANSLATIONS.en;
}

import { LanguageCode, LanguageInfo } from './types';

export const SUPPORTED_LANGUAGES: LanguageInfo[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧', rtl: false },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', rtl: false },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺', rtl: false },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇪🇬', rtl: true },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', rtl: false },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱', rtl: false },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', rtl: false },
  { code: 'cs', name: 'Czech', nativeName: 'Čeština', flag: '🇨🇿', rtl: false },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱', rtl: false },
];

export const DEFAULT_LANGUAGE: LanguageCode = 'en';

export const SUPPORTED_LANG_CODES: LanguageCode[] = SUPPORTED_LANGUAGES.map((l) => l.code);

export function getLanguageInfo(code: string): LanguageInfo {
  return SUPPORTED_LANGUAGES.find((l) => l.code === code) || SUPPORTED_LANGUAGES[0];
}

/**
 * Robust Client-Side Auto Detection Engine
 * 1. Checks user saved preference in localStorage
 * 2. Scans navigator.languages array for best match against supported languages
 * 3. Fallbacks strictly to English ('en') if not detected or unsupported
 */
export function detectUserLanguage(): LanguageCode {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = window.localStorage.getItem('divego_preferred_lang');
      if (saved && SUPPORTED_LANG_CODES.includes(saved as LanguageCode)) {
        return saved as LanguageCode;
      }
    }

    if (typeof navigator !== 'undefined') {
      const candidateLangs: string[] = [];
      if (Array.isArray(navigator.languages) && navigator.languages.length > 0) {
        candidateLangs.push(...navigator.languages);
      }
      if (navigator.language) {
        candidateLangs.push(navigator.language);
      }

      for (const raw of candidateLangs) {
        if (!raw) continue;
        const normalized = raw.toLowerCase().trim();
        const primary = normalized.split('-')[0].split('_')[0]; // e.g. "de-DE" -> "de", "ru_RU" -> "ru"
        
        if (SUPPORTED_LANG_CODES.includes(primary as LanguageCode)) {
          return primary as LanguageCode;
        }
      }
    }
  } catch (e) {
    console.warn('Auto-detect language fallback:', e);
  }

  // Strict requirement: Always start with English, not German!
  return DEFAULT_LANGUAGE;
}

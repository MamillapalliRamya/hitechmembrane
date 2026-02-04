// src/i18n/config.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import your translation files
import enTranslations from './locales/en.json';
// You can add more language files if you have pre-translated content
// import viTranslations from './locales/vi.json';
// import arTranslations from './locales/ar.json';

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      // Add other languages if you have static translations
      // vi: { translation: viTranslations },
      // ar: { translation: arTranslations },
    },
    fallbackLng: 'en', // Fallback language
    debug: false, // Set to true for debugging
    
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
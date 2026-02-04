// src/services/translationService.ts
import axios from 'axios';

const API_BASE_URL = 'http://65.0.77.32:8000/api';

// Language code mapping (i18n code -> API code)
const LANG_CODE_MAP: Record<string, string> = {
  'en': 'en',
  'vi': 'vi',
  'ar': 'ar',
  'hi': 'hi',
  'zh': 'zh-CN', // Google Translator uses zh-CN
  'ur': 'ur',
  'id': 'id',
  'th': 'th',
  'fil': 'tl', // Filipino -> Tagalog in Google Translator
  'fa': 'fa',
};

interface TranslationCache {
  [key: string]: {
    [lang: string]: string;
  };
}

class TranslationService {
  private cache: TranslationCache = {};
  
  // Load cache from localStorage
  constructor() {
    this.loadCache();
  }

  private loadCache() {
    try {
      const cached = localStorage.getItem('translation_cache');
      if (cached) {
        this.cache = JSON.parse(cached);
      }
    } catch (error) {
      console.error('Error loading translation cache:', error);
    }
  }

  private saveCache() {
    try {
      localStorage.setItem('translation_cache', JSON.stringify(this.cache));
    } catch (error) {
      console.error('Error saving translation cache:', error);
    }
  }

  private getCacheKey(text: string): string {
    return text.trim().toLowerCase();
  }

  private getApiLangCode(i18nCode: string): string {
    return LANG_CODE_MAP[i18nCode] || i18nCode;
  }

  /**
   * Translate a single text to a target language
   */
  async translateText(
    text: string,
    targetLang: string,
    sourceLang: string = 'en'
  ): Promise<string> {
    if (!text || !text.trim()) return text;
    
    const cacheKey = this.getCacheKey(text);
    
    // Check cache first
    if (this.cache[cacheKey]?.[targetLang]) {
      return this.cache[cacheKey][targetLang];
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/translate`, {
        text: text,
        source_lang: this.getApiLangCode(sourceLang),
        target_lang: this.getApiLangCode(targetLang),
      });

      const translatedText = response.data.translated_text;

      // Cache the result
      if (!this.cache[cacheKey]) {
        this.cache[cacheKey] = {};
      }
      this.cache[cacheKey][targetLang] = translatedText;
      this.saveCache();

      return translatedText;
    } catch (error) {
      console.error('Translation error:', error);
      return text; // Return original text on error
    }
  }

  /**
   * Translate a single text to multiple languages at once
   */
  async translateToMultipleLanguages(
    text: string,
    targetLangs: string[],
    sourceLang: string = 'en'
  ): Promise<Record<string, string>> {
    if (!text || !text.trim()) {
      return targetLangs.reduce((acc, lang) => ({ ...acc, [lang]: text }), {});
    }

    const cacheKey = this.getCacheKey(text);
    const uncachedLangs: string[] = [];
    const result: Record<string, string> = {};

    // Check which languages are already cached
    targetLangs.forEach(lang => {
      if (this.cache[cacheKey]?.[lang]) {
        result[lang] = this.cache[cacheKey][lang];
      } else {
        uncachedLangs.push(lang);
      }
    });

    // If all are cached, return immediately
    if (uncachedLangs.length === 0) {
      return result;
    }

    try {
      const apiTargetLangs = uncachedLangs.map(lang => this.getApiLangCode(lang));
      
      const response = await axios.post(`${API_BASE_URL}/translate-multiple`, {
        text: text,
        source_lang: this.getApiLangCode(sourceLang),
        target_langs: apiTargetLangs,
      });

      const translations = response.data.translations;

      // Map API response back to i18n codes and cache
      uncachedLangs.forEach((lang, index) => {
        const apiLangCode = apiTargetLangs[index];
        const translatedText = translations[apiLangCode];
        
        result[lang] = translatedText;

        // Cache the result
        if (!this.cache[cacheKey]) {
          this.cache[cacheKey] = {};
        }
        this.cache[cacheKey][lang] = translatedText;
      });

      this.saveCache();

      return result;
    } catch (error) {
      console.error('Multiple translation error:', error);
      // Return original text for uncached languages on error
      uncachedLangs.forEach(lang => {
        result[lang] = text;
      });
      return result;
    }
  }

  /**
   * Clear translation cache
   */
  clearCache() {
    this.cache = {};
    localStorage.removeItem('translation_cache');
  }

  /**
   * Pre-translate common UI strings for all languages
   */
  async preloadCommonTranslations(texts: string[], targetLangs: string[]) {
    const promises = texts.map(text => 
      this.translateToMultipleLanguages(text, targetLangs)
    );
    
    try {
      await Promise.all(promises);
      console.log('Common translations preloaded successfully');
    } catch (error) {
      console.error('Error preloading translations:', error);
    }
  }
}

export const translationService = new TranslationService();
export default translationService;
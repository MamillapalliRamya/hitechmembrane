// src/hooks/useTranslateContent.ts
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import translationService from '../services/translationService';

/**
 * Custom hook to translate dynamic content that comes from API or database
 * Use this for content that's not in your i18n translation files
 */
export const useTranslateContent = (originalText: string, sourceLang: string = 'en') => {
  const { i18n } = useTranslation();
  const [translatedText, setTranslatedText] = useState(originalText);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const translateText = async () => {
      // If current language is same as source language, no translation needed
      if (i18n.language === sourceLang || !originalText) {
        setTranslatedText(originalText);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const result = await translationService.translateText(
          originalText,
          i18n.language,
          sourceLang
        );
        setTranslatedText(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Translation failed'));
        setTranslatedText(originalText); // Fallback to original text
      } finally {
        setIsLoading(false);
      }
    };

    translateText();
  }, [originalText, i18n.language, sourceLang]);

  return { translatedText, isLoading, error };
};

/**
 * Hook to translate multiple texts at once
 */
export const useTranslateMultiple = (texts: string[], sourceLang: string = 'en') => {
  const { i18n } = useTranslation();
  const [translatedTexts, setTranslatedTexts] = useState<string[]>(texts);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const translateTexts = async () => {
      if (i18n.language === sourceLang || texts.length === 0) {
        setTranslatedTexts(texts);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const promises = texts.map(text =>
          translationService.translateText(text, i18n.language, sourceLang)
        );
        const results = await Promise.all(promises);
        setTranslatedTexts(results);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Translation failed'));
        setTranslatedTexts(texts); // Fallback to original texts
      } finally {
        setIsLoading(false);
      }
    };

    translateTexts();
  }, [texts, i18n.language, sourceLang]);

  return { translatedTexts, isLoading, error };
};
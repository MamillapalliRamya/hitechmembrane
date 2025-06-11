import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  const languages = [
    { code: 'en', name: t('languages.en'), flag: '🇺🇸' },
    { code: 'th', name: t('languages.th'), flag: '🇹🇭' },
    { code: 'ar', name: t('languages.ar'), flag: '🇦🇪' },
    { code: 'zh', name: t('languages.zh'), flag: '🇨🇳' },
    { code: 'my', name: t('languages.my'), flag: '🇲🇲' }
  ];

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
        <Globe className="w-5 h-5" />
        <span className="hidden md:inline">{languages.find(lang => lang.code === i18n.language)?.flag}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 ${
              i18n.language === lang.code ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
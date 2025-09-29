import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

interface Language {
  code: string;
  name: string;
  country: string;
  countryCode: string;
}

const languages: Language[] = [
  { code: "en", name: "English", country: "USA", countryCode: "us" },
  { code: "vi", name: "tiếng việt", country: "Vietnam", countryCode: "vn" },
  { code: "ar", name: "عربى", country: "Saudi Arabia", countryCode: "sa" },
  { code: "hi", name: "हिन्दी", country: "India", countryCode: "in" },
  { code: "zh", name: "中文", country: "China", countryCode: "cn" },
  { code: "ur", name: "اردو", country: "Pakistan", countryCode: "pk" },
  { code: "id", name: "Indonesia", country: "Indonesia", countryCode: "id" },
  { code: "th", name: "ไทย", country: "Thailand", countryCode: "th" },
  { code: "fil", name: "pilipino", country: "Philippines", countryCode: "ph" },
  { code: "fa", name: "فارسی", country: "Iran", countryCode: "ir" },
];

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
        aria-label="Select language"
      >
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {currentLanguage.country} ({currentLanguage.name})
        </span>
        <div className="w-6 h-5 rounded-[20px] overflow-hidden flex-shrink-0">
          <img 
            src={`https://flagcdn.com/w40/${currentLanguage.countryCode.toLowerCase()}.png`}
            alt={`${currentLanguage.country} flag`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              if (e.currentTarget.nextElementSibling) {
                (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
              }
            }}
          />
          <div
            className="w-full h-full flex items-center justify-center text-xs"
            style={{ display: 'none' }}
          >
            🏳️
          </div>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
          <div className="grid grid-cols-2 gap-1 p-2 max-h-96 overflow-y-auto">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-md transition-all duration-200 text-left ${
                  currentLanguage.code === language.code
                    ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                }`}
              >
                <img 
                  src={`https://flagcdn.com/w40/${language.countryCode.toLowerCase()}.png`}
                  alt={`${language.country} flag`}
                  className="w-5 h-4 object-cover rounded-[20px] flex-shrink-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="text-sm font-medium">{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
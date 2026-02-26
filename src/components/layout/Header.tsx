import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTranslateContent } from "../../hooks/useTranslateContent";
import LanguageSelector from "../common/LanguageSelector";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // Text content for translation
  const aboutText = "About Us";
  const productsText = "Products";
  const innovationText = "Innovation";
  const ourImpactText = "Our Impact";
  const eventsText = "Events";
  const requestQuoteText = "Let's Talk";
  const quoteShortText = "Let's Talk";

  // Translation hooks
  const { translatedText: translatedAboutText } = useTranslateContent(aboutText);
  const { translatedText: translatedProductsText } = useTranslateContent(productsText);
  const { translatedText: translatedInnovationText } = useTranslateContent(innovationText);
  const { translatedText: translatedOurImpactText } = useTranslateContent(ourImpactText);
  const { translatedText: translatedEventsText } = useTranslateContent(eventsText);
  const { translatedText: translatedRequestQuoteText } = useTranslateContent(requestQuoteText);
  const { translatedText: translatedQuoteShortText } = useTranslateContent(quoteShortText);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Compact Language Selector Component for Mobile
  const CompactLanguageSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const currentLang = i18n.language;

    // Language configuration - adjust these to match your actual supported languages
    const languages = [
      { code: 'en', label: 'EN', name: 'English' },
      { code: 'es', label: 'ES', name: 'Español' },
      { code: 'fr', label: 'FR', name: 'Français' },
      { code: 'de', label: 'DE', name: 'Deutsch' },
      { code: 'it', label: 'IT', name: 'Italiano' },
      { code: 'pt', label: 'PT', name: 'Português' },
      { code: 'nl', label: 'NL', name: 'Nederlands' },
      { code: 'pl', label: 'PL', name: 'Polski' },
      { code: 'ru', label: 'RU', name: 'Русский' },
      { code: 'zh', label: 'ZH', name: '中文' },
      { code: 'ja', label: 'JA', name: '日本語' },
      { code: 'ko', label: 'KO', name: '한국어' },
      { code: 'ar', label: 'AR', name: 'العربية' },
      { code: 'hi', label: 'HI', name: 'हिन्दी' },
      { code: 'tr', label: 'TR', name: 'Türkçe' },
    ];

    const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0];

    const changeLanguage = (langCode: string) => {
      i18n.changeLanguage(langCode);
      setIsOpen(false);
    };

    useEffect(() => {
      const handleClickOutside = () => {
        if (isOpen) setIsOpen(false);
      };

      if (isOpen) {
        document.addEventListener('click', handleClickOutside);
      }

      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, [isOpen]);

    return (
      <div className="relative">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className="flex items-center gap-1 px-2 py-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-300 dark:border-gray-600"
          aria-label="Select language"
        >
          <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
            {currentLanguage.label}
          </span>
          <ChevronDown className="w-3 h-3 text-gray-500" />
        </button>

        {isOpen && (
          <div 
            className="absolute right-0 mt-2 py-2 w-36 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 max-h-64 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                  currentLang === lang.code
                    ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                <span className="font-medium">{lang.name}</span>
                <span className="text-xs font-bold">{lang.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <header
        id="header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white dark:bg-gray-800 shadow-md py-1 sm:py-2"
            : "bg-white dark:bg-gray-900 py-1 sm:py-2"
        }`}
      >
        <div className="w-full">
          <div className="flex justify-between items-center mx-[20px] lg:mx-[80px] 2xl:mx-[112px]">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src="/logo-1 (1).png"
                alt="Hi-Tech Membranes"
                className="h-8 w-auto sm:h-10 lg:h-12 transition-all duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center space-x-4 xl:space-x-8"
              style={{
                gap: "clamp(10px, 3vw, 40px)",
                fontWeight: '500',
                fontSize: 'clamp(16px, 1.2vw, 20px)',
                lineHeight: '100%'
              }}
            >
              <Link
                to="/about"
                className={`font-medium transition-colors hover:scale-105 transform duration-200 ${
                  isActive("/about")
                    ? "text-blue-600 dark:text-blue-400"
                    : isScrolled
                    ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    : "text-gray-800 dark:text-gray-200 hover:text-blue-600"
                }`}
              >
                {translatedAboutText}
              </Link>

              <Link
                to="/products"
                className={`font-medium transition-colors hover:scale-105 transform duration-200 ${
                  isActive("/products")
                    ? "text-blue-600 dark:text-blue-400"
                    : isScrolled
                    ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    : "text-gray-800 dark:text-gray-200 hover:text-blue-600"
                }`}
              >
                {translatedProductsText}
              </Link>

              <Link
                to="/innovation"
                className={`font-medium transition-colors hover:scale-105 transform duration-200 ${
                  isActive("/innovation")
                    ? "text-blue-600 dark:text-blue-400"
                    : isScrolled
                    ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    : "text-gray-800 dark:text-gray-200 hover:text-blue-600"
                }`}
              >
                {translatedInnovationText}
              </Link>

              <Link
                to="/ourimpact"
                className={`font-medium transition-colors hover:scale-105 transform duration-200 ${
                  isActive("/ourimpact")
                    ? "text-blue-600 dark:text-blue-400"
                    : isScrolled
                    ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    : "text-gray-800 dark:text-gray-200 hover:text-blue-600"
                }`}
              >
                {translatedOurImpactText}
              </Link>

              <Link
                to="/events"
                className={`font-medium transition-colors hover:scale-105 transform duration-200 ${
                  isActive("/events")
                    ? "text-blue-600 dark:text-blue-400"
                    : isScrolled
                    ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    : "text-gray-800 dark:text-gray-200 hover:text-blue-600"
                }`}
              >
                {translatedEventsText}
              </Link>
            </nav>

            {/* Right side controls */}
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
              {/* Desktop Language Selector */}
              <div className="hidden sm:block">
                <LanguageSelector />
              </div>

              {/* Mobile Compact Language Selector */}
              <div className="sm:hidden">
                <CompactLanguageSelector />
              </div>

              {/* Let's Talk Button */}
              <Link
                to="/contact"
                className="
                  px-2 py-1.5 sm:px-4 sm:py-2 lg:px-5 lg:py-2
                  rounded-md font-medium
                  text-[10px] sm:text-sm lg:text-base
                  bg-[#A8CF45] text-[#3D3E96]
                  shadow-lg
                  cursor-pointer
                  inline-flex items-center justify-center
                  transform-gpu
                  transition-transform duration-300 ease-out
                  hover:scale-110
                  whitespace-nowrap
                "
              >
                <span className="hidden sm:inline">{translatedRequestQuoteText}</span>
                <span className="sm:hidden">{translatedQuoteShortText}</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-1.5 rounded-md transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X
                    className={`w-5 h-5 sm:w-6 sm:h-6 ${
                      isScrolled ? "text-gray-900 dark:text-gray-100" : "text-gray-800 dark:text-gray-200"
                    }`}
                  />
                ) : (
                  <Menu
                    className={`w-5 h-5 sm:w-6 sm:h-6 ${
                      isScrolled ? "text-gray-900 dark:text-gray-100" : "text-gray-800 dark:text-gray-200"
                    }`}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
            onClick={closeMobileMenu}
          />

          {/* Mobile Menu */}
          <div className="lg:hidden bg-white dark:bg-gray-800 shadow-2xl fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <img
                src="/logo-1 (1).png"
                alt="Hi-Tech Membranes"
                className="h-8 w-auto"
              />
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Close mobile menu"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex flex-col p-4 space-y-2">
              <Link
                to="/about"
                className={`font-medium py-3 px-4 rounded-lg transition-all duration-200 ${
                  isActive("/about")
                    ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
                onClick={closeMobileMenu}
              >
                {translatedAboutText}
              </Link>

              <Link
                to="/products"
                className={`font-medium py-3 px-4 rounded-lg transition-all duration-200 ${
                  isActive("/products")
                    ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
                onClick={closeMobileMenu}
              >
                {translatedProductsText}
              </Link>

              <Link
                to="/innovation"
                className={`font-medium py-3 px-4 rounded-lg transition-all duration-200 ${
                  isActive("/innovation")
                    ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
                onClick={closeMobileMenu}
              >
                {translatedInnovationText}
              </Link>

              <Link
                to="/ourimpact"
                className={`font-medium py-3 px-4 rounded-lg transition-all duration-200 ${
                  isActive("/ourimpact")
                    ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
                onClick={closeMobileMenu}
              >
                {translatedOurImpactText}
              </Link>

              <Link
                to="/events"
                className={`font-medium py-3 px-4 rounded-lg transition-all duration-200 ${
                  isActive("/events")
                    ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
                onClick={closeMobileMenu}
              >
                {translatedEventsText}
              </Link>
            </nav>

            {/* Mobile Menu Footer */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
              {/* Language Selector for Mobile */}
              <div className="mb-4">
                <LanguageSelector />
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                onClick={closeMobileMenu}
              >
                {translatedRequestQuoteText}
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navigationLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/products", label: t("nav.products") },
    { path: "/services", label: t("nav.services") },
    { path: "/media-room", label: t("nav.mediaRoom") },
    { path: "/contact", label: t("nav.contact") }
  ];

  const getLinkClass = (path: string) => {
    const baseClass = "font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400";
    const activeClass = isActive(path) ? "text-blue-600 dark:text-blue-400" : "";
    const scrolledClass = isScrolled 
      ? "text-gray-700 dark:text-gray-300" 
      : "text-gray-800 dark:text-gray-200";
    
    return `${baseClass} ${activeClass || scrolledClass}`;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-lg py-3"
            : "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm py-4"
        }`}
        style={{ fontFamily: 'Diodrum Cyrillic, sans-serif' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src="/logo-1 (1).png"
                alt="Hi-Tech Membranes"
                className="h-10 sm:h-12 w-auto transition-all duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={getLinkClass(link.path)}
                  style={{ 
                    fontSize: '18px',
                    fontWeight: '500',
                    lineHeight: '1.2'
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Language Selector */}
              <div className="hidden sm:block">
                <LanguageSelector />
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${
                  isScrolled
                    ? "hover:bg-gray-100 dark:hover:bg-gray-700"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                )}
              </button>

              {/* CTA Button */}
              <Link
                to="/contact"
                className={`hidden md:block px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg font-medium transition-all duration-300 text-sm lg:text-base ${
                  isScrolled
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                    : "bg-[#A8CF45] text-[#3D3E96] hover:bg-[#96B83C] shadow-md"
                }`}
                style={{ fontFamily: 'Diodrum Cyrillic, sans-serif' }}
              >
                {t("cta.requestQuote")}
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div 
            className="lg:hidden bg-white dark:bg-gray-800 shadow-xl border-t border-gray-200 dark:border-gray-700"
            style={{ fontFamily: 'Diodrum Cyrillic, sans-serif' }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
              {/* Mobile Navigation Links */}
              <nav className="space-y-2 mb-6">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                      isActive(link.path)
                        ? "bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Language Selector */}
              <div className="mb-6 px-4">
                <LanguageSelector />
              </div>

              {/* Mobile CTA Button */}
              <div className="px-4">
                <Link
                  to="/contact"
                  className="block w-full py-3 px-6 bg-blue-600 text-white text-center font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("cta.requestQuote")}
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to prevent content from being hidden behind fixed header */}
      <div className="h-16 sm:h-20" />
    </>
  );
};

export default Header;
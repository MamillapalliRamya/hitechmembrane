import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Sun, Moon } from "lucide-react";
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-gray-800 shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/logo-1 (1).png"
              alt="Hi-Tech Membranes"
              className="h-12 w-auto"
            />
          </Link>

          {/* <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') 
                  ? isScrolled ? 'text-blue-600 dark:text-blue-400' : 'text-black' 
                  : isScrolled ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' : 'text-blue/80 hover:text-black'
              }`}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                isActive('/about') 
                  ? isScrolled ? 'text-blue-600 dark:text-blue-400' : 'text-black' 
                  : isScrolled ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' : 'text-blue/80 hover:text-black'
              }`}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to="/services" 
              className={`font-medium transition-colors ${
                isActive('/services') 
                  ? isScrolled ? 'text-blue-600 dark:text-blue-400' : 'text-black' 
                  : isScrolled ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' : 'text-blue/80 hover:text-black'
              }`}
            >
              {t('nav.services')}
            </Link>
            <Link 
              to="/products" 
              className={`font-medium transition-colors ${
                isActive('/products') 
                  ? isScrolled ? 'text-blue-600 dark:text-blue-400' : 'text-black' 
                  : isScrolled ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' : 'text-blue/80 hover:text-black'
              }`}
            >
              {t('nav.products')}
            </Link>
            <Link 
              to="/technical-hub" 
              className={`font-medium transition-colors ${
                isActive('/technical-hub') 
                  ? isScrolled ? 'text-blue-600 dark:text-blue-400' : 'text-black' 
                  : isScrolled ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' : 'text-blue/80 hover:text-black'
              }`}
            >
              {t('nav.technicalHub')}
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${
                isActive('/contact') 
                  ? isScrolled ? 'text-blue-600 dark:text-blue-400' : 'text-black' 
                  : isScrolled ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' : 'text-blue/80 hover:text-black'
              }`}
            >
              {t('nav.contact')}
            </Link>
          </nav> */}

          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive("/")
                  ? isScrolled
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-white"
                  : isScrolled
                  ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  : " hover:text-blue-600"
              }`}
            >
              {t("nav.home")}
            </Link>

            <Link
              to="/about"
              className={`font-medium transition-colors ${
                isActive("/about")
                  ? isScrolled
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-blue-600"
                  : isScrolled
                  ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  : " hover:text-blue-600"
              }`}
            >
              {t("nav.about")}
            </Link>

            <Link
              to="/services"
              className={`font-medium transition-colors ${
                isActive("/services")
                  ? isScrolled
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-blue-600"
                  : isScrolled
                  ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  : " hover:text-blue-600"
              }`}
            >
              {t("nav.services")}
            </Link>

            <Link
              to="/products"
              className={`font-medium transition-colors ${
                isActive("/products")
                  ? isScrolled
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-blue-600"
                  : isScrolled
                  ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  : " hover:text-blue-600"
              }`}
            >
              {t("nav.products")}
            </Link>

            <Link
              to="/technical-hub"
              className={`font-medium transition-colors ${
                isActive("/technical-hub")
                  ? isScrolled
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-blue-600"
                  : isScrolled
                  ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  : " hover:text-blue-600"
              }`}
            >
              {t("nav.technicalHub")}
            </Link>

            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                isActive("/contact")
                  ? isScrolled
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-black"
                  : isScrolled
                  ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  : " hover:text-blue-600"
              }`}
            >
              {t("nav.contact")}
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:+18001234567"
              className={`hidden md:flex items-center mr-6 ${
                isScrolled ? "text-gray-700 dark:text-gray-300" : "text-black"
              }`}
            >
              <Phone className="w-5 h-5 mr-2" />
              <span className="font-medium">1-800-123-4567</span>
            </a>

            <LanguageSelector />

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isScrolled
                  ? "hover:bg-gray-100 dark:hover:bg-gray-700"
                  : "hover:bg-black/10"
              }`}
            >
              {theme === "dark" ? (
                <Sun
                  className={`w-5 h-5 ${
                    isScrolled
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-black"
                  }`}
                />
              ) : (
                <Moon
                  className={`w-5 h-5 ${
                    isScrolled
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-black"
                  }`}
                />
              )}
            </button>

            <Link
              to="/contact"
              className={`hidden md:block px-5 py-2 rounded-md font-medium transition-colors ${
                isScrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-white text-blue-600 hover:bg-blue-50"
              }`}
            >
              {t("cta.requestQuote")}
            </Link>

            <button
              className="lg:hidden ml-4 p-1 rounded-md"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X
                  className={`w-6 h-6 ${
                    isScrolled ? "text-gray-900 dark:text-black" : "text-white"
                  }`}
                />
              ) : (
                <Menu
                  className={`w-6 h-6 ${
                    isScrolled ? "text-gray-900 dark:text-black" : "text-white"
                  }`}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-800 shadow-lg absolute top-full left-0 right-0 animate-fadeIn">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`font-medium py-2 px-4 rounded-md ${
                  isActive("/")
                    ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                    : "text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.home")}
              </Link>
              <Link
                to="/about"
                className={`font-medium py-2 px-4 rounded-md ${
                  isActive("/about")
                    ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                    : "text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.about")}
              </Link>
              <Link
                to="/services"
                className={`font-medium py-2 px-4 rounded-md ${
                  isActive("/services")
                    ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                    : "text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.services")}
              </Link>
              <Link
                to="/products"
                className={`font-medium py-2 px-4 rounded-md ${
                  isActive("/products")
                    ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                    : "text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.products")}
              </Link>
              <Link
                to="/technical-hub"
                className={`font-medium py-2 px-4 rounded-md ${
                  isActive("/technical-hub")
                    ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                    : "text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.technicalHub")}
              </Link>
              <Link
                to="/contact"
                className={`font-medium py-2 px-4 rounded-md ${
                  isActive("/contact")
                    ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                    : "text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.contact")}
              </Link>
            </nav>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <a
                href="tel:+18001234567"
                className="flex items-center mb-4 text-gray-700 dark:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                <span className="font-medium">1-800-123-4567</span>
              </a>

              <Link
                to="/contact"
                className="block w-full px-5 py-3 bg-blue-600 text-white text-center font-medium rounded-md hover:bg-blue-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("cta.requestQuote")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

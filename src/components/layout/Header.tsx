import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
// import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  // const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on window resize
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

  return (
    <>
      <header
        id="header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-white dark:bg-gray-800 shadow-md py-1 sm:py-2"
            : "bg-white dark:bg-gray-900 py-1 sm:py-2"
          }`}
      >
        <div className="w-full">
          <div className="flex justify-between items-center mx-[40px] lg:mx-[80px] 2xl:mx-[112px]">
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
                className={`font-medium transition-colors hover:scale-105 transform duration-200 ${isActive("/about")
                    ? "text-blue-600 dark:text-blue-400"
                    : isScrolled
                      ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      : "text-gray-800 dark:text-gray-200 hover:text-blue-600"
                  }`}
              >
                {t("nav.about")}
              </Link>

              <Link
                to="/products"
                className={`font-medium transition-colors hover:scale-105 transform duration-200 ${isActive("/products")
                    ? "text-blue-600 dark:text-blue-400"
                    : isScrolled
                      ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      : "text-gray-800 dark:text-gray-200 hover:text-blue-600"
                  }`}
              >
                {t("nav.products")}
              </Link>

              <Link
                to="/innovation"
                className={`font-medium transition-colors hover:scale-105 transform duration-200 ${isActive("/innovation")
                    ? "text-blue-600 dark:text-blue-400"
                    : isScrolled
                      ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      : "text-gray-800 dark:text-gray-200 hover:text-blue-600"
                  }`}
              >
                Innovation
              </Link>

              <Link
                to="/ourimpact"
                className={`font-medium transition-colors hover:scale-105 transform duration-200 ${isActive("/our-impact")
                    ? "text-blue-600 dark:text-blue-400"
                    : isScrolled
                      ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      : "text-gray-800 dark:text-gray-200 hover:text-blue-600"
                  }`}
              >
                Our Impact
              </Link>
              <Link
                to="/events"
                className={`font-medium transition-colors hover:scale-105 transform duration-200 ${isActive("/events")
                    ? "text-blue-600 dark:text-blue-400"
                    : isScrolled
                      ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      : "text-gray-800 dark:text-gray-200 hover:text-blue-600"
                  }`}
              >
                Events
              </Link>
            </nav>

            {/* Right side controls */}
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
              {/* Language Selector - Hidden on small screens */}
              <div className="hidden sm:block">
                <LanguageSelector />
              </div>

              

              
              <Link
                to="/contact"
                className={`hidden sm:block px-3 py-1.5 sm:px-4 sm:py-2 lg:px-5 lg:py-2 rounded-md font-medium transition-all duration-200 hover:scale-105 text-sm lg:text-base ${isScrolled
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                    : "bg-[#A8CF45] text-[#3D3E96] hover:bg-green-400 shadow-lg"
                  }`}
              >
                <span className="hidden lg:inline">{t("cta.requestQuote")}</span>
                <span className="lg:hidden">Quote</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-1.5 rounded-md transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X
                    className={`w-5 h-5 sm:w-6 sm:h-6 ${isScrolled ? "text-gray-900 dark:text-gray-100" : "text-gray-800 dark:text-gray-200"
                      }`}
                  />
                ) : (
                  <Menu
                    className={`w-5 h-5 sm:w-6 sm:h-6 ${isScrolled ? "text-gray-900 dark:text-gray-100" : "text-gray-800 dark:text-gray-200"
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
                className={`font-medium py-3 px-4 rounded-lg transition-all duration-200 ${isActive("/about")
                    ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                onClick={closeMobileMenu}
              >
                {t("nav.about")}
              </Link>

              <Link
                to="/products"
                className={`font-medium py-3 px-4 rounded-lg transition-all duration-200 ${isActive("/products")
                    ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                onClick={closeMobileMenu}
              >
                {t("nav.products")}
              </Link>

              <Link
                to="/innovation"
                className={`font-medium py-3 px-4 rounded-lg transition-all duration-200 ${isActive("/innovation")
                    ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                onClick={closeMobileMenu}
              >
                Innovation
              </Link>

              <Link
                to="/ourimpact"
                className={`font-medium py-3 px-4 rounded-lg transition-all duration-200 ${isActive("/our-impact")
                    ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                onClick={closeMobileMenu}
              >
                Our Impact
              </Link>
              <Link
                to="#"
                className={`font-medium py-3 px-4 rounded-lg transition-all duration-200 ${isActive("/events")
                    ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                onClick={closeMobileMenu}
              >
                Events
              </Link>
            </nav>

            {/* Mobile Menu Footer */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
              {/* Language Selector for Mobile */}
              <div className="mb-4">
                <LanguageSelector />
              </div>

              {/* Phone Number */}
              <a
                href="tel:+18001234567"
                className="flex items-center mb-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                <Phone className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400" />
                <span className="font-medium">1-800-123-4567</span>
              </a>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                onClick={closeMobileMenu}
              >
                {t("cta.requestQuote")}
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
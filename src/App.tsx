import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage.tsx';
import ProductsPage from './pages/ProductsPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import { ThemeProvider } from './context/ThemeContext';
import TestimonialsPage from './pages/Testimonials-ourimpact';
import EventsPage from './pages/EventsPage.tsx';
import Innovation from './pages/Innovation.tsx';

/* 🔹 Scroll to top on every route change */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' // change to 'smooth' if you want animation
    });
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();
  const hideFooter = location.pathname === '/contact';

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* this makes every navigation go to top */}
      <ScrollToTop />

      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/ourimpact" element={<TestimonialsPage />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {!hideFooter && <Footer />}
      {/* <ChatBot/> */}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage.tsx';
import ProductsPage from './pages/ProductsPage.tsx';
import TechnicalHubPage from './pages/TechnicalHubPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import ServicesPage from './pages/ServicesPage.tsx';
import ChatBot from './components/chat/ChatBot';
import { ThemeProvider } from './context/ThemeContext';

function AppContent() {
  const location = useLocation();
  const hideFooter = location.pathname === '/contact';
  

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          {/* <Route path="/products/residential-ro-membranes" element={<ResidentialProductsPage />} /> */}
          {/* <Route path="/products/commercial-ro-membranes" element={<CommercialProductsPage />} /> */}
          {/* <Route path="/products/industrial-ro-membranes" element={<IndustrialProductsPage />} /> */}
          {/* <Route path="/products/:id" element={<ProductDetailPage />} /> */}
          <Route path="/technical-hub" element={<TechnicalHubPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      {!hideFooter && <Footer />}
      {/* <ChatBot /> */}
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
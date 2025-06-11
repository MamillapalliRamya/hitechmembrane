import React from 'react';
import { Link } from 'react-router-dom';
import { Filter, Mail, Phone, MapPin, Linkedin, Twitter, Youtube, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
 <Link to="/" className="flex items-center">
            <img 
              src="/logo-1 (1).png" 
              alt="Hi-Tech Membranes" 
              className="h-12 w-auto"
            />
          </Link>              <span className="ml-2 text-xl font-bold">Hi-Tech Membranes</span>
            </div>
            <p className="text-gray-400 mb-6">
              Precision separation membranes for the most demanding industrial environments.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  1234 Membrane Drive<br />
                  Houston, TX 77001<br />
                  United States
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+18001234567" className="text-gray-300 hover:text-white">
                  1-800-123-4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:info@hitechmembranes.com" className="text-gray-300 hover:text-white">
                  info@hitechmembranes.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Products
                </Link>
              </li>
              <li>
                <Link to="/technical-hub" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Technical Hub
                </Link>
              </li>
              <li>
                <Link to="/applications" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Applications
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Product Lines */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Product Lines</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/ceramic" className="text-gray-400 hover:text-white transition-colors">
                  CeraFlow™ Ceramic Membranes
                </Link>
              </li>
              <li>
                <Link to="/products/pvdf" className="text-gray-400 hover:text-white transition-colors">
                  PolyPure™ PVDF Series
                </Link>
              </li>
              <li>
                <Link to="/products/hitemp" className="text-gray-400 hover:text-white transition-colors">
                  HiTemp™ Ceramic Series
                </Link>
              </li>
              <li>
                <Link to="/products/chemguard" className="text-gray-400 hover:text-white transition-colors">
                  ChemGuard™ Chemical Resistant Series
                </Link>
              </li>
              <li>
                <Link to="/products/modules" className="text-gray-400 hover:text-white transition-colors">
                  Membrane Modules & Housings
                </Link>
              </li>
              <li>
                <Link to="/products/custom" className="text-gray-400 hover:text-white transition-colors">
                  Custom Engineered Solutions
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for technical updates and industry insights.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 bg-gray-800 text-white rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Hi-Tech Membranes. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-500 hover:text-gray-300 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-gray-300 text-sm">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-500 hover:text-gray-300 text-sm">
                Sitemap
              </Link>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-600 text-center md:text-left">
            The information contained in this website is for general information purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or availability of the information.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
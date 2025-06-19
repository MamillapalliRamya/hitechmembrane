import React from 'react';
import { ArrowRight } from 'lucide-react';
import image1 from "../../../src/assets/images/wetransfer_hitech/Twittericon.png";
import image2 from "../../../src/assets/images/wetransfer_hitech/Facebookicon.png";
import image3 from "../../../src/assets/images/wetransfer_hitech/Instagramicon.png";
import image4  from "../../../src/assets/images/wetransfer_hitech/Youtubeicon.png";
const Footer = () => {
  const footerLinks = {
    'Useful Links': [
      'About Us',
      'Quality Policy',
      'FAQ',
      'Contact'
    ],
    'Products': [
      'Commercial RO Membranes',
      'Industrial RO Membranes'
    ],
    'Account Policy': [
      'Know Our Values',
      'Privacy Policy (GDPR)',
      'Terms and Conditions'
    ]
  };

  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className=" mx-auto" style={{ maxWidth: '95rem' }}>
        {/* Logo Section */}
        <div className="text-left mb-8">
          <div className="inline-block">
            <img 
              src="/logo-1 (1).png" 
              alt="Hi-Tech Logo" 
              className="h-12 mx-auto mb-2"
            />
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="text-center md:text-left">
              <h3 className="font-bold text-gray-900 mb-4 text-md tracking-wider">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

    
        <div className="text-center mb-8">
          <h4 className="font-bold text-gray-900 mb-4 text-md tracking-wider">
            Subscribe
          </h4>
          <div className="max-w-sm mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors">
                {/* <ArrowRight className="w-4 h-4" /> */}
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-600 mb-4 uppercase tracking-wider">
            Social Shared Icons
          </p>
          <p className="text-sm font-medium mb-4">Get in Touch</p>
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="hover:opacity-80 transition-opacity"
              aria-label="Twitter"
            >
              <img 
                src={image1} 
                alt="Twitter" 
                className="w-9 h-9"
              />
            </a>
            <a 
              href="#" 
              className="hover:opacity-80 transition-opacity"
              aria-label="Facebook"
            >
              <img 
                src={image2} 
                alt="Facebook" 
                className="w-9 h-9"
              />
            </a>
            <a 
              href="#" 
              className="hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <img 
                src={image3} 
                alt="Instagram" 
                className="w-9 h-9"
              />
            </a>
            <a 
              href="#" 
              className="hover:opacity-80 transition-opacity"
              aria-label="YouTube"
            >
              <img 
                src={image4} 
                alt="YouTube" 
                className="w-9 h-9"
              />
            </a>
          </div>
        </div>

        {/* Copyright */}
        {/* <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Hi-Tech Membranes. All rights reserved.
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
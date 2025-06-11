import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  'ES-2012-150', 'ES-1812-75', 'ES-2012-100',
  'ES-2012-50', 'ES-2012-80', 'RE-1812-50',
  'RE-1812-75', 'TFC-2012-80', 'RE-2012-100',
  'HRS-2012-80'
];

const ProductGrid: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((code, index) => (
        <motion.div
          key={code}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="h-48 bg-gray-100 flex items-center justify-center">
            <svg className="w-24 h-24 text-blue-200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">{code}</h3>
            {code === 'HRS-2012-80' && (
              <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full mb-4 inline-block">
                GPD
              </span>
            )}
            <Link 
              to={code === 'ES-2012-150' ? '/products/es-2012-150' : '#'} 
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductGrid;
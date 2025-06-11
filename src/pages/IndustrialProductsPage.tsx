import React from 'react';
import { motion } from 'framer-motion';

const IndustrialProductsPage: React.FC = () => {
  return (
    <div className="pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Industrial RO Membranes
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-blue-100 max-w-2xl"
          >
            Heavy-duty membranes for industrial process water and wastewater treatment
          </motion.p>
        </div>
      </motion.div>

      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
          <p className="text-gray-600">
            Our industrial RO membrane product information is being updated. 
            Please contact our sales team for detailed specifications and pricing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndustrialProductsPage;
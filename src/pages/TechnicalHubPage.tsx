import React from 'react';
import { motion } from 'framer-motion';
import TechnicalHubSection from '../components/home/TechnicalHubSection';
import { useInView } from 'react-intersection-observer';

const TechnicalHubPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-b from-gray-900 to-blue-900 text-white py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Technical Engineering Hub
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-blue-100 max-w-2xl"
          >
            Access comprehensive resources, smart tools, and expert knowledge for your membrane separation needs.
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <TechnicalHubSection />
      </motion.div>
    </div>
  );
};

export default TechnicalHubPage;
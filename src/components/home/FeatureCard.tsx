import React from "react";
import { motion } from "framer-motion";

const FeatureCard: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const hoverVariants = {
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      whileHover="hover"
      variants={hoverVariants}
      className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6 cursor-pointer"
    >
      <div className="flex flex-col md:flex-row items-center">
        {/* Left side - Icon/Image */}
        <motion.div
          variants={itemVariants}
          className="p-4 md:p-6 bg-blue-50 rounded-lg mb-4 md:mb-0 md:mr-6"
        >
          <svg
            className="h-12 w-12 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
        </motion.div>

        {/* Right side - Content */}
        <div className="flex-1">
          <motion.p
            variants={itemVariants}
            className="uppercase tracking-wide text-sm text-blue-500 font-semibold"
          >
            Top agencies and freelancers around the world use Client-first
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="mt-2 text-2xl font-bold text-gray-800"
          >
            FREE REVISION ROUNDS
          </motion.h2>

          <motion.p variants={itemVariants} className="mt-2 text-gray-600">
            Get free Revisions and one week of free maintenance
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;

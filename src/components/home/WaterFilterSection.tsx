import React from 'react';
import { motion } from 'framer-motion';

// Animation helper
const fadeInFrom = (direction: 'left' | 'right' | 'up' | 'down', delay = 0) => {
  let x = 0, y = 0;
  if (direction === 'left') x = -100;
  if (direction === 'right') x = 100;
  if (direction === 'up') y = 100;
  if (direction === 'down') y = -100;

  return {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, delay },
    },
  };
};

const WhyChooseMembranes = () => {
  const productStrengths = [
    "Fully Automated Robotic Plant",
    "No Human Touch",
    "Well Engineered",
    "High Quality",
    "High Salt Rejection",
    "Low Energy",
    "High Treated Water Recovery",
    "High Durability"
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.2 }}
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto" style={{ maxWidth: "95rem" }}>
        {/* Title */}
        <motion.div variants={fadeInFrom('up')} className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-indigo-700 leading-tight">
            Why To Choose Our Water Filter Membranes?
          </h1>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div variants={fadeInFrom('left')} className="space-y-8">
            <motion.p
              variants={fadeInFrom('left', 0.1)}
              className="text-gray-700 leading-relaxed text-base"
            >
              Hi-Tech is given ISO 9001:2008, 14001-2004, 18001-2007 certification for its quality
              management system by KVQA. Being a member of Water Quality Association of USA
              since 1993 and Indian Water Works Association since 1999, the company has started
              its work-frame value with Quality, Credibility, and Efficient Teamwork. Our association
              with the USA and Japan-based water treatment companies for procurement of
              components and designs of best RO Water Purification System makes us apply the
              membrane technology to develop our products in a better way. We are well-known
              water filter dealer Thailand for its skilled team and well-engineered product
              activities.
            </motion.p>

            <motion.div variants={fadeInFrom('left', 0.2)}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Our Product Strengths:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                {productStrengths.map((strength, index) => (
                  <motion.div
                    variants={fadeInFrom('left', 0.3 + index * 0.05)}
                    key={index}
                    className="flex items-start"
                  >
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm font-medium">{strength}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInFrom('left', 0.6)} className="pt-4">
              <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 px-8 rounded-md shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105">
                Read More
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div variants={fadeInFrom('right', 0.3)} className="lg:pl-8">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="hitech-water-filter-membranes.png"
                alt="Water Filter Membranes and RO Systems"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-100/20 to-transparent rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default WhyChooseMembranes;

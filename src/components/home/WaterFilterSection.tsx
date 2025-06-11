import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WaterFilterSection = () => {
  // Page refresh handling
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    if (window.location.hash === "") {
      window.scrollTo(0, 0);
    }
  }, []);

  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cardHover = {
    scale: 1.03,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  };

  const blueCardHover = {
    scale: 1.03,
    boxShadow:
      "0 20px 25px -5px rgba(30, 58, 138, 0.3), 0 10px 10px -5px rgba(30, 58, 138, 0.1)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            WHY CHOOSE OUR WATER FILTER MEMBRANES?
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Hi-Tech is certified with ISO 9001:2008, 14001-2004, 18001-2007 for
            quality management by KVQA. As a member of Water Quality Association
            (USA) since 1993 and Indian Water Works Association since 1999, we
            operate with values of Quality, Credibility, and Efficient Teamwork.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Content */}
          <div>
            <motion.div
              variants={itemVariants}
              whileHover={cardHover}
              className="bg-white p-8 rounded-xl shadow-lg mb-8 border-l-4 border-blue-600 hover:border-blue-700 transition-all duration-300 cursor-pointer"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Global Partnerships
              </h2>
              <p className="text-gray-600">
                Our collaboration with USA and Japan-based water treatment
                companies for components and RO system designs enables us to
                apply advanced membrane technology to develop superior products.
              </p>
              <div className="mt-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  Learn more →
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={cardHover}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600 hover:border-blue-700 transition-all duration-300 cursor-pointer"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                International Recognition
              </h2>
              <p className="text-gray-600">
                We're a well-known water filter provider in Thailand with a
                skilled team and well-engineered products distributed worldwide.
              </p>
              <div className="mt-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  Learn more →
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Product Strengths */}
          <motion.div
            variants={itemVariants}
            whileHover={blueCardHover}
            className="bg-blue-800 text-white p-8 rounded-xl shadow-xl hover:bg-blue-900 transition-all duration-300 cursor-pointer"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              Our Product Strengths
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Fully Automated Robotic Plant",
                "Low Energy Consumption",
                "High Treated Water Recovery",
                "No Human Touch Process",
                "Well Engineered Design",
                "Higher Durability",
                "High Salt Rejection",
                "Premium Quality Materials",
                "Cost-Effective Solutions",
              ].map((strength, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start bg-blue-700 bg-opacity-50 p-3 rounded-lg hover:bg-opacity-70 transition-all"
                >
                  <svg
                    className="h-5 w-5 text-blue-300 mt-1 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-blue-100">{strength}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
          whileHover={{ scale: 1.05 }}
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl">
            Read More
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WaterFilterSection;

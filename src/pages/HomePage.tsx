import React from "react";
import { motion } from "framer-motion";
import AboutUsSection from "../components/home/BrandSection";
import HeroSection from "../components/home/HeroSection";
import AwardsSection from "../components/home/AwardsSection";
import GlobalPresenceSection from "../components/home/GlobalPresence";
import WaterDropSection from "../components/home/WaterDropsSection";
import WaterSolutionsSection from "../components/home/WaterSection";
import EventsSection from "../components/home/EventsSection";

const HomePage: React.FC = () => {
  // All sections in order
  const allSections = [
    { id: "water-drop", component: <WaterDropSection /> },
    { id: "hero", component: <HeroSection /> },
    { id: "about", component: <AboutUsSection /> },
    { id: "water-solutions", component: <WaterSolutionsSection /> },
    { id: "events", component: <EventsSection /> },
    { id: "awards", component: <AwardsSection /> },
    { id: "global-presence", component: <GlobalPresenceSection /> },
  ];

  // Simple fade-in animation for sections
  const sectionAnimation = {
    initial: { 
      opacity: 0, 
      y: 50 
    },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div className="w-full pt-20" >
      {/* All sections with smooth entrance animations */}
      {allSections.map((section, index) => (
        <motion.section
          key={section.id}
          id={section.id}
          className={`w-full relative ${
            section.id === "hero"
              ? "bg-gradient-to-r from-gray-800 to-gray-600 text-white"
              : "bg-white"
          }`}
          style={{
            // minHeight: index < 1 ? '100vh' : 'auto', 
            margin: 0,
            padding: 0
          }}
          variants={sectionAnimation}
          initial="initial"
          whileInView="whileInView"
          viewport={{ 
            once: true, 
            margin: "-10%" 
          }}
        >
          {/* Background gradient overlay for specific sections */}
          {(section.id === "water-drop" || section.id === "hero" || section.id === "about") && (
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              <div className={`absolute inset-0 w-full h-full ${
                section.id === "water-drop" 
                  ? "bg-gradient-to-br from-blue-50/20 to-cyan-50/20"
                  : section.id === "hero"
                  ? "bg-gradient-to-br from-black/5 to-transparent"
                  : "bg-gradient-to-br from-gray-50/20 to-white/20"
              }`} />
            </div>
          )}

          {/* Section content */}
          <div className="w-full h-full relative z-10">
            {section.component}
          </div>
        </motion.section>
      ))}
    </div>
  );
};

export default HomePage;
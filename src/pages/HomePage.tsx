import React, { useState } from "react";
import { motion } from "framer-motion";

import WaterDropSection from "../components/home/WaterDropsSection";
import HeroSection from "../components/home/HeroSection";
import AboutUsSection from "../components/home/BrandSection";
import EventsSection from "../components/home/EventsSection";
import WhyChooseUs from "../components/home/WhyChooseUsSection";
import Applications from "../components/home/ApplicationSection";
import AwardsSection from "../components/home/AwardsSection";
import GlobalPresenceSection from "../components/home/GlobalPresence";

const HomePage: React.FC = () => {
  const [introDone, setIntroDone] = useState(false);

  const sections = [
    <HeroSection />,
    <AboutUsSection />,
    <EventsSection />,
    <WhyChooseUs />,
    <Applications />,
    <AwardsSection />,
    <GlobalPresenceSection />,
  ];

  return (
    <>
      {/* Intro */}
      {!introDone && (
        <WaterDropSection onComplete={() => setIntroDone(true)} />
      )}

      {/* Main content */}
      {introDone && (
        <div className="w-full pt-16">
          {sections.map((Section, i) => (
            <motion.section
              key={i}
              className="w-full bg-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {Section}
            </motion.section>
          ))}
        </div>
      )}
    </>
  );
};

export default HomePage;

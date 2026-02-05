import React, { useState, useEffect } from "react";
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
  useEffect(() => {
  const handleBeforeUnload = () => {
    sessionStorage.removeItem("introPlayed"); // clear ONLY on real refresh/close
  };

  window.addEventListener("beforeunload", handleBeforeUnload);

  return () => {
    window.removeEventListener("beforeunload", handleBeforeUnload);
  };
}, []);


  const [introDone, setIntroDone] = useState(
    () => sessionStorage.getItem("introPlayed") === "true"
  );

  const handleIntroComplete = () => {
    setIntroDone(true);
    sessionStorage.setItem("introPlayed", "true");
  };

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
      {!introDone && (
        <WaterDropSection onComplete={handleIntroComplete} />
      )}

      {introDone && (
        <div className="w-full">
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

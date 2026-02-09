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

  const [homepageData, setHomepageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCMS = async () => {
      try {
        const res = await fetch("http://65.0.77.32:8000/api/homepage/");
        const data = await res.json();
        console.log("Homepage CMS:", data);

        // Store the entire response, not just data.homepage
        setHomepageData(data);
      } catch (error) {
        console.error("CMS Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCMS();
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
    <EventsSection homepage={homepageData?.homepage} />,
    <WhyChooseUs homepage={homepageData?.homepage} why_choose_us={homepageData?.why_choose_us} />,
    <Applications />,
    <AwardsSection 
      homepage={homepageData?.homepage} 
      awards={homepageData?.awards} 
      certificates={homepageData?.certificates} 
    />,
    <GlobalPresenceSection homepage={homepageData?.homepage} />,
  ];

  return (
    <>
      {!introDone && (
        <WaterDropSection onComplete={handleIntroComplete} />
      )}

      {introDone && !loading && (
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
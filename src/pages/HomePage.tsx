import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import AboutUsSection from "../components/home/BrandSection";
import HeroSection from "../components/home/HeroSection";
import AwardsSection from "../components/home/AwardsSection";
import GlobalPresenceSection from "../components/home/GlobalPresence";
import WaterDropSection from "../components/home/WaterDropsSection";
import WaterSolutionsSection from "../components/home/WaterSection";
import EventsSection from "../components/home/EventsSection";

const HomePage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(true);
  const isScrollingRef = useRef(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const lastScrollTime = useRef(0);

  const autoScrollSections = [
    { id: "water-drop", component: <WaterDropSection /> },
    { id: "hero", component: <HeroSection /> },
    { id: "about", component: <AboutUsSection /> },
  ];

  const regularSections = [
    <WaterSolutionsSection />,
    <EventsSection />,
    <AwardsSection />,
    <GlobalPresenceSection />,
  ];

  const scrollToSection = (index: number) => {
    const target = sectionRefs.current[index];
    if (target) {
      isScrollingRef.current = true;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => (isScrollingRef.current = false), 800);
    }
  };

  const handleScroll = useCallback(
    (direction: "up" | "down") => {
      if (isScrollingRef.current || !isAutoScrollEnabled) return;

      const nextIndex = direction === "down" ? currentSection + 1 : currentSection - 1;

      if (nextIndex >= 0 && nextIndex < autoScrollSections.length) {
        setCurrentSection(nextIndex);
        scrollToSection(nextIndex);
      } else if (direction === "down" && nextIndex === autoScrollSections.length) {
        setIsAutoScrollEnabled(false);
        isScrollingRef.current = true;
        window.scrollTo({
          top: window.innerHeight * autoScrollSections.length,
          behavior: "smooth",
        });
        setTimeout(() => (isScrollingRef.current = false), 800);
      }
    },
    [currentSection, isAutoScrollEnabled, autoScrollSections.length]
  );

  const wheelHandler = useCallback(
    (e: WheelEvent) => {
      if (!isAutoScrollEnabled) return;

      const now = Date.now();
      if (now - lastScrollTime.current < 800) {
        e.preventDefault();
        return;
      }
      lastScrollTime.current = now;
      e.preventDefault();
      
      handleScroll(e.deltaY > 0 ? "down" : "up");
    },
    [handleScroll, isAutoScrollEnabled]
  );

  const handleTouch = useCallback(() => {
    const touchStartY = useRef<number>(0);

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isAutoScrollEnabled) return;

      const deltaY = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(deltaY) < 60) return;

      const now = Date.now();
      if (now - lastScrollTime.current < 800) return;
      lastScrollTime.current = now;

      handleScroll(deltaY > 0 ? "down" : "up");
    };

    return { handleTouchStart, handleTouchEnd };
  }, [handleScroll, isAutoScrollEnabled]);

  const { handleTouchStart, handleTouchEnd } = handleTouch();

  // Handle scroll detection for auto-scroll mode toggle
  useEffect(() => {
    const onScroll = () => {
      if (isScrollingRef.current) return;

      const scrollY = window.scrollY;
      const maxHeight = window.innerHeight * autoScrollSections.length;

      if (scrollY < maxHeight - 50 && !isAutoScrollEnabled) {
        setIsAutoScrollEnabled(true);
        setCurrentSection(Math.floor(scrollY / window.innerHeight));
      }

      if (scrollY >= maxHeight && isAutoScrollEnabled) {
        setIsAutoScrollEnabled(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isAutoScrollEnabled, autoScrollSections.length]);

  // Handle wheel and touch events
  useEffect(() => {
    document.addEventListener("wheel", wheelHandler, { passive: false });
    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener("wheel", wheelHandler);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [wheelHandler, handleTouchStart, handleTouchEnd]);

  return (
    <div className="w-full overflow-x-hidden overflow-y-hidden">
      {/* Auto-scroll sections */}
      {autoScrollSections.map((section, index) => (
        <motion.section
          key={section.id}
          ref={(el) => (sectionRefs.current[index] = el)}
          className={`w-full min-h-screen flex items-center justify-center ${
            section.id === "hero"
              ? "bg-gradient-to-r from-gray-800 to-gray-600 text-white"
              : "bg-white"
          }`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentSection === index ? 1 : 0.8,
            scale: currentSection === index ? 1 : 0.98,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className="w-full h-full"
            animate={{
              y: currentSection === index ? 0 : 10,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {section.component}
          </motion.div>
        </motion.section>
      ))}

      {/* Regular scroll sections */}
      {regularSections.map((section, index) => (
        <motion.div
          key={`regular-${index}`}
          className="min-h-screen w-full bg-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {section}
        </motion.div>
      ))}
    </div>
  );
};

export default HomePage;
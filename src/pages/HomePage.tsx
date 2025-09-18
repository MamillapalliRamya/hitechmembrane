import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  // Enhanced animation variants for first three sections only
  const sectionVariants = {
    initial: { 
      opacity: 0,
      scale: 0.95,
      y: 30,
      filter: "blur(8px)"
    },
    active: { 
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
        staggerChildren: 0.1
      }
    },
    inactive: { 
      opacity: 0.7,
      scale: 0.98,
      y: 10,
      filter: "blur(2px)",
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: -20,
      filter: "blur(4px)",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  // Content wrapper animation
  const contentVariants = {
    initial: { 
      opacity: 0,
      y: 40,
      scale: 0.95
    },
    active: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: 0.2,
        ease: [0.215, 0.61, 0.355, 1]
      }
    },
    inactive: {
      opacity: 0.8,
      y: 15,
      scale: 0.98,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Background animation for sections
  const backgroundVariants = {
    initial: { 
      opacity: 0,
      scale: 1.1
    },
    active: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    },
    inactive: {
      opacity: 0.9,
      scale: 1.02,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

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
      {/* Auto-scroll sections with enhanced animations */}
      <AnimatePresence mode="wait">
        {autoScrollSections.map((section, index) => (
          <motion.section
            key={section.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className={`w-full min-h-screen flex items-center justify-center relative ${
              section.id === "hero"
                ? "bg-gradient-to-r from-gray-800 to-gray-600 text-white"
                : "bg-white"
            }`}
            variants={sectionVariants}
            initial="initial"
            animate={currentSection === index ? "active" : "inactive"}
            exit="exit"
          >
            {/* Background animation layer */}
            <motion.div
              className="absolute inset-0 -z-10"
              variants={backgroundVariants}
              initial="initial"
              animate={currentSection === index ? "active" : "inactive"}
            >
              {/* Subtle gradient overlay for depth */}
              <div className={`absolute inset-0 ${
                section.id === "water-drop" 
                  ? "bg-gradient-to-br from-blue-50/30 to-cyan-50/30"
                  : section.id === "hero"
                  ? "bg-gradient-to-br from-black/10 to-transparent"
                  : "bg-gradient-to-br from-gray-50/30 to-white/30"
              }`} />
            </motion.div>

            {/* Content wrapper with stagger animation */}
            <motion.div
              className="w-full h-full relative z-10"
              variants={contentVariants}
              initial="initial"
              animate={currentSection === index ? "active" : "inactive"}
            >
              {/* Floating animation for active section */}
              <motion.div
                className="w-full h-full"
                animate={currentSection === index ? {
                  y: [0, -3, 0],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                } : {}}
              >
                {section.component}
              </motion.div>
            </motion.div>

            {/* Section indicator dots */}
            <motion.div
              className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="flex flex-col space-y-3">
                {autoScrollSections.map((_, dotIndex) => (
                  <motion.div
                    key={dotIndex}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSection === dotIndex 
                        ? "bg-blue-600 w-3 h-3" 
                        : "bg-gray-400"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => {
                      setCurrentSection(dotIndex);
                      scrollToSection(dotIndex);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.section>
        ))}
      </AnimatePresence>

      {/* Regular scroll sections with simple entrance animations (no blur) */}
      {regularSections.map((section, index) => (
        <motion.div
          key={`regular-${index}`}
          className="min-h-screen w-full bg-white relative overflow-hidden"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.8,
              delay: index * 0.15,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }}
          viewport={{ once: true, margin: "-15%" }}
        >
          {/* Simple entrance animation for content - no blur effect */}
          <motion.div
            className="w-full h-full"
            initial={{ scale: 0.95 }}
            whileInView={{ 
              scale: 1,
              transition: {
                duration: 1,
                delay: index * 0.1 + 0.3,
                ease: "easeOut"
              }
            }}
            viewport={{ once: true, margin: "-10%" }}
          >
            {section}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default HomePage;
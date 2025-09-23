import React from "react";
import { motion } from "framer-motion";
import {
  Factory,
  Globe,
  Shield,
  Droplet,
  Building,
  Home,
  FlaskRound as Flask,
} from "lucide-react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import AboutUsSection from "../components/home/BrandSection";
import HeroSection from "../components/home/HeroSection";
import AwardsSection from "../components/home/AwardsSection";
import GlobalPresenceSection from "../components/home/GlobalPresence";
import WaterDropSection from "../components/home/WaterDropsSection";
import WaterSolutionsSection from "../components/home/WaterSection";
import EventsSection from "../components/home/EventsSection";

const fadeInFrom = (direction: 'left' | 'right', delay = 0) => {
  const x = direction === 'left' ? -100 : 100;
  return {
    initial: { opacity: 0, x },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, delay },
    viewport: { once: true },
  };
};

const HomePage: React.FC = () => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="YOUR_RECAPTCHA_KEY">
      <div className="w-full">
        <WaterDropSection />
        {/* <section
          id="hero-section"  // ADD THIS ID
          className="relative h-screen max-h-[800px] bg-gradient-to-r from-gray-800 to-gray-600 text-white overflow-hidden"
        >
          <HeroSection />
        </section> */}
        <HeroSection />

        {/* Brand Section */}
        <section id="about-section" className="bg-white">
        <AboutUsSection />
      </section>

        <WaterSolutionsSection />

        <EventsSection />



        <AwardsSection />
        <GlobalPresenceSection />

        {/* <WaterFilterSection />

        <ProductsPage1 />

        <GroupCompanies /> */}

      </div>
    </GoogleReCaptchaProvider>
  );
};

export default HomePage;

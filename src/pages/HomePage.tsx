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
import IndustriesOverview from "../components/industries/industriesOverview";
import BrandSection from "../components/home/BrandSection";
import HeadingSection from "../components/home/HeadingSection";
import GroupCompanies from "../components/home/GroupCompanies";
import WaterFilterSection from "../components/home/WaterFilterSection";
import ProductsPage1 from "../components/home/ProductsPage1";
import HeroSection from "../components/home/HeroSection";
import AwardsSection from "../components/home/AwardsSection";
import GlobalPresenceSection from "../components/home/GlobalPresence";

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
  const industries = [
    { title: "Household", description: "Low-pressure POU RO systems (50/75/100 GPD)", icon: <Home className="w-6 h-6" /> },
    { title: "Municipal", description: "Approved for global tender processes", icon: <Building className="w-6 h-6" /> },
    { title: "Healthcare", description: "Ultra-pure water for dialysis (XLE Series)", icon: <Flask className="w-6 h-6" /> },
    { title: "Textile", description: "High-temp CP Series (4040/8040)", icon: <Factory className="w-6 h-6" /> },
    { title: "Food & Beverage", description: "Specialty elements for bottling & processing", icon: <Droplet className="w-6 h-6" /> },
    { title: "Commercial", description: "ES Series: Low-energy, high-flux (150-400 GPD)", icon: <Building className="w-6 h-6" /> },
  ];

  const strengths = [
    { icon: <Shield className="w-8 h-8" />, title: "Certified Excellence", description: "ISO 9001, 14001, 18001 | Member of WQA (USA) & Indian Water Works Association" },
    { icon: <Factory className="w-8 h-8" />, title: "Cutting-Edge Manufacturing", description: "Fully automated robotic plant ensures zero defects, high salt rejection, and low energy use" },
    { icon: <Globe className="w-8 h-8" />, title: "Global Partnerships", description: "Collaborations with USA/Japan for advanced membrane tech" },
  ];

  return (
    <GoogleReCaptchaProvider reCaptchaKey="YOUR_RECAPTCHA_KEY">
      <div className="w-full">
        <section className="relative h-screen max-h-[800px] bg-gradient-to-r from-gray-800 to-gray-600 text-white overflow-hidden">
          <HeroSection />
        </section>

        {/* Brand Section */}
        <motion.div {...fadeInFrom('left')}><BrandSection /></motion.div>

        {/* Heading Section */}
        {/* <motion.div {...fadeInFrom('right', 0.2)}> */}
        <HeadingSection />
        {/* </motion.div> */}


       
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

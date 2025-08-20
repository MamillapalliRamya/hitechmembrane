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
import AboutUsSection from "../components/home/BrandSection";
// import HeadingSection from "../components/home/HeadingSection";
import GroupCompanies from "../components/home/GroupCompanies";
import WaterFilterSection from "../components/home/WaterFilterSection";
import ProductsPage1 from "../components/home/ProductsPage1";
import HeroSection from "../components/home/HeroSection";
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
          <WaterDropSection />
        <section className="relative h-screen max-h-[800px] bg-gradient-to-r from-gray-800 to-gray-600 text-white overflow-hidden">
          <HeroSection />
        </section>

        {/* Brand Section */}
        <motion.div {...fadeInFrom('left')}><AboutUsSection /></motion.div>

        <WaterSolutionsSection/>

        <EventsSection/>


        {/* Awards Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.3, delayChildren: 0.2 },
            },
          }}
          className="py-16 bg-white"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {/* Heading zoom from small to large */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-[40px] leading-tight tracking-[1px] font-semibold text-black mb-2">
                Award-Winning Excellence
              </h2>
              <p className="text-[20.9px] text-gray-600">
                Recognized globally for our innovative membrane technology
              </p>
            </motion.div>

            {/* Award cards - slide from bottom at same time */}
            <div className="grid md:grid-cols-2 gap-10">
              {[1, 2].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                  viewport={{ once: true }}
                  className="bg-blue-50 pt-4 pr-8 pb-8 pl-8 rounded-[4px] w-full h-[307px] flex flex-col items-center"
                >
                  <img
                    src={i === 0 ? "/assets/images/award1.png" : "/assets/images/award2.png"}
                    alt={i === 0 ? "The Water Digest" : "Best Membrane Tech Award"}
                    className={i === 0 ? "w-[198px] h-[196px]" : "w-[154px] h-[188px] scale-90"}
                  />
                  <h3 className="text-xl font-bold mb-2 mt-2">
                    {i === 0 ? "The Water Digest" : "Best Membrane Technology Award"}
                  </h3>
                  <p className="text-gray-600">
                    {i === 0 ? "Best Membrane (2014–2016)" : "Dubai 2015"}
                  </p>
                  <p className="text-sm text-blue-600 mt-3">
                    {i === 0 ? "UNESCO-supported" : "Industry Excellence"}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>


        {/* Industries Section */}
        <motion.div {...fadeInFrom('left')}><IndustriesOverview /></motion.div>

        {/* Products Section */}
        {/* <motion.div {...fadeInFrom('right', 0.3)}> */}
        <ProductsPage1 />
        {/* </motion.div> */}

        {/* Water Filter Section */}
        {/* <motion.div {...fadeInFrom('left', 0.2)}> */}
          <WaterFilterSection />
          {/* </motion.div> */}

        {/* Group Companies Section */}
        {/* <motion.div {...fadeInFrom('right', 0.4)}> */}
        <GroupCompanies />
        {/* </motion.div> */}

      </div>
    </GoogleReCaptchaProvider>
  );
};

export default HomePage;

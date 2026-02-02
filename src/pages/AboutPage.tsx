import React from 'react';
import AboutHeroSection from '../components/about/AboutHeroSection';
import AboutOurStory from '../components/about/AboutOurStory';
import AboutRevolutionary from '../components/about/AboutRevolutionary';
import AboutWaterPowers from '../components/about/AboutWaterPowers';
import AboutCertifications from '../components/about/AboutCertifications';
import AboutAwards from '../components/about/AboutAwards';
import AboutExploreProducts from '../components/about/AboutExploreProducts';
import AboutOurClients from '../components/about/AboutOurClients';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero Section with Image Gallery */}
      <AboutHeroSection />

      {/* Our Story / Mission Section */}
      <AboutOurStory />

      {/* Revolutionary Water Treatment Section */}
      <AboutRevolutionary />

      {/* Water Powers Every Industry Section with Stats */}
      <AboutWaterPowers />

      {/* Awards & Recognition Section */}
      <AboutAwards />

       {/* Certifications Section */}
      <AboutCertifications />

      {/* Explore Products Section */}
      <AboutExploreProducts />

      {/* Our Clients Section */}
      <AboutOurClients />
       {/* <p className="text-center text-[#58585B] text-[16px] md:text-[16px] font-medium max-w-3xl mx-auto bg-[#F5F5F5] ">
          “At Hi-Tech Membranes, technology, responsibility, and reliability come together to support a cleaner water future.”
      </p> */}
    <div
  className="w-full bg-white py-12 sm:py-14 md:py-16 
             px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40"
  style={{
    backgroundImage: "url('/assets/images/about/above footer.svg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
    backgroundSize: "auto 60%", // mobile default
  }}
>
  <p className="text-center text-[#3E4095] 
                text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                font-medium mx-auto max-w-4xl leading-relaxed">
    At Hi-Tech Membranes, technology, responsibility, and reliability come together to support a cleaner water future.
  </p>

  <style>{`
    @media (min-width: 768px) {
      div[style*="above footer.svg"] {
        background-size: auto 75%;
      }
    }
    @media (min-width: 1280px) {
      div[style*="above footer.svg"] {
        background-size: auto 80%;
      }
    }
  `}</style>
</div>


    </div>
  );
};

export default AboutPage;
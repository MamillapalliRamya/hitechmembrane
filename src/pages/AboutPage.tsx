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
     <div className="w-full bg-[#F5F5F5] p-4">
      <p className="text-center text-gray-600 text-[16px] md:text-[16px] font-medium max-w-3xl mx-auto">
        “At Hi-Tech Membranes, technology, responsibility, and reliability come together to support a cleaner water future.”
      </p>
    </div>

    </div>
  );
};

export default AboutPage;
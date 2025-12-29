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
    </div>
  );
};

export default AboutPage;
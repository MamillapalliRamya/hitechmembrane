import React, { useState, useEffect } from "react";
import AboutHeroSection from "../components/about/AboutHeroSection";
import AboutOurStory from "../components/about/AboutOurStory";
import AboutRevolutionary from "../components/about/AboutRevolutionary";
import AboutWaterPowers from "../components/about/AboutWaterPowers";
import AboutAwards from "../components/about/AboutAwards";
import AboutCertifications from "../components/about/AboutCertifications";
import AboutExploreProducts from "../components/about/AboutExploreProducts";
import AboutOurClients from "../components/about/AboutOurClients";
import { apiService, AboutPageData } from "../services/api";

const AboutPage: React.FC = () => {
  const [aboutData, setAboutData] = useState<AboutPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCMS = async () => {
      try {
        const data = await apiService.getAboutPageData();
        console.log("About CMS:", data);
        setAboutData(data);
      } catch (error) {
        console.error("CMS Error:", error);
        setError("Failed to load about page data");
      } finally {
        setLoading(false);
      }
    };

    fetchCMS();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <AboutHeroSection 
        about_hero={aboutData?.about_hero}
        about_hero_images={aboutData?.about_hero_images}
      />

      {/* Our Story Section */}
      <AboutOurStory 
        our_story={aboutData?.our_story}
      />

      {/* Revolutionary Section */}
      <AboutRevolutionary 
        revolutionary={aboutData?.revolutionary}
      />

      {/* Water Powers Section */}
      <AboutWaterPowers 
        water_powers={aboutData?.water_powers}
        water_impact_cards={aboutData?.water_impact_cards}
      />

      {/* Awards Section */}
      <AboutAwards 
        awards_section={aboutData?.awards_section}
        awards={aboutData?.awards}
      />

      {/* Certifications Section */}
      <AboutCertifications 
        certifications_section={aboutData?.certifications_section}
        certificates={aboutData?.certificates}
      />

      {/* Explore Products Section */}
      <AboutExploreProducts 
        explore_products_section={aboutData?.explore_products_section}
        explore_products={aboutData?.explore_products}
      />

      {/* Our Clients Section */}
      <AboutOurClients 
        our_clients={aboutData?.our_clients}
        client_logos={aboutData?.client_logos}
      />

      {/* Bottom Quote (from about_page) */}
      {aboutData?.about_page && aboutData.about_page.length > 0 && aboutData.about_page[0].bottom_quote && (
        <section className="py-12 bg-white">
          <div className="max-w-[980px] mx-auto text-center px-4">
            <p className="text-[18px] md:text-[22px] lg:text-[28px] font-medium text-[#3D3E96] leading-relaxed italic">
              "{aboutData.about_page[0].bottom_quote}"
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default AboutPage;
import React, { useEffect, useState } from 'react';
import TestimonialsHero from '../components/ourimpact-testimonialscomponents/ourimpactHerocomponent';
import GlobalVoicesOfTrust from '../components/ourimpact-testimonialscomponents/Globalvoicesoftrust';
import GlobalPresenceSection from '../components/home/GlobalPresence';
import JoinPartnersSection from '../components/ourimpact-testimonialscomponents/joinpartnerssection';

interface JoinPartnersSection {
  heading?: string;
  button_text?: string;
  button_link?: string;
  logo?: string | null;
  global_presence_title?: string;
  global_presence_description?: string;
}

interface OurImpactCMS {
  join_partners_section?: JoinPartnersSection;
}

const FALLBACK_TITLE = "Serving Customer in 25678+ Countries";
const FALLBACK_DESCRIPTION =
  "Hi-Tech has successfully maintained its global presence thanks to a robust network of skilled associates. By prioritizing customer interests, the company continually adapts its work methodology to achieve outstanding results. With competitive pricing, efficient resource management, and a commitment to fulfilling promises, Hi-Tech has garnered accolades not just from clients but also from esteemed authorities across.";

const TestimonialsPage: React.FC = () => {
  const [cmsData, setCmsData] = useState<OurImpactCMS | null>(null);

  useEffect(() => {
    const fetchCMSData = async () => {
      try {
        const response = await fetch('http://65.0.77.32:8000/api/our-impact-page/'); 
        const data: OurImpactCMS = await response.json();
        setCmsData(data);
      } catch (error) {
        console.warn('CMS data fetch failed, using fallback values.', error);
        setCmsData(null); // triggers fallback
      }
    };

    fetchCMSData();
  }, []);

  const globalPresenceData = {
    title:
      cmsData?.join_partners_section?.global_presence_title || FALLBACK_TITLE,
    description:
      cmsData?.join_partners_section?.global_presence_description || FALLBACK_DESCRIPTION,
  };

  return (
    <div className="testimonials-page">
      <TestimonialsHero />
      <GlobalVoicesOfTrust />
      <GlobalPresenceSection
        homepage={globalPresenceData}
        showDescription={true}
        showCards={false}
      />
      <JoinPartnersSection />
    </div>
  );
};

export default TestimonialsPage;
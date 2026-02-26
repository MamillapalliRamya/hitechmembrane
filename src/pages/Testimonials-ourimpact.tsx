import React from 'react';
import TestimonialsHero from '../components/ourimpact-testimonialscomponents/ourimpactHerocomponent';
import GlobalVoicesOfTrust from '../components/ourimpact-testimonialscomponents/Globalvoicesoftrust';
import GlobalPresenceSection from '../components/home/GlobalPresence';
import JoinPartnersSection from '../components/ourimpact-testimonialscomponents/joinpartnerssection';

const TestimonialsPage: React.FC = () => {
  const globalPresenceData = {
    title: "Serving Customer in 25678+ Countries",
    description:
      "Hi-Tech has successfully maintained its global presence thanks to a robust network of skilled associates. By prioritizing customer interests, the company continually adapts its work methodology to achieve outstanding results. With competitive pricing, efficient resource management, and a commitment to fulfilling promises, Hi-Tech has garnered accolades not just from clients but also from esteemed authorities across .",
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
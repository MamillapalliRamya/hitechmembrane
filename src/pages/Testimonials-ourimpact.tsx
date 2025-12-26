import React from 'react';
import TestimonialsHero from '../components/ourimpact-testimonialscomponents/ourimpactHerocomponent';
import GlobalVoicesOfTrust from '../components/ourimpact-testimonialscomponents/Globalvoicesoftrust';
import GlobalPresenceSection from '../components/home/GlobalPresence';
import JoinPartnersSection from '../components/ourimpact-testimonialscomponents/joinpartnerssection';

const TestimonialsPage: React.FC = () => {
  return (
    <div className="testimonials-page">
      <TestimonialsHero />
      <GlobalVoicesOfTrust />
      <GlobalPresenceSection
        title="Serving Customer in 25+ Countries"
      />
      <JoinPartnersSection />
    </div>
  );
};

export default TestimonialsPage;
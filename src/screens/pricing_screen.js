import React from 'react';

import HeroImage from '../components/reusable/hero_image';
import PricingSection from '../components/pricing-screen/pricing_section';
import Footer from '../components/reusable/footer';

const PricingScreen = () => {
  return (
    <div>
      <HeroImage />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default PricingScreen;

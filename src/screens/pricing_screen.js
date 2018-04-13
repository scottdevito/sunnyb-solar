import React from 'react';

import HeroImage from '../components/reusable/hero_image';
import PricingSection from '../components/pricing-screen/pricing_section';
import Footer from '../components/reusable/footer';

const PricingScreen = ({ pricingData, fetchPricingData }) => {
  return (
    <div>
      <HeroImage />
      <PricingSection
        fetchPricingData={fetchPricingData}
        pricingData={pricingData}
      />
      <Footer />
    </div>
  );
};

export default PricingScreen;

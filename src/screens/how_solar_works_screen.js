import React from 'react';

import HeroImage from '../components/reusable/hero_image';
import HowSolarWorksSection from '../components/how-solar-works-screen/how_solar_works_section';
import Footer from '../components/reusable/footer';

const HowSolarWorksScreen = () => {
  return (
    <div>
      <HeroImage />
      <HowSolarWorksSection />
      <Footer />
    </div>
  );
};

export default HowSolarWorksScreen;

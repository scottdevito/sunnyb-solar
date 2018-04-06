import React from 'react';

import HeroImage from '../components/reusable/hero_image';
import AboutSection from '../components/about-screen/about_section';
import Footer from '../components/reusable/footer';

const AboutScreen = () => {
  return (
    <div>
      <HeroImage />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default AboutScreen;

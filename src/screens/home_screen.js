import React, { Component } from 'react';

import HeroImage from '../components/hero_image';
import LandingSection from '../components/home-screen/landing_section';
import TrustedTechnologySection from '../components/home-screen/trusted_technology_section';

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <HeroImage />
        <LandingSection />
        <TrustedTechnologySection />
      </div>
    );
  }
}

export default HomeScreen;

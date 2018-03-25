import React, { Component } from 'react';

import HeroImage from '../components/hero_image';
import LandingSection from '../components/landing_section';

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <HeroImage />
        <LandingSection />
      </div>
    );
  }
}

export default HomeScreen;

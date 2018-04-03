import React, { Component } from 'react';

import HeroImage from '../components/hero_image';
import LandingSection from '../components/home-screen/landing_section';
import TrustedTechnologySection from '../components/home-screen/trusted_technology_section';
import HowItWorksSection from '../components/home-screen/how_it_works_section';
import ContactSection from '../components/home-screen/contact-section/contact_section';

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <HeroImage />
        <LandingSection />
        <TrustedTechnologySection />
        <HowItWorksSection />
        <ContactSection />
      </div>
    );
  }
}

export default HomeScreen;

import React, { Component } from 'react';
import { Events, scrollSpy, scroller } from 'react-scroll';

import LandingSection from '../components/home-screen/landing_section';
import TrustedTechnologySection from '../components/home-screen/trusted_technology_section';
import HowItWorksSection from '../components/home-screen/how_it_works_section';
import ContactSection from '../components/home-screen/contact-section/contact_section';
import Footer from '../components/reusable/footer';

class HomeScreen extends Component {
  componentDidMount() {
    // react-scroll
    Events.scrollEvent.register('begin', function(to, element) {});
    Events.scrollEvent.register('end', function(to, element) {});
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToContactSection = () => {
    scroller.scrollTo('contact-section', {
      duration: 1400,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -120,
    });
  };

  render() {
    return (
      <div>
        <LandingSection scrollToContactSection={this.scrollToContactSection} />
        <TrustedTechnologySection />
        <HowItWorksSection />
        <ContactSection />
        <Footer />
      </div>
    );
  }
}

export default HomeScreen;

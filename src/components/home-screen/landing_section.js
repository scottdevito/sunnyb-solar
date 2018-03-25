import React from 'react';
import styled from 'styled-components';

import HouseSVG from '../../assets/HouseGraphic.svg';
import CTAButton from '../CTA_button.MUI';

const LandingSection = () => {
  return (
    <LandingSectionWrapper>
      <LandingIntro>
        <LandingHeader>We Can Help You Save Every Month</LandingHeader>
        <LandingSubHeader>
          Some little text subtitle paragraph thing down here somewhere.
        </LandingSubHeader>
        <p>Contact us for a free no-obligation estimate.</p>
        <CTAButton>Get A Free Estimate</CTAButton>
      </LandingIntro>
      <HouseGraphic />
    </LandingSectionWrapper>
  );
};

export default LandingSection;

const LandingSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LandingHeader = styled.h1`
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2.25rem;
    font-weight: 300;
  }
`;

const LandingSubHeader = styled.p`
  margin-bottom: 0;
`;

const LandingIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 3rem;
  margin-right: 1.5rem;
  max-width: 30rem;

  @media (max-width: 768px) {
    margin: 1rem;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;
  }
`;

const HouseGraphic = styled.div`
  margin-left: 1.5rem;
  margin-right: 3rem;
  background-image: url(${HouseSVG});
  height: 32rem;
  width: 32rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;

  @media (max-width: 768px) {
    height: 15rem;
    width: 15rem;
    margin: 1rem;
  }
`;

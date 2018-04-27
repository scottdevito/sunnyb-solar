import React from 'react';
import styled from 'styled-components';

import LGLogo from '../../assets/home-screen/tech-logos/LGLogo.png';
import panasonicLogo from '../../assets/home-screen/tech-logos/panasonicLogo.png';
import silfabLogo from '../../assets/home-screen/tech-logos/silfabLogo.png';
import solarEdgeLogo from '../../assets/home-screen/tech-logos/solarEdgeLogo.png';

const TrustedTechnologySection = () => {
  return (
    <TrustedTechnologySectionWrapper>
      <TechHeader>We only use the most trusted technology</TechHeader>
      <TechLogos>
        <TechLogo>
          <TechImg src={LGLogo} alt="LG Logo" />
        </TechLogo>
        <TechLogo>
          <TechImg src={panasonicLogo} alt="Panasonic Logo" />
        </TechLogo>
        <TechLogo>
          <TechImg src={silfabLogo} alt="Silfab Logo" />
        </TechLogo>
        <TechLogo>
          <TechImg src={solarEdgeLogo} alt="Solar Edge Logo" />
        </TechLogo>
      </TechLogos>
    </TrustedTechnologySectionWrapper>
  );
};

export default TrustedTechnologySection;

const TrustedTechnologySectionWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 4rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  background: linear-gradient(
    105.99deg,
    #4fc3f7 -56.6%,
    rgba(139, 246, 255, 0.61) 190.78%
  );

  @media (max-width: 768px) {
  }
`;

const TechHeader = styled.h2`
  font-weight: bold;
  color: #fff;
  line-height: normal;
  font-size: 2rem;
`;

const TechLogos = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  align-items: center;
`;

const TechLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10rem;
  width: 10rem;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 2.5rem;
  margin-top: 1rem;
`;

const TechImg = styled.img`
  width: 80%;
  padding: 1rem;
`;

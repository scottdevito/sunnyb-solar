import React from 'react';
import styled from 'styled-components';

import AboutImg from '../../assets/about-screen/AboutImg.jpg';
// import SunnyBHeroImgMobile from '../../assets/SunnyBHeroMobile.jpg';

const HeroImage = () => {
  return <Hero />;
};

export default HeroImage;

const Hero = styled.div`
  width: 100%;
  height: 50vh;
  /* display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white; */
  background-image: url(${AboutImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media (max-width: 720px) {
    background-image: url(${AboutImg});
  }
`;

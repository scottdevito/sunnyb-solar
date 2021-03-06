import React from 'react';
import styled from 'styled-components';

const AboutSection = () => {
  return (
    <AboutSectionWrapper>
      <AboutHeader>About Us</AboutHeader>
      <AboutText>
        About us text. We're a Long Island based solar company. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </AboutText>
    </AboutSectionWrapper>
  );
};

export default AboutSection;

const AboutSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

const AboutHeader = styled.h1`
  font-weight: 400;
  background-image: linear-gradient(120deg, #fcd306 0%, #fcd306 100%);
  background-repeat: no-repeat;
  background-position: 0 100%;
  background-size: 100% 0.2em;
`;

const AboutText = styled.p`
  max-width: 65%;
  margin-bottom: 6rem;
  margin-top: 0rem;

  @media (max-width: 768px) {
    max-width: 85%;
  }
`;

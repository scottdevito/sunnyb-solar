import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <NavLinkSection>
        <NavLinksWrapper>
          <NavLinks>
            <NavLinkHeader>Nav Link Header</NavLinkHeader>
            <NavLink>Link One</NavLink>
            <NavLink>Link Two</NavLink>
            <NavLink>Link Three</NavLink>
            <NavLink>Link Four</NavLink>
          </NavLinks>
        </NavLinksWrapper>
        <Logo>logo</Logo>
      </NavLinkSection>
      <LegalSection>
        <LegalText>
          Copyright © 2018 Sunny B Solar, LLC. All rights reserved. Sunny B
          Solar, LLC (EIN: 00000000) is a licensed contractor in each state in
          which we operate. For information about our contractor licenses,
          please visit sunnybsolar.com/licenses.
        </LegalText>
      </LegalSection>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const NavLinkSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 16rem;
  width: 100%;
  background: linear-gradient(
    102.98deg,
    #4fc3f7 -56.6%,
    rgba(139, 246, 255, 0.61) 190.58%
  );
`;

const NavLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  flex-grow: 1;
  height: 100%;
  width: 100%;
  padding-left: 5rem;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100%;
  width: 100%;
`;

const NavLinkHeader = styled.h4`
  color: #fff;
  margin: 0;
`;

const NavLink = styled.p`
  color: #fff;
  margin-bottom: 0.5rem;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-grow: 1;
  height: 100%;
  width: 100%;
`;

const LegalSection = styled.div`
  min-height: 4rem;
  width: 100%;
  background: linear-gradient(95.5deg, #474f6a -56.6%, #474f6a 190.25%);
`;

const LegalText = styled.p`
  color: #b9bcc7;
  text-align: center;
  padding: 0.25rem;
`;

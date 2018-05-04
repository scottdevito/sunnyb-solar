import React from 'react';
import styled from 'styled-components';

import SunnyBLogo from '../../assets/sunnyBLogo.svg';

const Logo = () => {
  return (
    <StyledLogoWrapper>
      <StyledLogo src={SunnyBLogo} />
    </StyledLogoWrapper>
  );
};

export default Logo;

const StyledLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: white;
  height: 6rem;
  width: 12rem;
  margin: 2rem;
  padding: 1.5rem;
  border-radius: 8px;

  @media (max-width: 768px) {
    margin-bottom: 8rem;
    margin-top: 4rem;
  }
`;

const StyledLogo = styled.img`
  width: 100%;
`;

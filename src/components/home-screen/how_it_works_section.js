import React from 'react';
import styled from 'styled-components';

import StepBoxTriangle from '../../assets/home-screen/StepBoxTriangle.svg';
import StepBoxSquare from '../../assets/home-screen/StepBoxSquare.svg';

const HowItWorksSection = () => {
  return (
    <HowItWorksSectionWrapper>
      <HowItWorksHeader>How does it work?</HowItWorksHeader>
      <HowItWorksProcessWrapper>
        <StepBox>
          <StepBoxHeader>Get a free estimate</StepBoxHeader>
          <StepBoxTriangleGraphic
            src={StepBoxTriangle}
            alt="Step box graphic"
          />
        </StepBox>
        <StepBox>
          <StepBoxHeader>Something happens</StepBoxHeader>
          <StepBoxTriangleGraphic
            src={StepBoxTriangle}
            alt="Step box graphic"
          />
        </StepBox>
        <StepBox>
          <StepBoxHeader>
            <FinalStepTextDesktop>
              Start saving every month
            </FinalStepTextDesktop>
          </StepBoxHeader>
          <StepBoxSquareGraphicMobile>
            <FinalStepTextMobile>Start saving every month</FinalStepTextMobile>
          </StepBoxSquareGraphicMobile>
          <StepBoxSquareGraphicDesktop
            src={StepBoxSquare}
            alt="Step box graphic"
          />
        </StepBox>
      </HowItWorksProcessWrapper>
    </HowItWorksSectionWrapper>
  );
};

export default HowItWorksSection;

const HowItWorksSectionWrapper = styled.div`
  width: 100%;
  margin-top: 8rem;
  margin-bottom: 8rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
`;

const HowItWorksHeader = styled.h1`
  font-weight: 400;
`;

const HowItWorksProcessWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StepBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  text-align: center;
`;

const StepBoxHeader = styled.h2`
  font-weight: 300;
  margin-bottom: 2rem;
`;

const StepBoxTriangleGraphic = styled.img`
  margin-left: 3rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    transform: rotate(90deg) scale(0.7);
    margin-left: 0;
  }
`;

const StepBoxSquareGraphicMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background: url(${StepBoxSquare});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 10rem;
    width: 15rem;
    border-radius: 6px;
  }
`;

const FinalStepTextDesktop = styled.div`
  display: visible;

  @media (max-width: 768px) {
    display: none;
  }
`;

const FinalStepTextMobile = styled.div`
  display: none;
  color: #fff;
  font-weight: 500;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-content: center;
    align-items: center;
  }
`;

const StepBoxSquareGraphicDesktop = styled.img`
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;

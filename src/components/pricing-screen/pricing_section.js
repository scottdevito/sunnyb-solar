import React, { Component } from 'react';
import styled from 'styled-components';

import { MockPrices } from './pricing_mock';
import CTAButton from '../reusable/CTA_button.MUI';

class PricingSection extends Component {
  render() {
    return (
      <PricingSectionWrapper>
        {MockPrices.map(plan => {
          return (
            <PlanWrapper>
              <PlanGraphic />
              <PlanInfo>
                <h2>{plan.name}</h2>
                <h4>{plan.price}</h4>
                <p>{plan.description}</p>
                <CTAButton bgColor="linear-gradient(180deg, #F79522 -29.08%, rgba(247, 149, 34, 0.49) 145.66%)">
                  Request Info
                </CTAButton>
              </PlanInfo>
            </PlanWrapper>
          );
        })}
      </PricingSectionWrapper>
    );
  }
}

export default PricingSection;

const PricingSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
`;

const PlanWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 40%;
  min-width: 40%;
  min-height: 20rem;
  margin: 3rem;
`;

const PlanGraphic = styled.div`
  flex: 0.75;
  width: 100%;
  background: linear-gradient(
    180deg,
    #fcd306 -29.08%,
    rgba(252, 211, 6, 0.29) 145.66%
  );
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

const PlanInfo = styled.div`
  flex: 1.25;
  padding: 1rem;
`;

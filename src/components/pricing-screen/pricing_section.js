import React, { Component } from 'react';
import styled from 'styled-components';

import CTAButton from '../reusable/CTA_button.MUI';

class PricingSection extends Component {
  componentDidMount() {
    if (this.props.pricingData.length === 0) {
      this.props.fetchPricingData();
    }
  }

  render() {
    let { pricingData } = this.props;
    return (
      <PricingSectionWrapper>
        {(pricingData || []).map(plan => {
          return (
            <PlanWrapper key={plan.pricingId}>
              <PlanGraphic />
              <PlanInfo>
                <PlanText>
                  <h2>{plan.name}</h2>
                  <h4>${plan.price}</h4>
                  <p>{plan.description}</p>
                </PlanText>
                <PlanButtonWrapper>
                  <CTAButton bgColor="linear-gradient(180deg, #F79522 -29.08%, rgba(247, 149, 34, 0.49) 145.66%)">
                    Request Info
                  </CTAButton>
                </PlanButtonWrapper>
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
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const PlanWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 40%;
  min-width: 40%;
  min-height: 20rem;
  margin: 4rem;

  @media (max-width: 768px) {
    margin: 2rem;
    max-width: 80%;
    min-width: 80%;
  }
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

const PlanText = styled.div`
  height: 70%;
  flex: 0.7;
`;

const PlanButtonWrapper = styled.div`
  height: 30%;
  flex: 0.3;
  width: 100%;
`;

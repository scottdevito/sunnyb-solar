import React, { Component } from 'react';
import styled from 'styled-components';

class HowSolarWorksSection extends Component {
  render() {
    return <HowSolarWorksSectionWrapper>something</HowSolarWorksSectionWrapper>;
  }
}

export default HowSolarWorksSection;

const HowSolarWorksSectionWrapper = styled.div`
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

import React from 'react';
import styled from 'styled-components';

const GoogleMap = () => {
  return (
    <StyledGoogleMap>
      <MapCanvas>
        <iframe
          title="Google Map"
          width="238"
          height="232"
          src="https://maps.google.com/maps?q=255 merrick road massapequa ny&t=&z=13&ie=UTF8&iwloc=&output=embed"
          scrolling="no"
          frameBorder="0"
        />
      </MapCanvas>
    </StyledGoogleMap>
  );
};

export default GoogleMap;

const StyledGoogleMap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 232px;
  width: 238px;
  margin: 2rem;
`;

const MapCanvas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 232px;
  width: 238px;
  padding: 1.25rem;
  background: white;
  border-radius: 8px;
`;

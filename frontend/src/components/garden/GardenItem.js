import React from 'react';
import styled from 'styled-components';

const GardenItem = () => {
  return (
    <Wrapper>
      <GardenImg></GardenImg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 436px;
  height: 568px;
  border-radius: 15px;
  overflow: hidden;
`;

const GardenImg = styled.div`
  height: 300px;
  background-color: ${({ theme }) => theme.themeColor[5]};
`;

export default GardenItem;

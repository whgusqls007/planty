import React from 'react';
import styled from 'styled-components';

const GardenDiaryItem = () => {
  return (
    <Wrapper>
      <h1>Diary</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 320px;
  background-color: ${({ theme }) => theme.themeColor[5]};
`;

export default GardenDiaryItem;

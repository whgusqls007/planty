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
  margin-bottom: 4%;
  transition: 0.4s;
  transform: scale3d(1, 1, 1);

  &:hover {
    cursor: pointer;
    transition: 0.4s;
    transform: scale3d(1.05, 1.05, 1.05);
  }

  @media (max-width: 1200px) {
    height: 280px;
    transition: 0s;
  }

  @media (max-width: 992px) {
    height: 230px;
    transition: 0s;
  }

  @media (max-width: 768px) {
    height: 220px;
    transition: 0s;
  }

  @media (max-width: 576px) {
  }

  @media (max-width: 400px) {
  }
`;

export default GardenDiaryItem;

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.5rem 0 0.8rem;

  &:hover {
    & .plant-img {
      transition: transform 0.3s;
      transform: scale3d(1.03, 1.03, 1.03);
    }
  }
`;

const PlantImg = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.themeColor[5]};
  margin-bottom: 5%;

  @media (max-width: 768px) {
    width: 90%;
    height: 250px;
    margin-left: 4.5%;
  }

  @media (max-width: 576px) {
    height: 200px;
  }
`;

const BigCard = () => {
  return (
    <Wrapper>
      <PlantImg className="plant-img" />
    </Wrapper>
  );
};

export default BigCard;

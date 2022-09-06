import React from 'react';
import styled from 'styled-components';
import LevelStar from './LevelStar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  & .plant-discription {
    padding-left: 4px;
    & .plant-name {
      margin-top: 4px;
      font-size: 24px;
    }
    & .plant-level {
      font-size: 22px;
      display: flex;
      align-items: center;
      & span {
        margin-right: 5px;
      }
      & div {
        margin-right: 4px;
      }
    }
  }
`;

const PlantImg = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.themeColor[5]};
`;

const PlantItem = ({ plant }) => {
  const { plantName, plantLevel } = plant;
  return (
    <Wrapper>
      <PlantImg />
      <div className="plant-discription">
        <div className="plant-name">{plantName}</div>
        <div className="plant-level">
          <div>난이도</div>
          <LevelStar level={plantLevel} />
        </div>
      </div>
    </Wrapper>
  );
};

export default PlantItem;

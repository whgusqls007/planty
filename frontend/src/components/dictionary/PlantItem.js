import React from 'react';
import styled from 'styled-components';
import LevelStar from '../LevelStar';
import { Link } from 'react-router-dom';

const PlantItem = ({ plant }) => {
  const { id, plant_name, img_url } = plant;
  return (
    <Wrapper>
      <Link to={`/dictionary/${id}`}>
        <PlantImg className="plant-img" />
        <div className="plant-discription">
          <div className="plant-name">{plant_name}</div>
          <div className="plant-level">
            <div>난이도</div>
            <LevelStar level={1} />
          </div>
        </div>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px 20px 10px;
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
  & a {
    text-decoration: none;
    color: black;
  }
  &:hover {
    & .plant-img {
      transition: transform 0.3s;
      transform: scale3d(1.03, 1.03, 1.03);
    }
  }
`;

const PlantImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.themeColor[5]};
`;

export default PlantItem;

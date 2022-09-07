import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px 0px 30px;
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

const PlantImg = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.themeColor[5]};
`;

const Card = ({ data }) => {
  const { cntntsNo, cntntsSj } = data;
  return (
    <Wrapper>
      <Link to={`/dictionary/${cntntsNo}`}>
        <PlantImg className="plant-img" />
        <div className="plant-discription">
          <div className="plant-name">{cntntsSj}</div>
        </div>
      </Link>
    </Wrapper>
  );
};

export default Card;

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMagazine } from '../../features/magazine/magazineActions';
import { magazine } from '../../api/magazine';
import { useSelect } from '@mui/base';

const Wrapper = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  display: flex;
  flex-direction: column;
  margin: 0 3% 10% 3%;

  &:hover {
    cursor: pointer;
    transition: transform 0.3s;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  & .img {
    width: 100%;
    min-height: 250px;
    height: auto;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.themeColor[5]};
  }
`;

const Title = styled.div`
  text-overflow: ellipsis;
  font-weight: 600;
  font-size: larger;
  margin-top: 1%;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const CtnInfo = styled.div`
  margin: 1% 0 4% 0;
  display: flex;
  justify-content: space-between;
  opacity: 0.5;

  @media (max-width: 768px) {
    margin: 0 0 2% 0;
  }
`;

const SubTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

const PlantImg = styled.div`
  width: 100%;
  min-height: 250px;
  height: auto;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.themeColor[5]};
`;

const testImage =
  'data:image/png;base64,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';

const Card = (props) => {
  const { title, sub_title, date_created, user } = props.data;

  return (
    <Wrapper className="plant-img">
      <img src={testImage} />
      <div>
        <Title>{title}</Title>
        <CtnInfo>
          <span>글쓴이 | {user.username}</span>
          <span>{date_created.split('T')[0]}</span>
        </CtnInfo>
      </div>
      <SubTitle>{sub_title}</SubTitle>
    </Wrapper>
  );
};

export default Card;

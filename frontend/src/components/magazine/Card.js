import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const Card = (props) => {
  const { title, writer, date, content } = props.data;
  return (
    <Wrapper className="plant-img">
      <PlantImg />
      <div>
        <Title>{title}</Title>
        <CtnInfo>
          <span>글쓴이 | {writer}</span>
          <span>{date}</span>
        </CtnInfo>
      </div>
      <SubTitle>{content}</SubTitle>
    </Wrapper>
  );
};

export default Card;
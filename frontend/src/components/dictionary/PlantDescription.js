import React from 'react';
import styled from 'styled-components';
import LevelStar from '../LevelStar';

const Wrapper = styled.div`
  & .plant-header {
    display: flex;
    align-items: flex-end;
  }
  & .plant-title {
    font-size: 30px;
    font-weight: 500;
    margin-right: 12px;
  }
  & .plant-level {
    display: flex;
  }
  & .plant-category {
    color: ${({ theme }) => theme.themeColor[1]};
  }
  & .plant-content {
    margin-top: 18px;
  }
`;

const PlantDescription = ({ plant }) => {
  // const {cntntsSj, plantLevel, fmlCodeNm, content} = plant
  const dummy = {
    cntntsSj: '칼라데아 세토사',
    plantLevel: 2,
    fmlInfo: 'Calathea Setosa(Ctenanthe)',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  };
  const { cntntsSj, plantLevel, fmlInfo, content } = dummy;
  return (
    <Wrapper>
      <div className="plant-header">
        <div className="plant-title">{cntntsSj}</div>
        <div className="plant-level">
          <span>난이도 </span>
          <LevelStar level={plantLevel} />
        </div>
      </div>
      <div className="plant-category">{fmlInfo}</div>
      <div className="plant-content">{content}</div>
    </Wrapper>
  );
};

export default PlantDescription;

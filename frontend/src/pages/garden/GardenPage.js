import React from 'react';
import GardenItem from '../../components/garden/GardenItem';
import GardenUserInfo from '../../components/garden/GardenUserInfo';
import styled from 'styled-components';

const dummyPlants = [
  {
    cntntsSj: '해바라기',
    date_grow: '2022.09.05',
  },
  {
    cntntsSj: '무궁화',
    date_grow: '2022.09.05',
  },
  {
    cntntsSj: '방울 토마토',
    date_grow: '2022.09.05',
  },
  {
    cntntsSj: '해바라기',
    date_grow: '2022.09.05',
  },
  {
    cntntsSj: '무궁화',
    date_grow: '2022.09.05',
  },
  {
    cntntsSj: '방울 토마토',
    date_grow: '2022.09.05',
  },
];

const GardenPage = () => {
  return (
    <Wrapper>
      <GardenUserInfo />
      <GardenWrapper>
        <button>식물 등록</button>
        {dummyPlants.map((plant, idx) => (
          <GardenItem plant={plant} key={idx} />
        ))}
      </GardenWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 80px;
  display: flex;
  align-items: center;

  flex-direction: column;
`;

const GardenWrapper = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  grid-column-gap: 14px;
  grid-row-gap: 20px;
  background-color: white;
  & button {
    position: absolute;
    right: 0;
    transform: translateY(-140%);
    background-color: ${({ theme }) => theme.themeColor[1]};
    color: white;
    border: none;
    border-radius: 10px;
    width: 130px;
    height: 42px;
    font-size: 20px;
  }

  /* 반응형 */
  @media (min-width: 1500px) {
    grid-template-columns: repeat(3, 436px);
    width: 1336px;
  }
  @media (max-width: 1499px) and (min-width: 1021px) {
    grid-template-columns: repeat(2, 436px);
    width: 886px;
  }
  @media (max-width: 1020px) and (min-width: 801px) {
  }
  @media (max-width: 800px) {
  }
`;

export default GardenPage;

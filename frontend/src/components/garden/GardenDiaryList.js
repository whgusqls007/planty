import React from 'react';
import GardenDiaryItem from './GardenDiaryItem';
import { GardenDiaryWrapper } from '../../styles/garden/GardenDetailStyle';
import { useSelector } from 'react-redux';

const GardenDiaryList = () => {
  const { gardenPlant } = useSelector((state) => state.garden);
  return (
    <GardenDiaryWrapper>
      <div className="garden-diary-title">식물 일기</div>
      <div className="garden-diary-container">
        {gardenPlant?.diaries?.map((diary, i) => (
          <GardenDiaryItem diary={diary} key={i} />
        ))}
      </div>
    </GardenDiaryWrapper>
  );
};

export default GardenDiaryList;

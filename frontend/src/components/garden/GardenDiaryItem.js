import React from 'react';
import { GardenDiaryItemWrapper } from '../../styles/garden/GardenComponentStyle';
import { useNavigate } from 'react-router-dom';

const GardenDiaryItem = ({ diary }) => {
  const { id, content, date_created, diary_img } = diary;
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`?diary=${id}`);
  };
  return (
    <GardenDiaryItemWrapper onClick={onClickHandler}>
      <img src={diary_img} alt="" />
      {/* <div>{date_created}</div> */}
    </GardenDiaryItemWrapper>
  );
};

export default GardenDiaryItem;

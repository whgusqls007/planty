import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  GardenItemWrapper,
  GardenImg,
} from '../../styles/garden/GardenComponentStyle';

const GardenItem = ({ gardenPlant }) => {
  const navigate = useNavigate();
  const { id, plant, date_grow, img_url } = gardenPlant;
  const { userName } = useParams();

  return (
    <GardenItemWrapper
      onClick={() => {
        navigate(`/garden/${userName}/${id}`);
      }}
    >
      <GardenImg src={img_url} />
      <div className="garden-header" onClick={() => navigate('/')}>
        <div className="garden-title">{plant?.plant_name}</div>
        <div className="garden-date-grow">{date_grow}</div>
      </div>
    </GardenItemWrapper>
  );
};

export default GardenItem;

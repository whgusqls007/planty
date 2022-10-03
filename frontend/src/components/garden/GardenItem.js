import React from 'react';
import { Link } from 'react-router-dom';
import {
  GardenItemWrapper,
  GardenImg,
} from '../../styles/garden/GardenComponentStyle';

const GardenItem = ({ gardenPlant }) => {
  const { plant, date_grow } = gardenPlant;

  return (
    <GardenItemWrapper>
      <Link to="1">
        <GardenImg />
      </Link>
      <div className="garden-header">
        <div className="garden-title">{plant?.plant_name}</div>
        <div className="garden-date-grow">{date_grow}</div>
      </div>
    </GardenItemWrapper>
  );
};

export default GardenItem;

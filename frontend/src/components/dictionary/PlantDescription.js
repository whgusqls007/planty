import React from 'react';
import styled from 'styled-components';
import LevelStar from '../LevelStar';

const PlantDescription = ({ plant }) => {
  const {
    id,
    plant_no,
    plant_name,
    classification,
    pest_info,
    ecology_code,
    family_code,
    fruit_info,
    growth_width,
    growth_height,
    growth_temp,
    growth_speed,
    humidity,
    blooming_season,
    light_demand,
    manage_demand,
    manage_level,
    posting_place,
    water_cycle_spring,
    water_cycle_summer,
    water_cycle_autumn,
    water_cycle_winter,
    img_url,
  } = plant;
  return (
    <Wrapper>
      <div className="plant-header">
        <div className="plant-title">{plant_name}</div>
        <div className="plant-level">
          <span>난이도 </span>
          <LevelStar level={manage_level} />
        </div>
      </div>
      <div className="plant-category">{family_code}</div>
      <div className="plant-content">{fruit_info}</div>
    </Wrapper>
  );
};

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

export default PlantDescription;

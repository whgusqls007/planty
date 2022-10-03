import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import PlantDescription from '../../components/dictionary/PlantDescription';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPlant } from '../../features/dictionary/dictionaryAction';
import { useParams } from 'react-router-dom';
import {
  Wrapper,
  GrowInfoWrapper,
  PlantImg,
} from '../../styles/dictionary/DictionaryDetailStyle';

const DictionaryDetailPage = () => {
  const dispatch = useDispatch();
  const { plantId } = useParams();

  useEffect(() => {
    dispatch(fetchPlant(plantId));
  }, [dispatch]);

  const { plant, loading } = useSelector((state) => state.dictionary);

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
    <Container style={{ display: 'flex', justifyContent: 'center' }}>
      {!loading && (
        <Wrapper>
          <div className="dictionary-detail-header">
            <PlantImg src={img_url} alt="" />
            <PlantDescription plant={plant} />
          </div>
          <div className="dictionary-detail-body">
            <div className="grow-info-div">
              <GrowInfo growth_temp={growth_temp} />
              <GrowInfo growth_speed={growth_speed} />
              <GrowInfo humidity={humidity} />
            </div>
          </div>
        </Wrapper>
      )}
    </Container>
  );
};

const GrowInfo = ({ growth_temp, growth_speed, humidity }) => {
  return (
    <GrowInfoWrapper>
      {growth_temp && (
        <>
          <img src="/assets/img/sun.png" alt="" />
          {growth_temp}
        </>
      )}
      {growth_speed && (
        <>
          <img src="/assets/img/ground.png" alt="" />
          {growth_speed}
        </>
      )}
      {humidity && (
        <>
          <img src="/assets/img/water.png" alt="" />
          {humidity}
        </>
      )}
    </GrowInfoWrapper>
  );
};

export default DictionaryDetailPage;

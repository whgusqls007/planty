import React, { useEffetct } from 'react';
import Container from 'react-bootstrap/esm/Container';
import styled from 'styled-components';
import PlantDescription from '../../components/dictionary/PlantDescription';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPlant } from '../../features/dictionary/dictionaryAction';
import { useParams } from 'react-router-dom';

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

const Wrapper = styled.div`
  max-width: 1080px;
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  & .dictionary-detail-header {
    display: flex;
    @media (max-width: 767px) {
      flex-direction: column;
    }
  }
  & .dictionary-detail-body {
    & .grow-info-div {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 10px;
      padding: 10px 0px;
    }
  }
`;

const PlantImg = styled.img`
  /* width: 100%; */
  width: 450px;
  height: 300px;
  border-radius: 10px;
  /* background-color: ${({ theme }) => theme.themeColor[5]}; */
  object-fit: cover;
  object-position: center;
  margin-right: 25px;
  @media (max-width: 767px) {
    margin-right: 0;
    width: 100%;
  }
`;

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

const GrowInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #d9d9d9;
  padding: 0.5rem 1rem;
  height: 120px;
  @media (max-width: 767px) {
    font-size: 0.8rem;
    padding: 5px;
    height: 60px;
  }
  & img {
    width: 70px;
    height: 70px;
    margin-right: 10px;
    @media (max-width: 767px) {
      width: 40px;
      height: 40px;
      margin-right: 6px;
    }
  }
`;

export default DictionaryDetailPage;

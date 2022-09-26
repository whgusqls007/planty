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
    <Container>
      {!loading && (
        <Wrapper>
          <div>
            <PlantImg src={img_url} alt="" />
          </div>
          <PlantDescription plant={plant} />
        </Wrapper>
      )}
    </Container>
  );
};

const Wrapper = styled.div`
  margin-top: 60px;
  display: flex;
`;

const PlantImg = styled.img`
  width: 450px;
  height: 300px;
  border-radius: 10px;
  /* background-color: ${({ theme }) => theme.themeColor[5]}; */
  object-fit: cover;
  margin-right: 25px;
`;

export default DictionaryDetailPage;

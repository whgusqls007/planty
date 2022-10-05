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
import HtmlParser from 'react-html-parser';
const DictionaryDetailPage = () => {
  const dispatch = useDispatch();
  const { plantId } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
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
    winter_lowest_temp,
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
            <div className="grow-info-container">
              <h5>온도와 습도</h5>
              <hr />
              <div className="grow-info-div">
                <GrowInfo growth_temp={growth_temp} />
                <GrowInfo winter_lowest_temp={winter_lowest_temp} />
                <GrowInfo humidity={humidity} />
              </div>
            </div>
            <div className="grow-info-container">
              <h5>물 주는 방법</h5>
              <hr />
              <div className="water-info-div">
                <WaterInfo water_cycle_spring={water_cycle_spring} />
                <WaterInfo water_cycle_summer={water_cycle_summer} />
                <WaterInfo water_cycle_autumn={water_cycle_autumn} />
                <WaterInfo water_cycle_winter={water_cycle_winter} />
              </div>
            </div>
            <div className="grow-info-container">
              <h5>빛과 위치</h5>
              <hr />
              <div className="lightposi-info-div">
                <PlaceInfo light_demand={light_demand} />
                <PlaceInfo posting_place={posting_place} />
              </div>
            </div>
          </div>
        </Wrapper>
      )}
    </Container>
  );
};

const GrowInfo = ({ growth_temp, winter_lowest_temp, humidity }) => {
  return (
    <GrowInfoWrapper>
      {growth_temp && (
        <>
          <img src="/assets/img/hot.png" alt="온도계 아이콘" />
          <div className="growth-info-data">
            <p className="title-style">적정 온도</p>
            <p>{growth_temp}</p>
          </div>
        </>
      )}
      {winter_lowest_temp && (
        <>
          <img src="/assets/img/cold.png" alt="겨울 온도계 아이콘" />
          <div className="growth-info-data">
            <p className="title-style">겨울철 최저 온도</p>
            <p>{winter_lowest_temp}</p>
          </div>
        </>
      )}
      {humidity && (
        <>
          <img src="/assets/img/water.png" alt="습도 아이콘" />
          <div className="growth-info-data">
            <p className="title-style">적정 습도</p>
            <p>{humidity}</p>
          </div>
        </>
      )}
    </GrowInfoWrapper>
  );
};

const WaterInfo = ({
  water_cycle_spring,
  water_cycle_summer,
  water_cycle_autumn,
  water_cycle_winter,
}) => {
  return (
    <GrowInfoWrapper>
      {water_cycle_spring && (
        <>
          <img src="/assets/img/wtr-spring.png" alt="봄 아이콘" />
          <div className="water-info-data">
            <p className="title-style">봄</p>
            <p>{water_cycle_spring}</p>
          </div>
        </>
      )}
      {water_cycle_summer && (
        <>
          <img src="/assets/img/wtr-summer.png" alt="여름 아이콘" />
          <div className="water-info-data">
            <p className="title-style">여름</p>
            <p>{water_cycle_summer}</p>
          </div>
        </>
      )}
      {water_cycle_autumn && (
        <>
          <img src="/assets/img/wtr-autumn.png" alt="가을 아이콘" />
          <div className="water-info-data">
            <p className="title-style">가을</p>
            <p>{water_cycle_autumn}</p>
          </div>
        </>
      )}
      {water_cycle_winter && (
        <>
          <img src="/assets/img/wtr-winter.png" alt="겨울 아이콘" />
          <div className="water-info-data">
            <p className="title-style">겨울</p>
            <p>{water_cycle_winter}</p>
          </div>
        </>
      )}
    </GrowInfoWrapper>
  );
};

const PlaceInfo = ({ light_demand, posting_place }) => {
  // posting_place = posting_place.replaceAll(',', '&nbsp;');
  console.log(posting_place && HtmlParser(posting_place.replaceAll(',', '\n')));
  return (
    <GrowInfoWrapper>
      {light_demand && (
        <>
          <img src="/assets/img/light.png" alt="빛 아이콘" />
          {HtmlParser(light_demand.replaceAll('),', ')\n'))}
        </>
      )}
      {posting_place && (
        <>
          <img src="/assets/img/location.png" alt="위치 아이콘" />
          {HtmlParser(posting_place.replaceAll('),', ')\n'))}
        </>
      )}
    </GrowInfoWrapper>
  );
};
export default DictionaryDetailPage;

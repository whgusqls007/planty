import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import GardenDiaryItem from '../../components/garden/GardenDiaryItem';
import GardenCreateModal from '../../components/garden/GardenCreateModal';
import GardenDiaryModal from '../../components/garden/GardenDiaryModal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMyGarden } from '../../features/garden/gardenActions';
import {
  Wrapper,
  GardenDetailImage,
  GardenDetailDescription,
  GardenDiaryWrapper,
  GardenDetailInfo,
} from '../../styles/garden/GardenDetailStyle';
import _default from 'react-redux/es/components/connect';
import { useParams } from 'react-router-dom';

const GardenDetailPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { gardenId } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [diaryOpen, setDiaryOpen] = useState(false);
  const [getDate, setGetDate] = useState(false);

  useEffect(() => {
    dispatch(fetchMyGarden(gardenId));
  }, []);

  const { gardenPlant } = useSelector((state) => state.garden);
  const {
    plant,
    date_grow,
    memo,
    recent_water,
    preference,
    watering_schedule,
  } = gardenPlant;

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openDiary = () => {
    setDiaryOpen(true);
  };

  const closeDiary = () => {
    setDiaryOpen(false);
  };

  return (
    <>
      <GardenCreateModal modalOpen={modalOpen} closeModal={closeModal} />
      <GardenDiaryModal modalOpen={diaryOpen} closeModal={closeDiary} />
      <Container>
        <Wrapper>
          <div className="button-div">
            <button onClick={openDiary}>일기 추가</button>
            <button onClick={openModal}>식물 수정</button>
          </div>
          <div className="header">
            <GardenDetailImage />
            <GardenDetailDescription>
              <div className="garden-header">
                <div className="garden-title">🌿 {plant?.plant_name}</div>
                <button
                  className="detail-btn"
                  onClick={() => navigate(`/dictionary/${plant.id}`)}
                >
                  <BackupTableIcon />
                  자세히 보기
                </button>
                <div className="grow-date">
                  {date_grow?.substr(0, 4)}년 {date_grow?.substr(5, 2)}월{' '}
                  {date_grow?.substr(8, 2)}일에 데려 왔어요
                </div>
              </div>
              <div className="garden-content">{memo}</div>
              <div className="garden-detail-info">
                <GardenDetailInfo>
                  🌱 {watering_schedule}일 마다 물을 줘요
                </GardenDetailInfo>
                <GardenDetailInfo>
                  <div className="garden-detail-recent_water">
                    <span>
                      🐳 {recent_water?.substr(0, 4)}년{' '}
                      {recent_water?.substr(5, 2)}월{' '}
                      {recent_water?.substr(8, 2)}
                      일에
                    </span>
                    <span>물을 줬어요</span>
                  </div>
                </GardenDetailInfo>
                <GardenDetailInfo>
                  🌷 추천 점수는 {preference}점이에요
                </GardenDetailInfo>
              </div>
            </GardenDetailDescription>
          </div>
        </Wrapper>
        <GardenDiaryWrapper>
          <div className="garden-diary-title">식물 일기</div>
          <div className="garden-diary-container">
            <GardenDiaryItem />
            <GardenDiaryItem />
            <GardenDiaryItem />
            <GardenDiaryItem />
          </div>
        </GardenDiaryWrapper>
      </Container>
    </>
  );
};

export default GardenDetailPage;

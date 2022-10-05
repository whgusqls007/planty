import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import BackupTableIcon from '@mui/icons-material/BackupTable';

import GardenCreateModal from '../../components/garden/GardenCreateModal';
import GardenDiaryCreateModal from '../../components/garden/GardenDiaryCreateModal';
import GardenDiaryModal from '../../components/garden/GardenDiaryModal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMyGarden } from '../../features/garden/gardenActions';
import {
  Wrapper,
  GardenDetailImage,
  GardenDetailDescription,
  GardenDetailInfo,
} from '../../styles/garden/GardenDetailStyle';
import { useParams } from 'react-router-dom';
import GardenDiaryList from '../../components/garden/GardenDiaryList';

const GardenDetailPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { gardenId } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [diaryCreateOpen, setDiaryCreateOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  useEffect(() => {
    dispatch(fetchMyGarden(gardenId));
  }, [dispatch, gardenId]);

  const { gardenPlant, loading } = useSelector((state) => state.garden);
  const {
    plant,
    date_grow,
    memo,
    recent_water,
    preference,
    watering_schedule,
    img_url,
  } = gardenPlant;

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openCreateDiary = () => {
    setDiaryCreateOpen(true);
  };

  const closeCreateDiary = () => {
    setDiaryCreateOpen(false);
  };

  return (
    <>
      <GardenCreateModal modalOpen={modalOpen} closeModal={closeModal} />
      <GardenDiaryCreateModal
        modalOpen={diaryCreateOpen}
        closeModal={closeCreateDiary}
      />
      <GardenDiaryModal />

      <Container>
        {!loading && (
          <>
            <Wrapper>
              <div className="button-div">
                <button onClick={openCreateDiary}>일기 추가</button>
                <button onClick={openModal}>식물 수정</button>
              </div>
              <div className="header">
                <GardenDetailImage src={img_url} />
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
                          🐳
                          {recent_water?.substr(5, 2)}월{' '}
                          {recent_water?.substr(8, 2)}
                          일에 물을 줬어요
                        </span>
                      </div>
                    </GardenDetailInfo>
                    <GardenDetailInfo>
                      🌷 추천 점수는 {preference}점이에요
                    </GardenDetailInfo>
                  </div>
                </GardenDetailDescription>
              </div>
            </Wrapper>
            <GardenDiaryList />
          </>
        )}
      </Container>
    </>
  );
};

export default GardenDetailPage;

import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import GardenDiaryItem from '../../components/garden/GardenDiaryItem';
import GardenCreateModal from '../../components/garden/GardenCreateModal';
import GardenDiaryModal from '../../components/garden/GardenDiaryModal';
import {
  Wrapper,
  GardenDetailImage,
  GardenDetailDescription,
  GardenDiaryWrapper,
} from '../../styles/garden/GardenDetailStyle';

const Dummy = {
  title: '해바라기',
  growDate: '22.09.05',
  content: '울희 귀염둥2',
};

const GardenDetailPage = () => {
  const { title, growDate, content } = Dummy;

  const [modalOpen, setModalOpen] = useState(false);
  const [diaryOpen, setDiaryOpen] = useState(false);

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
                <div className="garden-title">{title}</div>
                <button className="detail-btn">
                  <BackupTableIcon />
                  자세히 보기
                </button>
                <div className="grow-date">{growDate} ~</div>
              </div>
              <div className="garden-content">{content}</div>
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

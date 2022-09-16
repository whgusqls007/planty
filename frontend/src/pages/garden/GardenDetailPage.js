import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/esm/Container';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import GardenDiaryItem from '../../components/garden/GardenDiaryItem';

const Dummy = {
  title: '해바라기',
  growDate: '22.09.05',
  content: '울희 귀염둥2',
};

const GardenDetailPage = () => {
  const { title, growDate, content } = Dummy;
  return (
    <Container>
      <Wrapper>
        <button>식물 수정</button>
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
  );
};

const Wrapper = styled.div`
  position: relative;
  margin-top: 120px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 1200px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 576px) {
  }
  & > button {
    position: absolute;
    right: 0;
    transform: translateY(-140%);
    background-color: ${({ theme }) => theme.themeColor[1]};
    color: white;
    border: none;
    border-radius: 10px;
    width: 130px;
    height: 42px;
    font-size: 20px;
  }
  & .garden-header {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  & .garden-title {
    font-size: 30px;
    font-weight: 400;
  }
  & .detail-btn {
    background-color: ${({ theme }) => theme.themeColor[5]};
    position: absolute;
    right: 40px;
    border: 0;
    width: 120px;
    height: 34px;
    border-radius: 5px;
  }
`;

const GardenDetailImage = styled.img`
  width: 487px;
  height: 365px;
  background-color: ${({ theme }) => theme.themeColor[5]};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

const GardenDetailDescription = styled.div`
  width: 792px;
  height: 365px;

  padding: 50px;
  background: ${({ theme }) => theme.themeColor[2]};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

const GardenDiaryWrapper = styled.div`
  margin-top: 50px;
  font-size: 30px;
  font-weight: 400;
  padding-bottom: 200px;
  & .garden-diary-container {
    display: grid;
    grid-column-gap: 14px;
    @media (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (min-width: 768px) {
    }
    @media (min-width: 576px) {
    }
  }
`;

export default GardenDetailPage;

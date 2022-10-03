import React, { useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import TagButton from '../components/TagButton';
import HorizontalScroll from '../layout/HorizontalScroll';
import BigCard from '../components/main/BigCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import WorldCup2 from './worldcup/Worldcup2';
<<<<<<< HEAD
import Footer from '../layout/footer/Footer';

const Wrapper = styled.div`
  background: #44855d;
  width: 100%;
  padding: 1.5rem 0 3rem 0;

  & .mainTitle {
    font-weight: 700;
    font-size: 50px;
    padding-bottom: 1.5rem;
    color: white;
    font-style: normal;
    text-shadow: 0px 2px 5px gray;

    @media (max-width: 768px) {
      font-size: 2.5rem;
      padding-bottom: 1.3rem;
    }

    @media (max-width: 576px) {
      font-size: 1.7rem;
      padding-bottom: 1rem;
    }
  }
`;

const ButtonWrapper = styled.div`
  margin-left: 2%;
`;

const ContentTitle = styled.div`
  margin-top: 4%;
  margin-bottom: 5px;
  font-size: 2rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1%;
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;
    margin-bottom: -1%;
  }
`;

const ContentSubTitle = styled.span`
  margin-left: 20px;
  font-size: 1.5rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding-bottom: 0rem;
  }

  @media (max-width: 576px) {
    font-size: 0.8rem;
    padding-bottom: 0rem;
  }
`;

const WorldCupWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 2%;

  & button {
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.themeColor[5]};
    background-color: white;

    &:hover {
      background-color: ${({ theme }) => theme.themeColor[5]};
    }

    @media (max-width: 768px) {
      font-size: 1rem;
      padding-bottom: 0rem;
    }

    @media (max-width: 576px) {
      font-size: 0.8rem;
      padding-bottom: 0rem;
    }
  }
`;
=======
import {
  Wrapper,
  ButtonWrapper,
  ContentTitle,
  ContentSubTitle,
  WorldCupWrapper,
} from '../styles/index/IndexStyle.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPopularPlant,
  fetchPetSafetyPlants,
  fetchKeywordRecommend,
} from '../features/recommend/recommendActions';
import { useEffect } from 'react';
>>>>>>> 023ac0efcdb8e5be2d40656f51211ae375804a80

const arr = [
  '물을 자주 주는',
  '물을 가끔 주는',
  '습한 곳에서도 잘 자라는',
  '선물하기 좋은',
  '공기 정화용',
  '초보자가 키우기 쉬운',
  '가습 효과가 있는',
  // '책상 위에 두기 좋은',
];

const dummyPlants = [
  {
    cntntsNo: 1,
    cntntsSj: '칼라데아 세토사',
  },
  {
    cntntsNo: 2,
    cntntsSj: '칼라데아 진저',
  },
  {
    cntntsNo: 3,
    cntntsSj: '칼라데아 아마그리스',
  },
  {
    cntntsNo: 4,
    cntntsSj: '칼라데아 퓨전화이트',
  },
  {
    cntntsNo: 5,
    cntntsSj: '칼라데아 세토사',
  },
  {
    cntntsNo: 6,
    cntntsSj: '칼라데아 진저',
  },
  {
    cntntsNo: 7,
    cntntsSj: '칼라데아 아마그리스',
  },
  {
    cntntsNo: 8,
    cntntsSj: '칼라데아 퓨전화이트',
  },
];

const IndexPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { popularPlants, petsafePlants, keywordPlants } = useSelector(
    (state) => state.recommend,
  );

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    dispatch(fetchPopularPlant());
    dispatch(fetchPetSafetyPlants());
    dispatch(fetchKeywordRecommend(1));
  }, [dispatch]);

  return (
    <>
      <WorldCup2 modalOpen={modalOpen} closeModal={closeModal} />
      <Wrapper>
        <Container>
          <div className="mainTitle mt-3 pt-3">어떤 식물을 찾으시나요?</div>
          <ButtonWrapper>
            {arr.map((e, i) => {
              return <TagButton text={e} key={i} />;
            })}
          </ButtonWrapper>
        </Container>
      </Wrapper>
      <Container>
        <div>
          <ContentTitle>당신을 위한 맞춤 추천</ContentTitle>
          <WorldCupWrapper>
            <ContentSubTitle>이런 식물은 어떠세요?</ContentSubTitle>
            <button onClick={openModal}>이상형 월드컵</button>
          </WorldCupWrapper>
          <HorizontalScroll data={dummyPlants} />
        </div>
        <div>
          <ContentTitle>반려식물 이야기</ContentTitle>
          <ContentSubTitle>한번 읽어 보실래요?</ContentSubTitle>
          <div style={{ marginTop: '0.5rem' }}>
            <Row>
              {[1, 2, 3].map((e, i) => {
                return (
                  <Col md="4" key={i}>
                    <BigCard key={i} />
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
        <div>
          <ContentTitle>지금 유저들이 많이 키우는 식물</ContentTitle>
          <ContentSubTitle>Planty 유저들이 많이 키워요!</ContentSubTitle>
          <HorizontalScroll data={popularPlants} />
        </div>
        <div style={{ marginBottom: '10%' }}>
          <ContentTitle>반려동물에게 안전한 식물</ContentTitle>
          <ContentSubTitle>강아지도 고양이도 괜찮아요!</ContentSubTitle>
          <HorizontalScroll data={petsafePlants} />
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default IndexPage;

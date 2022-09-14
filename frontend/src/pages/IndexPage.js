import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import styled from 'styled-components';
import TagButton from '../components/TagButton';
import HorizontalScroll from '../layout/HorizontalScroll';
import BigCard from '../components/main/BigCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const Wrapper = styled.div`
  background: #44855d;
  width: 100%;
  padding-bottom: 3%;

  & .mainTitle {
    font-weight: 700;
    font-size: 50px;
    padding-bottom: 1rem;
    color: white;
    font-style: normal;
    line-height: 93px;
    text-shadow: 0px 2px 5px gray;
  }
`;

const ButtonWrapper = styled.div`
  margin-left: 2%;
`;

const ContentTitle = styled.div`
  margin-top: 4%;
  margin-bottom: 5px;
  font-size: 30px;
  font-weight: 600;
`;

const ContentSubTitle = styled.span`
  margin-left: 20px;
  font-size: 20px;
  font-weight: 600;
`;

const arr = [
  '물을 자주 주는',
  '물을 가끔 주는',
  '습한 곳에서도 잘 자라는',
  '선물하기 좋은',
  '공기 정화용',
  '초보자가 키우기 쉬운',
  '건조한 곳에서도 잘 자라는',
  '책상 위에 두기 좋은',
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
  return (
    <>
      <Wrapper>
        <Container>
          <div className="mainTitle mt-3 pt-3">어떤 식물을 찾으시나요?</div>
          <ButtonWrapper>
            {arr.map((e) => {
              return <TagButton text={e} />;
            })}
          </ButtonWrapper>
        </Container>
      </Wrapper>
      <Container>
        <div>
          <ContentTitle>당신을 위한 맞춤 추천</ContentTitle>
          <ContentSubTitle>이런 식물은 어떠세요?</ContentSubTitle>
          <HorizontalScroll data={dummyPlants} />
        </div>
        <div>
          <ContentTitle>반려식물 이야기</ContentTitle>
          <ContentSubTitle>한번 읽어 보실래요?</ContentSubTitle>
          <div style={{ marginTop: '2%' }}>
            <Row>
              {[1, 2, 3].map((e, i) => {
                return (
                  <Col lg="4">
                    <BigCard />
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
        <div>
          <ContentTitle>지금 유저들이 많이 키우는 식물</ContentTitle>
          <ContentSubTitle>풀리 유저들이 많이 키워요!</ContentSubTitle>
          <HorizontalScroll data={dummyPlants} />
        </div>
        <div style={{ marginBottom: '10%' }}>
          <ContentTitle>반려동물에게 안전한 식물</ContentTitle>
          <ContentSubTitle>강아지도 고양이도 괜찮아요!</ContentSubTitle>
          <HorizontalScroll data={dummyPlants} />
        </div>
      </Container>
    </>
  );
};

export default IndexPage;

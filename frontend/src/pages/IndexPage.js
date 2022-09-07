import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import styled from 'styled-components';
import TagButton from '../components/TagButton';
import HorizontalScroll from '../layout/HorizontalScroll';

const Wrapper = styled.div`
  background: #44855d;
  width: 100%;
  padding-bottom: 3%;

  & .title {
    font-weight: 700;
    font-size: 40px;
    color: white;
    font-style: normal;
    line-height: 93px;
    text-shadow: 0px 2px 5px gray;
  }
`;

const ButtonWrapper = styled.div`
  margin-left: 2%;
`;

const FisrtList = styled.div`
  margin-top: 4%;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 600;
`;

const Span = styled.span`
  margin-left: 20px;
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
          <div className="title mt-3 pt-3">어떤 식물을 찾으시나요?</div>
          <ButtonWrapper>
            {arr.map((e) => {
              return <TagButton text={e} />;
            })}
          </ButtonWrapper>
        </Container>
      </Wrapper>
      <Container>
        <FisrtList>당신을 위한 맞춤 추천</FisrtList>
        <Span>이런 식물은 어떠세요?</Span>
        <HorizontalScroll data={dummyPlants} />
      </Container>
    </>
  );
};

export default IndexPage;

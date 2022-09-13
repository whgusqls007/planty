import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import styled from 'styled-components';
import Card from '../../components/magazine/Card';

const Wrapper = styled.div`
  margin: 0 5% 0 5%;
  padding-bottom: 10%;
  display: flex;
  flex-wrap: wrap;
`;

const dummyData = [
  {
    title: '1제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
    writer: '드루이드',
    date: '22.09.04',
    content:
      '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
  },
  {
    title: '2제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
    writer: '드루이드',
    date: '22.09.04',
    content:
      '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
  },
  {
    title: '3제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
    writer: '드루이드',
    date: '22.09.04',
    content:
      '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
  },
  {
    title: '4제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
    writer: '드루이드',
    date: '22.09.04',
    content:
      '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
  },
  {
    title: '5제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
    writer: '드루이드',
    date: '22.09.04',
    content:
      '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
  },
  {
    title: '6제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
    writer: '드루이드',
    date: '22.09.04',
    content:
      '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
  },
  {
    title: '7제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
    writer: '드루이드',
    date: '22.09.04',
    content:
      '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
  },
  {
    title: '8제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
    writer: '드루이드',
    date: '22.09.04',
    content:
      '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
  },
  {
    title: '9제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
    writer: '드루이드',
    date: '22.09.04',
    content:
      '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
  },
  {
    title: '10제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
    writer: '드루이드',
    date: '22.09.04',
    content:
      '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
  },
  {
    title: '11제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
    writer: '드루이드',
    date: '22.09.04',
    content:
      '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
  },
];

const MagazinePage = () => {
  return (
    <Container>
      <Wrapper>
        {dummyData.map((e, i) => {
          return (
            <Col lg="4">
              <Card data={e} />
            </Col>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default MagazinePage;

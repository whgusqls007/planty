import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import styled from 'styled-components';
import Card from '../../components/magazine/Card';
import Pagination from '../../layout/Pagination';
import { useEffect, useState } from 'react';

const Wrapper = styled.div`
  margin: 6% 5% 0 5%;
  display: flex;
  flex-wrap: wrap;
`;

const PagingList = styled.li`
  list-style-type: none;
  float: left;
  padding: 10px 15px 10px 15px;
  border-radius: 5px;
  font-size: 20px;
  margin: 0px 1% 0px 1%;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    background-color: ${({ theme }) => theme.themeColor[5]};
    cursor: pointer;
    transition: transform 0.3s;
    transform: scale3d(1.05, 1.05, 1.05);
  }
`;

const ListWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  & .active {
    border: 1px solid ${({ theme }) => theme.themeColor[5]};
  }
`;

// const dummyData = [
//   {
//     title: '1제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
//     writer: '드루이드',
//     date: '22.09.04',
//     content:
//       '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
//   },
//   {
//     title: '2제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
//     writer: '드루이드',
//     date: '22.09.04',
//     content:
//       '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
//   },
//   {
//     title: '3제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
//     writer: '드루이드',
//     date: '22.09.04',
//     content:
//       '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
//   },
//   {
//     title: '4제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
//     writer: '드루이드',
//     date: '22.09.04',
//     content:
//       '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
//   },
//   {
//     title: '5제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
//     writer: '드루이드',
//     date: '22.09.04',
//     content:
//       '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
//   },
//   {
//     title: '6제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
//     writer: '드루이드',
//     date: '22.09.04',
//     content:
//       '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
//   },
//   {
//     title: '7제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
//     writer: '드루이드',
//     date: '22.09.04',
//     content:
//       '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
//   },
//   {
//     title: '8제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
//     writer: '드루이드',
//     date: '22.09.04',
//     content:
//       '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
//   },
//   {
//     title: '9제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
//     writer: '드루이드',
//     date: '22.09.04',
//     content:
//       '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
//   },
//   {
//     title: '10제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
//     writer: '드루이드',
//     date: '22.09.04',
//     content:
//       '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
//   },
//   {
//     title: '11제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
//     writer: '드루이드',
//     date: '22.09.04',
//     content:
//       '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
//   },
//   {
//     title: '12제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
//     writer: '드루이드',
//     date: '22.09.04',
//     content:
//       '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
//   },
//   {
//     title: '13제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
//     writer: '드루이드',
//     date: '22.09.04',
//     content:
//       '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
//   },
//   {
//     title: '14제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
//     writer: '드루이드',
//     date: '22.09.04',
//     content:
//       '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
//   },
//   {
//     title: '15제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
//     writer: '드루이드',
//     date: '22.09.04',
//     content:
//       '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
//   },
//   {
//     title: '16제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
//     writer: '드루이드',
//     date: '22.09.04',
//     content:
//       '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
//   },
//   {
//     title: '17제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
//     writer: '드루이드',
//     date: '22.09.04',
//     content:
//       '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
//   },
//   {
//     title: '18제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
//     writer: '드루이드',
//     date: '22.09.04',
//     content:
//       '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
//   },
//   {
//     title: '19제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
//     writer: '드루이드',
//     date: '22.09.04',
//     content:
//       '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
//   },
//   {
//     title: '20제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
//     writer: '드루이드',
//     date: '22.09.04',
//     content:
//       '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
//   },
//   {
//     title: '21제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
//     writer: '드루이드',
//     date: '22.09.04',
//     content:
//       '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
//   },
//   {
//     title: '22제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
//     writer: '드루이드',
//     date: '22.09.04',
//     content:
//       '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
//   },
//   {
//     title: '23제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
//     writer: '드루이드',
//     date: '22.09.04',
//     content:
//       '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
//   },
//   {
//     title: '24제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
//     writer: '드루이드',
//     date: '22.09.04',
//     content:
//       '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
//   },
//   {
//     title: '25제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ',
//     writer: '드루이드',
//     date: '22.09.04',
//     content:
//       '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ',
//   },
// ];

const MagazinePage = () => {
  const [current, setCurrent] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [listArray, setListArray] = useState([]);
  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState(false);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(9);
  const [dummyData, setDummyData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    fetch(`http://127.0.0.1:8080/test/totalCount`, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => setTotalCount(data));

    fetch(`http://127.0.0.1:8080/test/${offset}/${limit}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setDummyData(data);
      });
  }, []);

  useEffect(() => {
    setPageCount(Math.ceil(totalCount / 9));
    let array = [];
    if (pageCount > 5) {
      for (let i = 0; i < 5; i++) {
        array.push(current + i);
      }
    } else {
      for (let i = 0; i < pageCount; i++) {
        array.push(i);
      }
    }
    setListArray(array);
  }, [pageCount, totalCount]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8080/test/${offset}/${limit}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setDummyData(data);
      });

    let array = [];
    if (current % 5 === 1 && next) {
      if (current + 5 < pageCount) {
        for (let i = current; i < current + 5; i++) {
          array.push(i);
        }
      } else {
        for (let i = current; i < pageCount + 1; i++) {
          array.push(i);
        }
      }
      setListArray(array);
    } else if (current % 5 === 0 && prev) {
      for (let i = current - 4; i < current + 1; i++) {
        array.push(i);
      }
      setListArray(array);
    }
  }, [current]);

  return (
    <Container>
      <Wrapper>
        {dummyData.map((e, i) => {
          return (
            <Col xl="4" lg="4" md="4" sm="12" xs="12" key={i}>
              <Card data={e} key={i} />
            </Col>
          );
        })}
      </Wrapper>

      <ListWrapper>
        {pageCount > 5 ? (
          <PagingList
            onClick={() => {
              if (current !== 1) {
                setCurrent(current - 1);
                setPrev(true);
                setNext(false);
                setOffset(offset - 9);
                setLimit(limit - 9);
              }
            }}
          >{`<`}</PagingList>
        ) : null}
        {listArray.map((e, i) => {
          return (
            <PagingList
              className={current === e ? 'active' : ''}
              onClick={() => {
                setCurrent(e);
                setNext(false);
                setPrev(false);
                setOffset((e - 1) * 9);
                setLimit((e - 1) * 9 + 9);
              }}
              key={i}
            >
              {e}
            </PagingList>
          );
        })}

        {pageCount > 5 ? (
          <PagingList
            onClick={() => {
              if (current !== pageCount) {
                setCurrent(current + 1);
                setNext(true);
                setPrev(false);
                setOffset(limit);
                setLimit(limit + 9);
              }
            }}
          >{`>`}</PagingList>
        ) : null}
      </ListWrapper>
    </Container>
  );
};

export default MagazinePage;

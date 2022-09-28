import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import styled from 'styled-components';
import Card from '../../components/magazine/Card';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  margin: 3% 5% 0 5%;
  display: flex;
  flex-wrap: wrap;

  & a {
    text-decoration: none;
    color: black;
  }
`;

const PagingList = styled.li`
  list-style-type: none;
  float: left;
  padding: 10px 15px 10px 15px;
  border-radius: 5px;
  font-size: 20px;
  margin: 0px 1% 0px 1%;

  @media (max-width: 576px) {
    margin: 0 0 0 0;
    padding: 5px 10px 5px 10px;
    font-size: 15px;
  }

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
  margin: 0 2rem 2rem 0;

  & .active {
    border: 1px solid ${({ theme }) => theme.themeColor[5]};
  }
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 1px;
  position: relative;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & .effect {
    border: 0;
    padding: 2px 6% 2px 11%;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    width: 50%;
    transition: 0.6s;

    @media (max-width: 768px) {
      outline: none;
      transition: 0.6s;
      padding: 2px 6% 2px 16%;
      width: 75%;
    }

    &:focus {
      outline: none;
      transition: 0.6s;
      padding: 8px 6% 8px 11%;

      @media (max-width: 768px) {
        outline: none;
        transition: 0.6s;
        padding: 8px 6% 8px 16%;
      }
    }
  }

  & .effect ~ .focus-border {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #4caf50;
    transition: 0.6s;

    @media (max-width: 768px) {
      left: 50%;
    }
  }

  & .effect:focus ~ .focus-border {
    position: absolute;
    width: 50%;
    transition: 0.6s;
    left: 25%;

    @media (max-width: 768px) {
      width: 75%;
      left: 12.5%;
    }
  }

  & .search-button {
    position: absolute;
    right: 25%;
    width: 5%;

    @media (max-width: 768px) {
      right: 12.5%;
    }
  }

  & select {
    position: absolute;
    text-align: center;
    width: 10%;
    left: 25%;
    height: 100%;
    border: 0px;
    border-right: 1px dotted #ccc;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    transition: 0.6s;

    @media (max-width: 768px) {
      width: 15%;
      left: 12.5%;
    }
  }
`;

const InputButton = styled.div`
  background-color: white;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const SubInputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1%;
  width: 100%;
  justify-content: space-around;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & a {
    color: inherit;
    text-decoration: none;
  }
  & .tag {
    width: 100px;
    text-align: center;
    margin-left: 3%;
    padding: 2px 6px 2px 6px;
    border-radius: 6px;

    @media (max-width: 768px) {
      width: 90px;
      text-align: center;
      margin-left: 3%;
      padding: 2px 6px 2px 6px;
      border-radius: 6px;
    }

    @media (max-width: 576px) {
      font-size: 13px;
      width: 75px;
      text-align: center;
      margin-left: 3%;
      padding: 2px 6px 2px 6px;
      border-radius: 6px;
    }
  }

  & .tag:hover {
    background-color: ${({ theme }) => theme.themeColor[5]};
  }

  & active {
    border: 1px solid ${({ theme }) => theme.themeColor[5]};
  }
`;

const SortingButton = styled.div`
  display: flex;
  flex-direction: row;
`;

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
  const [content, setContent] = useState('');
  // 0 최신순 1 좋아요순 2 댓글순
  const [sorting, setSorting] = useState(0);

  const activeEffect = {
    border: '1px solid #4caf50',
    padding: '1px 5px 1px 5px',
  };

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
    <>
      <Container>
        <InputBox>
          <input
            id="searchText"
            className="effect"
            type="text"
            onChange={(text) => {
              setContent(text.target.value);
            }}
            style={
              content !== ''
                ? { paddingTop: '8px', paddingBottom: '8px' }
                : { paddingTop: '2px', paddingBottom: '2px' }
            }
          />
          <span className="focus-border"></span>
          <select>
            <option>제목</option>
            <option>글쓴이</option>
          </select>
          <InputButton
            className="search-button"
            style={
              content === ''
                ? { display: 'none' }
                : { display: 'block', zIndex: '999' }
            }
            onClick={() => {
              alert(content);
            }}
          >
            <SearchIcon />
          </InputButton>
        </InputBox>
        <SubInputBox>
          <SortingButton>
            <div
              className="tag"
              style={sorting === 0 ? activeEffect : null}
              onClick={() => {
                setSorting(0);
              }}
            >
              최신순
            </div>
            <div
              className="tag"
              style={sorting === 1 ? activeEffect : null}
              onClick={() => {
                setSorting(1);
              }}
            >
              좋아요순
            </div>
            <div
              className="tag"
              style={sorting === 2 ? activeEffect : null}
              onClick={() => {
                setSorting(2);
              }}
            >
              댓글순
            </div>
          </SortingButton>
          <Link to="/magazine/magazineinput">
            <div className="tag">글쓰기</div>
          </Link>
        </SubInputBox>
        <Wrapper>
          <Col md="4" sm="12" xs="12">
            <Link to={`/magazine/어떤키값`}>
              <Card
                data={{
                  title: 'asd',
                  writer: 'sad',
                  date: 'asdf',
                  content: `"<p>asdfㄹㅇㅁㅇㄻㄴㅇㄻㄴㅁㄴㅇㄹd</p><figure class="image"><img src="data:image/png;base64,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"></figure>"`,
                }}
              />
            </Link>
          </Col>

          {dummyData.map((e, i) => {
            return (
              <Col md="4" sm="12" xs="12" key={i}>
                <Link to={`/magazine/어떤키값`}>
                  <Card data={e} key={i} />
                </Link>
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
      {/* <Link to="/magazine/magazineinput">
        <FloatButton>
          <div className="my-float">글쓰기</div>
        </FloatButton>
      </Link> */}
    </>
  );
};

export default MagazinePage;

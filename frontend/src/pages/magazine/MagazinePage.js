import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import styled from 'styled-components';
import Card from '../../components/magazine/Card';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
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

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 1px;
  position: relative;

  & .effect {
    border: 0;
    padding: 2px 6% 2px 6%;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    width: 50%;
    transition: 0.6s;

    @media (max-width: 768px) {
      outline: none;
      transition: 0.6s;
      padding: 2px 8% 2px 8%;
      width: 75%;
    }

    &:focus {
      outline: none;
      transition: 0.6s;
      padding: 8px 6% 8px 6%;

      @media (max-width: 768px) {
        outline: none;
        transition: 0.6s;
        padding: 8px 8% 8px 8%;
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
    width: 5%;
    left: 25%;
    height: 100%;
    border: 0px;
    border-right: 1px dotted #ccc;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    transition: 0.6s;

    @media (max-width: 768px) {
      width: 7%;
      left: 12.5%;
    }
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

const FloatButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;

  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 15%;

  background-color: ${({ theme }) => theme.themeColor[5]};
  color: #fff;
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
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
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <SearchIcon
            className="search-button"
            style={content === '' ? { display: 'none' } : { display: 'block' }}
          >
            adsas
          </SearchIcon>
        </InputBox>
        <Wrapper>
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
      <Link to="/magazine/magazineinput">
        <FloatButton>
          <div className="my-float">글쓰기</div>
        </FloatButton>
      </Link>
    </>
  );
};

export default MagazinePage;

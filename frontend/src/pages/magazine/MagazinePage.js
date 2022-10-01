import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import styled from 'styled-components';
import Card from '../../components/magazine/Card';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  fetchMagazineList,
  fetchMagazineListForPagination,
} from '../../features/magazine/magazineActions';

import { useDispatch, useSelector } from 'react-redux';

import {
  setCurrentOffsetLimit,
  setPrevCurrent,
  setSorting,
} from '../../features/magazine/magazineSlice';

const MagazinePage = () => {
  const dispatch = useDispatch();
  const [searchWord, setSearchWord] = useState('');
  const [searchBy, setSearchBy] = useState(0);
  const { magazineList, pageCount, current, offset, limit, array, sorting } =
    useSelector((state) => state.magazine);
  const { userInfo } = useSelector((state) => state.user);

  const activeEffect = {
    border: '1px solid #4caf50',
    padding: '1px 5px 1px 5px',
  };

  useEffect(() => {
    dispatch(
      fetchMagazineList({
        offset: offset,
        limit: 9,
        sorting: sorting,
        search: null,
        searchBy: searchBy,
      }),
    );
  }, [sorting]);

  useEffect(() => {
    dispatch(
      fetchMagazineListForPagination({
        offset: offset,
        limit: 9,
        sorting: sorting,
        search:
          searchWord !== undefined && searchWord !== '' ? searchWord : null,
        searchBy: searchBy,
      }),
    );
  }, [current]);

  const onKeyDownHandler = (e) => {
    if (e.key === 'Enter') {
      dispatch(
        fetchMagazineList({
          offset: offset,
          limit: 9,
          sorting: sorting,
          search:
            searchWord !== undefined && searchWord !== '' ? searchWord : null,
          searchBy: searchBy,
        }),
      );
    }
  };

  const searchHandler = () => {
    dispatch(
      fetchMagazineList({
        offset: offset,
        limit: 9,
        sorting: sorting,
        search:
          searchWord !== undefined && searchWord !== '' ? searchWord : null,
        searchBy: searchBy,
      }),
    );
  };

  return (
    <>
      <Container>
        <InputBox>
          <input
            id="searchText"
            className="effect"
            type="text"
            onChange={(text) => {
              setSearchWord(text.target.value);
            }}
            style={
              searchWord !== ''
                ? { paddingTop: '8px', paddingBottom: '8px' }
                : { paddingTop: '2px', paddingBottom: '2px' }
            }
            value={searchWord}
            onKeyDown={onKeyDownHandler}
          />
          <span className="focus-border"></span>
          <select
            onChange={(e) => {
              setSearchBy(e.target.value);
            }}
          >
            <option value="0">제목</option>
            <option value="1">글쓴이</option>
            <option value="2">내용</option>
            <option value="3">제목+내용</option>
          </select>
          <InputButton
            className="search-button"
            style={
              searchWord === ''
                ? { display: 'none' }
                : { display: 'block', zIndex: '999' }
            }
            onClick={searchHandler}
          >
            <SearchIcon style={{ cursor: 'pointer' }} />
          </InputButton>
        </InputBox>
        <SubInputBox>
          <SortingButton>
            <div
              className="tag"
              style={sorting === 0 ? activeEffect : null}
              onClick={() => {
                dispatch(setSorting({ sorting: 0 }));
              }}
            >
              최신순
            </div>
            <div
              className="tag"
              style={sorting === 1 ? activeEffect : null}
              onClick={() => {
                dispatch(setSorting({ sorting: 1 }));
              }}
            >
              좋아요순
            </div>
            <div
              className="tag"
              style={sorting === 2 ? activeEffect : null}
              onClick={() => {
                dispatch(setSorting({ sorting: 2 }));
              }}
            >
              댓글순
            </div>
          </SortingButton>
          {userInfo && (
            <Link to="/magazine/magazineinput">
              <div className="tag">글쓰기</div>
            </Link>
          )}
        </SubInputBox>
        <Wrapper>
          {magazineList !== null || magazineList !== undefined
            ? magazineList.map((e, i) => {
                return (
                  <Col md="4" sm="12" xs="12" key={i}>
                    <Link
                      to={`/magazine/${e.id}`}
                      onClick={() => {
                        dispatch(
                          setPrevCurrent({
                            prevCurrent: current,
                            prevSorting: sorting,
                          }),
                        );
                      }}
                    >
                      <Card data={e} key={i} />
                    </Link>
                  </Col>
                );
              })
            : null}
        </Wrapper>
        <ListWrapper>
          {pageCount > 5 ? (
            <PagingList
              onClick={() => {
                if (current !== 0) {
                  dispatch(setCurrentOffsetLimit({ current: current - 1 }));
                }
              }}
            >{`<`}</PagingList>
          ) : null}
          {array.map((e, i) => {
            return (
              <PagingList
                className={current === e ? 'active' : ''}
                onClick={() => {
                  dispatch(setCurrentOffsetLimit({ current: e }));
                }}
                key={i}
              >
                {e + 1}
              </PagingList>
            );
          })}

          {pageCount > 5 ? (
            <PagingList
              onClick={() => {
                if (current !== pageCount - 1) {
                  dispatch(setCurrentOffsetLimit({ current: current + 1 }));
                }
              }}
            >{`>`}</PagingList>
          ) : null}
        </ListWrapper>
      </Container>
    </>
  );
};

const Wrapper = styled.div`
  margin: 3% 5% 0 5%;
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
    background-color: rgba(0, 0, 0, 0);

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

export default MagazinePage;

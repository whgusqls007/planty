import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Card from '../../components/magazine/Card';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Wrapper,
  PagingList,
  ListWrapper,
  InputBox,
  InputButton,
  SubInputBox,
  SortingButton,
} from './css/MagazinePageCss';
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

export default MagazinePage;

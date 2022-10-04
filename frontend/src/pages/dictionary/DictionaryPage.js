import React, { useEffect, useState, useMemo, useRef } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import PlantItem from '../../components/dictionary/PlantItem';
import Container from 'react-bootstrap/esm/Container';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPlantListPagination,
  searchPlant,
} from '../../features/dictionary/dictionaryAction';
import { clearSearchResult } from '../../features/dictionary/dictionarySlice';
import { Pagination } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Wrapper,
  PlantSearchForm,
  SearchResult,
  SearchItemWrapper,
  DictionaryPageWrapper,
} from '../../styles/dictionary/DictionaryStyle';
import DictionaryTag from '../../components/dictionary/DictionaryTag';

const DictionaryPage = () => {
  const dictionaryTitle = '우리가아는모든식물'.split('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [pageNum, setPageNum] = useState(null);
  const [focused, setFocused] = useState(false);
  const [keyword, setKeyword] = useState(null);
  const [limit, setLimit] = useState(12);
  const searchRef = useRef(null);
  const { plantList, plantTotalCount, loading, searchResult } = useSelector(
    (state) => state.dictionary,
  );

  const tagList = [
    '물을 자주 주는',
    '물을 가끔 주는',
    '습한 곳에서도 잘 자라는',
    '선물하기 좋은',
    '공기 정화용',
    '초보자가 키우기 쉬운',
    '가습 효과가 있는',
  ];

  useEffect(() => {
    dispatch(clearSearchResult());
  }, []);

  // useEffect(() => {}, [dispatch, pageNum]);

  useEffect(() => {
    const query = parseInt(searchParams.get('pageNum'))
      ? parseInt(searchParams.get('pageNum'))
      : 1;
    setPageNum(query);
    const offset = (query - 1) * 12;
    const filter = parseInt(searchParams.get('filter'))
      ? parseInt(searchParams.get('filter'))
      : 0;
    if (!filter) {
      dispatch(fetchPlantListPagination({ limit, offset }));
    } else {
      dispatch(fetchPlantListPagination({ limit, offset }));
    }
  }, [searchParams, dispatch, pageNum]);

  // useEffect(() => {
  //   const filter = parseInt(searchParams.get('filter'))
  //     ? parseInt(searchParams.get('filter'))
  //     : 0;
  // }, [searchParams]);

  const searchResultOpen = () => {
    setFocused(true);
  };

  const searchInputChangeHandler = (e) => {
    if (e.target.value) {
      dispatch(searchPlant(e.target.value));
    }
    setKeyword(e.target.value);
  };

  return (
    <div
      onClick={(e) => {
        if (!searchRef.current.contains(e.target)) {
          setFocused(false);
        }
      }}
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <DictionaryPageWrapper>
        <Wrapper>
          <div className="content">
            <div className="dict-header">
              <div className="title">
                {dictionaryTitle.map((e, idx) => (
                  <span key={idx}>{e}</span>
                ))}
              </div>
              <PlantSearchForm ref={searchRef}>
                <input
                  type="text"
                  className="dictionary-search-input"
                  onChange={searchInputChangeHandler}
                  onFocus={searchResultOpen}
                />
                <SearchIcon
                  className="search-icon"
                  onClick={() => {
                    alert('asdfadfs');
                  }}
                />
                <SearchResult
                  visible={focused && keyword && searchResult.length !== 0}
                >
                  {searchResult.map((plant, idx) => (
                    <SearchItem plant={plant} key={idx} />
                  ))}
                </SearchResult>
              </PlantSearchForm>
              <DictionaryTag tagList={tagList} />
            </div>
            {plantList && !loading && (
              <div className="plantList">
                {plantList.map((plant, idx) => {
                  return <PlantItem plant={plant} key={idx} />;
                })}
              </div>
            )}
          </div>
          {pageNum && (
            <Pagination
              count={Math.ceil(plantTotalCount / limit)}
              shape="rounded"
              page={pageNum}
              onChange={(e, page) => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                navigate(`/dictionary?pageNum=${page}`, { replace: true });
              }}
            />
          )}
        </Wrapper>
      </DictionaryPageWrapper>
    </div>
  );
};

const SearchItem = ({ plant }) => {
  const navigate = useNavigate();
  const { id, plant_no, plant_name, img_url, manage_level } = plant;
  return (
    <SearchItemWrapper onClick={() => navigate(`/dictionary/${id}`)}>
      <img src={img_url} alt="" />
      {plant_name}
    </SearchItemWrapper>
  );
};

export default DictionaryPage;

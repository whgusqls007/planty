import React, { useEffect, useState, useMemo, useRef } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import PlantItem from '../../components/dictionary/PlantItem';
import Container from 'react-bootstrap/esm/Container';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPlantList,
  searchPlant,
} from '../../features/dictionary/dictionaryAction';
import { clearSearchResult } from '../../features/dictionary/dictionarySlice';
import { Pagination } from '@mui/material';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

const DictionaryPage = () => {
  const dictionaryTitle = '우리가아는모든식물'.split('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [pageNum, setPageNum] = useState(1);
  const [focused, setFocused] = useState(false);
  const [keyword, setKeyword] = useState(null);
  const searchRef = useRef(null);

  useEffect(() => {
    dispatch(clearSearchResult());
  }, []);

  useEffect(() => {
    dispatch(fetchPlantList());
  }, [dispatch]);

  useEffect(() => {
    const query = parseInt(searchParams.get('pageNum'))
      ? parseInt(searchParams.get('pageNum'))
      : 1;
    setPageNum(query);
  }, [searchParams]);

  const { plantList, searchResult } = useSelector((state) => state.dictionary);

  const searchResultOpen = () => {
    setFocused(true);
  };

  // memo
  const plantListPagination = useMemo(() => {
    return plantList.slice((pageNum - 1) * 12, (pageNum - 1) * 12 + 12);
  });

  const searchInputChangeHandler = (e) => {
    if (e.target.value) {
      dispatch(searchPlant(e.target.value));
    }
    setKeyword(e.target.value);
  };

  return (
    <div
      onClick={(e) => {
        console.log(
          searchRef.current,
          e.target,
          searchRef.current.contains(e.target),
        );
        if (!searchRef.current.contains(e.target)) {
          setFocused(false);
        }
      }}
    >
      <Container>
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
            </div>
            {plantList && (
              <div className="plantList">
                {plantListPagination.map((plant, idx) => {
                  return <PlantItem plant={plant} key={idx} />;
                })}
              </div>
            )}
          </div>
          <Pagination
            count={Math.ceil(plantList.length / 20)}
            shape="rounded"
            onChange={(e, page) => {
              window.scrollTo({ top: 0, behavior: 'instant' });
              navigate(`/dictionary?pageNum=${page}`, { replace: true });
            }}
          />
        </Wrapper>
      </Container>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  & .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1440px;
    margin-top: 60px;
    margin-bottom: 20px;
  }

  & .dict-header {
    width: 100%;
  }

  & .title {
    display: flex;
    justify-content: space-around;
    padding: 0 10px;
    width: 80%;
    margin-left: 10%;

    & span {
      font-size: 2.5rem;
      font-weight: 700;

      @media (max-width: 768px) {
        font-weight: 600;
        font-size: 1.7rem;
      }

      @media (max-width: 576px) {
        font-weight: 500;
        font-size: 1.4rem;
      }
    }
  }

  & .plantList {
    width: 100%;
    margin-top: 3rem;
    /* display: grid;
    grid-template-columns: repeat(4, 1fr); */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); */
    /* grid-gap: 30px; */
  }
`;

const PlantSearchForm = styled.form`
  margin-top: 2rem;
  margin-left: 10%;
  width: 80%;
  height: 100%;
  background: ${({ theme }) => theme.themeColor[5]};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  padding: 0.5rem 2rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 0rem 2rem;
    margin-left: 0%;
    width: 100%;
  }

  @media (max-width: 576px) {
    padding: 0rem 2rem;
    margin-left: 5%;
    width: 90%;
  }

  & input {
    height: 100%;
    background-color: transparent;
    color: white;
    border: 0;
    flex-grow: 1;
    &:focus {
      outline: none;
    }
  }

  & .search-icon {
    color: white;
    font-size: 2rem;
    cursor: pointer;
    position: absolute;
    right: 5%;
  }
`;

const SearchResult = styled.div`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  flex-direction: column;
  font-size: 1rem;
  /* border: 1px solid black; */
  box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
  width: 100%;
  z-index: 99;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
`;

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

const SearchItemWrapper = styled.div`
  display: flex;
  font-size: 1.5rem;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #dbdbdb;
  }
  & img {
    /* width: 50%; */
    /* max-width: 200px; */
    width: 200px;
    height: 200px;
    margin-right: 1rem;
    object-fit: cover;
    object-position: center;
    @media (max-width: 425px) {
      width: 150px;
      height: 150px;
    }
  }
  & a {
    text-decoration: none;
    color: inherit;
  }
`;

export default DictionaryPage;

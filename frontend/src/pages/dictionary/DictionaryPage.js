import React, { useEffect } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import PlantItem from '../../components/dictionary/PlantItem';
import Container from 'react-bootstrap/esm/Container';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlantList } from '../../features/dictionary/dictionaryAction';

const DictionaryPage = () => {
  const dictionaryTitle = '우리가아는모든식물'.split('');
  const dummyPlants = [
    {
      cntntsNo: 1,
      cntntsSj: '칼라데아 세토사',
      plantLevel: 1,
    },
    {
      cntntsNo: 2,
      cntntsSj: '칼라데아 진저',
      plantLevel: 2,
    },
    {
      cntntsNo: 3,
      cntntsSj: '칼라데아 아마그리스',
      plantLevel: 3,
    },
    {
      cntntsNo: 4,
      cntntsSj: '칼라데아 퓨전화이트',
      plantLevel: 4,
    },
    {
      cntntsNo: 5,
      cntntsSj: '칼라데아 세토사',
      plantLevel: 1,
    },
    {
      cntntsNo: 6,
      cntntsSj: '칼라데아 진저',
      plantLevel: 2,
    },
    {
      cntntsNo: 7,
      cntntsSj: '칼라데아 아마그리스',
      plantLevel: 3,
    },
    {
      cntntsNo: 8,
      cntntsSj: '칼라데아 퓨전화이트',
      plantLevel: 4,
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPlantList());
  }, [dispatch]);

  const { plantList } = useSelector((state) => state.dictionary);

  return (
    <Container>
      <Wrapper>
        <div className="content">
          <div className="dict-header">
            <div className="title">
              {dictionaryTitle.map((e, idx) => (
                <span key={idx}>{e}</span>
              ))}
            </div>
            <form>
              <input type="text" className="dictionary-search-input" />
              <SearchIcon
                className="search-icon"
                onClick={() => {
                  alert('asdfadfs');
                }}
              />
            </form>
          </div>
          {plantList && (
            <div className="plantList">
              {plantList.map((plant, idx) => {
                return <PlantItem plant={plant} key={idx} />;
              })}
            </div>
          )}
        </div>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  & .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1440px;
    margin-top: 60px;
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

  & form {
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

export default DictionaryPage;

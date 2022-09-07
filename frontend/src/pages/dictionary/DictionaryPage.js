import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import PlantItem from '../../components/dictionary/PlantItem';
import Container from 'react-bootstrap/esm/Container';

const Wrapper = styled.div`
  /* width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    & {
    }
  } */
  & .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1440px;
    margin-top: 60px;
  }
  & .title {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    & span {
      font-size: 2.5rem;
      font-weight: 700;
    }
  }
  & form {
    margin-top: 2rem;
    width: 700px;
    height: 80px;
    background: ${({ theme }) => theme.themeColor[5]};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    font-size: 2rem;
    display: flex;
    align-items: center;
    padding: 0rem 2rem;
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
              <SearchIcon className="search-icon" />
            </form>
          </div>
          <div className="plantList">
            {dummyPlants.map((plant, idx) => {
              return <PlantItem plant={plant} key={idx} />;
            })}
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default DictionaryPage;

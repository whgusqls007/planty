import styled from 'styled-components';

export const DictionaryPageWrapper = styled.div`
  /* border: 1px solid black; */
  @media (max-width: 576px) {
    width: calc(100vw - 40px);
    /* margin-left: 18px; */
  }
  @media (min-width: 576px) {
    width: calc(100vw - 120px);
    /* margin-left: 18px; */
  }
  @media (min-width: 768px) {
    /* max-width: 720px; */
  }
  @media (min-width: 992px) {
    width: calc(100vw - 120px);
    /* max-width: 960px; */
  }
  @media (min-width: 1200px) {
    /* max-width: 1140px; */
  }
  @media (min-width: 1400px) {
    width: 1280px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  & .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /* max-width: 1440px; */
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
    justify-content: space-between;
    /* grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); */
    /* grid-gap: 30px; */
  }
`;

export const PlantSearchForm = styled.form`
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
    width: 80%;
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

export const SearchResult = styled.div`
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

export const SearchItemWrapper = styled.div`
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
`;

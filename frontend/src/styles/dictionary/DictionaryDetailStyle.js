import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1080px;
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  & .dictionary-detail-header {
    display: flex;
    @media (max-width: 767px) {
      flex-direction: column;
    }
  }
  & .dictionary-detail-body {
    & .grow-info-div {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 10px;
      padding: 10px 0px;
    }
  }
`;

export const PlantImg = styled.img`
  /* width: 100%; */
  width: 450px;
  height: 300px;
  border-radius: 10px;
  /* background-color: ${({ theme }) => theme.themeColor[5]}; */
  object-fit: cover;
  object-position: center;
  margin-right: 25px;
  @media (max-width: 767px) {
    margin-right: 0;
    width: 100%;
  }
`;

export const GrowInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #d9d9d9;
  padding: 0.5rem 1rem;
  height: 120px;
  @media (max-width: 767px) {
    font-size: 0.8rem;
    padding: 5px;
    height: 60px;
  }
  & img {
    width: 70px;
    height: 70px;
    margin-right: 10px;
    @media (max-width: 767px) {
      width: 40px;
      height: 40px;
      margin-right: 6px;
    }
  }
`;

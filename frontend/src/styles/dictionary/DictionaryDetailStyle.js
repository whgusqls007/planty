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
    & .grow-info-container {
      display: flex;
      flex-direction: column;
      margin-top: 3%;
    }
    & hr {
      margin: 0;
    }
    & .grow-info-div {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 10px;
      margin-top: 10px;
    }
    & .water-info-div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 10px;
      row-gap: 10px;
      margin-top: 10px;
      padding-right: 5px;
    }
    & .lightposi-info-div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 10px;
      row-gap: 10px;
      margin-top: 10px;
      white-space: pre-wrap;
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
  background-color: #ffffff;
  border-radius: 10px;
  border: 2px solid #8fb99f;
  padding: 1rem 1rem;
  min-height: 120px;
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
  & .title-style {
    font-weight: bold;
  }
  & .growth-info-data > p {
    margin: 0 10%;
    width: 100%;
  }
  & .water-info-data {
    width: 100%;
  }
  .water-info-data > p {
    margin: 0 5%;
    width: 90%;
  }
`;

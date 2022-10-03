import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin-top: 120px;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 1200px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 576px) {
  }

  & .header {
    display: flex;
    flex-direction: column;
    width: 100%;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  & .button-div {
    position: absolute;
    right: 0;
    transform: translateY(-140%);
    & > button {
      background-color: rgba(0, 0, 0, 0);
      border: 1px solid ${({ theme }) => theme.themeColor[5]};
      color: black;
      border-radius: 10px;
      width: 130px;
      height: 42px;
      font-size: 20px;
      margin-left: 8px;
      transition: 0.4s;

      &:hover {
        background-color: ${({ theme }) => theme.themeColor[5]};
        transition: 0.2s;
      }
    }
  }

  & .garden-detail-recent_water {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const GardenDetailImage = styled.img`
  width: 60%;
  height: 365px;
  background-color: ${({ theme }) => theme.themeColor[5]};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  @media (max-width: 992px) {
    height: 250px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const GardenDetailDescription = styled.div`
  width: 100%;
  height: 365px;

  @media (max-width: 992px) {
    height: 250px;
  }

  padding: 50px;
  background: ${({ theme }) => theme.themeColor[2]};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  & .garden-header {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    & > button {
      transition: transform 0.3s;
      transform: scale3d(1, 1, 1);
      position: absolute;

      @media (max-width: 576px) {
        position: static;
      }

      &:hover {
        transition: transform 0.3s;
        transform: scale3d(1.05, 1.05, 1.05);
      }
    }
  }

  & .garden-title {
    font-size: 30px;
    font-weight: 400;
  }

  & .detail-btn {
    background-color: ${({ theme }) => theme.themeColor[5]};
    position: absolute;
    right: 40px;
    border: 0;
    width: 120px;
    height: 34px;
    border-radius: 5px;
  }
  & .garden-detail-info {
    display: flex;
    justify-content: space-between;
  }
`;

export const GardenDiaryWrapper = styled.div`
  margin-top: 50px;
  font-size: 30px;
  font-weight: 400;
  padding-bottom: 200px;

  & .garden-diary-container {
    display: grid;
    grid-column-gap: 14px;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 400px) {
      grid-template-columns: repeat(1, 1fr);
    }

    & .garden-diary-item {
      @media (max-width: 768) {
        margin-bottom: 2%;
      }
    }
  }
`;

export const GardenDetailInfo = styled.div`
  width: 30%;
  height: 80px;
  background-color: white;
  /* border: 3px solid rgb(217, 217, 217); */
  border: 2px solid rgb(217, 217, 217);
  border-radius: 5px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  @media (min-width: 576px) {
    height: 30px;
    font-size: 8px;
  }

  @media (min-width: 768px) {
    height: 50px;
    font-size: 10px;
  }

  @media (min-width: 992px) {
    height: 70px;
    font-size: 13px;
  }
  @media (min-width: 1200px) {
    height: 80px;
    font-size: 16px;
  }
`;

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
    padding-right: 2%;
    transform: translateY(-140%);

    & .create-button {
      background-color: ${({ theme }) => theme.themeColor[1]};
      border: 1px solid ${({ theme }) => theme.themeColor[5]};
      border-radius: 10px;
      width: 90px;
      height: 35px;
      font-size: 16px;
      margin-left: 8px;
      transition: 0.4s;
      color: #ffffff;

      &:hover {
        background-color: #ffffff;
        transition: 0.2s;
        color: #111111;
      }
      @media (max-width: 992px) {
        width: 85px;
        height: 30px;
        font-size: 14px;
      }

      @media (max-width: 576px) {
        width: 82px;
        height: 34px;
        font-size: 16px;
      }
    }

    & .delete-button {
      background-color: rgba(0, 0, 0, 0);
      border: 1px solid ${({ theme }) => theme.themeColor[6]};
      border-radius: 10px;
      width: 90px;
      height: 35px;
      font-size: 16px;
      margin-left: 8px;
      transition: 0.4s;

      &:hover {
        background-color: ${({ theme }) => theme.themeColor[6]};
        transition: 0.2s;
        color: #ffffff;
      }
      @media (max-width: 992px) {
        width: 85px;
        height: 30px;
        font-size: 14px;
      }

      @media (max-width: 576px) {
        width: 82px;
        height: 34px;
        font-size: 16px;
      }
    }

    & .update-button {
      background-color: rgba(0, 0, 0, 0);
      border: 1px solid ${({ theme }) => theme.themeColor[5]};
      border-radius: 10px;
      width: 90px;
      height: 35px;
      font-size: 16px;
      margin-left: 8px;
      transition: 0.4s;

      &:hover {
        background-color: ${({ theme }) => theme.themeColor[0]};
        transition: 0.2s;
        color: #ffffff;
      }

      @media (max-width: 992px) {
        width: 85px;
        height: 30px;
        font-size: 14px;
      }

      @media (max-width: 576px) {
        width: 82px;
        height: 34px;
        font-size: 16px;
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
  width: 40%;
  height: 365px;
  /* border: 2px solid ${({ theme }) => theme.themeColor[5]}; */
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  border-radius: 15px;
  object-fit: cover;

  @media (max-width: 992px) {
    height: 330px;
    width: 40%;
  }

  @media (max-width: 768px) {
    border-radius: 15px 15px 0 0;
    width: 100%;
  }
`;

export const GardenDetailDescription = styled.div`
  width: 100%;
  min-height: 365px;
  display: flex;
  flex-direction: column;
  padding: 20px 30px 10px 30px;
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  border-radius: 0 15px 15px 0;
  /* border: 2px solid ${({ theme }) => theme.themeColor[5]}; */

  @media (max-width: 992px) {
    min-height: 330px;
  }

  @media (max-width: 768px) {
    min-height: 350px;
    border-radius: 0 0 15px 15px;
  }

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
  & .garden-content {
    flex-grow: 1;
  }

  & .detail-btn {
    position: absolute;
    right: 40px;
    border: 1px solid ${({ theme }) => theme.themeColor[5]};
    width: 120px;
    height: 34px;
    border-radius: 5px;
    background-color: white;

    &:hover {
      background-color: ${({ theme }) => theme.themeColor[1]};
      color: #ffffff;
    }
  }
  & .garden-detail-info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    display: flex;
    column-gap: 10px;
    margin-top: 10px;
  }
`;

export const GardenDiaryWrapper = styled.div`
  margin-top: 50px;
  font-size: 30px;
  font-weight: 400;
  padding-bottom: 200px;
  & .garden-diary-title {
    margin-bottom: 12px;
  }

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
  width: 100%;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.themeColor[5]};
  /* font-size: 16px; */
  padding: 1%;

  @media (max-width: 1200px) {
    font-size: 14px;
  }

  @media (max-width: 992px) {
    font-size: 12px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 576px) {
    font-size: 12px;
  }
  & p {
    margin: 0;
  }
  & .info-title {
    font-weight: bold;
  }
  & img {
    width: 30%;
    height: 100%;
  }
`;

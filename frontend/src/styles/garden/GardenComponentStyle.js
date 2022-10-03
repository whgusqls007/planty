import styled, { css } from 'styled-components';

export const GardenUserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & .user-img {
    width: 88px;
    height: 88px;
    @media (max-width: 576px) {
      width: 66px;
      height: 66px;
    }
    border-radius: 50%;
    background-color: ${({ theme }) => theme.themeColor[1]};
  }
  & .user-header {
    display: flex;
    align-items: flex-end;
    margin-top: 20px;
    & .follow-icon {
      cursor: pointer;
      width: 40px;
      @media (max-width: 576px) {
        width: 20px;
      }
    }
  }
  & .user-nickname {
    font-size: 25px;
    margin: 0 10px;
    @media (max-width: 576px) {
      font-size: 16px;
    }
    @media (max-width: 380px) {
      font-size: 12px;
    }
  }
  & .user-level {
    font-size: 20px;
    @media (max-width: 576px) {
      font-size: 16px;
    }
    @media (max-width: 380px) {
      font-size: 12px;
    }
  }
  & .user-content {
    font-size: 18px;
    margin-top: 16px;
    display: flex;
    align-items: center;

    @media (max-width: 576px) {
      font-size: 14px;
      margin-top: 12px;
    }
    @media (max-width: 380px) {
      font-size: 12px;
      margin-top: 10px;
    }

    & form {
      align-items: center;
      display: flex;

      & .edit-btn {
        height: 26px;
        margin-right: 5px;
        border-radius: 5px;
        font-size: 15px;
        text-align: center;
        background-color: ${({ theme }) => theme.themeColor[1]};
        color: white;

        @media (max-width: 576px) {
          height: 22px;
          font-size: 11px;
        }
        @media (max-width: 380px) {
          height: 18px;
          font-size: 7px;
        }
      }

      & .cancel-btn {
        height: 26px;
        margin-right: 5px;
        border-radius: 5px;
        font-size: 15px;
        text-align: center;
        background-color: gray;
        color: white;
        opacity: 0.5;

        @media (max-width: 576px) {
          height: 22px;
          font-size: 11px;
        }
        @media (max-width: 380px) {
          height: 18px;
          font-size: 7px;
        }
      }
    }

    & input {
      height: 26px;
      margin-right: 5px;
      border-radius: 5px;

      @media (max-width: 576px) {
        height: 22px;
      }
      @media (max-width: 380px) {
        height: 18px;
      }
    }

    & .content-edit-icon {
      opacity: 0.4;
      cursor: pointer;
      font-size: 20px;
      &:hover {
        opacity: 1;
      }
      @media (max-width: 576px) {
        font-size: 16px;
      }
      @media (max-width: 380px) {
        font-size: 12px;
      }
    }
  }

  & .user-info {
    display: flex;
    margin-top: 30px;
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0px 13px;

      & > span {
        font-size: 18px;
        font-weight: 300;

        @media (max-width: 576px) {
          font-size: 16px;
        }

        @media (max-width: 380px) {
          font-size: 12px;
        }
      }
    }
  }
`;

export const GardenItemWrapper = styled.div`
  width: 436px;

  @media (max-width: 576px) {
    width: 350px;
  }
  @media (max-width: 380px) {
    width: 280px;
  }
  /* height: 568px; */

  /* overflow: hidden; */
  & .garden-header {
    display: flex;
    flex-direction: column;
    margin-top: 8px;
  }
  & .garden-title {
    font-size: 24px;
    font-weight: 500;
    @media (max-width: 576px) {
      font-size: 20px;
      font-weight: 400;
    }
    @media (max-width: 380px) {
      font-size: 16px;
    }
  }
  & .garden-date-grow {
    font-size: 18px;
    font-weight: 400;
    color: #565656;

    @media (max-width: 576px) {
      font-size: 14px;
      font-weight: 400;
    }
    @media (max-width: 380px) {
      font-size: 10px;
    }
  }
`;

export const GardenImg = styled.div`
  height: 436px;

  @media (max-width: 576px) {
    height: 350px;
  }

  @media (max-width: 380px) {
    height: 280px;
  }

  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.themeColor[5]};
  cursor: pointer;
  &:hover {
    transition: transform 0.3s;
    transform: scale3d(1.03, 1.03, 1.03);
  }
`;

export const GardenDiaryItemWrapper = styled.div`
  width: 100%;
  height: 320px;
  background-color: ${({ theme }) => theme.themeColor[5]};
  margin-bottom: 4%;
  transition: 0.4s;
  transform: scale3d(1, 1, 1);

  &:hover {
    cursor: pointer;
    transition: 0.4s;
    transform: scale3d(1.05, 1.05, 1.05);
  }

  @media (max-width: 1200px) {
    height: 280px;
    transition: 0s;
  }

  @media (max-width: 992px) {
    height: 230px;
    transition: 0s;
  }

  @media (max-width: 768px) {
    height: 220px;
    transition: 0s;
  }

  @media (max-width: 576px) {
  }

  @media (max-width: 400px) {
  }
`;

export const GardenDiaryModalWrapper = styled.div`
  display: none;
  ${({ modalOpen }) =>
    modalOpen &&
    css`
      display: flex;
      align-items: center;
      animation: modal-bg-show 0.4s;
    `}
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);

  & .close-modal {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  & .modal-div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    padding: 50px;
    left: 50%;
    transform: translateX(-50%);
    animation: modal-show 0.4s;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    @media (min-width: 1200px) {
      width: 850px;
      height: 800px;
    }
    @media (max-width: 1199px) {
      width: 850px;
      height: 800px;
    }
    & .close-btn {
      position: absolute;
      right: 30px;
      top: 30px;
      opacity: 0.5;
      &:hover {
        opacity: 1;
        cursor: pointer;
      }
    }
  }

  @keyframes modal-show {
    from {
      margin-top: -50px;
    }
    to {
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const GardenForm = styled.form`
  /* display: flex;
  flex-direction: column; */
  width: 100%;
  height: 100%;
  overflow-y: auto;
  @media (max-width: 400px) {
    font-size: 14px;
  }
  & label {
    margin-top: 16px;
    color: #787878;

    @media (max-width: 576px) {
      margin-top: 8px;
    }
  }
  & input {
    padding: 8px 0;
    border-width: 0 0 1px 0;
    &:focus {
      outline: none;
    }
  }
  & #date_grow {
    margin-top: 1rem;
  }

  & #recent_water {
    margin-top: 1rem;
  }

  & > div > label {
    margin-left: 6px;
  }

  & button {
    border: none;
    background-color: ${({ theme }) => theme.themeColor[1]};
    color: #ffffff;
    border-radius: 8px;
    margin-bottom: 0px;
    margin-top: 5%;
    padding: 0.5% 0 0.5% 0;
  }

  & .img-div {
    position: relative;
    border: 2px dashed black;
    border-radius: 20px;
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    & img {
      /* width: 100%; */
    }
  }

  & .dragging {
    background-color: #dbdbdb;
  }

  & .plant-img {
    height: 100%;
  }
  & .plant-img-label {
    cursor: pointer;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    left: 0;
    top: 0;
    background-color: none;
    width: 100%;
    height: 100%;
    & .label-div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & span {
        font-size: 1.3rem;
        display: flex;
        justify-content: center;
      }
    }
    & .upload-icon {
      width: 10vw;
      height: 10vw;
    }
    & .plant-img-hide {
      display: none;
    }
  }
  & .plant-img-hide {
    display: none;
  }
`;

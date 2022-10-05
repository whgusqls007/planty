import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
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
  background-color: rgba(0, 0, 0, 0.85);
  overflow-y: initial !important;

  & .close-modal {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  & .modal-div {
    max-width: 90%;
    overflow-y: initial !important;
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
    height: 600px;
    width: 80%;

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

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  & button {
    width: 30%;
    margin-left: 35%;
    justify-content: center;
    margin-top: 1%;
    border: 1px solid ${({ theme }) => theme.themeColor[5]};
    border-radius: 6px;

    &:hover {
      background-color: ${({ theme }) => theme.themeColor[5]};
    }
  }

  & .title {
    display: flex;
    justify-content: center;

    @media (max-width: 850px) {
      position: absolute;
      left: 0;
      width: 100%;
    }

    & h1 {
      margin: 0;
      font-weight: 600;

      @media (max-width: 850px) {
        font-size: 30px;
      }

      @media (max-width: 650px) {
        font-size: 20px;
      }

      @media (max-width: 470px) {
        font-size: 15px;
      }

      @media (max-width: 430px) {
        font-size: 0px;
      }
    }
  }

  & .images-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media (max-width: 850px) {
      flex-direction: column;
      align-items: center;
    }
  }

  & .first {
    width: 100%;
    height: 300px;
    border-radius: 10px;
    margin-top: 20px;

    &:hover {
      transition: transform 0.3s;
      transform: scale3d(1.05, 1.05, 1.05);
      z-index: 999;
    }

    @media (max-width: 850px) {
      width: 90%;
      height: 200px;
      margin-bottom: 50px;
      margin-top: 0;
    }

    @media (max-width: 650px) {
      height: 230px;
      margin-bottom: 20px;
      margin-top: 0;
    }
  }

  & .second {
    width: 100%;
    height: 300px;
    border-radius: 10px;
    margin-top: 20px;

    &:hover {
      transition: transform 0.3s;
      transform: scale3d(1.05, 1.05, 1.05);
      z-index: 999;
    }

    @media (max-width: 850px) {
      width: 90%;
      height: 200px;
      margin-top: 50px;
    }

    @media (max-width: 650px) {
      height: 230px;
      margin-top: 20px;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 500px;
  position: relative;

  &:hover {
    transition: transform 0.3s;
    transform: scale3d(1.05, 1.05, 1.05);
    z-index: 999;
  }

  .image {
    background-color: black;
    z-index: 2;
  }

  .name {
    position: absolute;
    z-index: 3;
    color: white;
    bottom: 10%;
    font-size: 90px;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 768px) {
      font-size: 50px;
    }

    @media (max-width: 576px) {
      font-size: 30px;
    }
  }
`;

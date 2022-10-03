import styled from "styled-components";

export const FormBox = styled.div`
  margin: 6% 0 0 0;
  display: flex;
  justify-content: center;

  & .title-box {
    display: flex;
    flex-direction: column;
    width: 85%;
  }

  & .second {
    margin-top: 2%;

    @media (max-width: 576px) {
      margin-top: 6%;
    }

    @media (max-width: 380px) {
      margin-top: 10%;
    }
  }

  & .title {
    position: relative;
    border: 0px;
    margin-bottom: 4%;

    & label {
      position: absolute;
      left: 0%;
      top: 0px;
      transition: 0.4s;
      border-top: 0px;
      border-left: 0px;
      border-right: 0px;
      font-size: 20px;
    }

    & input:focus ~ label {
      position: absolute;
      top: -35px;
      transition: 0.4s;
      font-size: 20px;
      border: 1px solid green;
      border-top: 0px;
      border-left: 0px;
      border-right: 0px;
    }

    & input {
      width: 100%;
      border-top: 0px;
      border-left: 0px;
      border-right: 0px;
      transition: 0.4s;
      font-size: 20px;
    }

    & input:focus {
      border: 0px;
      outline: none;
    }

    & .effect {
      position: absolute;
      width: 0;
      border-bottom: 0px solid green;
      bottom: 0;
      left: 0;
      transition: 0.6s;
    }

    & input:focus ~ .effect {
      position: absolute;
      width: 100%;
      border-bottom: 1px solid green;
      bottom: 0;
      left: 0;
      transition: 0.6s;
    }

    @media (max-width: 992px) {
      margin-bottom: 6%;
    }

    @media (max-width: 768px) {
      margin-bottom: 6%;
    }

    @media (max-width: 576px) {
      margin-bottom: 7%;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  border: 0px;

  & button {
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid ${({ theme }) => theme.themeColor[5]};
    padding: 5px 10px 5px 10px;
    border-radius: 6px;
    font-size: 20px;
    margin-right: 7.5%;
    &:hover {
      background-color: ${({ theme }) => theme.themeColor[5]};
    }
  }
`;

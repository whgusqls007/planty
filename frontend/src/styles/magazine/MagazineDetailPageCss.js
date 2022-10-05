import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;

  & .modify-delete {
    display: flex;
    justify-content: end;
    margin-right: 15%;

    & .modify {
      cursor: pointer;
    }
    & .delete {
      cursor: pointer;
      margin-left: 2%;
      color: red;
    }
  }

  & .favorite {
    display: flex;
    justify-content: end;
    margin-right: 15%;

    & span {
      opacity: 0.7;
    }
  }

  & .comment {
    margin: 5% 15% 0 15%;

    & Table {
      & th {
        min-width: 50px;
      }
      & .comment-edit-icon {
        font-size: 18px;
        margin-left: 10px;
        cursor: pointer;
      }
      & .comment-delte-icon {
        font-size: 20px;
        margin-left: 4px;
        cursor: pointer;
      }
      & .modify_delete {
        font-size: 13px;
        width: 20%;
        text-align: end;
        padding-bottom: 0;
        /* padding-right: 2%; */
        /* cursor: pointer; */

        @media (max-width: 768px) {
          width: 70px;
          padding-left: 0px;
          padding-right: 3%;
        }

        @media (max-width: 576px) {
          width: 50px;
          padding-left: 0px;
          padding-right: 4%;
        }

        & .modify {
          &:hover {
            font-weight: 600;
            transition: 0.3s;
          }
        }

        & .delete {
          color: red;
          &:hover {
            font-weight: 600;
            transition: 0.3s;
          }
        }
      }
      & td {
        @media (max-width: 992px) {
          font-size: 16px;
        }

        @media (max-width: 768px) {
          font-size: 14px;
        }

        @media (max-width: 576px) {
          font-size: 12px;
        }
      }

      & button {
        width: 100px;
        border: 2px solid ${({ theme }) => theme.themeColor[5]};
        background-color: rgba(0, 0, 0, 0);
        border-radius: 6px;
        transition: 0.4s;

        &:hover {
          background-color: ${({ theme }) => theme.themeColor[5]};
          transition: 0.3s;
        }

        @media (max-width: 768px) {
          width: 70px;
          padding-left: 0px;
          padding-right: 0px;
        }

        @media (max-width: 576px) {
          width: 50px;
          padding-left: 0px;
          padding-right: 0px;
        }
      }
    }
  }

  & .commentInput {
    display: flex;
    position: relative;

    & .confirm_cancle {
      display: block;
      width: 10%;
      text-align: end;
      padding-right: 1%;
      cursor: pointer;

      @media (max-width: 768px) {
        width: 70px;
        padding-left: 0px;
        padding-right: 3%;
      }

      @media (max-width: 576px) {
        width: 50px;
        padding-left: 0px;
        padding-right: 4%;
      }

      & .confirm {
        &:hover {
          font-weight: 600;
          transition: 0.3s;
        }
      }

      & .cancle {
        color: red;
        &:hover {
          font-weight: 600;
          transition: 0.3s;
        }
      }
    }

    & label {
      position: absolute;
      left: 0%;
      top: 0px;
      transition: 0.4s;
      border-top: 0px;
      border-left: 0px;
      border-right: 0px;
      font-size: 16px;
      display: block;

      @media (max-width: 992px) {
        font-size: 16px;
      }

      @media (max-width: 768px) {
        font-size: 14px;
      }

      @media (max-width: 576px) {
        font-size: 12px;
      }
    }

    & input:focus ~ label {
      position: absolute;
      top: -35px;
      transition: 0.4s;
      font-size: 20px;
      border: 2px solid green;
      border-top: 0px;
      border-left: 0px;
      border-right: 0px;
      display: none;
    }

    & input {
      width: 100%;
      border-top: 0px;
      border-left: 0px;
      border-right: 0px;
      transition: 0.4s;
      font-size: 16px;

      @media (max-width: 992px) {
        font-size: 16px;
      }

      @media (max-width: 768px) {
        font-size: 14px;
      }

      @media (max-width: 576px) {
        font-size: 12px;
      }
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
      border-bottom: 2px solid green;
      bottom: 0;
      left: 0;
      transition: 0.6s;
    }

    @media (max-width: 992px) {
      margin-bottom: 6%;
      font-size: 14px;
    }

    @media (max-width: 768px) {
      margin-bottom: 6%;
      font-size: 12px;
    }

    @media (max-width: 576px) {
      margin-bottom: 7%;
      font-size: 10px;
    }
  }
`;

export const Title = styled.div`
  font-weight: 800;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    font-weight: 600px;
    font-size: 40px;
  }

  @media (max-width: 576px) {
    font-weight: 600px;
    font-size: 30px;
  }
`;

export const Date = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 15%;
  opacity: 0.7;
`;

export const Writer = styled.div`
  display: flex;
  justify-content: end;
  opacity: 0.7;
  margin: 2% 15% 0 0;
`;

export const Content = styled.div`
  margin: 5% 15% 0 15%;
  width: 70%;

  & img {
    max-width: 100%;
    max-height: 600px;
  }
`;

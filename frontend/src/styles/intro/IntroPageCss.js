import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 0 0 0;

  & .contents {
    width: 100%;
    margin: -82px 0 0 0;

    & .full-height {
      width: 100%;
      height: 100vh;
    }

    & .back {
      position: fixed;
      z-index: -999;
    }

    & .page-index {
      display: flex;
      justify-content: center;

      @media (max-width: 768px) {
        width: 80%;
      }

      & ul {
        margin: 0 15px 0 0;
        @media (max-width: 768px) {
          margin: 0 0 0 0;
        }
        li {
          font-size: 30px;
          float: none;
          @media (max-width: 768px) {
            float: left;
            margin: 0 15px 20% 15px;
          }
        }
      }

      & .list-active {
        color: ${({ theme }) => theme.themeColor[5]};
      }
    }

    & .page {
      display: flex;
      flex-direction: row;

      @media (max-width: 768px) {
        flex-direction: column;
        justify-content: space-evenly;
      }

      & .page-content-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;

        @media (max-width: 768px) {
          flex-direction: column;
          justify-content: space-evenly;
          width: 100%;
        }

        & .page-content {
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          width: 100%;

          @media (max-width: 768px) {
            flex-direction: column;
            justify-content: space-evenly;
            width: 100%;
          }
        }
      }
    }

    & .first-page {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & p {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        text-shadow: 3px 3px 3px gray;
      }

      & .first-line {
        display: flex;
        flex-direction: row;

        & p {
          color: white;
          font-size: 50px;
        }
      }

      & .second-line {
        display: flex;
        flex-direction: row;

        & p {
          color: white;
          font-size: 70px;
        }
      }

      & .first-page-ani-1 {
        animation: fadeIn 0.2s ease-in 0.5s both;
      }
      & .first-page-ani-2 {
        animation: fadeIn 0.2s ease-in 0.6s both;
      }
      & .first-page-ani-3 {
        animation: fadeIn 0.2s ease-in 0.7s both;
      }
      & .first-page-ani-4 {
        animation: fadeIn 0.2s ease-in 0.7s both;
      }
      & .first-page-ani-5 {
        animation: fadeIn 0.2s ease-in 0.8s both;
      }
      & .first-page-ani-6 {
        animation: fadeIn 0.2s ease-in 0.9s both;
      }
      & .first-page-ani-7 {
        animation: fadeIn 0.2s ease-in 1s both;
      }
      & .first-page-ani-8 {
        animation: fadeIn 0.2s ease-in 1s both;
      }
      & .first-page-ani-9 {
        animation: fadeIn 0.2s ease-in 1.1s both;
      }
      & .first-page-ani-10 {
        animation: fadeIn 0.2s ease-in 1.1s both;
      }
      & .first-page-ani-11 {
        animation: fadeIn 0.2s ease-in 1.2s both;
      }
      & .first-page-ani-12 {
        animation: fadeIn 0.2s ease-in 1.5s both;
      }
      & .first-page-ani-13 {
        animation: fadeIn 0.2s ease-in 1.6s both;
      }
      & .first-page-ani-14 {
        animation: fadeIn 0.2s ease-in 1.7s both;
      }
    }

    & .second-page {
      & .second-page-ani {
        animation: fadeUp 0.2s ease-in 0.5s both;

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: scale3d(1.2, 1.2, 1.2);
          }
          to {
            opacity: 1;
            transform: translate3d(1, 1, 1);
          }
        }
      }
      & .page-text {
        display: flex;
        width: 50%;
        flex-direction: column;
        justify-content: flex-start;
        margin: 20% 0 30% 10%;

        @media (max-width: 992px) {
          margin: 0 0 30% 5%;
        }

        @media (max-width: 768px) {
          margin: 0 0 0 0;
        }

        @media (max-width: 568px) {
          margin: 0 0 0 0;
        }

        & h3 {
          font-size: 30px;

          @media (max-width: 992px) {
            font-size: 25px;
          }

          @media (max-width: 768px) {
            text-align: center;
            font-size: 20px;
          }
        }

        & p {
          margin-right: 40%;
          font-size: 80px;
          text-align: end;
          font-weight: 700;

          @media (max-width: 1400px) {
            margin-right: 30%;
            font-size: 70px;
          }

          @media (max-width: 1150px) {
            margin-right: 20%;
          }

          @media (max-width: 992px) {
            font-size: 60px;
          }

          @media (max-width: 768px) {
            margin-right: 0;
            text-align: center;
            width: 100%;
            font-size: 40px;
          }
        }
      }

      & .image-box {
        width: 50%;
        height: 500px;
        margin-right: 10%;
        background-color: ${({ theme }) => theme.themeColor[5]};

        @media (max-width: 992px) {
          margin-right: 5%;
        }

        @media (max-width: 768px) {
          width: 80%;
          margin-right: 0;
          margin-bottom: 5%;
        }

        @media (max-width: 568px) {
          width: 80%;
          margin-right: 0;
          margin-bottom: 0;
        }
      }
    }

    & .third-page {
      flex-direction: row-reverse;

      & .third-page-ani {
        animation: fadeUp 0.5s ease-in 0.5s both;

        @keyframes fadeUp {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      }

      & .page-text {
        display: flex;
        width: 50%;
        flex-direction: column;
        justify-content: flex-start;
        margin: 20% 0 30% 10%;

        @media (max-width: 992px) {
          margin: 0 0 30% 5%;
        }

        @media (max-width: 768px) {
          margin: 0 0 0 0;
          margin-top: 5%;
        }

        @media (max-width: 568px) {
          margin: 0 0 0 0;
          margin-top: 5%;
        }

        & h3 {
          font-size: 30px;

          @media (max-width: 992px) {
            font-size: 25px;
          }

          @media (max-width: 768px) {
            text-align: center;
            font-size: 20px;
          }
        }

        & p {
          margin-right: 40%;
          font-size: 80px;
          text-align: end;
          font-weight: 700;

          @media (max-width: 1400px) {
            margin-right: 30%;
            font-size: 70px;
          }

          @media (max-width: 1150px) {
            margin-right: 20%;
          }

          @media (max-width: 992px) {
            font-size: 60px;
          }

          @media (max-width: 768px) {
            margin-right: 0;
            text-align: center;
            width: 100%;
            font-size: 40px;
          }
        }
      }

      & .image-box {
        width: 50%;
        height: 500px;
        background-color: ${({ theme }) => theme.themeColor[5]};
        margin-left: 10%;

        @media (max-width: 992px) {
          margin-right: 5%;
        }

        @media (max-width: 768px) {
          width: 80%;
          margin-right: 0;
          margin-bottom: 5%;
        }

        @media (max-width: 568px) {
          width: 80%;
          margin-right: 0;
          margin-bottom: 0;
        }
      }
    }
    & .fourth-page {
      & p {
        transition: 0.4s;
        color: white;
        font-size: 50px;
        text-shadow: 3px 3px 3px gray;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      & .fourth-page-ani-1 {
        animation: fadeIn 0.2s ease-in 0.5s both;
      }
      & .fourth-page-ani-2 {
        animation: fadeIn 0.2s ease-in 1s both;
      }
      & .fourth-page-ani-3 {
        animation: fadeIn 0.2s ease-in 1.5s both;
      }
    }

    & .fifth-page {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      & .fifth-page-ani {
        animation: fadeUp 0.5s ease-in 0.5s both;

        @keyframes fadeUp {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      }
    }

    & .sixth-page {
      & p {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        text-shadow: 3px 3px 3px gray;
      }

      & .first-line {
        display: flex;
        flex-direction: row;

        & p {
          color: white;
          font-size: 50px;

          @media (max-width: 768px) {
            font-size: 40px;
          }

          @media (max-width: 576px) {
            font-size: 30px;
          }
        }
      }

      & .sixth-page-ani-1 {
        animation: fadeIn 0.2s ease-in 0.5s both;
      }
      & .sixth-page-ani-2 {
        animation: fadeIn 0.2s ease-in 0.6s both;
      }
      & .sixth-page-ani-3 {
        animation: fadeIn 0.2s ease-in 0.7s both;
      }
      & .sixth-page-ani-4 {
        animation: fadeIn 0.2s ease-in 0.7s both;
      }
      & .sixth-page-ani-5 {
        animation: fadeIn 0.2s ease-in 0.8s both;
      }
      & .sixth-page-ani-6 {
        animation: fadeIn 0.2s ease-in 0.9s both;
      }
      & .sixth-page-ani-7 {
        animation: fadeIn 0.2s ease-in 1s both;
      }
      & .sixth-page-ani-8 {
        animation: fadeIn 0.2s ease-in 1s both;
      }
      & .sixth-page-ani-9 {
        animation: fadeIn 0.2s ease-in 1.1s both;
      }
      & .sixth-page-ani-10 {
        animation: fadeIn 0.2s ease-in 1.2s both;
      }
      & .sixth-page-ani-11 {
        animation: fadeIn 0.2s ease-in 1.3s both;
      }
      & .sixth-page-ani-12 {
        animation: fadeIn 0.2s ease-in 1.4s both;
      }
      & .sixth-page-ani-13 {
        animation: fadeIn 0.2s ease-in 1.5s both;
      }
      & .sixth-page-ani-14 {
        animation: fadeIn 0.2s ease-in 1.6s both;
      }
    }

    & .last-page {
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
      position: relative;

      & a {
        display: flex;
        justify-content: center;
        text-decoration: none;
        color: white;

        &:hover {
          & p {
            transition: 0.4s;
            color: ${({ theme }) => theme.themeColor[5]};
          }
        }
      }

      & p {
        transition: 0.4s;
        color: white;
        font-size: 140px;
        text-shadow: 3px 3px 3px gray;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        @media (max-width: 992px) {
          font-size: 100px;
        }

        @media (max-width: 768px) {
          font-size: 80px;
        }

        @media (max-width: 576px) {
          font-size: 50px;
        }
      }

      & .last-page-ani-1 {
        animation: fadeIn 0.2s ease-in 0.5s both;
      }
      & .last-page-ani-2 {
        animation: fadeIn 0.2s ease-in 0.6s both;
      }
      & .last-page-ani-3 {
        animation: fadeIn 0.2s ease-in 0.7s both;
      }
      & .last-page-ani-4 {
        animation: fadeIn 0.2s ease-in 0.8s both;
      }
      & .last-page-ani-5 {
        animation: fadeIn 0.2s ease-in 0.9s both;
      }
      & .last-page-ani-6 {
        animation: fadeIn 0.2s ease-in 1s both;
      }
      & .last-page-ani-7 {
        animation: fadeIn 0.2s ease-in 1.1s both;
      }
      & .last-page-ani-8 {
        animation: fadeIn 0.2s ease-in 1.2s both;
      }
      & .last-page-ani-9 {
        animation: fadeIn 0.2s ease-in 1.3s both;
      }

      & .last-page-ani-1-out {
        animation: fadeOut 0.2s ease-in 0.5s both;
      }
      & .last-page-ani-2-out {
        animation: fadeOut 0.2s ease-in 0.6s both;
      }
      & .last-page-ani-3-out {
        animation: fadeOut 0.2s ease-in 0.7s both;
      }
      & .last-page-ani-4-out {
        animation: fadeOut 0.2s ease-in 0.8s both;
      }
      & .last-page-ani-5-out {
        animation: fadeOut 0.2s ease-in 0.9s both;
      }
      & .last-page-ani-6-out {
        animation: fadeOut 0.2s ease-in 1s both;
      }
      & .last-page-ani-7-out {
        animation: fadeOut 0.2s ease-in 1.1s both;
      }
      & .last-page-ani-8-out {
        animation: fadeOut 0.2s ease-in 1.2s both;
      }
      & .last-page-ani-9-out {
        animation: fadeOut 0.2s ease-in 1.3s both;
      }

      & .content-wrapper {
        display: flex;
        justify-content: center;
      }

      & .check-box-form {
        color: white;
        position: absolute;
        right: 5%;
        bottom: 5%;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.themeColor[3]};
        }
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }

    .full-page-class {
      display: none;
    }
  }
`;

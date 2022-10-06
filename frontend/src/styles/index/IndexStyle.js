import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #44855d;
  width: 100%;
  padding: 1.5rem 0 3rem 0;

  & .mainTitle {
    font-weight: 700;
    font-size: 50px;
    padding-bottom: 1.5rem;
    color: white;
    font-style: normal;
    text-shadow: 0px 2px 5px gray;

    @media (max-width: 768px) {
      font-size: 2.5rem;
      padding-bottom: 1.3rem;
    }

    @media (max-width: 576px) {
      font-size: 1.7rem;
      padding-bottom: 1rem;
    }
  }
`;

export const ButtonWrapper = styled.div`
  margin-left: 2%;
`;

export const ContentTitle = styled.div`
  margin-top: 4%;
  margin-bottom: 5px;
  font-size: 2rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1%;
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;
    margin-bottom: -1%;
  }
`;

export const ContentSubTitle = styled.span`
  margin-left: 20px;
  font-size: 1.5rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding-bottom: 0rem;
  }

  @media (max-width: 576px) {
    font-size: 0.8rem;
    padding-bottom: 0rem;
  }
`;

export const WorldCupWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 2%;

  & button {
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.themeColor[5]};
    background-color: white;

    &:hover {
      background-color: ${({ theme }) => theme.themeColor[5]};
    }

    @media (max-width: 768px) {
      font-size: 1rem;
      padding-bottom: 0rem;
    }

    @media (max-width: 576px) {
      font-size: 0.8rem;
      padding-bottom: 0rem;
    }
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  & > span {
    margin-top: 200px;
    & svg {
      color: ${({ theme }) => theme.themeColor[1]};
    }
  }
`;

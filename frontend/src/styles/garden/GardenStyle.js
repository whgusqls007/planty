import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 80px;
  display: flex;
  align-items: center;

  flex-direction: column;
  & .toggle-div {
    position: relative;
    width: 300px;
    & span {
      position: absolute;
      left: 50%;
    }
    height: 50px;
    display: flex;
    align-items: end;
    justify-content: center;
    font-size: 20px;
  }

  & .toggle-btn1 {
    position: absolute;
    cursor: pointer;
    /* top: 0; */
    left: 50%;
    transform: translateX(calc(-100% - 16px));

    @media (max-width: 576px) {
      font-size: 16px;
    }

    @media (max-width: 380px) {
      font-size: 12px;
    }
  }
  & .toggle-btn2 {
    position: absolute;
    cursor: pointer;
    left: 50%;
    transform: translateX(20px);

    @media (max-width: 576px) {
      font-size: 16px;
    }

    @media (max-width: 380px) {
      font-size: 12px;
    }
  }
`;

export const GardenWrapper = styled.div`
  margin-top: 80px;
  margin-bottom: 2rem;
  position: relative;
  display: grid;
  justify-content: center;
  grid-column-gap: 14px;
  grid-row-gap: 20px;
  background-color: white;

  & button {
    position: absolute;
    right: 0;
    transform: translateY(-140%);
    border-radius: 10px;
    width: 130px;
    height: 42px;
    font-size: 20px;
    background-color: white;
    border: 1px solid ${({ theme }) => theme.themeColor[5]};
    &:hover {
      background-color: ${({ theme }) => theme.themeColor[5]};
    }

    @media (max-width: 576px) {
      width: 100%;
      height: 36px;
      font-size: 16px;
    }
  }

  /* 반응형 */
  @media (min-width: 1500px) {
    grid-template-columns: repeat(3, 436px);
    width: 1336px;
  }
  @media (max-width: 1499px) and (min-width: 1021px) {
    grid-template-columns: repeat(2, 436px);
    width: 886px;
  }
  @media (max-width: 1020px) and (min-width: 801px) {
  }
  @media (max-width: 800px) {
  }

  /* grid-template-columns: repeat(3, 436px);
  width: 1336px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 436px);
    width: 1336px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 436px);
    width: 886px;
  }

  @media (max-width: 576px) {
  } */
`;

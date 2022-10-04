import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 3% 5% 0 5%;
  display: flex;
  flex-wrap: wrap;

  & a {
    text-decoration: none;
    color: black;
  }
`;

export const PagingList = styled.li`
  list-style-type: none;
  float: left;
  padding: 10px 15px 10px 15px;
  border-radius: 5px;
  font-size: 20px;
  margin: 0px 1% 0px 1%;

  @media (max-width: 576px) {
    margin: 0 0 0 0;
    padding: 5px 10px 5px 10px;
    font-size: 15px;
  }

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    background-color: ${({ theme }) => theme.themeColor[5]};
    cursor: pointer;
    transition: transform 0.3s;
    transform: scale3d(1.05, 1.05, 1.05);
  }
`;

export const ListWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2rem 2rem 0;

  & .active {
    border: 1px solid ${({ theme }) => theme.themeColor[5]};
  }
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 1px;
  position: relative;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & .effect {
    border: 0;
    padding: 2px 6% 2px 11%;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    width: 50%;
    transition: 0.6s;

    @media (max-width: 768px) {
      outline: none;
      transition: 0.6s;
      padding: 2px 6% 2px 16%;
      width: 75%;
    }

    &:focus {
      outline: none;
      transition: 0.6s;
      padding: 8px 6% 8px 11%;

      @media (max-width: 768px) {
        outline: none;
        transition: 0.6s;
        padding: 8px 6% 8px 16%;
      }
    }
  }

  & .effect ~ .focus-border {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #4caf50;
    transition: 0.6s;

    @media (max-width: 768px) {
      left: 50%;
    }
  }

  & .effect:focus ~ .focus-border {
    position: absolute;
    width: 50%;
    transition: 0.6s;
    left: 25%;

    @media (max-width: 768px) {
      width: 75%;
      left: 12.5%;
    }
  }

  & .search-button {
    position: absolute;
    right: 25%;
    width: 5%;
    background-color: rgba(0, 0, 0, 0);

    @media (max-width: 768px) {
      right: 12.5%;
    }
  }

  & select {
    position: absolute;
    text-align: center;
    width: 10%;
    left: 25%;
    height: 100%;
    border: 0px;
    border-right: 1px dotted #ccc;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    transition: 0.6s;

    @media (max-width: 768px) {
      width: 15%;
      left: 12.5%;
    }
  }
`;

export const InputButton = styled.div`
  background-color: white;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const SubInputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1%;
  width: 100%;
  justify-content: space-around;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & a {
    color: inherit;
    text-decoration: none;
  }
  & .tag {
    width: 100px;
    text-align: center;
    margin-left: 3%;
    padding: 2px 6px 2px 6px;
    border-radius: 6px;

    @media (max-width: 768px) {
      width: 90px;
      text-align: center;
      margin-left: 3%;
      padding: 2px 6px 2px 6px;
      border-radius: 6px;
    }

    @media (max-width: 576px) {
      font-size: 13px;
      width: 75px;
      text-align: center;
      margin-left: 3%;
      padding: 2px 6px 2px 6px;
      border-radius: 6px;
    }
  }

  & .tag:hover {
    background-color: ${({ theme }) => theme.themeColor[5]};
  }

  & active {
    border: 1px solid ${({ theme }) => theme.themeColor[5]};
  }
`;

export const SortingButton = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

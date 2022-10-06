import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  position: absolute;

  top: 0;
  left: 0;
  & > img {
    display: inline;
    height: 100%;
    opacity: 0.8;
    max-width: calc(775px);
    width: calc(100vw - 600px);
    object-fit: cover;
    object-position: center;

    @media (max-width: 992px) {
      display: none;
    }
  }
`;
export const UserWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  & .logo {
    font-size: 54px;
    margin-bottom: 44px;
    & img {
      width: 70px;
      height: 70px;
      margin-right: 4px;
    }
  }
`;

export const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 90vw;

  & input {
    padding: 8px 0;
    border-width: 0 0 1px 0;
    &:focus {
      outline: none;
    }
  }
  & .checkbox-div {
    margin-top: 12px;
  }
  & .checkbox-div > label {
    margin-left: 6px;
  }
  & .option-div {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    & > a {
      margin-top: 10px;
      color: #787878;
    }
  }
`;

export const SubmitButton = styled.button`
  border: none;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.themeColor[1]};
  height: 44px;
  color: #ffffff;
  border-radius: 8px;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
`;

export const LabelContainer = styled.div`
  display: flex;
  margin-top: 16px;
  & label {
    color: #787878;
  }
`;

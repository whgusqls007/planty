import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../features/user/userActions';
import { confirmError } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, userInfo, error } = useSelector((state) => state.user);
  useEffect(() => {
    if (userInfo) {
      navigate(-1, { replace: true });
    }
  }, [navigate, userInfo]);
  useEffect(() => {
    if (error) {
      alert(JSON.stringify(error));
      dispatch(confirmError());
    }
  }, [error]);
  const [loginInputs, setLoginInputs] = useState({
    email: '',
    password: '',
  });
  const inputChangeHandler = (e) => {
    setLoginInputs({
      ...loginInputs,
      [e.target.id]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userLogin(loginInputs));
  };
  return (
    <Wrapper>
      <img
        src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1602174804-bloomscape_money-tree_stone.jpg"
        alt="login-img"
      />
      <LoginWrapper>
        <div className="logo">
          <img src="/assets/img/plant.png" alt="logo-img" />
          Planty
        </div>
        <LoginForm onSubmit={submitHandler}>
          <label htmlFor="email">EMAIL</label>
          <input type="text" id="email" onChange={inputChangeHandler} />
          <label htmlFor="password">PASSWORD</label>
          <input type="password" id="password" onChange={inputChangeHandler} />
          <div>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">REMEMBER ME</label>
          </div>
          <button disabled={loading}>LOG IN</button>
          {/* <button>LOG IN</button> */}
          <div className="login-option-div">
            <Link to="">Lost your password?</Link>
            <Link to="/register">Join Us</Link>
            <Link to={-1}>Back to My Website</Link>
          </div>
        </LoginForm>
      </LoginWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  @media (min-width: 993px) {
    z-index: -1;
  }
  & > img {
    display: inline;
    height: 100%;
    opacity: 0.8;
    /* width: 30%; */
    max-width: calc(775px);
    width: calc(100vw - 600px);
    object-fit: cover;
    object-position: center;

    /* @media (max-width:) */
    @media (max-width: 992px) {
      display: none;
    }
  }
`;
const LoginWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* padding: 0px 50px; */
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

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 90vw;
  & label {
    margin-top: 16px;
    color: #787878;
  }
  & input {
    padding: 8px 0;
    border-width: 0 0 1px 0;
    &:focus {
      outline: none;
    }
  }
  & > div > label {
    margin-left: 6px;
  }
  & button {
    border: none;
    margin-top: 10px;
    background-color: ${({ theme }) => theme.themeColor[1]};
    height: 44px;
    color: #ffffff;
    border-radius: 8px;
  }
  & .login-option-div {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    & > a {
      margin-top: 10px;
      text-decoration: none;
      color: #787878;
    }
  }
`;

export default LoginPage;

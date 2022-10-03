import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../features/user/userActions';
import { confirmError } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {
  Wrapper,
  UserWrapper,
  UserForm,
  SubmitButton,
  LabelContainer,
} from '../../styles/user/UserStyle';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, userInfo, error } = useSelector((state) => state.user);
  useEffect(() => {
    if (userInfo) {
      navigate('/', { replace: true });
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
      <UserWrapper>
        <div className="logo">
          <img src="/assets/img/plant.png" alt="logo-img" />
          Planty
        </div>
        <UserForm onSubmit={submitHandler}>
          <LabelContainer>
            <label htmlFor="email">EMAIL</label>
          </LabelContainer>
          <input type="text" id="email" onChange={inputChangeHandler} />
          <LabelContainer>
            <label htmlFor="password">PASSWORD</label>
          </LabelContainer>
          <input type="password" id="password" onChange={inputChangeHandler} />
          <div className="checkbox-div">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">REMEMBER ME</label>
          </div>
          <SubmitButton disabled={loading}>LOG IN</SubmitButton>
          <div className="option-div">
            <Link to="">Lost your password?</Link>
            <Link to="/register">Join Us</Link>
            <Link to={-1}>Back to My Website</Link>
          </div>
        </UserForm>
      </UserWrapper>
    </Wrapper>
  );
};

export default LoginPage;

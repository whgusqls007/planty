import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import RegisterMessage from '../../components/user/RegisterMessage';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../../features/user/userActions';
import { emailCheck, usernameCheck, passwordCheck } from '../../api/user';
import { registerDone } from '../../features/user/userSlice';
import {
  Wrapper,
  UserWrapper,
  UserForm,
  SubmitButton,
  LabelContainer,
} from '../../styles/user/UserStyle';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo, registerState } = useSelector((state) => state.user);

  useEffect(() => {
    if (userInfo) {
      navigate(-1, { replace: true });
    }
  }, [navigate, userInfo]);
  useEffect(() => {
    if (registerState) {
      alert('회원가입 성공!');
      dispatch(registerDone());
      navigate('/login', { replace: true });
    }
  });

  const [registerInputs, setRegisterInputs] = useState({
    username: '',
    email: '',
    password1: '',
    password2: '',
    date_of_birth: '',
  });
  const [inputErrors, setInputErrors] = useState({
    usernameError: false,
    emailError: false,
    passwordError: false, // 비밀번호 8자리
    passwordConfirmError: false,
    birthDateError: false,
  });
  const [formState, setFormState] = useState(false);
  useEffect(() => {
    const { username, email, password1, password2, date_of_birth } =
      registerInputs;
    const {
      usernameError,
      emailError,
      passwordError,
      passwordConfirmError,
      birthDateError,
    } = inputErrors;
    if (
      username &&
      email &&
      password1 &&
      password2 &&
      date_of_birth &&
      !usernameError &&
      !emailError &&
      !passwordError &&
      !passwordConfirmError &&
      !birthDateError
    ) {
      setFormState(true);
    } else {
      setFormState(false);
    }
  }, [registerInputs, inputErrors]);

  const inputChangeHandler = (e) => {
    setRegisterInputs({
      ...registerInputs,
      [e.target.id]: e.target.value,
    });
  };

  const usernameChangeHandler = (e) => {
    const username = e.target.value;
    setRegisterInputs({
      ...registerInputs,
      username,
    });
    usernameCheck({ username }).then((res) => {
      const { data } = res.data;
      setInputErrors({
        ...inputErrors,
        usernameError: !data,
      });
    });
  };

  const emailChangeHandler = (e) => {
    const email = e.target.value;
    setRegisterInputs({
      ...registerInputs,
      email,
    });
    emailCheck({ email }).then((res) => {
      const { data } = res.data;
      setInputErrors({
        ...inputErrors,
        emailError: !data,
      });
    });
  };

  const passwordChangeHandler = (e) => {
    const password1 = e.target.value;
    setRegisterInputs({
      ...registerInputs,
      password1,
    });
    passwordCheck({ password: password1 }).then((res) => {
      const { data } = res.data;
      console.log(data);
      if (data === true) {
        setInputErrors({
          ...inputErrors,
          passwordError: false,
        });
      } else {
        setInputErrors({
          ...inputErrors,
          passwordError: data[0],
        });
      }
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userRegister(registerInputs));
  };
  const checkPassword = () => {
    if (
      registerInputs.password1 &&
      registerInputs.password2 &&
      registerInputs.password1 !== registerInputs.password2
    ) {
      setInputErrors({
        ...inputErrors,
        passwordConfirmError: true,
      });
    } else {
      setInputErrors({
        ...inputErrors,
        passwordConfirmError: false,
      });
    }
  };

  useEffect(() => {
    checkPassword();
  }, [registerInputs]);

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
            <label htmlFor="username">NICKNAME</label>
            {registerInputs.username && (
              <RegisterMessage username={inputErrors.usernameError} />
            )}
          </LabelContainer>
          <input type="text" id="username" onChange={usernameChangeHandler} />
          <LabelContainer>
            <label htmlFor="email">EMAIL</label>
            {registerInputs.email && (
              <RegisterMessage email={inputErrors.emailError} />
            )}
          </LabelContainer>
          <input type="text" id="email" onChange={emailChangeHandler} />
          <LabelContainer>
            <label htmlFor="password1">PASSWORD</label>
            {registerInputs.password1 && (
              <RegisterMessage password1={inputErrors.passwordError} />
            )}
          </LabelContainer>
          <input
            type="password"
            id="password1"
            onChange={passwordChangeHandler}
            placeholder="8자 이상의 문자+숫자를 입력해주세요."
          />
          <LabelContainer>
            <label htmlFor="password2">PASSWORD CONFIRM</label>
            {registerInputs.password1 && registerInputs.password2 && (
              <RegisterMessage password2={inputErrors.passwordConfirmError} />
            )}
          </LabelContainer>
          <input
            type="password"
            id="password2"
            onChange={inputChangeHandler}
            placeholder="8자 이상의 문자+숫자를 입력해주세요."
          />
          <LabelContainer>
            <label htmlFor="date_of_birth">BIRTH DATE</label>
          </LabelContainer>
          <input type="date" id="date_of_birth" onChange={inputChangeHandler} />
          <SubmitButton disabled={!formState}>SIGN UP</SubmitButton>
          <div className="option-div">
            <Link to={-1}>Back</Link>
          </div>
        </UserForm>
      </UserWrapper>
    </Wrapper>
  );
};

export default RegisterPage;

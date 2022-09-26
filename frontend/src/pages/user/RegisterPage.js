import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import RegisterMessage from '../../components/user/RegisterMessage';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../../features/user/userActions';
import { emailCheck, usernameCheck } from '../../api/user';
import { registerDone } from '../../features/user/userSlice';

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
      <LoginWrapper>
        <div className="logo">
          <img src="/assets/img/plant.png" alt="logo-img" />
          Planty
        </div>
        <LoginForm onSubmit={submitHandler}>
          {/* {registerForm.map((i, e) => (
            <RegisterInput
              registerItem={i}
              inputChangeHandler={inputChangeHandler}
            />
          ))} */}
          <LabelContainer>
            <label htmlFor="username">USERNAME</label>
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
          </LabelContainer>
          <input type="password" id="password1" onChange={inputChangeHandler} />
          <LabelContainer>
            <label htmlFor="password2">PASSWORD CONFIRM</label>
            {registerInputs.password1 && registerInputs.password2 && (
              <RegisterMessage password2={inputErrors.passwordConfirmError} />
            )}
          </LabelContainer>
          <input type="password" id="password2" onChange={inputChangeHandler} />
          <LabelContainer>
            <label htmlFor="date_of_birth">BIRTH DATE</label>
          </LabelContainer>
          <input type="date" id="date_of_birth" onChange={inputChangeHandler} />
          <SubmitButton disabled={!formState}>SIGN UP</SubmitButton>
          <div className="login-option-div">
            <Link to={-1}>Back</Link>
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
  z-index: -1;
  top: 0;
  left: 0;
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
  width: 500px;
  margin: 0px 50px;
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

const SubmitButton = styled.button`
  border: none;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.themeColor[1]};
  height: 44px;
  color: #ffffff;
  border-radius: 8px;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
`;

const LabelContainer = styled.div`
  display: flex;
  margin-top: 16px;
  & label {
    color: #787878;
  }
`;

// const RegisterInput = ({ registerItem, inputChangeHandler }) => {
//   const { id, label, type } = registerItem;
//   return (
//     <>
//       <LabelContainer>
//         <label htmlFor={id}>{label}</label>
//         <UserErrorMessage />
//       </LabelContainer>
//       <input type={type} id={id} onChange={inputChangeHandler} />
//     </>
//   );
// };

export default RegisterPage;

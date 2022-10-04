import React, { useState, useEffect } from 'react';
import { usernameCheck } from '../../api/user';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import RegisterMessage from '../../components/user/RegisterMessage';
import {
  Wrapper,
  UserWrapper,
  UserForm,
  SubmitButton,
  LabelContainer,
} from '../../styles/user/UserStyle';
import {
  updateUsername,
  updatePassword,
  updateUsernamePassword,
} from '../../features/user/userActions';
import {
  usernameUpdateDone,
  passwordUpdateDone,
  logout,
} from '../../features/user/userSlice';

const ProfileUpdatePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [changeUsername, setChangeUsername] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const { userInfo, success } = useSelector((state) => state.user);
  const [updateInputs, setUpdateInputs] = useState({
    username: '',
    new_password1: '',
    new_password2: '',
  });

  const [inputErrors, setInputErrors] = useState({
    usernameError: false,
    passwordError: false, // 비밀번호 8자리
    passwordConfirmError: false,
  });

  useEffect(() => {
    if (success && changeUsername && changePassword) {
      dispatch(passwordUpdateDone());
      dispatch(logout());
      navigate('/login', { replace: true });
    } else if (success && changeUsername) {
      dispatch(usernameUpdateDone());
      navigate(`/profile/${userInfo.username}`, { replace: true });
    } else if (success && changePassword) {
      dispatch(passwordUpdateDone());
      dispatch(logout());
      navigate('/login', { replace: true });
    }
  }, [navigate, success]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(updateInputs);

    if (changeUsername && !changePassword) {
      dispatch(updateUsername({ username: updateInputs.username }));
    } else if (!changeUsername && changePassword) {
      dispatch(
        updatePassword({
          new_password1: updateInputs.new_password1,
          new_password2: updateInputs.new_password2,
        }),
      );
    } else if (changeUsername && changePassword) {
      dispatch(
        updateUsernamePassword({
          username: updateInputs.username,
          new_password1: updateInputs.new_password1,
          new_password2: updateInputs.new_password2,
        }),
      );
    }
  };

  const inputChangeHandler = (e) => {
    setUpdateInputs({
      ...updateInputs,
      [e.target.id]: e.target.value,
    });
  };

  const usernameChangeHandler = (e) => {
    const username = e.target.value;
    setUpdateInputs({
      ...updateInputs,
      username,
    });
    usernameCheck({ username }).then((res) => {
      const { data } = res.data;
      setInputErrors({
        ...inputErrors,
        usernameError: !data,
      });
      if (username && !inputErrors.usernameError) {
        setChangeUsername(true); // 닉네임 변경
      } else {
        setChangeUsername(false); // 닉네임 변경 안 함
      }
    });
  };

  const checkPassword = () => {
    if (
      updateInputs.new_password1 &&
      updateInputs.new_password2 &&
      updateInputs.new_password1 !== updateInputs.new_password2
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
  }, [updateInputs]);

  useEffect(() => {
    if (
      updateInputs.new_password1 &&
      updateInputs.new_password2 &&
      !inputErrors.passwordConfirmError
    ) {
      setChangePassword(true); // 비밀번호 변경
    } else {
      setChangePassword(false); // 비밀번호 변경
    }
  }, [updateInputs, inputErrors]);

  return (
    <Wrapper>
      <UserWrapper>
        <div className="logo">
          <img src="/assets/img/plant.png" alt="logo-img" />
          Planty
        </div>
        <UserForm onSubmit={onSubmitHandler}>
          <LabelContainer>
            <label htmlFor="username">NICKNAME</label>
            {updateInputs.username && (
              <RegisterMessage username={inputErrors.usernameError} />
            )}
          </LabelContainer>
          <input
            type="text"
            id="username"
            placeholder={userInfo.username}
            onChange={usernameChangeHandler}
          />
          <LabelContainer>
            <label htmlFor="password1">NEW PASSWORD</label>
          </LabelContainer>
          <input
            type="password"
            id="new_password1"
            onChange={inputChangeHandler}
            placeholder="8자 이상의 문자+숫자를 입력해주세요."
          />
          <LabelContainer>
            <label htmlFor="password2">NEW PASSWORD CONFIRM</label>
            {updateInputs.new_password1 && updateInputs.new_password2 && (
              <RegisterMessage password2={inputErrors.passwordConfirmError} />
            )}
          </LabelContainer>
          <input
            type="password"
            id="new_password2"
            onChange={inputChangeHandler}
            placeholder="8자 이상의 문자+숫자를 입력해주세요."
          />
          <SubmitButton
            onClick={onSubmitHandler}
            disabled={
              inputErrors.passwordConfirmError ||
              inputErrors.passwordError ||
              inputErrors.usernameError
            }
          >
            UPDATE
          </SubmitButton>
          <div className="option-div">
            <Link to={-1}>Back</Link>
          </div>
        </UserForm>
      </UserWrapper>
    </Wrapper>
  );
};

export default ProfileUpdatePage;

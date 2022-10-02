import React from 'react';
import {
  Wrapper,
  UserWrapper,
  UserForm,
  SubmitButton,
  LabelContainer,
} from '../../styles/user/UserStyle';

const ProfileUpdatePage = () => {
  const inputChangeHandler = () => {};
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <UserWrapper>
        <div className="logo">
          <img src="/assets/img/plant.png" alt="logo-img" />
          Planty
        </div>
        <UserForm onSubmit={onSubmitHandler}>
          <LabelContainer>
            <label htmlFor="username">USERNAME</label>
          </LabelContainer>
          <input type="text" id="username" onChange={inputChangeHandler} />
          <SubmitButton>UPDATE</SubmitButton>
        </UserForm>
      </UserWrapper>
    </Wrapper>
  );
};

export default ProfileUpdatePage;

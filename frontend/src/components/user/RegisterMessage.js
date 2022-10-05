import React from 'react';
import styled from 'styled-components';

const errorMessage = {
  username: '중복된 닉네임입니다 :(',
  email: '중복된 이메일입니다 :(',
  password1: '',
  password2: '비밀번호가 일치하지 않습니다 :(',
};

const correctMessage = {
  username: '사용 가능한 닉네임입니다 :)',
  email: '사용 가능한 이메일입니다 :)',
  password1: '사용 가능한 비밀번호입니다 :)',
  password2: '비밀번호가 일치합니다 :)',
};

const RegisterMessage = (props) => {
  const { username, email, password1, password2 } = props;
  return (
    <Wrapper>
      {/* 닉네임 */}
      {username === true && (
        <ErrorMessage>{errorMessage.username}</ErrorMessage>
      )}
      {username === false && (
        <CorrectMessage>{correctMessage.username}</CorrectMessage>
      )}
      {/* 이메일 */}
      {email === true && <ErrorMessage>{errorMessage.email}</ErrorMessage>}
      {email === false && (
        <CorrectMessage>{correctMessage.email}</CorrectMessage>
      )}
      {/* 비밀번호 확인 */}
      {password2 === true && (
        <ErrorMessage>{errorMessage.password2}</ErrorMessage>
      )}
      {password2 === false && (
        <CorrectMessage>{correctMessage.password2}</CorrectMessage>
      )}
      {/* 비밀번호 */}
      {password1 !== false ? (
        <ErrorMessage>{password1}</ErrorMessage>
      ) : (
        <CorrectMessage>{correctMessage.password1}</CorrectMessage>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 20px;
  font-size: 0.9rem;
`;

const ErrorMessage = styled.div`
  color: red;
`;

const CorrectMessage = styled.div`
  color: blue;
`;

export default RegisterMessage;

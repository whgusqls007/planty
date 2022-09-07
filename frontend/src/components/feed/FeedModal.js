import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  z-index: 999;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 1200px;
  height: 633px;
  /* display: none; */
`;

const FeedModal = ({ modalOpen }) => {
  return (
    <Wrapper>
      <ModalImg />
      <ModalDescription />
    </Wrapper>
  );
};

const ImgWrapper = styled.div`
  height: 100%;
  width: 500px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.themeColor[1]};
`;
const ModalImg = () => {
  return <ImgWrapper>aa</ImgWrapper>;
};
const DescriptionWrapper = styled.div`
  height: 100%;
  width: 700px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.themeColor[2]};
  margin-left: 20px;
`;
const ModalDescription = () => {
  return <DescriptionWrapper>bb</DescriptionWrapper>;
};

export default FeedModal;

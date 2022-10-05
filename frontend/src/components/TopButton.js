import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleUp from '@mui/icons-material/ArrowCircleUp';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const TopButton = () => {
  const onClickHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Wrapper onClick={onClickHandler}>
      <ArrowUpwardIcon />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 40px;
  right: 10%;
  /* right: 50px; */
  cursor: pointer;

  background-color: ${({ theme }) => theme.themeColor[5]};
  color: #fff;
  border-radius: 50px;
  text-align: center;
  border: 1px solid white;
  box-shadow: 2px 2px 3px #999;
`;

export default React.memo(TopButton);

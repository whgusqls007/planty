import React from 'react';
import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const FeedItem = ({ onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <div className="feed-info">
        <div className="feed-like">
          <FavoriteBorderIcon />
          <span>99</span>
        </div>
        <div className="feed-comment">
          <ChatBubbleOutlineIcon />
          <span>99</span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 245px;
  height: 309px;
  /* margin-top: 16px; */
  border-radius: 10px;
  background-color: ${({ theme }) => theme.themeColor[5]};
  position: relative;
  & .feed-info {
    position: absolute;
    right: 10px;
    bottom: 10px;
    display: flex;
    color: white;
    & > div {
      display: flex;
      align-items: center;
      margin-left: 5px;
      & span {
        margin-left: 2px;
      }
    }
  }
  &:hover {
    cursor: pointer;
    transition: transform 0.3s;
    transform: scale3d(1.03, 1.03, 1.03);
  }
`;

export default FeedItem;

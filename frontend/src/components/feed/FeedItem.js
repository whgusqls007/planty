import React from 'react';
import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const FeedItem = ({ onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <img
        src="https://homidu.s3.ap-northeast-2.amazonaws.com/feed/IMG_3063.jpeg"
        alt=""
        className="feed-img"
      />
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
  /* width: 245px; */
  width: 100%;
  /* height: 309px; */
  @media (min-width: 1400px) {
    height: calc(((1320px - 24px) / 5 - 8px) * 1.32);
  }
  @media (max-width: 1399px) and (min-width: 1200px) {
    height: calc(((1140px - 24px) / 4 - 8px) * 1.32);
  }
  @media (max-width: 1200px) and (min-width: 992px) {
    height: calc(((960px - 24px) / 4 - 8px) * 1.32);
  }
  @media (max-width: 991px) and (min-width: 768px) {
    height: calc(((720px - 24px) / 3 - 7px) * 1.32);
  }
  @media (max-width: 767px) and (min-width: 576px) {
    height: calc(((540px - 24px) / 2 - 5px) * 1.32);
  }
  /* @media (max-width: 575px) {
    height: calc(((100vw - 24px) / 2 - 5px) * 1.32);
  } */
  @media (max-width: 575px) {
    height: calc((100vw - 24px) * 1.32);
  }

  /* width: calc(50vw - 80px);
  height: calc(50vw - 20px); */
  /* margin-top: 16px; */
  border-radius: 10px;
  background-color: ${({ theme }) => theme.themeColor[5]};
  position: relative;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  & .feed-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
    @media (min-width: 768px) {
      cursor: pointer;
      transition: transform 0.3s;
      transform: scale3d(1.03, 1.03, 1.03);
    }
  }
`;

export default FeedItem;

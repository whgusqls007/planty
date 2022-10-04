import React from 'react';
import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useNavigate } from 'react-router-dom';

const FeedItem = ({ feed, onClick }) => {
  const navigate = useNavigate();
  const {
    id,
    user,
    content,
    date_created,
    img_url,
    comments_count,
    likes_count,
  } = feed ? feed : {};
  return (
    <Wrapper onClick={onClick}>
      <img src={img_url} alt="" className="feed-img" />
      <div className="feed-info">
        <div className="feed-like">
          <FavoriteBorderIcon />
          <span>{likes_count}</span>
        </div>
        <div className="feed-comment">
          <ChatBubbleOutlineIcon />
          <span>{comments_count}</span>
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
    width: calc(100vw - 48px);
    height: calc((100vw - 48px) * 1.32);
  }

  /* width: calc(50vw - 80px);
  height: calc(50vw - 20px); */
  /* margin-top: 16px; */
  border-radius: 10px;
  /* background-color: ${({ theme }) => theme.themeColor[5]}; */
  position: relative;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent 20%);
  }
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

export default React.memo(FeedItem);

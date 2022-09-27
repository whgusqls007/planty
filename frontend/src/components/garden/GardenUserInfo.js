import React from 'react';
import styled from 'styled-components';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const dummy = {
  nickname: '그루이두',
  level: 99,
  content: '나는야 정령왕 그루이두 ~',
  plantCount: 99,
  follower: 100,
  following: 100,
  score: 999,
};

const GardenUserInfo = () => {
  const { nickname, level, content, plantCount, follower, following, score } =
    dummy;
  return (
    <Wrapper>
      <div className="user-img"></div>
      <div className="user-header">
        <div className="user-level">lv. {level}</div>
        <div className="user-nickname">{nickname} 님의 정원</div>
        <img src="/assets/img/follow.png" alt="" className="follow-icon" />
      </div>
      <div className="user-content">
        {content}
        <BorderColorIcon className="content-edit-icon" />
      </div>
      <div className="user-info">
        <div>
          <span>반려 식물</span>
          <span>{plantCount}</span>
        </div>
        <div>
          <span>팔로워</span>
          <span>{follower}</span>
        </div>
        <div>
          <span>팔로우</span>
          <span>{following}</span>
        </div>
        <div>
          <span>활동점수</span>
          <span>{score}</span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & .user-img {
    width: 88px;
    height: 88px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.themeColor[1]};
  }
  & .user-header {
    display: flex;
    align-items: flex-end;
    margin-top: 20px;
    & .follow-icon {
      width: 40px;
    }
  }
  & .user-nickname {
    font-size: 25px;
    margin: 0 10px;
  }
  & .user-level {
    font-size: 20px;
  }
  & .user-content {
    font-size: 18px;
    margin-top: 16px;
    & .content-edit-icon {
      opacity: 0.4;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
  }
  & .user-info {
    display: flex;
    margin-top: 30px;
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0px 13px;
      font-weight: 200;
    }
  }
`;

export default GardenUserInfo;

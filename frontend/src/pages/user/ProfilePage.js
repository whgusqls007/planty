import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/esm/Container';
import { Link, useSearchParams } from 'react-router-dom';

const ProfilePage = () => {
  const [profileNum, setProfileNum] = useState(1);

  const profileNav = ['나의 글', '나의 댓글', '좋아요한 글'];

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const query = parseInt(searchParams.get('tab'))
      ? parseInt(searchParams.get('tab'))
      : 1;
    setProfileNum(query);
  }, [searchParams]);

  return (
    <Container>
      <Wrapper>
        <div className="profile-user-info">
          <img src="" alt="" className="profile-user-img" />
          <div className="profile-user-detail">
            <div className="profile-user-name">드루이두</div>
            <div className="profile-user-score">
              <span>레벨 99</span>
              <span>나의 글 99</span>
              <span>나의 댓글 99</span>
              <span>좋아요한 글 99</span>
            </div>
          </div>
        </div>
        <div className="profile-nav">
          {profileNav.map((e, i) => (
            <div
              className="profile-nav-item"
              key={i}
              onClick={() => setProfileNum(i + 1)}
            >
              <Link to={`?tab=${i + 1}`} replace>
                {e}
              </Link>
            </div>
          ))}
        </div>
        <ProfileWrapper>
          {profileNum === 1 && <div className="profile1">profile1</div>}
          {profileNum === 2 && <div className="profile2">profile2</div>}
          {profileNum === 3 && <div className="profile3">profile3</div>}
        </ProfileWrapper>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  & .profile-user-info {
    display: flex;
    align-items: center;
    margin: 40px 0px;
  }
  & .profile-user-img {
    width: 120px;
    height: 120px;
    border-radius: 60px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.themeColor[1]};
    margin-right: 20px;
  }
  & .profile-user-detail {
  }
  & .profile-user-name {
    font-size: 2rem;
    font-weight: 500;
  }
  & .profile-user-score {
    & span {
      margin-right: 8px;
      color: #565656;
    }
  }
  & .profile-nav {
    display: flex;
    border-bottom: 2px solid #565656;
  }
  & .profile-nav-item {
    width: 130px;
    height: 40px;
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    cursor: pointer;
    & a {
      text-decoration: none;
      color: inherit;
    }
  }
`;

const ProfileWrapper = styled.div``;

export default ProfilePage;

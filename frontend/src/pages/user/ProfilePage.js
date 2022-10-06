import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/esm/Container';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SettingsIcon from '@mui/icons-material/Settings';
import ProfileCommentListItem from '../../components/user/ProfileCommentListItem';
import ProfileLikeListItem from '../../components/user/ProfileLikeListItem';
import {
  fetchUserComments,
  fetchUserLikes,
  fetchUserInfo,
} from '../../features/user/userActions';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ProfileUpdateModal from '../../components/user/ProfileUpdateModal';

const ProfilePage = () => {
  const [profileNum, setProfileNum] = useState(1);
  const profileNav = ['나의 댓글', '좋아요한 글'];
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.user);
  const {
    profile_img,
    username,
    exp,
    articles_count,
    comments_count,
    likes_count,
    grade,
  } = userInfo;
  useEffect(() => {
    const query = parseInt(searchParams.get('tab'))
      ? parseInt(searchParams.get('tab'))
      : 1;
    setProfileNum(query);
  }, [searchParams]);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    dispatch(fetchUserInfo());
    dispatch(fetchUserComments());
    dispatch(fetchUserLikes());
  }, []);

  return (
    <>
      <ProfileUpdateModal modalOpen={modalOpen} closeModal={closeModal} />
      <Container>
        <Wrapper>
          <div className="profile-user-info">
            <div className="profile-img-div">
              <img src={profile_img} alt="" className="profile-user-img" />
              <AddCircleIcon
                className="profile-edit-icon"
                onClick={openModal}
              />
            </div>
            <div className="profile-user-detail">
              <div className="profile-user-name">{username}</div>
              <div className="profile-user-score">
                <span>레벨 {grade}</span>
                <span>나의 글 {articles_count}</span>
                <span>나의 댓글 {comments_count}</span>
                <span>좋아요한 글 {likes_count}</span>
              </div>
            </div>
          </div>
          <div className="profile-nav">
            <div className="profile-nav-tab">
              {profileNav.map((e, i) => (
                <div
                  className={
                    profileNum === i + 1
                      ? 'profile-nav-item active'
                      : 'profile-nav-item'
                  }
                  key={i}
                  onClick={() => setProfileNum(i + 1)}
                >
                  <Link to={`?tab=${i + 1}`} replace>
                    {e}
                  </Link>
                </div>
              ))}
            </div>
            <div
              className="profile-setting"
              onClick={() => {
                navigate('/profile/update');
              }}
            >
              <span>정보 수정</span>
              <SettingsIcon />
            </div>
          </div>
          <ProfileWrapper>
            {profileNum === 1 && <ProfileCommentListItem />}
            {profileNum === 2 && <ProfileLikeListItem />}
          </ProfileWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

const Wrapper = styled.div`
  & .profile-user-info {
    display: flex;
    align-items: center;
    margin: 40px 0px;
  }

  & .profile-img-div {
    margin-right: 20px;
    position: relative;
  }
  & .profile-user-img {
    width: 120px;
    height: 120px;
    border-radius: 60px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.themeColor[1]};
  }
  & .profile-user-detail {
  }

  & .profile-edit-icon {
    position: absolute;
    right: 0px;
    bottom: 8px;
    font-size: 25px;

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.themeColor[1]};
      transition: all 0.2s;
    }
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
    padding-bottom: 8px;
    justify-content: space-between;
  }
  & .profile-nav-tab {
    display: flex;
  }
  & .profile-setting {
    display: flex;
    align-items: center;
    cursor: pointer;
    & > span {
      margin-right: 2px;
    }
  }
  & .profile-nav-item {
    width: 130px;
    /* height: 40px; */
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    cursor: pointer;
    color: rgb(191, 191, 191);

    @media (max-width: 576px) {
      width: 80px;
      font-size: 1rem;
    }
  }
  & .active {
    color: black;
  }
`;

const ProfileWrapper = styled.div``;

export default ProfilePage;

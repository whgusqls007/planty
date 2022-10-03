import React, { useState, useEffect, useRef } from 'react';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useSelector, useDispatch } from 'react-redux';
import { GardenUserInfoWrapper } from '../../styles/garden/GardenComponentStyle';
import {
  followUser,
  updateDescription,
} from '../../features/garden/gardenActions';

const GardenUserInfo = () => {
  const dispatch = useDispatch();
  const [isEditting, setIsEditting] = useState(false);
  const [inputDescription, setInputDescription] = useState('');
  const { gardenUserInfo, loading } = useSelector((state) => state.garden);
  const { userInfo } = useSelector((state) => state.user);
  const editInput = useRef();
  const {
    profile_img,
    username,
    description,
    exp,
    is_private,
    plants_count,
    followers_count,
    follows_count,
    is_follow,
    grade,
  } = gardenUserInfo;
  const me = userInfo?.username;

  useEffect(() => {
    setInputDescription(description);
  }, [description]);

  const onClickFollow = () => {
    dispatch(followUser(username));
  };

  const onClickEdit = () => {
    if (!isEditting) {
      setIsEditting(true);
    } else {
      setIsEditting(false);
    }
  };

  const onChangeHandler = (e) => {
    setInputDescription(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateDescription({ description: inputDescription }));
    console.log(inputDescription);
    setIsEditting(false);
  };

  return (
    <GardenUserInfoWrapper>
      <img src={profile_img} alt="profile-img" className="user-img" />
      <div className="user-header">
        <div className="user-level">lv. {grade}</div>
        <div className="user-nickname">{username} 님의 정원</div>
        {me !== username && (
          <img
            src={
              is_follow ? '/assets/img/follow.png' : '/assets/img/unfollow.png'
            }
            alt=""
            className="follow-icon"
            onClick={onClickFollow}
          />
        )}
      </div>
      <div className="user-content">
        {isEditting ? (
          <form onSubmit={onSubmitHandler}>
            <input onChange={onChangeHandler} value={inputDescription} />
            <button className="edit-btn" type="submit">
              수정
            </button>
            <button className="cancel-btn" onClick={onClickEdit}>
              취소
            </button>
          </form>
        ) : (
          <span>
            {description}
            {me === username && (
              <BorderColorIcon
                className="content-edit-icon"
                onClick={onClickEdit}
              />
            )}
          </span>
        )}
      </div>
      <div className="user-info">
        <div>
          <span>반려 식물</span>
          <span>{plants_count}</span>
        </div>
        <div>
          <span>팔로워</span>
          <span>{followers_count}</span>
        </div>
        <div>
          <span>팔로우</span>
          <span>{follows_count}</span>
        </div>
        <div>
          <span>활동점수</span>
          <span>{exp}</span>
        </div>
      </div>
    </GardenUserInfoWrapper>
  );
};

export default GardenUserInfo;

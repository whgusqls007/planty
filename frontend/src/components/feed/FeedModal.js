import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
// import Carousel from 'react-bootstrap/Carousel';
import CloudIcon from '@mui/icons-material/Cloud';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from 'react-redux';
import { createFeedComment } from '../../features/feed/feedAction';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import { likeFeed } from '../../features/feed/feedAction';
import {
  FeedModalWrapper,
  MobileModalWrapper,
  ModalDescriptionWrapper,
  CommentInputFormWrapper,
  CommentItemWrapper,
  CommentListWrapper,
  ModalImgCarouselWrapper,
  ModalImgWrapper,
} from '../../styles/feed/feedModalStyle';
import { useCallback } from 'react';

// 날짜 생성 함수
const makeCreateDate = (dateCreated) => {
  const feedDateCreated =
    dateCreated?.substr(0, 10) +
    ' ' +
    dateCreated?.substr(11, 2) +
    '시 ' +
    dateCreated?.substr(14, 2) +
    '분';
  return feedDateCreated;
};

// FeedModal
const FeedModal = ({ modalOpen, closeModal }) => {
  const { feed, loading } = useSelector((state) => state.feed);

  return (
    <>
      {!loading && (
        <FeedModalWrapper modalOpen={modalOpen}>
          <div className="close-modal" onClick={closeModal} />
          <div className="modal-div">
            {!loading && (
              <>
                <ModalImg />
                <ModalDescription closeModal={closeModal} />
                <MobileModal closeModal={closeModal} />
              </>
            )}
          </div>
        </FeedModalWrapper>
      )}
    </>
  );
};

// MobileModal
const MobileModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const { loading, feed } = useSelector((state) => state.feed);
  const {
    id,
    content,
    user,
    date_created,
    feed_comments,
    likes_count,
    is_liked,
  } = feed;
  const onClickLike = useCallback(() => {
    dispatch(likeFeed(id));
  }, [dispatch, likeFeed, id]);

  return (
    <MobileModalWrapper>
      <CloseIcon className="close-btn" onClick={closeModal} />
      <div className="mobile-feed-writer">
        <Link to={`/garden/${user?.username}`}>
          <CloudIcon />
          <span>{user?.username}</span>
        </Link>
      </div>
      <ModalImgCarousel />
      <div className="mobile-feed-header">
        <div className="mobile-feed-title">title</div>
        <div className="mobile-feed-date-created">
          {makeCreateDate(date_created)}
        </div>
      </div>
      <div className="mobile-feed-body">
        <div className="mobile-feed-content">{content}</div>
        <div className="feed-like" onClick={onClickLike}>
          {is_liked && <FavoriteIcon className="like-icon" />}
          {!is_liked && <FavoriteBorderIcon className="like-icon" />}
          <span>{likes_count}</span>
        </div>
        <div className="mobile-feed-comment">
          {feed_comments && <CommentList comments={feed_comments} />}

          <CommentInputForm />
        </div>
      </div>
    </MobileModalWrapper>
  );
};

// feed 모달 캐러셀
const ModalImgCarousel = () => {
  const { feed } = useSelector((state) => state.feed);
  return (
    <ModalImgCarouselWrapper>
      <img src={feed.img_url} alt="Feed Image" />
    </ModalImgCarouselWrapper>
  );
};

const ModalImg = () => {
  return (
    <ModalImgWrapper>
      <ModalImgCarousel />
    </ModalImgWrapper>
  );
};

// feed 오른쪽 게시글
const ModalDescription = ({ closeModal }) => {
  const { loading, feed } = useSelector((state) => state.feed);
  const {
    id,
    content,
    user,
    date_created,
    feed_comments,
    likes_count,
    is_liked,
  } = feed;
  const dispatch = useDispatch();
  const onClickLike = useCallback(() => {
    dispatch(likeFeed(id));
  }, [dispatch, likeFeed, id]);

  return (
    <ModalDescriptionWrapper>
      <CloseIcon className="close-btn" onClick={closeModal} />
      <div className="description-header">
        <div className="description-title">제목</div>
        <div className="description-writer">
          <Link to={`/garden/${user?.username}`}>
            <CloudIcon />
            <span>{user?.username}</span>
          </Link>
        </div>
      </div>
      <div className="description-date-created">
        {makeCreateDate(date_created)}
      </div>
      <div className="description-body">
        <div className="description-content">{content}</div>
        <div className="feed-like" onClick={onClickLike}>
          {is_liked && <FavoriteIcon className="like-icon" />}
          {!is_liked && <FavoriteBorderIcon className="like-icon" />}
          <span>{likes_count}</span>
        </div>
        <div className="description-comment">
          <CommentList comments={feed_comments} />
          <CommentInputForm />
        </div>
      </div>
    </ModalDescriptionWrapper>
  );
};

// 댓글 리스트
const CommentList = ({ comments }) => {
  return (
    <CommentListWrapper>
      {comments &&
        comments.map((comment, idx) => (
          <CommentItem comment={comment} key={idx}></CommentItem>
        ))}
    </CommentListWrapper>
  );
};

// 댓글 요소
const CommentItem = ({ comment }) => {
  const { user, content } = comment;
  return (
    <CommentItemWrapper>
      <div>{user.username}</div>
      <span>::</span>
      <div>{content}</div>
    </CommentItemWrapper>
  );
};

// 댓글 입력 Form
const CommentInputForm = () => {
  const { feed } = useSelector((state) => state.feed);
  const dispatch = useDispatch();
  const [commentInput, setCommentInput] = useState('');

  return (
    <CommentInputFormWrapper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            createFeedComment({ feedId: feed.id, content: commentInput }),
          );
          setCommentInput('');
        }}
      >
        <input
          type="text"
          className="comment-input"
          value={commentInput}
          onChange={(e) => {
            setCommentInput(e.target.value);
          }}
        />
        <button className="comment-submit-btn">등록</button>
      </form>
    </CommentInputFormWrapper>
  );
};

export default FeedModal;

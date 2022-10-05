import React, { useEffect, useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import CloudIcon from '@mui/icons-material/Cloud';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from 'react-redux';
import {
  createFeedComment,
  modifyFeedComment,
  deleteFeedComment,
  likeFeed,
} from '../../features/feed/feedAction';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link, useNavigate } from 'react-router-dom';
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
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
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
  const navigate = useNavigate();
  const { loading, feed } = useSelector((state) => state.feed);
  const { userInfo } = useSelector((state) => state.user);
  const {
    id,
    content,
    user,
    date_created,
    feed_comments,
    likes_count,
    is_liked,
  } = feed;

  const onClickLike = () => {
    if (userInfo) {
      dispatch(likeFeed(id));
    } else {
      navigate('/');
    }
  };

  return (
    <MobileModalWrapper>
      <CloseIcon className="close-btn" onClick={closeModal} />
      <div className="mobile-feed-writer">
        <Link to={`/garden/${user?.username}`}>
          <CloudIcon />
          <span title="클릭하여 정원으로 이동">{user?.username}</span>
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
        <div className="feed-like">
          {is_liked && (
            <FavoriteIcon
              className="like-icon is-liked"
              onClick={onClickLike}
            />
          )}
          {!is_liked && (
            <FavoriteBorderIcon className="like-icon " onClick={onClickLike} />
          )}
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
      <img src={feed?.img_url} alt="Feed Image" />
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.user);
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

  const onClickLike = () => {
    if (userInfo) {
      dispatch(likeFeed(id));
    } else {
      navigate('/login');
    }
  };

  return (
    <ModalDescriptionWrapper>
      <CloseIcon className="close-btn" onClick={closeModal} />
      <div className="description-header">
        {/* <div className="description-title"></div> */}
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
        <div className="feed-like">
          {is_liked && (
            <FavoriteIcon
              className="like-icon is-liked"
              onClick={onClickLike}
            />
          )}
          {!is_liked && (
            <FavoriteBorderIcon className="like-icon" onClick={onClickLike} />
          )}
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
      {comments?.map((comment, idx) => (
        <CommentItem comment={comment} key={idx}></CommentItem>
      ))}
    </CommentListWrapper>
  );
};

// 댓글 요소
const CommentItem = ({ comment }) => {
  const { user, content, id, feed } = comment;
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isEditting, setIsEditting] = useState(false);
  const [inputComment, setInputComment] = useState('');

  useEffect(() => {
    setInputComment(content);
  }, [content]);

  const onClickEdit = () => {
    if (!isEditting) {
      setIsEditting(true);
    } else {
      setIsEditting(false);
    }
  };

  const onClickDelete = (e) => {
    dispatch(
      deleteFeedComment({
        feedId: feed,
        commentId: id,
      }),
    );
  };

  const onChangeHandler = (e) => {
    setInputComment(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      modifyFeedComment({
        feedId: id,
        commentId: feed,
        content: inputComment,
      }),
    );
    setIsEditting(false);
  };
  return (
    <CommentItemWrapper>
      <div className="comment-content">
        <div className="comment-content-left">
          <div>{user?.username}</div>
          <span>::</span>
          {isEditting ? (
            <form onSubmit={onSubmitHandler}>
              <input onChange={onChangeHandler} value={inputComment} />
              <button className="edit-btn" type="submit">
                수정
              </button>
              <button className="cancel-btn" onClick={onClickEdit}>
                취소
              </button>
            </form>
          ) : (
            <div>
              {user?.username === userInfo?.username ? (
                <div>
                  {content}{' '}
                  <BorderColorIcon
                    className="comment-edit-icon"
                    onClick={onClickEdit}
                  />
                  <DeleteIcon
                    className="comment-delte-icon"
                    onClick={onClickDelete}
                  />
                </div>
              ) : (
                <div>{content}</div>
              )}
            </div>
          )}
        </div>
        <div className="comment-date">
          {comment.date_created?.substr(0, 10)}&nbsp;&nbsp;
          {comment.date_created?.substr(11, 5)}
        </div>
      </div>
    </CommentItemWrapper>
  );
};

// 댓글 입력 Form
const CommentInputForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { feed } = useSelector((state) => state.feed);
  const { userInfo } = useSelector((state) => state.user);
  const [commentInput, setCommentInput] = useState('');
  const FormSubmitHandler = (e) => {
    e.preventDefault();

    if (userInfo) {
      dispatch(createFeedComment({ feedId: feed.id, content: commentInput }));
      setCommentInput('');
    } else {
      navigate('/login');
    }
  };

  return (
    <CommentInputFormWrapper>
      <form onSubmit={FormSubmitHandler}>
        <input
          type="text"
          className="comment-input"
          value={commentInput}
          onChange={(e) => {
            setCommentInput(e.target.value);
          }}
        />
        <button
          className="comment-submit-btn"
          disabled={
            commentInput === '' &&
            commentInput === undefined &&
            commentInput === null
          }
        >
          등록
        </button>
      </form>
    </CommentInputFormWrapper>
  );
};

export default FeedModal;

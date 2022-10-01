import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import CloudIcon from '@mui/icons-material/Cloud';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from 'react-redux';
import { createFeedComment } from '../../features/feed/feedAction';

// 테스트용 더미 feed
const feed = {
  title: '장미꽃이 피었어요~',
  content:
    '18세기 말에 아시아의 각 원종이 유럽에 도입되고 이들 유럽과 아시아 원종간의 교배가 이루어져 화색이나 화형은 물론 사계성이나 개화성 등 생태적으로 변화가 많은 품종들이 만들어졌다. 18세기 이전의 장미를 고대장미(old rose), 19세기 이후의 장미를 현대장미(modern rose)라 한다. 장미는 온대성의 상록관목으로 햇빛을 좋아하는 식물이다. 적정생육온도는 구간 24~27℃이고 야간온도 15~18℃이다. 30℃이상이면 꽃이 작아지고 꽃잎수가 줄어들어 퇴색하고 잎이 작아지며 엽색이 진해진다. 5℃정도이면 생육이 정지되고 0℃이하가 되면 낙엽이 지면서 휴면에 들어간다. [네이버 지식백과] 장미 [Rose, 薔薇] (경기도농업기술원, 손에 잡히는 생태수목도감, 조경식물소재도감, 네이버 포토갤러리)18세기 말에 아시아의 각 원종이 유럽에 도입되고 이들 유럽과 아시아 원종간의 교배가 이루어져 화색이나 화형은 물론 사계성이나 개화성 등 생태적으로 변화가 많은 품종들이 만들어졌다. 18세기 이전의 장미를 고대장미(old rose), 19세기 이후의 장미를 현대장미(modern rose)라 한다. 장미는 온대성의 상록관목으로 햇빛을 좋아하는 식물이다. 적정생육온도는 구간 24~27℃이고 야간온도 15~18℃이다. 30℃이상이면 꽃이 작아지고 꽃잎수가 줄어들어 퇴색하고 잎이 작아지며 엽색이 진해진다. 5℃정도이면 생육이 정지되고 0℃이하가 되면 낙엽이 지면서 휴면에 들어간다. [네이버 지식백과] 장미 [Rose, 薔薇] (경기도농업기술원, 손에 잡히는 생태수목도감, 조경식물소재도감, 네이버 포토갤러리)',
  user: '드루이두',
  dateCreated: '2022-09-06',
  comments: [
    { user: '밤여우', content: '장미 너무 예쁘게 잘 키우셨네요' },
    { user: '드루이두', content: '감사합니다.' },
    { user: '마늘곰', content: '장미 묘목 어디서 사셨나요?' },
    { user: '드루이두', content: '잠시만요 가게 연락처 드릴게요' },
  ],
};

// 날짜 생성 함수
const makeCreateDate = (dateCreated) => {
  // var splitDate = dateCreated.split('-');
  // return `${splitDate[0]}년 ${splitDate[1]}월 ${splitDate[2]}일 작성`;
  return dateCreated;
};

// FeedModal
const FeedModal = ({ modalOpen, closeModal }) => {
  const { feed, loading } = useSelector((state) => state.feed);

  return (
    <>
      {!loading && (
        <Wrapper modalOpen={modalOpen}>
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
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: none;
  ${({ modalOpen }) =>
    modalOpen &&
    css`
      display: flex;
      align-items: center;
      animation: modal-bg-show 0.4s;
    `}

  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);
  & .modal-div {
    display: flex;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    animation: modal-show 0.4s;
    @media (min-width: 1200px) {
      width: 1200px;
      height: 633px;
    }
    @media (max-width: 1199px) {
      flex-direction: column;
    }
  }
  & .close-modal {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  @keyframes modal-show {
    from {
      margin-top: -50px;
    }
    to {
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const MobileModal = ({ closeModal }) => {
  const { loading, feed } = useSelector((state) => state.feed);
  const { content, user, date_created, feed_comments } = feed;
  return (
    <MobileModalWrapper>
      <CloseIcon className="close-btn" onClick={closeModal} />
      <div className="mobile-feed-writer">
        <CloudIcon />
        <span>{user?.username}</span>
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
        <div className="mobile-feed-comment">
          {feed_comments && <CommentList comments={feed_comments} />}

          <CommentInputForm />
        </div>
      </div>
    </MobileModalWrapper>
  );
};

// MobileModal
const MobileModalWrapper = styled.div`
  width: 90vw;
  max-width: 700px;
  height: 80vh;
  overflow-y: scroll;
  margin-top: 5vh;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.themeColor[2]};

  display: none;
  position: relative;
  @media (max-width: 1199px) {
    display: flex;
    flex-direction: column;
  }
  & .close-btn {
    position: absolute;
    right: 12px;
    top: 12px;
    opacity: 0.5;
    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
  & .mobile-feed-writer {
    margin: 10px;
    & span {
      margin-left: 8px;
    }
  }
  & .mobile-feed-header {
    margin-top: 1rem;
    padding: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    @media (max-width: 400px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    & .mobile-feed-title {
      font-size: 1.2rem;
      font-weight: 500;
    }
    & .mobile-feed-date-created {
      font-size: 0.8rem;
      color: #797979;
    }
  }
  & .mobile-feed-body {
    padding: 0 1.2rem 1.2rem 1.2rem;
    display: flex;
    /* flex-grow: 1; */
    flex-direction: column;
    & .mobile-feed-content {
      /* height: 100px; */
      /* overflow-y: scroll; */
      /* flex-grow: 1; */
      font-size: 0.9rem;
    }
    & .mobile-feed-comment {
      margin-top: 1.5rem;
    }
  }
`;

const ModalImgCarouselWrapper = styled.div`
  & {
    background-color: ${({ theme }) => theme.themeColor[1]};
    /* background-color: #ffffff; */
    height: 50vw;
    max-height: 350px;
    width: 100%;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    /* overflow: hidden; */
    & img {
      /* height: 50vw; */
      /* max-height: 350px; */
      object-fit: cover;
      /* width: 100%; */
      height: 100%;
    }
  }
  // Bootstrap Carousel css 수정
  & .carousel-indicators {
    margin-bottom: 0;
    transform: translateY(20px);
  }
  & .carousel-indicators button {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    border-top: 0;
    border-bottom: 0;
  }

  & .carousel-indicators [data-bs-target] {
    transition: background-color 0.6s ease;
    opacity: 1;
    @media (max-width: 1199px) {
      background-color: ${({ theme }) => theme.themeColor[5]};
    }
  }
  & .carousel-indicators .active {
    background-color: ${({ theme }) => theme.themeColor[1]};
  }
  & .carousel-control-next-icon,
  .carousel-control-prev-icon {
    width: 1rem;
  }
  & .carousel-inner,
  .carousel-item {
    height: 100%;
  }
  @media (max-width: 1199px) {
    margin-top: 0px;
  }
`;

const ModalImgCarousel = () => {
  const { feed } = useSelector((state) => state.feed);
  return (
    <ModalImgCarouselWrapper>
      <img src={feed.img_url} alt="Feed Image" />
      {/* <Carousel interval={null}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel> */}
    </ModalImgCarouselWrapper>
  );
};

// feed 모달 캐러셀
const ModalImgWrapper = styled.div`
  height: 100%;
  width: 500px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.themeColor[5]};

  @media (max-width: 1199px) {
    display: none;
  }
`;
const ModalImg = () => {
  return (
    <ModalImgWrapper>
      <ModalImgCarousel />
    </ModalImgWrapper>
  );
};

// feed 오른쪽 게시글
const ModalDescriptionWrapper = styled.div`
  height: 100%;
  width: 700px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.themeColor[2]};
  margin-left: 20px;
  padding: 52px 49px 25px 49px;
  position: relative;
  & .close-btn {
    position: absolute;
    right: 30px;
    top: 30px;
    opacity: 0.5;
    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }

  & .description-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  & .description-title {
    font-size: 30px;
    font-weight: 500;
  }
  & .description-date-created {
    margin-top: 6px;
  }
  & .description-writer {
    font-size: 20px;
    display: flex;
    align-items: center;
    & span {
      margin-left: 10px;
    }
  }
  & .description-body {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding-top: 26px;
    height: 80%;
  }
  & .description-content {
    height: 55%;
    overflow-y: scroll;
  }
  & .description-comment {
    margin-top: 25px;
    padding: 20px;
    width: 100%;
    height: 45%;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.themeColor[5]};
    display: flex;
    flex-direction: column;
  }
  & .description-comment-form {
    position: absolute;
    bottom: 0;
  }
  @media (max-width: 1199px) {
    display: none;
  }
`;

const ModalDescription = ({ closeModal }) => {
  const { loading, feed } = useSelector((state) => state.feed);
  const { content, user, date_created, feed_comments } = feed;
  console.log(feed_comments);
  // const { title, content, user, dateCreated, comments } = feed;
  return (
    <ModalDescriptionWrapper>
      <CloseIcon className="close-btn" onClick={closeModal} />
      <div className="description-header">
        <div className="description-title">제목</div>
        <div className="description-writer">
          <CloudIcon />
          <span>{user?.username}</span>
        </div>
      </div>
      <div className="description-date-created">
        {makeCreateDate(date_created)}
      </div>
      <div className="description-body">
        <div className="description-content">{content}</div>
        <div className="description-comment">
          <CommentList comments={feed_comments} />
          <CommentInputForm />
        </div>
      </div>
    </ModalDescriptionWrapper>
  );
};

// 댓글 리스트
const CommentListWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

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
const CommentItemWrapper = styled.div`
  display: flex;
  & span {
    margin: 0px 4px;
  }
  margin-bottom: 4px;
`;

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

// 댓글 입력
const CommentInputWrapper = styled.div`
  & form {
    display: flex;
    margin-top: 6px;
  }
  & .comment-input {
    width: 0;
    flex-grow: 1;
    border: none;
    /* border: 1px solid black; */
    border-radius: 5px;
    padding: 0px 10px;
    &:focus {
      outline: none;
    }
  }
  & .comment-submit-btn {
    color: ${({ theme }) => theme.themeColor[4]};
    background-color: ${({ theme }) => theme.themeColor[1]};
    border-radius: 5px;
    width: 70px;
    padding: 5px 10px;
    margin-left: 12px;
    border: none;
  }
`;

const CommentInputForm = () => {
  const { feed } = useSelector((state) => state.feed);
  const dispatch = useDispatch();
  const [commentInput, setCommentInput] = useState('');

  return (
    <CommentInputWrapper>
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
    </CommentInputWrapper>
  );
};

export default FeedModal;

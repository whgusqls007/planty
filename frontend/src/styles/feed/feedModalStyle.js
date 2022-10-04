import styled, { css } from 'styled-components';

export const FeedModalWrapper = styled.div`
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
  & .feed-like {
    display: flex;
    justify-content: end;
    align-items: center;
    cursor: pointer;
    & .like-icon:hover {
      transform: scale3d(1.2, 1.2, 1.2);
      transition: 0.3s;
    }
    & span {
      font-size: 1.1rem;
      margin-left: 3px;
      margin-bottom: 4px;
    }
  }
`;

// feed 오른쪽 게시글
export const ModalDescriptionWrapper = styled.div`
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

// 댓글 입력 Form
export const CommentInputFormWrapper = styled.div`
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

// 댓글 리스트
export const CommentListWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

// 댓글 요소
export const CommentItemWrapper = styled.div`
  display: flex;
  & span {
    margin: 0px 4px;
  }
  margin-bottom: 4px;
`;

// MobileModal
export const MobileModalWrapper = styled.div`
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
    & .mobile-like {
    }
  }
`;

// feed 모달 캐러셀
export const ModalImgCarouselWrapper = styled.div`
  & {
    background-color: ${({ theme }) => theme.themeColor[1]};
    height: 50vw;
    max-height: 350px;
    width: 100%;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    & img {
      object-fit: cover;
      height: 100%;
    }
  }

  @media (max-width: 1199px) {
    margin-top: 0px;
  }
`;

export const ModalImgWrapper = styled.div`
  height: 100%;
  width: 500px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.themeColor[5]};

  @media (max-width: 1199px) {
    display: none;
  }
`;

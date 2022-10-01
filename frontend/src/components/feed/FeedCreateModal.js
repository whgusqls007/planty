import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled, { css } from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { createFeed } from '../../features/feed/feedAction';
import { useDispatch, useSelector } from 'react-redux';
import { createConfirm } from '../../features/feed/feedSlice';
import FileUploadIcon from '@mui/icons-material/FileUpload';

const FeedCreateModal = ({ modalOpen, closeModal }) => {
  const dispatch = useDispatch();
  const [imgFile, setImgFile] = useState(null); // img 전송용
  const [imgSrc, setImgSrc] = useState(null); // img 표시용
  const [content, setContent] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const { success, loading, error } = useSelector((state) => state.feed);

  const dragRef = useRef(null);

  const closeFeedCreateModal = () => {
    setImgFile(null);
    setImgSrc(null);
    setContent('');
    closeModal();
  };

  useEffect(() => {
    if (success) {
      dispatch(createConfirm());
      closeFeedCreateModal();
    }
  }, [success, dispatch, createConfirm]);

  const onImageChange = (e) => {
    e.preventDefault();
    const imgTarget = e.target.files[0];
    setImgFile(imgTarget);
    if (imgTarget) {
      const reader = new FileReader();
      reader.readAsDataURL(imgTarget);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      };
    } else {
      setImgSrc(null);
    }
  };

  const onChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (content && imgFile) {
      const formData = new FormData();
      const data = JSON.stringify({ content });
      formData.append('data', data);
      formData.append('files', imgFile);
      formData.append('enctype', 'multipart/form-data');
      dispatch(createFeed(formData));
    } else if (!imgFile) {
      alert('사진을 추가해주세요!');
    } else if (!content) {
      alert('내용을 입력해주세요!');
    }
  };

  const handleDragIn = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files) {
      setIsDragging(true);
    }
  }, []);

  const onChangeFiles = useCallback((e) => {
    let selectFiles = [];
    if (e.type === 'drop') {
      selectFiles = e.dataTransfer.files;
    } else {
      selectFiles = e.target.files;
    }

    const imgTarget = selectFiles[0];
    setImgFile(imgTarget);
    if (imgTarget) {
      const reader = new FileReader();
      reader.readAsDataURL(imgTarget);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      };
    } else {
      setImgSrc(null);
    }
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();

      onChangeFiles(e);
      setIsDragging(false);
    },
    [onChangeFiles],
  );

  const initDragEvents = useCallback(() => {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener('dragenter', handleDragIn);
      dragRef.current.addEventListener('dragleave', handleDragOut);
      dragRef.current.addEventListener('dragover', handleDragOver);
      dragRef.current.addEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = useCallback(() => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener('dragenter', handleDragIn);
      dragRef.current.removeEventListener('dragleave', handleDragOut);
      dragRef.current.removeEventListener('dragover', handleDragOver);
      dragRef.current.removeEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  return (
    <Wrapper modalOpen={modalOpen}>
      <div className="close-modal" onClick={closeFeedCreateModal} />
      <div className="modal-div">
        <CloseIcon className="close-btn" onClick={closeFeedCreateModal} />
        <FeedForm onSubmit={onSubmitHandler}>
          <div
            className={isDragging ? 'img-div dragging' : 'img-div'}
            ref={dragRef}
          >
            <label htmlFor="plant-img" className="plant-img-label">
              <div
                className={!imgSrc ? 'label-div' : 'label-div plant-img-hide'}
              >
                <FileUploadIcon className="upload-icon" />
                <span>Drag & Drop images or Click to Upload</span>
              </div>
            </label>

            <input
              type="file"
              id="plant-img"
              className="plant-img-hide"
              accept="image/*"
              onChange={onImageChange}
            />
            <img
              src={imgSrc}
              alt="피드 이미지"
              className={imgSrc ? 'plant-img' : 'plant-img-hide'}
            />
          </div>

          <label htmlFor="content">내용</label>
          <textarea
            className="content-area"
            type="text"
            id="content"
            onChange={onChangeHandler}
            value={content}
          />
          {/* <input
            type="text"
            id="content"
            onChange={onChangeHandler}
            value={content}
          /> */}
          <button>작성</button>
        </FeedForm>
      </div>
    </Wrapper>
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

  & .close-modal {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  & .modal-div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    padding: 50px;
    left: 50%;
    transform: translateX(-50%);
    /* animation: modal-show 0.4s; */
    background-color: #ffffff;
    box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    width: 90vw;
    max-width: 850px;
    height: 800px;
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
    @media (max-width: 1199px) {
      margin-top: 5vh;
      height: 90vh;
    }
  }

  /* @keyframes modal-show {
    from {
      margin-top: -50px;
    }
    to {
      margin-top: 0;
    }
  } */
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const FeedForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  & label {
    margin-top: 16px;
    color: #787878;
  }
  & input {
    padding: 8px 0;
    border-width: 0 0 1px 0;
    &:focus {
      outline: none;
    }
  }
  & > div > label {
    margin-left: 6px;
  }
  & button {
    border: none;
    margin-top: 10px;
    background-color: ${({ theme }) => theme.themeColor[1]};
    height: 44px;
    color: #ffffff;
    border-radius: 8px;
  }

  & .img-div {
    position: relative;
    border: 2px dashed black;
    border-radius: 20px;
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    & img {
      /* width: 100%; */
    }
  }

  & .dragging {
    background-color: #dbdbdb;
  }

  & .plant-img {
    height: 100%;
  }
  & .plant-img-label {
    cursor: pointer;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    left: 0;
    top: 0;
    background-color: none;
    width: 100%;
    height: 100%;
    & .label-div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & span {
        font-size: 1.3rem;
        display: flex;
        justify-content: center;
      }
    }
    & .upload-icon {
      width: 10vw;
      height: 10vw;
    }
    & .plant-img-hide {
      display: none;
    }
  }
  & .plant-img-hide {
    display: none;
  }
  & .content-area {
    flex-grow: 1;
    padding: 6px;
    font-size: 1.1rem;
  }
`;

export default FeedCreateModal;

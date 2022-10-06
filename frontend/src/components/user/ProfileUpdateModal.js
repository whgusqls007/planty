import React, { useState, useCallback, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfileImg } from '../../features/user/userActions';
import { profileImgUpdateDone } from '../../features/user/userSlice';

const ProfileImageModal = ({ modalOpen, closeModal }) => {
  const dispatch = useDispatch();
  const [imgFile, setImgFile] = useState(null); // img 전송용
  const [imgSrc, setImgSrc] = useState(null); // img 표시용
  const [isDragging, setIsDragging] = useState(false);
  const { success } = useSelector((state) => state.user);

  const dragRef = useRef(null);

  useEffect(() => {
    if (success) {
      dispatch(profileImgUpdateDone());
      closeUpdateModal();
    }
  }, [success, dispatch]);

  const closeUpdateModal = () => {
    setImgFile(null);
    setImgSrc(null);
    closeModal();
  };

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

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!imgFile) {
      alert('사진을 추가해주세요!');
    } else {
      const formData = new FormData();
      formData.append('files', imgFile);
      formData.append('enctype', 'multipart/form-data');
      dispatch(updateProfileImg(formData));
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
      <div className="close-modal" onClick={closeUpdateModal} />
      <div className="modal-div">
        <CloseIcon className="close-btn" onClick={closeUpdateModal} />
        <ProfileImageForm onSubmit={onSubmitHandler}>
          <div
            className={isDragging ? 'img-div dragging' : 'img-div'}
            ref={dragRef}
          >
            <label htmlFor="profile-img" className="profile-img-label">
              <div
                className={!imgSrc ? 'label-div' : 'label-div profile-img-hide'}
              >
                <FileUploadIcon className="upload-icon" />
                <span>Drag & Drop images or Click to Upload</span>
              </div>
            </label>

            <input
              type="file"
              id="profile-img"
              className="profile-img-hide"
              accept="image/*"
              onChange={onImageChange}
            />
            <img
              src={imgSrc}
              alt="피드 이미지"
              className={imgSrc ? 'profile-img' : 'profile-img-hide'}
            />
          </div>
          <button type="submit">프로필 사진 변경</button>
        </ProfileImageForm>
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
  z-index: 9999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.85);
  overflow-y: initial !important;

  & .close-modal {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  & .modal-div {
    max-width: 700px;
    overflow-y: initial !important;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    padding: 50px;
    left: 50%;
    transform: translateX(-50%);
    animation: modal-show 0.4s;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    width: 40vw;
    max-width: 40vw;
    height: 50vh;

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
      height: 30vh;
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

const ProfileImageForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* & label {
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
  } */
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
    height: 90%;
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

  & .profile-img {
    height: 100%;
  }
  & .profile-img-label {
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
    & .profile-img-hide {
      display: none;
    }
  }
  & .profile-img-hide {
    display: none;
  }
  & .content-area {
    flex-grow: 1;
    padding: 6px;
    font-size: 1.1rem;
  }
`;

export default ProfileImageModal;

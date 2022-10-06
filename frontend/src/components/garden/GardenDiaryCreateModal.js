import React, { useState, useEffect, useCallback, useRef } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {
  GardenDiaryCreateModalWrapper,
  GardenDiaryForm,
} from '../../styles/garden/GardenComponentStyle';
import { useDispatch, useSelector } from 'react-redux';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { createDiary } from '../../features/garden/gardenActions';
import { useParams } from 'react-router-dom';
import { gardenCreateConfirm } from '../../features/garden/gardenSlice';

const GardenDiaryCreateModal = ({ modalOpen, closeModal }) => {
  const dispatch = useDispatch();
  const [imgFile, setImgFile] = useState(null); // img 전송용
  const [imgSrc, setImgSrc] = useState(null); // img 표시용
  const [content, setContent] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef(null);
  const { gardenId } = useParams();
  const { success } = useSelector((state) => state.garden);

  const closeDiaryCreateModal = (e) => {
    setImgFile(null);
    setImgSrc(null);
    setContent('');
    closeModal();
  };
  useEffect(() => {
    if (success) {
      dispatch(gardenCreateConfirm());
      closeDiaryCreateModal();
    }
  }, [dispatch, success]);

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
      dispatch(createDiary({ mygardenId: gardenId, params: formData }));
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
    <GardenDiaryCreateModalWrapper modalOpen={modalOpen}>
      <div className="close-modal" onClick={closeDiaryCreateModal} />
      <div className="modal-div">
        <CloseIcon className="close-btn" onClick={closeDiaryCreateModal} />
        <GardenDiaryForm onSubmit={onSubmitHandler}>
          <div
            className={isDragging ? 'img-div dragging' : 'img-div'}
            ref={dragRef}
          >
            <label htmlFor="diary-plant-img" className="plant-img-label">
              <div
                className={!imgSrc ? 'label-div' : 'label-div plant-img-hide'}
              >
                <FileUploadIcon className="upload-icon" />
                <span>Drag & Drop images or Click to Upload</span>
              </div>
            </label>

            <input
              type="file"
              id="diary-plant-img"
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

          <label htmlFor="diary-content">내용</label>
          <textarea
            className="content-area"
            type="text"
            id="diary-content"
            onChange={onChangeHandler}
            value={content}
          />
          <button>작성</button>
        </GardenDiaryForm>
      </div>
    </GardenDiaryCreateModalWrapper>
  );
};

export default GardenDiaryCreateModal;

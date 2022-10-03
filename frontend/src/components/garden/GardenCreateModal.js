import React, { useState, useCallback, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { GardenForm } from '../../styles/garden/GardenComponentStyle';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useSelector } from 'react-redux';

const GardenCreateModal = ({ modalOpen, closeModal }) => {
  const [imgFile, setImgFile] = useState(null); // img 전송용
  const [imgSrc, setImgSrc] = useState(null); // img 표시용
  const [isDragging, setIsDragging] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [focused, setFocused] = useState(false);
  const searchRef = useRef(null);
  const [presentCheck, setPresentCheck] = useState(false);
  const [gardenInputs, setGardenInputs] = useState({
    plantname: '',
    date_grow: null,
    watering_schedule: '',
    recent_water: null,
    memo: '',
    preference: 4,
    present: false,
  });
  const { searchResult } = useSelector((state) => state.dictionary);

  const searchResultOpen = () => {
    setFocused(true);
  };

  const searchInputChangeHandler = (e) => {
    if (e.target.value) {
      // dispatch(searchPlant(e.target.value));
    }
    setSearchKeyword(e.target.value);
  };

  const dragRef = useRef(null);

  const closeGardenCreateModal = () => {
    setImgFile(null);
    setImgSrc(null);
    setGardenInputs({
      plantname: '',
      date_grow: null,
      watering_schedule: null,
      recent_water: null,
      memo: null,
      preference: 4,
      present: false,
    });
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

  const onChangeHandler = (e) => {
    setGardenInputs({
      ...gardenInputs,
      [e.target.id]: e.target.value,
    });
    console.log(gardenInputs);
  };

  const onCheckHandler = (e) => {
    if (presentCheck) {
      setPresentCheck(false);
    } else {
      setPresentCheck(true);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('inputs', gardenInputs);
    formData.append('files', imgFile);
    formData.append('enctype', 'multipart/form-data');
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
    <Wrapper
      modalOpen={modalOpen}
      onClick={(e) => {
        if (!searchRef.current.contains(e.target)) {
          setFocused(false);
        }
      }}
    >
      <div className="close-modal" onClick={closeGardenCreateModal} />
      <div className="modal-div">
        <CloseIcon className="close-btn" onClick={closeGardenCreateModal} />
        <GardenForm onSubmit={onSubmitHandler}>
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
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* <div> */}
            <label htmlFor="plantname">🌱 식물 종류</label>
            <input
              type="text"
              id="plantname"
              onChange={onChangeHandler}
              onFocus={searchResultOpen}
              ref={searchRef}
            />
            <div
              className="garden-search-result"
              visible={focused && searchKeyword && searchResult.length !== 0}
            >
              {searchResult.map((plant, idx) => (
                <div plant={plant} key={idx} />
              ))}
            </div>
            {/* </div> */}
            <label htmlFor="plantname">💬 한줄 메모</label>
            <input
              type="text"
              id="plantmemo"
              onChange={onChangeHandler}
              placeholder="반려식물을 소개해주세요."
              value={gardenInputs.memo}
            />
            <label htmlFor="date_grow">📆 키운 날짜</label>
            <input type="date" id="date_grow" onChange={onChangeHandler} />
            <label htmlFor="watering_schedule">💧 물주는 주기 (일)</label>
            <input
              type="text"
              id="watering_schedule"
              onChange={onChangeHandler}
              placeholder="숫자만 입력해 주세요. ex. 1일: 1, 7일: 7"
              value={gardenInputs.watering_schedule}
            />
            <label htmlFor="recent_water">🚿 최근 물 준 날짜</label>
            <input type="date" id="recent_water" onChange={onChangeHandler} />
            <label htmlFor="preference">💚 추천 점수(선호 점수)</label>
            <select
              name="plant-preference"
              id="preference"
              onChange={onChangeHandler}
            >
              <option value="4">4점</option>
              <option value="3">3점</option>
              <option value="2">2점</option>
              <option value="1">1점</option>
              <option value="0">0점</option>
            </select>
            <span>
              <span>🎁 선물 받은 식물&nbsp;&nbsp;</span>

              <input
                type="checkbox"
                id="present"
                value={true}
                onClick={setPresentCheck}
                onChange={onChangeHandler}
              />
            </span>
            <button type="submit">작성</button>
          </div>
        </GardenForm>
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

  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default GardenCreateModal;

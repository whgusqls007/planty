import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {
  GardenDiaryModalWrapper,
  GardenForm,
} from '../../styles/garden/GardenComponentStyle';

const GardenDiaryModal = ({ modalOpen, closeModal }) => {
  const [imgFile, setImgFile] = useState(null); // img 전송용
  const [imgSrc, setImgSrc] = useState(null); // img 표시용

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
  const onChangeHandler = (e) => {};

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <GardenDiaryModalWrapper modalOpen={modalOpen}>
      <div className="close-modal" onClick={closeModal} />
      <div className="modal-div">
        <CloseIcon className="close-btn" onClick={closeModal} />
        <GardenForm onSubmit={onSubmitHandler}>
          <label htmlFor="plantname">내용</label>
          <input type="text" id="plantname" onChange={onChangeHandler} />
          <label htmlFor="plant_img">식물 사진</label>
          <input
            type="file"
            id="plant_img"
            className="plant-img-input"
            accept="image/*"
            onChange={onImageChange}
          />
          <img src={imgSrc} alt="aabbb" className="plant-img" />
          <button>작성</button>
        </GardenForm>
      </div>
    </GardenDiaryModalWrapper>
  );
};

export default GardenDiaryModal;

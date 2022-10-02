import React, { useState } from 'react';
import styled, { css } from 'styled-components';
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

// const GardenForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: 100%;
//   & label {
//     margin-top: 16px;
//     color: #787878;
//   }
//   & input {
//     padding: 8px 0;
//     border-width: 0 0 1px 0;
//     &:focus {
//       outline: none;
//     }
//   }
//   & > div > label {
//     margin-left: 6px;
//   }
//   & button {
//     border: none;
//     margin-top: 10px;
//     background-color: ${({ theme }) => theme.themeColor[1]};
//     height: 44px;
//     color: #ffffff;
//     border-radius: 8px;
//   }
//   & .plant-img {
//     border: 2px dashed black;
//     width: 300px;
//     height: 300px;
//   }
// `;

export default GardenDiaryModal;

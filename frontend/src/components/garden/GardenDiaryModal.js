import React, { useEffect } from 'react';
import {
  GardenDiaryModalWrapper,
  ModalContentWrapper,
} from '../../styles/garden/GardenComponentStyle';
import { useSearchParams, useNavigate, useParams } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteDiary,
  fetchDiary,
  fetchMyGarden,
} from '../../features/garden/gardenActions';

// 날짜 생성 함수
const makeCreateDate = (dateCreated) => {
  const feedDateCreated =
    dateCreated?.substr(0, 4) +
    '년 ' +
    dateCreated?.substr(4, 3).replace('-', '') +
    '월 ' +
    dateCreated?.substr(7, 3).replace('-', '') +
    '일';
  return feedDateCreated;
};

const GardenDiaryModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const diaryId = parseInt(searchParams.get('diary'));
  const gardenId = parseInt(useParams().gardenId);
  const { diary } = useSelector((state) => state.garden);

  useEffect(() => {
    if (diaryId && gardenId) {
      dispatch(fetchDiary({ diaryId, gardenId }));
    }
  }, [diaryId, gardenId]);

  const closeModal = () => {
    navigate(-1);
  };
  console.log(diary);

  const deleteHandler = () => {
    dispatch(deleteDiary({ gardenId, diaryId })).then(() => {
      closeModal();
      dispatch(fetchMyGarden(gardenId));
    });
  };

  return (
    <GardenDiaryModalWrapper modalOpen={diaryId} onClick={closeModal}>
      <div className="modal-div">
        <CloseIcon className="close-btn" onClick={closeModal} />
        <ModalContentWrapper>
          <p className="date">{makeCreateDate(diary.date_created)}</p>
          <button onClick={deleteHandler}>삭제</button>
          <img src={diary.diary_img} />
          <p className="content">{diary.content}</p>
        </ModalContentWrapper>
      </div>
    </GardenDiaryModalWrapper>
  );
};

export default GardenDiaryModal;

import React, { useEffect } from 'react';
import { GardenDiaryModalWrapper } from '../../styles/garden/GardenComponentStyle';
import { useSearchParams, useNavigate, useParams } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteDiary,
  fetchDiary,
  fetchMyGarden,
} from '../../features/garden/gardenActions';

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
        {JSON.stringify(diary)}
        <button onClick={deleteHandler}>삭제</button>
      </div>
    </GardenDiaryModalWrapper>
  );
};

export default GardenDiaryModal;

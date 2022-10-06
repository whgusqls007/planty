import React, { useEffect } from 'react';
import {
  GardenDiaryModalWrapper,
  ModalContentWrapper,
} from '../../styles/garden/GardenComponentStyle';
import { useSearchParams, useNavigate, useParams } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
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
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    if (diaryId && gardenId) {
      console.log(gardenId);
      dispatch(fetchDiary({ mygardenId: gardenId, diaryId: diaryId }));
    }
  }, [diaryId, gardenId]);

  const closeModal = () => {
    navigate(`/garden/${userInfo?.username}/${gardenId}`);
  };

  const deleteHandler = () => {
    dispatch(deleteDiary({ mygardenId: gardenId, diaryId: diaryId })).then(
      () => {
        closeModal();
        dispatch(fetchMyGarden(gardenId));
      },
    );
  };

  return (
    <GardenDiaryModalWrapper modalOpen={diaryId} onClick={closeModal}>
      <div className="modal-div">
        <CloseIcon className="close-btn" onClick={closeModal} />
        <ModalContentWrapper>
          <div
            style={{ display: 'flex', width: '100%', justifyContent: 'center' }}
          >
            <p className="date">{makeCreateDate(diary.date_created)}</p>
            <button
              onClick={deleteHandler}
              style={{
                background: 'rgba(0,0,0,0)',
                border: '0',
                marginLeft: '5%',
              }}
            >
              <DeleteIcon />
            </button>
          </div>
          <img src={diary.diary_img} />
          <p className="content">{diary.content}</p>
        </ModalContentWrapper>
      </div>
    </GardenDiaryModalWrapper>
  );
};

export default GardenDiaryModal;

import React, { useEffect, useState } from 'react';
import GardenItem from '../../components/garden/GardenItem';
import GardenUserInfo from '../../components/garden/GardenUserInfo';
import GardenCreateModal from '../../components/garden/GardenCreateModal';
import { useDispatch } from 'react-redux';
import {
  fetchUserInfo,
  fetchUserPlant,
} from '../../features/garden/gardenActions';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Wrapper, GardenWrapper } from '../../styles/garden/GardenStyle';

const dummyPlants = [
  {
    cntntsSj: '해바라기',
    date_grow: '2022.09.05',
  },
  {
    cntntsSj: '무궁화',
    date_grow: '2022.09.05',
  },
  {
    cntntsSj: '방울 토마토',
    date_grow: '2022.09.05',
  },
  {
    cntntsSj: '해바라기',
    date_grow: '2022.09.05',
  },
  {
    cntntsSj: '무궁화',
    date_grow: '2022.09.05',
  },
  {
    cntntsSj: '방울 토마토',
    date_grow: '2022.09.05',
  },
];

const GardenPage = () => {
  const dispatch = useDispatch();
  const { userName } = useParams();

  useEffect(() => {
    dispatch(fetchUserInfo(userName));
    dispatch(fetchUserPlant(userName));
  }, [dispatch]);

  const [modalOpen, setModalOpen] = useState(false);
  const { gardenPlantList } = useSelector((state) => state.garden);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <GardenCreateModal modalOpen={modalOpen} closeModal={closeModal} />
      <Wrapper>
        <GardenUserInfo />
        <div className="toggle-div">
          <span>|</span>
          <div className="toggle-btn1">반려식물</div>
          <div className="toggle-btn2">피드</div>
        </div>
        <GardenWrapper>
          <button onClick={openModal}>식물 등록</button>
          {gardenPlantList !== null
            ? gardenPlantList
                // .slice(0, gardenPlantList.length)
                .map((plant, idx) => <GardenItem plant={plant} key={idx} />)
            : null}
        </GardenWrapper>
      </Wrapper>
    </>
  );
};

export default GardenPage;

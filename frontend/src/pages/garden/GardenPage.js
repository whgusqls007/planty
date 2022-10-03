import React, { useEffect, useState } from 'react';
import GardenItem from '../../components/garden/GardenItem';
import GardenUserInfo from '../../components/garden/GardenUserInfo';
import GardenCreateModal from '../../components/garden/GardenCreateModal';
import FeedItem from '../../components/feed/FeedItem';
import { useDispatch } from 'react-redux';
import {
  fetchUserInfo,
  fetchUserPlant,
  fetchUserFeed,
} from '../../features/garden/gardenActions';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Wrapper, GardenWrapper } from '../../styles/garden/GardenStyle';
import { useSearchParams, useNavigate } from 'react-router-dom';

const GardenPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userName } = useParams();
  const [changeFeeds, setChangeFeeds] = useState(false);
  const [searchParams] = useSearchParams();
  const [tabNum, setTabNum] = useState(1);
  useEffect(() => {
    const query = parseInt(searchParams.get('tab'))
      ? parseInt(searchParams.get('tab'))
      : 1;
    setTabNum(query);
  }, [searchParams]);

  useEffect(() => {
    dispatch(fetchUserInfo(userName));
    dispatch(fetchUserPlant(userName));
    dispatch(fetchUserFeed(userName));
  }, [dispatch]);

  const [modalOpen, setModalOpen] = useState(false);
  const { gardenPlantList } = useSelector((state) => state.garden);
  const { gardenFeedList } = useSelector((state) => state.garden);

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
          <div
            className="toggle-btn1"
            onClick={() => {
              navigate(`/garden/${userName}?tab=${1}`, { replace: true });
            }}
          >
            반려식물
          </div>
          <div
            className="toggle-btn2"
            onClick={() => {
              navigate(`/garden/${userName}?tab=${2}`, { replace: true });
            }}
          >
            피드
          </div>
        </div>
        <GardenWrapper>
          <button onClick={openModal}>식물 등록</button>
          {tabNum === 1 &&
            (gardenPlantList !== null
              ? gardenPlantList.map((plant, idx) => (
                  <GardenItem gardenPlant={plant} key={idx} />
                ))
              : null)}
          {tabNum === 2 &&
            (gardenFeedList !== null
              ? gardenFeedList.map((feed, idx) => (
                  <FeedItem
                    feed={feed}
                    key={idx}
                    onClick={() => navigate(`/feed/${feed.id}`)}
                  />
                ))
              : null)}
        </GardenWrapper>
      </Wrapper>
    </>
  );
};

export default GardenPage;

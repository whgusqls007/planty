import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import FeedItem from '../../components/feed/FeedItem';
import FeedModal from '../../components/feed/FeedModal';
import FeedCreateModal from '../../components/feed/FeedCreateModal';
import TopButton from '../../components/TopButton';
import { fetchFeedList, fetchFeed } from '../../features/feed/feedAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Wrapper } from '../../styles/feed/FeedListStyle';

const FeedListPage = () => {
  // Dummy
  const arr = [...Array(18)];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { feedId } = useParams();
  useEffect(() => {
    dispatch(fetchFeedList());
  }, []);
  const feedList = useSelector((state) => state.feed.feedList);

  const [modalOpen, setModalOpen] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  useEffect(() => {
    if (feedId) {
      dispatch(fetchFeed(feedId));
      setModalOpen(true);
    }
  }, [feedId]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    navigate(`/feed`, { replace: true });
    setModalOpen(false);
  };

  const openCreateModal = () => {
    setCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setCreateModalOpen(false);
  };

  return (
    <>
      <FeedModal modalOpen={modalOpen} closeModal={closeModal} />
      <FeedCreateModal
        modalOpen={createModalOpen}
        closeModal={closeCreateModal}
      />
      <Container className="d-flex flex-column justify-content-center">
        <Wrapper>
          {feedList.map((feed, idx) => (
            <FeedItem
              key={feed.id}
              feed={feed}
              onClick={() => {
                navigate(`/feed/${feed.id}`, { replace: true });
              }}
            />
          ))}
          {arr.map((e, i) => (
            <FeedItem key={i} onClick={openModal} />
          ))}
          <button onClick={openCreateModal} className="feed-create-btn">
            피드 추가
          </button>
        </Wrapper>
      </Container>
      <TopButton />
    </>
  );
};

export default FeedListPage;

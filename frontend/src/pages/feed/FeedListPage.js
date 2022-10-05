import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import FeedItem from '../../components/feed/FeedItem';
import FeedModal from '../../components/feed/FeedModal';
import FeedCreateModal from '../../components/feed/FeedCreateModal';
import TopButton from '../../components/TopButton';
import { fetchFeedList } from '../../features/feed/feedAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from '../../styles/feed/FeedListStyle';

const FeedListPage = () => {
  // Dummy
  const arr = [...Array(18)];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { feedId } = useParams();
  useEffect(() => {
    dispatch(fetchFeedList());
  }, []);
  const feedList = useSelector((state) => state.feed.feedList);
  const [createModalOpen, setCreateModalOpen] = useState(false);

  const openCreateModal = () => {
    setCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setCreateModalOpen(false);
  };

  return (
    <>
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
                navigate(`?feed=${feed.id}`);
              }}
            />
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

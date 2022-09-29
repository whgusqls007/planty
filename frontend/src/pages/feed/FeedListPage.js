import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/esm/Container';
import FeedItem from '../../components/feed/FeedItem';
import FeedModal from '../../components/feed/FeedModal';
import FeedCreateModal from '../../components/feed/FeedCreateModal';
import TopButton from '../../components/TopButton';
import { fetchFeedList } from '../../features/feed/feedAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const FeedListPage = () => {
  // Dummy
  const arr = [...Array(18)];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFeedList());
  }, []);
  const feedList = useSelector((state) => state.feed.feedList);

  const [modalOpen, setModalOpen] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
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
            <FeedItem key={feed.id} feed={feed} onClick={openModal} />
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

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  background-color: white;
  margin-top: 40px;

  /* 반응형 */
  @media (min-width: 1400px) {
    grid-template-columns: repeat(5, calc((1320px - 24px) / 5 - 8px));
    & > div:nth-child(5n + 2) {
      top: 80px;
    }
    & > div:nth-child(5n + 4) {
      top: 80px;
    }
  }
  @media (max-width: 1399px) and (min-width: 1200px) {
    grid-template-columns: repeat(4, calc((1140px - 24px) / 4 - 8px));
    & > div:nth-child(4n + 2) {
      top: 80px;
    }
    & > div:nth-child(4n + 4) {
      top: 80px;
    }
  }
  @media (max-width: 1199px) and (min-width: 992px) {
    grid-template-columns: repeat(4, calc((960px - 24px) / 4 - 8px));
    & > div:nth-child(4n + 2) {
      top: 80px;
    }
    & > div:nth-child(4n + 4) {
      top: 80px;
    }
  }
  @media (max-width: 991px) and (min-width: 768px) {
    & > div:nth-child(3n + 2) {
      top: 80px;
    }
    grid-template-columns: repeat(3, calc((720px - 24px) / 3 - 7px));
  }
  @media (max-width: 767px) and (min-width: 576px) {
    grid-template-columns: repeat(2, calc((540px - 24px) / 2 - 5px));
  }
  /* @media (max-width: 575px) and (min-width: 301px) {
    grid-template-columns: repeat(2, calc((100vw - 24px) / 2 - 5px));
  } */
  @media (max-width: 575px) {
    padding: 0 10px;
    grid-template-columns: repeat(1, calc((100vw - 44px)));
  }
  & .feed-create-btn {
    position: absolute;
    right: 0;
    top: -52px;
    width: 130px;
    height: 42px;

    background-color: ${({ theme }) => theme.themeColor[1]};
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 20px;
  }
`;

export default FeedListPage;

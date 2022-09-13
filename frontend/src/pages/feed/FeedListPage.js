import React, { useState } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/esm/Container';
import FeedItem from '../../components/feed/FeedItem';
import FeedModal from '../../components/feed/FeedModal';

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  background-color: white;

  /* 반응형 */
  @media (min-width: 1400px) {
    grid-template-columns: repeat(5, 245px);
    & > div:nth-child(5n + 2) {
      top: 80px;
    }
    & > div:nth-child(5n + 4) {
      top: 80px;
    }
  }
  @media (max-width: 1399px) and (min-width: 1121px) {
    grid-template-columns: repeat(4, 245px);
    & > div:nth-child(4n + 2) {
      top: 80px;
    }
    & > div:nth-child(4n + 4) {
      top: 80px;
    }
  }
  @media (max-width: 1120px) and (min-width: 801px) {
    & > div:nth-child(3n + 2) {
      top: 80px;
    }
    grid-template-columns: repeat(3, 245px);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 245px);
  }
`;

const FeedListPage = () => {
  // Dummy
  const arr = [...Array(15)];

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <FeedModal modalOpen={modalOpen} closeModal={closeModal} />
      <Container className="d-flex justify-content-center">
        <Wrapper>
          {arr.map((e, i) => (
            <FeedItem key={i} onClick={openModal} />
          ))}
        </Wrapper>
      </Container>
    </>
  );
};

export default FeedListPage;

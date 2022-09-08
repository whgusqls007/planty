import React, { useState } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/esm/Container';
import FeedItem from '../../components/feed/FeedItem';
import FeedModal from '../../components/feed/FeedModal';

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  & > div:nth-child(5n + 2) {
    top: 80px;
  }
  & > div:nth-child(5n + 4) {
    top: 80px;
  }
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

const FeedListPage = () => {
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
      <Container>
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

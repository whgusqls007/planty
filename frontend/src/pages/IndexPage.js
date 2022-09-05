import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #44855d;
  width: 100%;

  & .title {
    font-weight: 700;
    font-size: 40px;
    color: white;
    font-style: normal;
    line-height: 93px;
    text-shadow: 0px 3px 5px gray;
  }
`;

const IndexPage = () => {
  return (
    <Wrapper>
      <Container>
        <div className="title mt-3 pt-3">어떤 식물을 찾으시나요?</div>
      </Container>
    </Wrapper>
  );
};

export default IndexPage;

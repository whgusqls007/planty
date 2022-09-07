import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import styled from 'styled-components';
import PlantDescription from '../../components/dictionary/PlantDescription';

const Wrapper = styled.div`
  margin-top: 60px;
  display: flex;
`;

const PlantImg = styled.div`
  width: 450px;
  height: 300px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.themeColor[5]};
  margin-right: 25px;
`;

const DictionaryDetailPage = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <PlantImg />
        </div>
        <PlantDescription />
      </Wrapper>
    </Container>
  );
};

export default DictionaryDetailPage;

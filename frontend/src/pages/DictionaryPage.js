import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  & .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1440px;
    & .dictionary-search-input {
      width: 840px;
      height: 102.46px;

      /* 2-1 */

      background: #8fb99f;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
    }
  }
`;

const DictionaryPage = () => {
  return (
    <Wrapper>
      <div className="content">
        <h1>우 리 가 아 는 모 든 식 물</h1>
        <form>
          <input type="text" className="dictionary-search-input" />
        </form>
      </div>
    </Wrapper>
  );
};

export default DictionaryPage;

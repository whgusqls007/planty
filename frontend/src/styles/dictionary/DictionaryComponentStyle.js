import styled, { css } from 'styled-components';

export const DictionaryTagWrapper = styled.div`
  margin-top: 50px;
  /* & button + button {
    margin-left: 8px;
  } */
`;

export const DictionaryTagButton = styled.button`
  background-color: transparent;
  padding: 6px 16px;
  margin-bottom: 4px;
  margin-right: 8px;
  border: 1px solid #a0a0a0;
  border-radius: 24px;
  font-size: 16px;
  letter-spacing: -1px;
  color: #6d6d6d;

  &:hover {
    color: #44855d;
    border-color: #44855d;
    font-weight: 550;
  }

  ${({ active, theme }) =>
    active &&
    css`
      color: #44855d;
      border-color: #44855d;
      border-width: 3px;
      font-weight: 550;
    `}
`;

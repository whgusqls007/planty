import React from 'react';
import { DictionaryTagButtonWrapper } from '../../styles/dictionary/DictionaryComponentStyle';

const DictionaryTagButton = ({ tag }) => {
  return <DictionaryTagButtonWrapper>{tag}</DictionaryTagButtonWrapper>;
};

export default DictionaryTagButton;

import React from 'react';
import { DictionaryTagWrapper } from '../../styles/dictionary/DictionaryComponentStyle';
import DictionaryTagButton from './DictionaryTagButton';

const DictionaryTag = ({ tagList }) => {
  console.log('tag', tagList);
  return (
    <DictionaryTagWrapper>
      {tagList.map((tag, i) => (
        <DictionaryTagButton tag={tag} key={i} />
      ))}
    </DictionaryTagWrapper>
  );
};

export default DictionaryTag;

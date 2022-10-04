import React from 'react';
import { DictionaryTagWrapper } from '../../styles/dictionary/DictionaryComponentStyle';
import { DictionaryTagButton } from '../../styles/dictionary/DictionaryComponentStyle';
import { useNavigate } from 'react-router-dom';

const DictionaryTag = ({ tagList }) => {
  const navigate = useNavigate();
  return (
    <DictionaryTagWrapper>
      {tagList.map((tag, i) => (
        <DictionaryTagButton
          tag={tag}
          key={i}
          onClick={() => navigate(`/dictionary?filter=${i}`, { replace: true })}
        >
          {tag}
        </DictionaryTagButton>
      ))}
    </DictionaryTagWrapper>
  );
};

export default DictionaryTag;

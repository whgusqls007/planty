import React, { useEffect, useState } from 'react';
import { DictionaryTagWrapper } from '../../styles/dictionary/DictionaryComponentStyle';
import { DictionaryTagButton } from '../../styles/dictionary/DictionaryComponentStyle';
import { useNavigate, useSearchParams } from 'react-router-dom';

const DictionaryTag = ({ tagList }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filter, setFilter] = useState(0);

  useEffect(() => {
    const query = parseInt(searchParams.get('filter'))
      ? parseInt(searchParams.get('filter'))
      : 0;
    setFilter(query);
  }, [searchParams]);

  return (
    <DictionaryTagWrapper>
      {tagList.map((tag, i) => (
        <DictionaryTagButton
          tag={tag}
          key={i}
          onClick={() => {
            if (filter == i + 1) {
              navigate(`/dictionary`, { replace: true });
            } else {
              navigate(`/dictionary?filter=${i + 1}`, { replace: true });
            }
          }}
          active={i + 1 == filter ? true : false}
        >
          {tag}
        </DictionaryTagButton>
      ))}
    </DictionaryTagWrapper>
  );
};

export default DictionaryTag;

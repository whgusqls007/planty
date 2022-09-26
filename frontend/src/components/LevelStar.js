import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  & .star {
    color: #f9d726;
  }
`;

const LevelStar = ({ manage_level }) => {
  let level;
  if (manage_level === '초보자') {
    level = 1;
  } else if (manage_level === '경험자') {
    level = 2;
  } else if (manage_level === '전문가') {
    level = 3;
  }
  const arr = [...Array(level)];
  return (
    <Wrapper>
      {arr.map((e, i) => (
        <StarIcon key={i} className="star" />
      ))}
    </Wrapper>
  );
};

export default LevelStar;

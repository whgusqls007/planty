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

const LevelStar = ({ level }) => {
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

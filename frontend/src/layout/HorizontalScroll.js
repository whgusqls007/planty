import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { LeftArrow, RightArrow } from '../components/Arrow';
import styled from 'styled-components';
import Card from '../components/main/Card';
import React from 'react';

const ScrollContainer = styled.div`
  margin: 0.5rem 1.5rem 1rem 1.5rem;
  overflow: hidden;
  position: relative;

  .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
    display: none;
  }

  .react-horizontal-scrolling-menu--scroll-container {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const HorizontalScroll = (props) => {
  const plants = props.data;
  return (
    <ScrollContainer>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {plants.map((plant, idx) => {
          return (
            <Card
              data={plant}
              key={idx}
              marginLeft={idx === 0 ? 0 : null}
              marginRight={idx === plants.length - 1 ? 0 : null}
            />
          );
        })}
      </ScrollMenu>
    </ScrollContainer>
  );
};

export default HorizontalScroll;

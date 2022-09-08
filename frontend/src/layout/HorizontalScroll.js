import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { LeftArrow, RightArrow } from '../components/Arrow';
import styled from 'styled-components';
import Card from '../components/main/Card';

const ScrollContainer = styled.div`
  margin-top: 2%;
  overflow: auto;
  .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
    display: none;
  }
  .react-horizontal-scrolling-menu--scroll-container {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const HorizontalScroll = (props) => {
  const dummyPlants = props.data;
  return (
    <ScrollContainer>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {dummyPlants.map((plant, idx) => {
          return <Card data={plant} key={idx} />;
        })}
      </ScrollMenu>
    </ScrollContainer>
  );
};

export default HorizontalScroll;

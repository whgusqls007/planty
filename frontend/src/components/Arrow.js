import React, { useState } from 'react';
import styled from 'styled-components';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

const Button = styled.button`
  border: 0px;
  border-radius: 6px;
  position: absolute;
  z-index: 999;
  color: white;
  background-color: rgba(0, 0, 0, 0.1);
  width: 2rem;
  height: 200px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const RightButtonWrapper = styled.div`
  right: 2%;
`;

const LeftButtonWrapper = styled.div`
  position: absolute;
`;

const Left = (props) => {
  const { onClick, children } = props;
  const [show, setShow] = useState(false);
  const { isFirstItemVisible } = React.useContext(VisibilityContext);
  return show && !isFirstItemVisible ? (
    <Button
      className="leftButton"
      onClick={onClick}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      {children}
    </Button>
  ) : (
    <Button
      className="leftButton"
      onMouseEnter={() => {
        setShow(true);
      }}
    />
  );
};

const Right = (props) => {
  const { onClick, children } = props;
  const [show, setShow] = useState(false);
  const { isLastItemVisible } = React.useContext(VisibilityContext);
  return show && !isLastItemVisible ? (
    <Button
      onClick={onClick}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      {children}
    </Button>
  ) : (
    <Button
      onMouseEnter={() => {
        setShow(true);
      }}
    />
  );
};

export function RightArrow() {
  const { scrollNext } = React.useContext(VisibilityContext);
  return (
    <RightButtonWrapper>
      <Right onClick={() => scrollNext()}>→</Right>
    </RightButtonWrapper>
  );
}

export function LeftArrow() {
  const { scrollPrev } = React.useContext(VisibilityContext);
  return (
    <LeftButtonWrapper>
      <Left onClick={() => scrollPrev()}>←</Left>
    </LeftButtonWrapper>
  );
}

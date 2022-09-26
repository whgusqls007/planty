import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const GardenItem = ({ plant }) => {
  const { cntntsSj, date_grow } = plant;
  return (
    <Wrapper>
      <Link to="1">
        <GardenImg />
        {/* <GardenDescription>
          <div className="garden-header">
            <div className="garden-title">{cntntsSj}</div>
            <garden className="garden-date-grow">{date_grow}</garden>
          </div>
          <div className="garden-badge-container">
            <GardenBadge />
            <GardenBadge />
            <GardenBadge />
            <GardenBadge />
          </div>
        </GardenDescription> */}
      </Link>
      <div className="garden-header">
        <div className="garden-title">{cntntsSj}</div>
        <div className="garden-date-grow">{date_grow}</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 436px;

  @media (max-width: 576px) {
    width: 350px;
  }
  @media (max-width: 380px) {
    width: 280px;
  }
  /* height: 568px; */
  & a {
    text-decoration: none;
    color: inherit;
  }

  /* overflow: hidden; */
  & .garden-header {
    display: flex;
    flex-direction: column;
    margin-top: 8px;
  }
  & .garden-title {
    font-size: 24px;
    font-weight: 500;
    @media (max-width: 576px) {
      font-size: 20px;
      font-weight: 400;
    }
    @media (max-width: 380px) {
      font-size: 16px;
    }
  }
  & .garden-date-grow {
    font-size: 18px;
    font-weight: 400;
    color: #565656;

    @media (max-width: 576px) {
      font-size: 14px;
      font-weight: 400;
    }
    @media (max-width: 380px) {
      font-size: 10px;
    }
  }
`;

const GardenImg = styled.div`
  height: 436px;

  @media (max-width: 576px) {
    height: 350px;
  }

  @media (max-width: 380px) {
    height: 280px;
  }

  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.themeColor[5]};
  cursor: pointer;
  &:hover {
    transition: transform 0.3s;
    transform: scale3d(1.03, 1.03, 1.03);
  }
`;

// const GardenDescription = styled.div`
//   height: 224px;
//   background-color: ${({ theme }) => theme.themeColor[2]};
//   padding: 16px;
// & .garden-header {
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 20px;
// }
//   & .garden-title {
//     font-size: 30px;
//     font-weight: 500;
//   }
//   & .garden-date-grow {
//     font-size: 20px;
//     font-weight: 400;
//     color: #565656;
//   }
//   & .garden-badge-container {
//     display: flex;
//     justify-content: space-between;
//   }
// `;
// const GardenBadge = styled.div`
//   width: 90px;
//   height: 90px;
//   border-radius: 5px;
//   background-color: ${({ theme }) => theme.themeColor[5]};
// `;

export default GardenItem;

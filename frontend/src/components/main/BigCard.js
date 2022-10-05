import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.5rem 0 0.8rem;
  cursor: pointer;

  &:hover {
    & .plant-img {
      transition: transform 0.3s;
      transform: scale3d(1.03, 1.03, 1.03);
    }
  }
`;

const PlantImg = styled.img`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 300px;
  border-radius: 20px;
  /* background-color: ${({ theme }) => theme.themeColor[5]}; */
  margin-bottom: 5%;

  @media (max-width: 768px) {
    width: 90%;
    height: 250px;
    margin-left: 4.5%;
  }

  @media (max-width: 576px) {
    height: 200px;
  }
`;

const BigCard = ({ magazine }) => {
  const navigate = useNavigate();
  const { id, img_url } = magazine;
  const onClickHandler = () => {
    navigate(`/magazine/${id}`);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  return (
    <Wrapper data-aos="zoom-in">
      <PlantImg className="plant-img" src={img_url} onClick={onClickHandler} />
    </Wrapper>
  );
};

export default BigCard;

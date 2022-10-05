import styled from 'styled-components';

export const Wrapper = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  display: flex;
  flex-direction: column;
  margin: 0 3% 10% 3%;

  &:hover {
    cursor: pointer;
    transition: transform 0.3s;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  & img {
    width: 100%;
    min-height: 250px;
    max-height: 250px;
    height: auto;
    border-radius: 10px;
  }
`;

export const Title = styled.div`
  text-overflow: ellipsis;
  font-weight: 600;
  font-size: larger;
  margin-top: 1%;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const CtnInfo = styled.div`
  margin: 1% 0 4% 0;
  display: flex;
  justify-content: space-between;
  opacity: 0.5;

  @media (max-width: 768px) {
    margin: 0 0 2% 0;
  }
`;

export const SubTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

export const PlantImg = styled.div`
  width: 100%;
  min-height: 250px;
  height: auto;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.themeColor[5]};
`;

import styled from 'styled-components';
import React from 'react';

const Tag = styled.button`
  border: 1px solid ${({ theme }) => theme.themeColor[1]};
  border-radius: 15px;
  font-size: 20px;
  font-weight: 500;
  padding-top: 1px;
  text-align: center;
  color: ${({ theme }) => theme.themeColor[1]};
  background-color: #fefee3;
  padding: 5px 10px 5px 10px;
  margin: 8px;
  text-decoration: none;

  &:hover {
    transition: transform 0.3s;
    transform: scale3d(1.03, 1.03, 1.03);
    color: ${({ theme }) => theme.themeColor[5]};
    text-decoration: none;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin: 3px;
  }

  @media (max-width: 576px) {
    font-size: 0.7rem;
    margin: 3px;
  }
`;

// onclick 만들어야함
const TagButton = props => {
  return <Tag>{props.text}</Tag>;
};

export default TagButton;

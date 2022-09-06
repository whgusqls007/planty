import styled from 'styled-components';

const Tag = styled.button`
  border: 1px solid #44855d;
  border-radius: 7px;
  opacity: 0.9;
  font-size: 13px;
  font-weight: 500;
  padding-top: 1px;
  text-align: center;
  color: #44855d;
  background-color: #fefee3;
  padding: 5px 10px 5px 10px;
  margin: 8px;
`;

// onclick 만들어야함
const TagButton = (props) => {
  return <Tag>{props.text}</Tag>;
};

export default TagButton;

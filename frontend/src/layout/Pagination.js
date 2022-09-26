import styled from 'styled-components';
import { useEffect, useState } from 'react';

const PagingList = styled.li`
  list-style-type: none;
  float: left;
  padding: 10px 15px 10px 15px;
  border-radius: 5px;
  font-size: 20px;
  margin: 0px 1% 0px 1%;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    background-color: ${({ theme }) => theme.themeColor[5]};
    cursor: pointer;
    transition: transform 0.3s;
    transform: scale3d(1.05, 1.05, 1.05);
  }
`;

const ListWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  & .active {
    border: 1px solid ${({ theme }) => theme.themeColor[5]};
  }
`;

const Pagination = (props) => {
  const totalCount = props.totalCount;
  const [current, setCurrent] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [listArray, setListArray] = useState([]);
  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState(false);

  useEffect(() => {
    setPageCount(Math.ceil(totalCount / 2));
    let array = [];
    if (pageCount > 5) {
      for (let i = 0; i < 5; i++) {
        array.push(current + i);
      }
    } else {
      for (let i = 0; i < pageCount; i++) {
        array.push(i);
      }
    }
    setListArray(array);
  }, [pageCount]);

  useEffect(() => {
    let array = [];
    if (current % 5 === 1 && next) {
      if (current + 5 < pageCount) {
        for (let i = current; i < current + 5; i++) {
          array.push(i);
        }
      } else {
        for (let i = current; i < pageCount + 1; i++) {
          array.push(i);
        }
      }
      setListArray(array);
    } else if (current % 5 === 0 && prev) {
      for (let i = current - 4; i < current + 1; i++) {
        array.push(i);
      }
      setListArray(array);
    }
  }, [current]);

  return (
    <ListWrapper>
      <PagingList
        onClick={() => {
          if (current !== 1) {
            setCurrent(current - 1);
            setPrev(true);
            setNext(false);
          }
        }}
      >{`<`}</PagingList>

      {listArray.map((e, i) => {
        return (
          <PagingList
            className={current === e ? 'active' : ''}
            onClick={() => {
              setCurrent(e);
              setNext(false);
              setPrev(false);
            }}
            key={i}
          >
            {e}
          </PagingList>
        );
      })}

      <PagingList
        onClick={() => {
          if (current !== pageCount) {
            setCurrent(current + 1);
            setNext(true);
            setPrev(false);
          }
        }}
      >{`>`}</PagingList>
    </ListWrapper>
  );
};

export default Pagination;

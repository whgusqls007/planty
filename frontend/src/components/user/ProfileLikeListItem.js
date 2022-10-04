import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ProfileLikeListItem = () => {
  const { userLikeList } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const listLikeItem = userLikeList.map((idx) => {
    if (!idx?.title) {
      return (
        <tr
          key={userLikeList?.idx}
          className="table-content"
          onClick={() => {
            navigate(`?feed=${idx.id}`);
          }}
        >
          <td className="list-page">피드</td>
          {idx.content?.length > 15 ? (
            <td className="list-content">{idx.content?.substr(0, 15)}...</td>
          ) : (
            <td className="list-content">{idx?.content}</td>
          )}
          <td className="list-date">
            {idx.date_created?.substr(0, 10)}&nbsp;&nbsp;
            {idx.date_created?.substr(11, 8)}
          </td>
        </tr>
      );
    } else if (idx?.title) {
      return (
        <tr
          key={userLikeList?.idx}
          className="table-content"
          onClick={() => {
            navigate(`/magazine/${idx.id}`);
          }}
        >
          <td className="list-page">읽을거리</td>
          {idx.title?.length > 15 ? (
            <td className="list-content">{idx.title?.substr(0, 15)}...</td>
          ) : (
            <td className="list-content">{idx?.title}</td>
          )}
          <td className="list-date">
            {idx.date_created?.substr(0, 10)}&nbsp;&nbsp;
            {idx.date_created?.substr(11, 8)}
          </td>
        </tr>
      );
    }
  });

  return (
    <Wrapper>
      <table className="list-table">
        <thead>
          <tr className="table-head">
            <th>분류</th>
            <th>글 목록</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>{listLikeItem}</tbody>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & .list-table {
    width: 100%;
    text-align: center;
  }
  & .table-head {
    height: 45px;
    font-size: 18px;
    background-color: ${({ theme }) => theme.themeColor[5]};
    border: 1px solid ${({ theme }) => theme.themeColor[5]};
  }

  & .table-content {
    height: 45px;
    border-bottom: 1px solid rgb(191, 191, 191);
    cursor: pointer;
  }
  /* 
  & .list-page {
    cursor: default;
  }

  & .list-content {
    cursor: pointer;
  }

  & .list-comment {
    cursor: pointer;
  }

  & .list-date {
    cursor: default;
  } */
`;

export default ProfileLikeListItem;

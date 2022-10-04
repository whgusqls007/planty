import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ProfileCommentListItem = () => {
  const { userCommentList } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(userCommentList);
    console.log(userCommentList[0]);
  }, []);

  const listCommentItem = userCommentList.map((idx) => {
    if (idx?.feed) {
      return (
        <tr
          key={userCommentList?.idx}
          className="table-content"
          onClick={() => {
            navigate(`?feed=${idx.feed.id}`);
          }}
        >
          <td className="list-page">피드</td>
          {idx.feed.content?.length > 15 ? (
            <td className="list-content">
              {idx.feed.content?.substr(0, 15)}...
            </td>
          ) : (
            <td className="list-content">{idx.feed?.content}</td>
          )}
          {idx.content?.length > 15 ? (
            <td className="list-comment">{idx.content?.substr(0, 15)}...</td>
          ) : (
            <td className="list-comment">{idx?.content}</td>
          )}
          <td className="list-date">
            {idx.date_created?.substr(0, 10)}&nbsp;&nbsp;
            {idx.date_created?.substr(11, 8)}
          </td>
        </tr>
      );
    } else if (idx?.magazine) {
      return (
        <tr
          key={userCommentList?.idx}
          className="table-content"
          onClick={() => {
            navigate(`/magazine/${idx.magazine.id}`);
          }}
        >
          <td className="list-page">읽을거리</td>
          {idx.magazine.title?.length > 15 ? (
            <td className="list-content">
              {idx.magazine.title?.substr(0, 15)}...
            </td>
          ) : (
            <td className="list-content">{idx.magazine?.title}</td>
          )}
          {idx.content?.length > 15 ? (
            <td className="list-comment">{idx.content?.substr(0, 15)}...</td>
          ) : (
            <td className="list-comment">{idx?.content}</td>
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
            <th>내용</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>{listCommentItem}</tbody>
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
    cursor: default;
  }

  & .table-content {
    height: 45px;
    border-bottom: 1px solid rgb(191, 191, 191);
    cursor: pointer;
  }
`;

export default ProfileCommentListItem;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/esm/Container';

const ProfileListIem = () => {
  return (
    <Wrapper>
      <table className="list-table">
        <tr className="table-head">
          <th>분류</th>
          <th>분류</th>
          <th>분류</th>
          <br />
        </tr>

        <tr>
          <td>가</td>
          <td>나</td>
          <td>다</td>
        </tr>
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
    height: 50px;
  }
`;

export default ProfileListIem;

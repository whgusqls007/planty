import React from 'react';
import { Wrapper, Title, CtnInfo, SubTitle } from './css/CardCss';

const Card = (props) => {
  const { title, sub_title, date_created, user, img_url } = props.data;

  return (
    <Wrapper>
      <img src={img_url} />
      <div>
        <Title>{title}</Title>
        <CtnInfo>
          <span>에디터 | {user.username}</span>
          <span>{date_created?.split('T')[0]}</span>
        </CtnInfo>
      </div>
      <SubTitle>{sub_title}</SubTitle>
    </Wrapper>
  );
};

export default Card;

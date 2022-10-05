import React from 'react';
import { useSelector } from 'react-redux';
import {
  Background,
  LoadingText,
} from '../../styles/worldCup/LoadingWorldcupStyle';

const Loading = () => {
  const { userInfo } = useSelector((state) => state.user);
  const { username } = userInfo;
  return (
    <Background>
      <LoadingText>
        호미가 식물을 추천하기 위해 \n
        {username}님의 정원을 열심히 돌아다니고 있어요! \n 조금만 기다려주세요!
      </LoadingText>
      <img src="/public/assets/img/spinner.gif}" alt="돌아다니는 호미" />
    </Background>
  );
};

export default Loading;

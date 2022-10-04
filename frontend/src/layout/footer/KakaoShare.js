import React, { Component } from 'react';
import ForumIcon from '@mui/icons-material/Forum';
import './Footer.css';

class Kakao extends Component {
  componentDidMount() {
    window.Kakao.init('d3250665d8de1db089df11ad2919acfe');

    window.Kakao.Link.createDefaultButton({
      container: '#kakao-link-btn',
      objectType: 'feed',
      content: {
        title: '식물이 가득한 공간, Planty!',
        description:
          '나에게 딱 맞는 식물을 추천 받고, 식물 일기를 작성해보세요!',
        imageUrl:
          'https://lab.ssafy.com/s07-bigdata-recom-sub2/S07P22E103/uploads/12286c646eeb822f53105adbfbde1338/kakao-logo.jpg',
        link: {
          mobileWebUrl: 'http://localhost:3000/',
          webUrl: 'http://localhost:3000/',
        },
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845,
      },
      buttons: [
        {
          title: '플랜티 방문하기',
          link: {
            mobileWebUrl: 'http://localhost:3000/',
            webUrl: 'http://localhost:3000/',
          },
        },
      ],
    });
  }

  onClickKakao = () => {
    window.open('https://sharer.kakao.com/talk/friends/picker/link');
  };
  render() {
    return (
      <div className="Kakao kakao-button">
        <ForumIcon
          id="kakao-link-btn"
          onClick={this.onClickKakao}
          className="kakao-icon"
        />
      </div>
    );
  }
}

export default Kakao;

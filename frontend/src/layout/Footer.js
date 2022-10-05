import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './footer/Footer.css';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import Kakao from './footer/KakaoShare';

function Footer() {
  return (
    <div className="footer-container">
      <Row xs="1" sm="1" md="3" className="footer-main">
        <Col className="footer-theme">
          <h2>식물이 가득한 공간</h2>
          <img
            src="https://lab.ssafy.com/s07-bigdata-recom-sub2/S07P22E103/uploads/10e3c1b071947facaacbbe9fd0c694b1/main_logo.png"
            alt="플랜티 로고"
          />
        </Col>
        <Col className="footer-contact">
          <a href="mailto:homido.planty@gmail.com" className="mail-button">
            <MailIcon className="contact-icon" />
          </a>
          <a
            href="https://twitter.com/plantyhomi"
            rel="noreferrer"
            target="_blank"
            className="twitter-button"
          >
            <TwitterIcon className="contact-icon" />
          </a>
          {/* <Kakao /> */}
        </Col>
        <Col className="footer-links">
          <a
            href="https://overjoyed-polonium-99e.notion.site/6554a9ce3694457f9374223aa69c2694"
            rel="noreferrer"
            target="_blank"
          >
            <h4>서비스 소개</h4>
          </a>
          <Row>
            <Col>
              <Link to="/" className="link-style">
                홈
              </Link>
            </Col>
            <Col>
              <Link to="/dictionary" className="link-style">
                식물 사전
              </Link>
              <Link to="/magazine" className="link-style">
                읽을 거리
              </Link>
              <Link to="/garden" className="link-style">
                나의 정원
              </Link>
              <Link to="/feed" className="link-style">
                남의 정원
              </Link>
            </Col>
            <Col>
              <Link to="/login" className="link-style">
                로그인
              </Link>
              <Link to="/register" className="link-style">
                회원 가입
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="footer-bottom">
        <p className="contract-info">
          © 2022 Homido{'  '}·{'  '}
          <a href="/" rel="noreferrer" target="_blank">
            이용약관
          </a>
          {'  '}·{'  '}
          <a href="/" rel="noreferrer" target="_blank">
            개인정보보호
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;

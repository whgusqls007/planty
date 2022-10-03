import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import React from 'react';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import { logout } from '../features/user/userSlice';

const Wrapper = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & .nav-user-btn {
    & a {
      margin-left: 16px;

      @media (max-width: 992px) {
        margin-left: 0px;
        margin-right: 16px;
      }
    }
  }
  & .user-info {
    display: flex;
    align-items: center;
  }
  & .profile-img {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.themeColor[5]};
    margin-left: 8px;
  }
`;

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
  justify-content: end;

  @media (max-width: 992px) {
    width: 100%;
    margin-left: 0px;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }

  & button {
    margin-right: 5%;
    border: 0px;
    background: white;
    font-size: 16px;
    padding: 0;
  }
`;

function Header() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  const LogOutHandler = () => {
    sessionStorage.removeItem('userInfo');
    sessionStorage.removeItem('Token');
    dispatch(logout());
  };

  return (
    <Wrapper>
      <Navbar bg="white" expand="lg" className="mb-3">
        <Container>
          <Navbar.Brand href="/" className="me-5">
            플랜티
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-between">
            <Nav>
              <Col lg={3} className="mb-2 mt-2">
                <Link className="me-4 link" to="/dictionary">
                  식물 사전
                </Link>
              </Col>
              <Col lg={3} className="mb-2 mt-2">
                <Link className="me-4" to="/magazine">
                  읽을 거리
                </Link>
              </Col>
              <Col lg={3} className="mb-2 mt-2">
                <Link className="me-4" to={`/garden/${userInfo?.username}`}>
                  나의 정원
                </Link>
              </Col>
              <Col lg={3} className="mb-2 mt-2">
                <Link className="me-4" to="/feed">
                  남의 정원
                </Link>
              </Col>
              <Col lg={3} className="mb-2 mt-2">
                <Link className="me-4" to="/worldcup">
                  식이월
                </Link>
              </Col>
            </Nav>
            {userInfo ? (
              <UserInfoWrapper>
                <button onClick={LogOutHandler}>로그아웃</button>
                <Link to={`/profile/${userInfo.username}`}>
                  <div className="user-info">
                    <div className="user-name">{userInfo.username}</div>
                    <img
                      className="profile-img"
                      src="https://homidu.s3.ap-northeast-2.amazonaws.com/user/default-user-img.png"
                      alt=""
                    />
                  </div>
                </Link>
              </UserInfoWrapper>
            ) : (
              <div className="nav-user-btn">
                <Link to="login">로그인</Link>
                <Link to="register">회원가입</Link>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Wrapper>
  );
}

export default Header;

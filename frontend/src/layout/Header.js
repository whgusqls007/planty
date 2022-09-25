import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import React from 'react';

// css
import 'bootstrap/dist/css/bootstrap.min.css';

const Wrapper = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & a {
    color: inherit;
    text-decoration: none;
  }
  & .nav-user-btn {
    & a {
      margin-left: 16px;
    }
  }
`;

function Header() {
  const { userInfo } = useSelector(state => state.user);
  return (
    <Wrapper>
      <Navbar bg="white" expand="lg" className="mb-3">
        <Container>
          <Navbar.Brand href="/" className="me-5">
            호미두
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
                <Link className="me-4" to="/garden">
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
              <div>프로필이미지</div>
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

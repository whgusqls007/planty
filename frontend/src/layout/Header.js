import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
// css
import 'bootstrap/dist/css/bootstrap.min.css';

const Wrapper = styled.div`
  & a {
    color: inherit;
    text-decoration: none;
  }
`;

function Header() {
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
              <Row>
                <Col lg className="mb-2 mt-2">
                  <Link className="me-4 link" to="/dictionary">
                    식물 사전
                  </Link>
                </Col>
                <Col lg className="mb-2 mt-2">
                  <Link className="me-4" to="/b">
                    읽을 거리
                  </Link>
                </Col>
                <Col lg className="mb-2 mt-2">
                  <Link className="me-4" to="/c">
                    나의 정원
                  </Link>
                </Col>
                <Col lg className="mb-2 mt-2">
                  <Link className="me-4" to="/feed">
                    남의 정원
                  </Link>
                </Col>
              </Row>
            </Nav>
            <div>어떤 로고를 여기에</div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Wrapper>
  );
}

export default Header;

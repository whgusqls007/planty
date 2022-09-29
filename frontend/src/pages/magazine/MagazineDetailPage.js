import Container from 'react-bootstrap/esm/Container';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import FavoriteButton1 from '@mui/icons-material/ThumbUpAltOutlined';
import FavoriteButton2 from '@mui/icons-material/ThumbUpAlt';
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMagazine,
  increaseLike,
  decreaseLike,
} from '../../features/magazine/magazineActions';

const Wrapper = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;

  & .favorite {
    display: flex;
    justify-content: end;
    margin-right: 15%;

    & span {
      opacity: 0.7;
    }
  }

  & .comment {
    margin: 5% 15% 0 15%;

    & Table {
      & thead {
        & th {
          min-width: 50px;
        }
      }
    }
  }

  & .commentInput {
    display: flex;
    position: relative;

    & label {
      position: absolute;
      left: 0%;
      top: 0px;
      transition: 0.4s;
      border-top: 0px;
      border-left: 0px;
      border-right: 0px;
      font-size: 20px;
      display: block;
    }

    & input:focus ~ label {
      position: absolute;
      top: -35px;
      transition: 0.4s;
      font-size: 20px;
      border: 1px solid green;
      border-top: 0px;
      border-left: 0px;
      border-right: 0px;
      display: none;
    }

    & input {
      width: 100%;
      border-top: 0px;
      border-left: 0px;
      border-right: 0px;
      transition: 0.4s;
      font-size: 20px;
    }

    & input:focus {
      border: 0px;
      outline: none;
    }

    & .effect {
      position: absolute;
      width: 0;
      border-bottom: 0px solid green;
      bottom: 0;
      left: 0;
      transition: 0.6s;
    }

    & input:focus ~ .effect {
      position: absolute;
      width: 100%;
      border-bottom: 1px solid green;
      bottom: 0;
      left: 0;
      transition: 0.6s;
    }

    @media (max-width: 992px) {
      margin-bottom: 6%;
    }

    @media (max-width: 768px) {
      margin-bottom: 6%;
    }

    @media (max-width: 576px) {
      margin-bottom: 7%;
    }
  }
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    font-weight: 600px;
    font-size: 40px;
  }

  @media (max-width: 576px) {
    font-weight: 600px;
    font-size: 30px;
  }
`;

const Date = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 15%;
  opacity: 0.7;
`;

const Writer = styled.div`
  display: flex;
  justify-content: end;
  opacity: 0.7;
  margin: 2% 15% 0 0;
`;

const Image = styled.div`
  display: flex;
  margin-top: 5%;
  width: 80%;
  height: 300px;
  background-color: ${({ theme }) => theme.themeColor[5]};
  border-radius: 10px;
  margin-left: 10%;

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 576px) {
    height: 200px;
  }
`;

const Content = styled.div`
  margin: 5% 15% 0 15%;
  width: 70%;
`;

const MagazineDetailPage = (props) => {
  const dispatch = useDispatch();
  const { articleId } = useParams();
  const { magazine, comments } = useSelector((state) => state.magazine);
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState('');

  useEffect(() => {
    dispatch(fetchMagazine(articleId));
  }, [dispatch, articleId]);

  const activeLabel = {
    position: 'absolute',
    left: '0%',
    top: '-25px',
    fontSize: '15px',
    transition: '0.4s',
    border: '1px solid green',
    borderTop: '0px',
    borderLeft: '0px',
    borderRight: '0px',
  };

  const activeSpan = {
    position: 'absolute',
    width: '100%',
    borderBottom: '1px solid green',
  };

  const LikeButtonHandler = () => {
    if (isLiked) {
      dispatch(increaseLike(articleId));
      setIsLiked(false);
    } else {
      dispatch(decreaseLike(articleId));
      setIsLiked(true);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>{magazine.title}</Title>
        <Writer>글쓴이 | {}</Writer>
        <Date>
          {magazine.date_created !== undefined
            ? magazine.date_created.split('T')[0]
            : null}{' '}
          작성
        </Date>
        <Content>{ReactHtmlParser(magazine.content)}</Content>
        <div className="favorite">
          <span>좋아용</span>
          <FavoriteButton1
            onClick={LikeButtonHandler}
            style={
              !isLiked
                ? { display: 'block', opacity: '0.6' }
                : { display: 'none' }
            }
          />
          <FavoriteButton2
            onClick={LikeButtonHandler}
            style={
              isLiked
                ? { display: 'block', color: '#8FB99F' }
                : { display: 'none' }
            }
          />
        </div>
        <div className="comment">
          <Table striped>
            <thead>
              <tr>
                <th>유저</th>
                <th>내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td colSpan={5}>
                  Larry the BirdLarry the BirdLarry the BirdLarry the BirdLarry
                  the Bird Larry the BirdLarry the BirdLarry the BirdLarry the
                  BirdLarry the Bird
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td colSpan={5}>Larry the Bird</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={5}>Larry the Bird</td>
              </tr>
              <tr>
                <td>4</td>
                <td colSpan={5}>
                  <div className="commentInput">
                    <input
                      type="text"
                      id="commentInput"
                      onChange={(e) => {
                        setComment(e.target.value);
                      }}
                      style={
                        comment !== '' ? { border: '0px', outline: 'none' } : {}
                      }
                    />
                    <label
                      htmlFor="commentInput"
                      style={comment !== '' ? activeLabel : {}}
                    >
                      {comment !== '' ? '' : '내용을 입력해 주세요'}
                    </label>
                    <span
                      className="effect"
                      style={comment !== '' ? activeSpan : {}}
                    ></span>
                    <button>as</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Wrapper>
    </Container>
  );
};

export default MagazineDetailPage;

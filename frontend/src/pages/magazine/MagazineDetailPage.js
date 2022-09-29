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
  fetchLike,
  fetchComment,
} from '../../features/magazine/magazineActions';
import CommentLine from '../../components/magazine/CommentLine';
import CommentInput from '../../components/magazine/CommentInput';

const MagazineDetailPage = (props) => {
  const dispatch = useDispatch();
  const { articleId } = useParams();
  const { magazine, comments } = useSelector((state) => state.magazine);
  const [comment, setComment] = useState('');

  useEffect(() => {
    dispatch(fetchMagazine(articleId));
  }, [dispatch, articleId]);

  const likeButtonHandler = async () => {
    dispatch(fetchLike(articleId));
  };

  const submitHandler = () => {
    dispatch(fetchComment({ id: articleId, comment: { content: comment } }));
    setComment('');
  };

  return (
    <Container>
      <Wrapper>
        <Title>{magazine.title}</Title>
        <Writer>
          글쓴이 | {magazine.user !== undefined ? magazine.user.username : ''}
        </Writer>
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
            onClick={likeButtonHandler}
            style={
              !magazine.is_liked
                ? { display: 'block', opacity: '0.6', cursor: 'pointer' }
                : { display: 'none' }
            }
          />
          <FavoriteButton2
            onClick={likeButtonHandler}
            style={
              magazine.is_liked
                ? { display: 'block', color: '#8FB99F', cursor: 'pointer' }
                : { display: 'none' }
            }
          />
        </div>
        <div className="comment">
          <Table>
            <thead>
              <tr>
                <th>유저</th>
                <th>댓글</th>
                <th colSpan={4}></th>
              </tr>
            </thead>
            <tbody>
              {comments.map((e, i) => {
                return <CommentLine articleId={articleId} data={e} key={i} />;
              })}
              <tr>
                <td colSpan={6}></td>
              </tr>
              <CommentInput
                articleId={articleId}
                comment={comment}
                setComment={setComment}
                submitHandler={submitHandler}
              />
            </tbody>
          </Table>
        </div>
      </Wrapper>
    </Container>
  );
};

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
      & th {
        min-width: 50px;
      }
      & .modify_delete {
        width: 10%;
        text-align: end;
        padding-right: 2%;
        cursor: pointer;

        @media (max-width: 768px) {
          width: 70px;
          padding-left: 0px;
          padding-right: 3%;
        }

        @media (max-width: 576px) {
          width: 50px;
          padding-left: 0px;
          padding-right: 4%;
        }

        & .modify {
          &:hover {
            font-weight: 600;
            transition: 0.3s;
          }
        }

        & .delete {
          color: red;
          &:hover {
            font-weight: 600;
            transition: 0.3s;
          }
        }
      }
      & td {
        @media (max-width: 992px) {
          font-size: 16px;
        }

        @media (max-width: 768px) {
          font-size: 14px;
        }

        @media (max-width: 576px) {
          font-size: 12px;
        }
      }

      & button {
        width: 100px;
        border: 2px solid ${({ theme }) => theme.themeColor[5]};
        background-color: rgba(0, 0, 0, 0);
        border-radius: 6px;
        transition: 0.4s;

        &:hover {
          background-color: ${({ theme }) => theme.themeColor[5]};
          transition: 0.3s;
        }

        @media (max-width: 768px) {
          width: 70px;
          padding-left: 0px;
          padding-right: 0px;
        }

        @media (max-width: 576px) {
          width: 50px;
          padding-left: 0px;
          padding-right: 0px;
        }
      }
    }
  }

  & .commentInput {
    display: flex;
    position: relative;

    & .confirm_cancle {
      display: block;
      width: 10%;
      text-align: end;
      padding-right: 1%;
      cursor: pointer;

      @media (max-width: 768px) {
        width: 70px;
        padding-left: 0px;
        padding-right: 3%;
      }

      @media (max-width: 576px) {
        width: 50px;
        padding-left: 0px;
        padding-right: 4%;
      }

      & .confirm {
        &:hover {
          font-weight: 600;
          transition: 0.3s;
        }
      }

      & .cancle {
        color: red;
        &:hover {
          font-weight: 600;
          transition: 0.3s;
        }
      }
    }

    & label {
      position: absolute;
      left: 0%;
      top: 0px;
      transition: 0.4s;
      border-top: 0px;
      border-left: 0px;
      border-right: 0px;
      font-size: 16px;
      display: block;

      @media (max-width: 992px) {
        font-size: 16px;
      }

      @media (max-width: 768px) {
        font-size: 14px;
      }

      @media (max-width: 576px) {
        font-size: 12px;
      }
    }

    & input:focus ~ label {
      position: absolute;
      top: -35px;
      transition: 0.4s;
      font-size: 20px;
      border: 2px solid green;
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
      font-size: 16px;

      @media (max-width: 992px) {
        font-size: 16px;
      }

      @media (max-width: 768px) {
        font-size: 14px;
      }

      @media (max-width: 576px) {
        font-size: 12px;
      }
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
      border-bottom: 2px solid green;
      bottom: 0;
      left: 0;
      transition: 0.6s;
    }

    @media (max-width: 992px) {
      margin-bottom: 6%;
      font-size: 14px;
    }

    @media (max-width: 768px) {
      margin-bottom: 6%;
      font-size: 12px;
    }

    @media (max-width: 576px) {
      margin-bottom: 7%;
      font-size: 10px;
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

const Content = styled.div`
  margin: 5% 15% 0 15%;
  width: 70%;
`;

export default MagazineDetailPage;

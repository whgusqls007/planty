import Container from 'react-bootstrap/esm/Container';
import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import FavoriteButton1 from '@mui/icons-material/ThumbUpAltOutlined';
import FavoriteButton2 from '@mui/icons-material/ThumbUpAlt';
import Table from 'react-bootstrap/Table';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMagazine,
  fetchLike,
  fetchComment,
  deleteMagazine,
} from '../../features/magazine/magazineActions';
import CommentLine from '../../components/magazine/CommentLine';
import CommentInput from '../../components/magazine/CommentInput';
import {
  Wrapper,
  Title,
  Date,
  Writer,
  Content,
} from '../../styles/magazine/MagazineDetailPageCss';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';

const MagazineDetailPage = (props) => {
  const dispatch = useDispatch();
  const { articleId } = useParams();
  const { magazine, comments } = useSelector((state) => state.magazine);
  const { userInfo } = useSelector((state) => state.user);
  const [comment, setComment] = useState('');
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    setUserId(sessionStorage.getItem('userInfo').id);
    dispatch(fetchMagazine(articleId));
  }, [dispatch, articleId]);

  const likeButtonHandler = async () => {
    if (userInfo !== null) {
      dispatch(fetchLike(articleId));
    } else {
      alert('로그인 ㄱㄱ');
    }
  };

  const submitHandler = () => {
    dispatch(fetchComment({ id: articleId, comment: { content: comment } }));
    setComment('');
  };

  const deleteHandler = () => {
    dispatch(deleteMagazine({ id: articleId }));
  };

  return (
    <Container>
      <Wrapper>
        <Title>{magazine.title}</Title>
        <Writer>
          에디터 | {magazine.user !== undefined ? magazine.user.username : ''}
        </Writer>
        <Date>
          {magazine.date_created !== undefined
            ? magazine?.date_created.split('T')[0]
            : null}{' '}
          작성
        </Date>
        {userInfo &&
        magazine &&
        magazine.user &&
        userInfo.is_editor &&
        userInfo.id === magazine.user.id ? (
          <div className="modify-delete">
            <Link
              to="/magazine/magazinemodify"
              state={{
                magazine: magazine,
                articleId: articleId,
              }}
            >
              <BorderColorIcon className="modify" />
            </Link>
            <DeleteIcon className="delete" onClick={deleteHandler} />
          </div>
        ) : null}
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
                <th></th>
                <th></th>
                <th></th>
                <th></th>
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

export default MagazineDetailPage;

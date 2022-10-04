import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteComment,
  modifyComment,
} from '../../features/magazine/magazineActions';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';

const CommentLine = ({ articleId, data }) => {
  const { userInfo } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [modify, setModify] = useState(false);
  const [comment, setComment] = useState(data.content);

  useEffect(() => {}, [dispatch]);

  const deleteCommentHandler = () => {
    dispatch(deleteComment({ articleId: articleId, commentId: data.id }));
  };

  const modifyHandler = () => {
    dispatch(
      modifyComment({
        magazineId: articleId,
        commentId: data.id,
        content: comment,
      }),
    );
  };

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
    borderBottom: '2px solid green',
  };

  console.log(articleId, data);

  return (
    <>
      <tr>
        <td>{data.user.username}</td>
        {userInfo !== null &&
        userInfo !== undefined &&
        data.user.id === userInfo.id ? (
          !modify ? (
            <>
              <td colSpan={4}>
                {data.content}
                <BorderColorIcon
                  onClick={() => {
                    setModify(true);
                  }}
                  className="comment-edit-icon"
                />
                <DeleteIcon
                  onClick={deleteCommentHandler}
                  className="comment-delte-icon"
                />
              </td>

              <td className="modify_delete">
                <div>
                  {data.date_created?.substr(0, 10)}&nbsp;&nbsp;
                  {data.date_created?.substr(11, 5)}
                </div>
              </td>
            </>
          ) : (
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
                  value={comment}
                />
                <span
                  className="effect"
                  style={comment !== '' ? activeSpan : {}}
                ></span>
                <div className="confirm_cancle">
                  <div className="confirm" onClick={modifyHandler}>
                    확인
                  </div>
                  <div
                    className="cancle"
                    onClick={() => {
                      setComment(data.content);
                      setModify(false);
                    }}
                  >
                    취소
                  </div>
                </div>
              </div>
            </td>
          )
        ) : (
          <>
            <td colSpan={4}>{data.content}</td>
            <td className="modify_delete">
              <div>
                {data.date_created?.substr(0, 10)}&nbsp;&nbsp;
                {data.date_created?.substr(11, 5)}
              </div>
            </td>
          </>
        )}
      </tr>
    </>
  );
};

export default CommentLine;

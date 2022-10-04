import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CommentInput = ({ comment, setComment, submitHandler, username }) => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {}, [dispatch]);
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

  return (
    <>
      {userInfo && (
        <tr>
          <td>{userInfo.username}</td>
          <td colSpan={5}>
            <div className="commentInput">
              <input
                type="text"
                id="commentInput"
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                style={comment !== '' ? { border: '0px', outline: 'none' } : {}}
                value={comment}
              />
              <label
                className="input_label"
                htmlFor="commentInput"
                style={comment !== '' ? activeLabel : {}}
              >
                {comment !== '' ? '' : '내용'}
              </label>
              <span
                className="effect"
                style={comment !== '' ? activeSpan : {}}
              ></span>
              <button onClick={submitHandler}>작성</button>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default CommentInput;

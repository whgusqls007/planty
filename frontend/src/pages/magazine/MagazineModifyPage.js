import React, { useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { useState } from 'react';
import Ckeditor5 from '../../components/CKEditor5';
import { updateMagazine } from '../../features/magazine/magazineActions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ButtonWrapper,
  FormBox,
} from '../../styles/magazine/MagazineInputPageCss';

const MagazineModifyPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [contentData, setContentData] = useState('');
  const { magazine, articleId } = location.state;

  useEffect(() => {
    setTitle(magazine.title);
    setSubTitle(magazine.sub_title);
    setContentData(magazine.content);
  }, []);

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

  const onChangeHandler = (event, editor) => {
    setContentData(editor.getData());
  };

  const onSubmitHandler = () => {
    dispatch(
      updateMagazine({
        id: articleId,
        title: title,
        sub_title: subTitle,
        content: contentData,
        img_url: 'aa',
      }),
    );
    navigate(`/magazine/${articleId}`, { replace: true });
  };

  return (
    <Container>
      <FormBox>
        <div className="title-box">
          <div className="title">
            <input
              type="text"
              id="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              style={title !== '' ? { border: '0px', outline: 'none' } : {}}
              value={title}
            />
            <label htmlFor="title" style={title !== '' ? activeLabel : {}}>
              {title !== '' ? '제목' : '제목을 입력해주세요'}
            </label>
            <span
              className="effect"
              style={title !== '' ? activeSpan : {}}
            ></span>
          </div>
          <div className="title second">
            <input
              type="text"
              id="subTitle"
              onChange={(e) => {
                setSubTitle(e.target.value);
              }}
              style={title !== '' ? { border: '0px', outline: 'none' } : {}}
              value={subTitle}
            />
            <label
              htmlFor="subTitle"
              style={subTitle !== '' ? activeLabel : {}}
            >
              {subTitle !== '' ? '소제목' : '소제목을 입력해주세요'}
            </label>
            <span
              className="effect"
              style={subTitle !== '' ? activeSpan : {}}
            ></span>
          </div>
        </div>
      </FormBox>
      <ButtonWrapper>
        <button onClick={onSubmitHandler}>글 작성</button>
      </ButtonWrapper>
      <Ckeditor5 onChangeHandler={onChangeHandler} data={contentData} />
    </Container>
  );
};

export default MagazineModifyPage;

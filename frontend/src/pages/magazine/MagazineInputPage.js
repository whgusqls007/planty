import React, { useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { useState } from 'react';
import Ckeditor5 from '../../components/CKEditor5';
import { createMagazine } from '../../features/magazine/magazineActions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  ButtonWrapper,
  FormBox,
} from '../../styles/magazine/MagazineInputPageCss';

const MagazineInputPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [contentData, setContentData] = useState('');

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
      createMagazine({
        title: title,
        sub_title: subTitle,
        content: contentData,
        img_url: 'aa',
      }),
    );
    navigate('/magazine', { replace: true });
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
      <Ckeditor5 onChangeHandler={onChangeHandler} />
    </Container>
  );
};

export default MagazineInputPage;

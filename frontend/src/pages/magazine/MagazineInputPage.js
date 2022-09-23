import React, { useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import styled from 'styled-components';
import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { Base64UploadAdapter } from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';

const FormBox = styled.div`
  display: flex;
  justify-content: center;

  & .title-box {
    display: flex;
    flex-direction: column;
    width: 70%;
  }

  & .title {
    position: relative;
    border: 0px;
    margin-bottom: 4%;

    & label {
      position: absolute;
      transition: 0.4s;
      left: 0%;
      border-top: 0px;
      border-left: 0px;
      border-right: 0px;
    }

    & input:focus ~ label {
      position: absolute;
      left: 0%;
      top: -20px;
      font-size: 2px;
      transition: 0.4s;
      border: 1px solid green;
      border-top: 0px;
      border-left: 0px;
      border-right: 0px;
    }

    & input {
      width: 100%;
      border-top: 0px;
      border-left: 0px;
      border-right: 0px;
      transition: 0.4s;
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

const MagazineInputPage = () => {
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [ckeditor, setCKEditor] = useState(null);

  const activeLabel = {
    position: 'absolute',
    left: '0%',
    top: '-20px',
    fontSize: '2px',
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

  return (
    <Container>
      <FormBox>
        <div className="title-box">
          <div className="title">
            <input
              type="text"
              id="title"
              onChange={e => {
                setTitle(e.target.value);
                console.log(title);
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
          <div className="title">
            <input
              type="text"
              id="subTitle"
              onChange={e => {
                setSubTitle(e.target.value);
                console.log(title);
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
      <CKEditor
        editor={ClassicEditor}
        config={{
          plugins: [Paragraph, Bold, Italic, Essentials],
          toolbar: ['bold', 'italic'],
        }}
        data="<p>Hello from CKEditor 5!</p>"
        onReady={editor => {
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
    </Container>
  );
};

export default MagazineInputPage;

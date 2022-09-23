import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Container from 'react-bootstrap/esm/Container';
import styled from 'styled-components';

const MagazineInputPage = () => {
  return (
    <Container>
      <label htmlFor="username">Title</label>
      <input type="text" id="username" />
      <label htmlFor="password">Sub Title</label>
      <input type="text" id="password" />
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        onReady={(editor) => {
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

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from 'ckeditor5-build-classic-base64-upload';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 0.5%;
  width: 85%;
  margin-left: 7.5%;
  & .ck-editor__editable {
    min-height: 400px;
  }
`;

const Ckeditor5 = (props) => {
  return (
    <Wrapper>
      <CKEditor
        editor={ClassicEditor}
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
    </Wrapper>
  );
};

export default Ckeditor5;

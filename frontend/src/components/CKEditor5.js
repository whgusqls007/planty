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
  const { onChangeHandler, data } = props;
  return (
    <Wrapper>
      <CKEditor data={data} editor={ClassicEditor} onChange={onChangeHandler} />
    </Wrapper>
  );
};

export default Ckeditor5;

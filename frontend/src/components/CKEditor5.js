import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from 'ckeditor5-build-classic-base64-upload';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';

const Wrapper = styled.div`
  margin-top: 0.5%;
  width: 85%;
  margin-left: 7.5%;
  & .ck-editor__editable {
    min-height: 400px;
  }
`;

const API_URL = 'http://127.0.0.1:8000/api/magazines/';

const Ckeditor5 = ({ onChangeHandler, data }) => {
  const customUploadAdapter = (loader) => {
    return {
      upload() {
        return new Promise((resolve, reject) => {
          const data = new FormData();
          loader.file.then((file) => {
            data.append('name', file.name);
            data.append('file', file);
            axios
              .post(API_URL, data)
              .then((res) => {
                console.log(res);
                resolve({
                  default: `https://homidu.s3.ap-northeast-2.amazonaws.com/magazine/magazine-thumnails.png`,
                });
              })
              .catch((err) => reject(err));
          });
        });
      },
    };
  };

  function uploadPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return customUploadAdapter(loader);
    };
  }

  return (
    <Wrapper>
      <CKEditor
        config={{ extraPlugins: [uploadPlugin] }}
        data={data}
        editor={ClassicEditor}
        onChange={onChangeHandler}
      />
    </Wrapper>
  );
};

export default Ckeditor5;

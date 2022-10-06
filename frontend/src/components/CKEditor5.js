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

const API_URL = 'https://j7e103.p.ssafy.io/api/magazines/image_upload/';

const Ckeditor5 = ({ onChangeHandler, data, setImg, setIsImg, isImg }) => {
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
                if (!isImg) {
                  setIsImg(true);
                  setImg(res.data.img_url);
                }
                resolve({
                  default: res.data.img_url,
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

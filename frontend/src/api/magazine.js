import client from './client';

export const magazineList = async (offset, limit, order, search, searchBy) => {
  let response;
  if (search === '' || search === null || search === undefined) {
    response = client.get(
      `magazines/?offset=${offset}&limit=${limit}&order=${order}`,
    );
  } else {
    response = client.get(
      `magazines/?offset=${offset}&limit=${limit}&order=${order}&search=${search}&searchBy=${searchBy}`,
    );
  }

  return response;
};

export const magazineCreate = async (params) => {
  const response = client.post('magazines/', params);
  return response;
};

export const magazine = async (id) => {
  const response = client.get(`magazines/${id}/`);
  return response;
};

export const magazineUpdate = async (params) => {
  const response = client.put(`magazines/${params.id}/`, params);
  return response;
};

export const magazineDelete = async (params) => {
  const response = client.delete(`magazines/${params.id}/`);
  return response;
};

export const like = async (id) => {
  const response = client.post(`magazines/${id}/like/`);
  return response;
};

export const comment = async (id, comment) => {
  const response = client.post(`magazines/${id}/comment/`, comment);
  return response;
};

export const commentDelete = async (magazineId, commentId) => {
  const response = client.delete(
    `magazines/${magazineId}/comment/${commentId}/`,
  );
  return response;
};

export const commentModify = async ({ magazineId, commentId, content }) => {
  const response = client.put(`magazines/${magazineId}/comment/${commentId}/`, {
    content,
  });
  return response;
};

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

export const commentModify = async (magazineId, commentId) => {
  const response = client.put(`magazines/${magazineId}/comment/${commentId}/`);
  return response;
};

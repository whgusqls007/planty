import client from './client';

export const feedList = async () => {
  const response = client.get('feeds');

  return response;
};

export const feedItem = async (feedId) => {
  const response = client.get(`feeds/${feedId}`);

  return response;
};

export const feedCreate = async (params) => {
  const configs = {
    'Content-Type': 'multipart/form-data',
  };
  const response = client.post('feeds/', params, configs);

  return response;
};

export const feedCommentCreate = async ({ feedId, content }) => {
  const response = client.post(`feeds/${feedId}/comment/`, { content });

  return response;
};

export const feedLike = async (feedId) => {
  const response = client.post(`feeds/${feedId}/like/`);

  return response;
};

export const editComment = async ({ feedId, commentId, content }) => {
  const response = client.put(`feeds/${feedId}/comment/${commentId}`, {
    content,
  });

  return response;
};

export const deleteComment = async ({ feedId, commentId }) => {
  const response = client.delete(`feeds/${feedId}/comment/${commentId}`);

  return response;
};

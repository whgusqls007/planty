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

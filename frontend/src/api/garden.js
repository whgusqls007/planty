import client from './client';

export const gardenUser = async (userName) => {
  const response = client.get(`accounts/profile/${userName}`);
  return response;
};

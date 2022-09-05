import client from './client';

export const login = async (params) => {
  const response = await client.post('accounts/login/', params);
  return response;
};

export const register = async (params) => {
  const response = await client.post('accounts/signup/', params);
  return response;
};

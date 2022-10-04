import client from './client';

export const login = async (params) => {
  const response = await client.post('accounts/login/', params);
  return response;
};

export const register = async (params) => {
  const response = await client.post('accounts/signup/', params);
  return response;
};

export const getUserInfo = async () => {
  // const response = await client.get('accounts/user/');
  const response = await client.get('accounts/mypageuserinfo/');
  return response;
};

export const emailCheck = async (params) => {
  const response = await client.post('accounts/emailcheck/', params);
  return response;
};

export const usernameCheck = async (params) => {
  const response = await client.post('accounts/usernamecheck/', params);
  return response;
};

export const patchDescription = async (params) => {
  const response = await client.patch('accounts/description/', params);
  return response;
};

export const patchUsername = async (params) => {
  const response = await client.patch('accounts/user/', params);
  return response;
};

export const postNewPassword = async (params) => {
  const response = await client.post('accounts/password/change/', params);
  return response;
};

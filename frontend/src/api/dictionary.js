import client from './client';

export const plantList = async () => {
  const response = client.get('plants');

  return response;
};

export const plantListPagination = async (offset, limit) => {
  const response = client.get(`plants?offset=${offset}&limit=${limit}`);

  return response;
};

export const plantItem = async (plantId) => {
  const response = client.get(`plants/${plantId}`);

  return response;
};

export const plantSearch = async (plantKeyword) => {
  const response = client.get(`plants?search=${plantKeyword}`);

  return response;
};

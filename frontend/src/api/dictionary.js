import client from './client';

export const plantList = async () => {
  const response = client.get('plants');
  return response;
};

export const plantItem = async (plantId) => {
  const response = client.get(`plants/${plantId}`);
  return response;
};

import client from './client';

export const gardenList = async () => {
  const response = client.get('mygardens');
  return response;
};

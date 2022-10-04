import client from './client';


export const gardenList = async (userName) => {
  const response = client.get(`mygardens/user/${userName}`);
  return response;
}
export const gardenUser = async (userName) => {
  const response = client.get(`accounts/profile/${userName}`);
  return response;
};

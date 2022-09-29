import client from './client';

export const magazineList = async (offset, limit) => {
  const response = client.get(`magazines/?offset=${offset}&limit=${limit}`);

  return response;
};

export const magazineCreate = async (params) => {
  const response = client.post('magazines/', params);

  return response;
};

export const magazine = async (id) => {
  const response = client.get(`magazines/${id}`);
  return response;
};

export const like = async (id) => {
  const response = client.post(`magazines/${id}/like/`);

  return response;
};

// export const plantItem = async (plantId) => {
//   const response = client.get(`plants/${plantId}`);

//   return response;
// };

// export const plantSearch = async (plantKeyword) => {
//   const response = client.get(`plants?search=${plantKeyword}`);

//   return response;
// };

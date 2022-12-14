import client from './client';

export const petSafetyPlants = async () => {
  const response = await client.get('plants/petsafety');

  return response;
};

export const popularPlants = async () => {
  const response = await client.get('plants/popular');

  return response;
};

export const keywordRecommend = async (keyword) => {
  const response = await client.get(
    `recommendations/keyword/?keyword=${keyword}`,
  );

  return response;
};

export const plantWorldcup = async () => {
  const response = await client.get('recommendations');

  return response;
};

export const userRecommend = async () => {
  const response = await client.get('recommendations/user');

  return response;
};

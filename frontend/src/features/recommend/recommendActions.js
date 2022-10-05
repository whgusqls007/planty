import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  popularPlants,
  petSafetyPlants,
  keywordRecommend,
  plantWorldcup,
  userRecommend,
} from '../../api/recommend';

export const fetchPopularPlant = createAsyncThunk(
  'recommend/fetchPopularPlant',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await popularPlants();

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const fetchPetSafetyPlants = createAsyncThunk(
  'recommend/fetchPetSafetyPlants',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await petSafetyPlants();

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const fetchKeywordRecommend = createAsyncThunk(
  'recommend/fetchKeywordRecommend',
  async (keyword, { rejectWithValue }) => {
    try {
      const { data } = await keywordRecommend(keyword);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const fetchPlantWordcup = createAsyncThunk(
  'recommend/fetchPlantWordcup',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await plantWorldcup();

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const fetchUserRecommend = createAsyncThunk(
  'recommend/fetchUserRecommend',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await userRecommend();

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

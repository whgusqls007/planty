import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  plantList,
  plantItem,
  plantSearch,
  plantListPagination,
  keywordRecommendPlant,
} from '../../api/dictionary';

export const fetchPlant = createAsyncThunk(
  'dictionary/fetchPlant',
  async (plantId, { rejectWithValue }) => {
    try {
      const { data } = await plantItem(plantId);

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

export const searchPlant = createAsyncThunk(
  'dictionary/searchPlant',
  async (keyword, { rejectWithValue }) => {
    try {
      const { data } = await plantSearch(keyword);
      return data;
    } catch (error) {}
  },
);

export const fetchPlantListPagination = createAsyncThunk(
  'dictionary/fetchPlantListPagination',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await plantListPagination(params);

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

export const fetchKeywordRecommendPlant = createAsyncThunk(
  'dictionary/fetchKeywordRecommendPlant',
  async (keyword, { rejectWithValue }) => {
    try {
      const { data } = await keywordRecommendPlant(keyword);

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

import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  plantList,
  plantItem,
  plantSearch,
  plantListPagination,
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

export const fetchPlantList = createAsyncThunk(
  'dictionary/fetchPlantList',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await plantList();
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
      const { offset, limit } = params;
      const { data } = await plantListPagination(offset, limit);

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

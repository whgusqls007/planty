import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  magazineCreate,
  magazineList,
  magazine,
  like,
  dislike,
} from '../../api/magazine';

export const fetchMagazineList = createAsyncThunk(
  'magazine/magazineList',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await magazineList(params.offset, params.limit);
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

export const createMagazine = createAsyncThunk(
  'magazine/createMagazine',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await magazineCreate(params);
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

export const fetchMagazine = createAsyncThunk(
  'magazine/magazine',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await magazine(params);
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

export const increaseLike = createAsyncThunk(
  'magazine/like',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await like(params);
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

export const decreaseLike = createAsyncThunk(
  'magazine/dislike',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await like(params);
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

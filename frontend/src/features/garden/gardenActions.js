import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  gardenUser,
  postFollowUser,
  userFeed,
  userPlant,
  myGarden,
  gardenCreate,
  diaryCreate,
  gardenDiary,
} from '../../api/garden';
import { patchDescription } from '../../api/user';

export const fetchUserInfo = createAsyncThunk(
  'garden/fetchUserInfo',
  async (userName, { rejectWithValue }) => {
    try {
      const { data } = await gardenUser(userName);

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

export const followUser = createAsyncThunk(
  'garden/followUser',
  async (userName, { rejectWithValue }) => {
    try {
      const { data } = await postFollowUser(userName);

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

export const updateDescription = createAsyncThunk(
  'garden/updateDescription',
  async (description, { rejectWithValue }) => {
    try {
      const { data } = await patchDescription(description);

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

export const fetchUserPlant = createAsyncThunk(
  'garden/fetchUserPlant',
  async (userName, { rejectWithValue }) => {
    try {
      const { data } = await userPlant(userName);

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

export const fetchUserFeed = createAsyncThunk(
  'garden/fetchUserFeed',
  async (userName, { rejectWithValue }) => {
    try {
      const { data } = await userFeed(userName);

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

export const fetchMyGarden = createAsyncThunk(
  'garden/fetchMyGarden',
  async (mygardenId, { rejectWithValue }) => {
    try {
      const { data } = await myGarden(mygardenId);

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

export const createGarden = createAsyncThunk(
  'garden/createGarden',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await gardenCreate(params);

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

export const createDiary = createAsyncThunk(
  'garden/createDiary',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await diaryCreate(params);

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

export const fetchDiary = createAsyncThunk(
  'garden/fetchDiary',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await gardenDiary(params);

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

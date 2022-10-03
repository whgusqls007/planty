import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  gardenUser,
  postFollowUser,
  userFeed,
  userPlant,
  myGarden,
} from '../../api/garden';
import { patchDescription } from '../../api/user';

export const fetchUserInfo = createAsyncThunk(
  'mygarden/fetchUserInfo',
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
  'mygarden/followUser',
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
  'mygarden/updateDescription',
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
  'mygarden/fetchUserPlant',
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
  'mygarden/fetchUserFeed',
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
  'mygarden/fetchMyGarden',
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

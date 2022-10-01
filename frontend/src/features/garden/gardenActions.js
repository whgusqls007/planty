import { createAsyncThunk } from '@reduxjs/toolkit';
import { gardenUser, postFollowUser } from '../../api/garden';

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

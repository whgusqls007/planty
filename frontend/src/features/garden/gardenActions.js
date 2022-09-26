import { createAsyncThunk } from '@reduxjs/toolkit';
import { gardenList } from '../../api/garden';

export const fetchGardenList = createAsyncThunk(
  'mygarden/gardenList',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await gardenList();

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

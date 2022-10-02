import { createSlice } from '@reduxjs/toolkit';
import {
  fetchUserInfo,
  followUser,
  updateDescription,
  fetchUserPlant,
} from './gardenActions';

const initialState = {
  loading: false,
  garden: null,
  gardenUserInfo: {},
  gardenPlantList: {},
  error: null,
  success: false,
};

const gardenSlice = createSlice({
  name: 'garden',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUserInfo.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchUserInfo.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.gardenUserInfo = payload;
    },
    [fetchUserInfo.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [followUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [followUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.gardenUserInfo = payload;
    },
    [followUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [updateDescription.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [updateDescription.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.gardenUserInfo = { ...state.gardenUserInfo, ...payload };
    },
    [updateDescription.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [fetchUserPlant.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchUserPlant.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.gardenPlantList = payload;
    },
    [fetchUserPlant.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default gardenSlice.reducer;

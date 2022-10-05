import { createSlice } from '@reduxjs/toolkit';
import {
  fetchUserInfo,
  followUser,
  updateDescription,
  fetchUserPlant,
  fetchUserFeed,
  fetchMyGarden,
  createGarden,
  createDiary,
  fetchDiary,
} from './gardenActions';

const initialState = {
  loading: false,
  error: null,
  success: false,
  garden: null,
  gardenUserInfo: {},
  gardenPlantList: [],
  gardenFeedList: [],
  gardenPlant: {},
  diary: {},
};

const gardenSlice = createSlice({
  name: 'garden',
  initialState,
  reducers: {
    gardenCreateConfirm: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
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
    [fetchUserFeed.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchUserFeed.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.gardenFeedList = payload;
    },
    [fetchUserFeed.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [fetchMyGarden.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchMyGarden.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.gardenPlant = payload;
    },
    [fetchMyGarden.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // 정원 생성
    [createGarden.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [createGarden.fulfilled]: (state, { payload }) => {
      state.gardenPlantList = [...state.gardenPlantList, payload];
      state.success = true;
    },
    [createGarden.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // 다이어리 추가
    [createDiary.pending]: (state) => {
      // state.loading = true;
      state.error = false;
    },
    [createDiary.fulfilled]: (state, { payload }) => {
      state.gardenPlant = { ...state.gardenPlant, diaries: payload };
      state.success = true;
    },
    [createDiary.rejected]: (state, { payload }) => {
      // state.loading = false;
      state.error = payload;
    },
    // 다이어리 정보 가져오기
    [fetchDiary.fulfilled]: (state, { payload }) => {
      state.diary = payload;
    },
  },
});

export const { gardenCreateConfirm } = gardenSlice.actions;
export default gardenSlice.reducer;

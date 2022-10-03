import { createSlice } from '@reduxjs/toolkit';
import {
  fetchPopularPlant,
  fetchPetSafetyPlants,
  fetchKeywordRecommend,
} from './recommendActions';

const initialState = {
  loading: false,
  success: false,
  error: null,
  popularPlants: [],
  petsafePlants: [],
  keywordPlants: [],
};

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {},
  extraReducers: {
    // 인기식물
    [fetchPopularPlant.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    [fetchPopularPlant.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.popularPlants = payload;
    },
    [fetchPopularPlant.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // 반려동물 안전 식물
    [fetchPetSafetyPlants.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    [fetchPetSafetyPlants.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.petsafePlants = payload;
    },
    [fetchPetSafetyPlants.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // 키워드 검색
    [fetchKeywordRecommend.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    [fetchKeywordRecommend.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.keywordPlants = payload;
    },
    [fetchKeywordRecommend.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default recommendSlice.reducer;

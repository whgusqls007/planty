import { createSlice } from '@reduxjs/toolkit';
import {
  fetchPlant,
  fetchPlantListPagination,
  searchPlant,
  fetchKeywordRecommendPlant,
} from './dictionaryAction';

const initialState = {
  loading: false,
  plant: {},
  plantList: [],
  plantTotalCount: 0,
  searchResult: [],
  error: null,
  success: false,
};

const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {
    clearSearchResult: (state) => {
      state.searchResult = [];
    },
  },
  extraReducers: {
    [fetchPlant.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchPlant.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.plant = payload;
    },
    [fetchPlant.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [searchPlant.fulfilled]: (state, { payload }) => {
      state.searchResult = payload;
    },
    [fetchPlantListPagination.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchPlantListPagination.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.plantList = payload.results;
      state.plantTotalCount = payload.count;
    },
    [fetchPlantListPagination.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [fetchKeywordRecommendPlant.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchKeywordRecommendPlant.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.plantList = payload;
    },
    [fetchKeywordRecommendPlant.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { clearSearchResult } = dictionarySlice.actions;
export default dictionarySlice.reducer;

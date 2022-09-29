import { createSlice } from '@reduxjs/toolkit';
import { fetchMagazineList, fetchMagazine } from './magazineActions';

const initialState = {
  loading: false,
  magazineList: [],
  totalCount: 1,
  pageCount: 0,
  comments: [],
  magazine: {},
  error: null,
  success: false,
};

const magazineSlice = createSlice({
  name: 'magazine',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMagazineList.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchMagazineList.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.magazineList = payload.results;
      state.totalCount = payload.count;
      state.pageCount = parseInt(state.totalCount / 9);
    },
    [fetchMagazineList.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [fetchMagazine.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchMagazine.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.magazine = payload;
      state.comments = payload.comments;
    },
    [fetchMagazine.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default magazineSlice.reducer;

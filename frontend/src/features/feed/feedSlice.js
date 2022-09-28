import { createSlice } from '@reduxjs/toolkit';
import { fetchFeedList, fetchFeed, createFeed } from './feedAction';

const initialState = {
  loading: false,
  feed: null,
  feedList: [],
  error: null,
  success: false,
};

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {},
  extraReducers: {
    [createFeed.pending]: (state) => {},
    [createFeed.fulfilled]: (state) => {},
    [createFeed.rejected]: (state) => {},
    [fetchFeedList.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchFeedList.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.feedList = payload;
    },
    [fetchFeedList.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [fetchFeed.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchFeed.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.feed = payload;
    },
    [fetchFeed.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default feedSlice.reducer;

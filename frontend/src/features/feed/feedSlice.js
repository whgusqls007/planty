import { createSlice } from '@reduxjs/toolkit';
import {
  fetchFeedList,
  fetchFeed,
  createFeed,
  createFeedComment,
} from './feedAction';

const initialState = {
  loading: false,
  feed: {},
  feedList: [],
  // commentList: [],
  error: null,
  success: false,
};

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    createConfirm: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: {
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
      state.commentList = payload.commentList;
    },
    [fetchFeed.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [createFeed.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [createFeed.fulfilled]: (state, { payload }) => {
      state.feedList = [...state.feedList, payload];
      state.success = true;
    },
    [createFeed.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [createFeedComment.pending]: (state) => {},
    [createFeedComment.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.feed = {
        ...state.feed,
        feed_comments: payload,
      };
    },
    [createFeedComment.rejected]: (state, { payload }) => {},
  },
});

export const { createConfirm } = feedSlice.actions;

export default feedSlice.reducer;

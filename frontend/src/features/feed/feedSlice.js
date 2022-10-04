import { createSlice } from '@reduxjs/toolkit';
import {
  fetchFeedList,
  fetchFeed,
  createFeed,
  createFeedComment,
  likeFeed,
} from './feedAction';

const initialState = {
  loading: false,
  feed: {},
  feedList: [],
  feedModalState: false,
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
    feedModalOpen: (state) => {
      state.feedModalState = true;
    },
    feedModalClose: (state) => {
      state.feedModalState = false;
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
      state.feedList = [payload, ...state.feedList];
      state.success = true;
    },
    [createFeed.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [createFeedComment.pending]: (state) => {},
    [createFeedComment.fulfilled]: (state, { payload }) => {
      state.feed = {
        ...state.feed,
        feed_comments: payload,
      };
    },
    [createFeedComment.rejected]: (state, { payload }) => {},
    [likeFeed.pending]: (state) => {},
    [likeFeed.fulfilled]: (state, { payload }) => {
      state.feed = payload;
    },
    [likeFeed.rejected]: (state, { payload }) => {},
  },
});

export const { createConfirm } = feedSlice.actions;

export default feedSlice.reducer;

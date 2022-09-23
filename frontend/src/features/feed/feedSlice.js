import { createSlice } from '@reduxjs/toolkit';
import { fetchFeedList, fetchFeed, createFeed } from './feedAction';

const initialState = {
  loading: false,
  feed: null,
  feedList: null,
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
  },
});

export default feedSlice.reducer;

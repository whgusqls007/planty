import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  feedItem,
  feedList,
  feedCreate,
  feedCommentCreate,
  feedLike,
  editComment,
  deleteComment,
} from '../../api/feed';

export const fetchFeed = createAsyncThunk(
  'feed/fetchFeed',
  async (feedId, { rejectWithValue }) => {
    try {
      const { data } = await feedItem(feedId);

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

export const fetchFeedList = createAsyncThunk(
  'feed/fetchFeedList',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await feedList();

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

export const createFeed = createAsyncThunk(
  'feed/createFeed',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await feedCreate(params);

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

export const createFeedComment = createAsyncThunk(
  'feed/createFeedComment',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await feedCommentCreate(params);

      return data;
    } catch (error) {}
  },
);

export const likeFeed = createAsyncThunk(
  'feed/likeFeed',
  async (feedId, { rejectWithValue }) => {
    try {
      const { data } = await feedLike(feedId);

      return data;
    } catch (error) {}
  },
);

export const modifyFeedComment = createAsyncThunk(
  'feed/modifyFeedComment',
  async (prams, { rejectWithValue }) => {
    try {
      const { data } = await editComment(prams);

      return data;
    } catch (error) {}
  },
);

export const deleteFeedComment = createAsyncThunk(
  'feed/deleteFeedComment',
  async (prams, { rejectWithValue }) => {
    try {
      const { data } = await deleteComment(prams);

      return data;
    } catch (error) {}
  },
);

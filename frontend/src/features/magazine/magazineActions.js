import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  magazineCreate,
  magazineList,
  magazine,
  like,
  comment,
  commentDelete,
  commentModify,
} from '../../api/magazine';

export const fetchMagazineList = createAsyncThunk(
  'magazine/magazineList',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await magazineList(
        params.offset,
        params.limit,
        params.sorting,
        params.search,
        params.searchBy,
      );
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

export const fetchMagazineListForPagination = createAsyncThunk(
  'magazine/magazineListForPagination',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await magazineList(
        params.offset,
        params.limit,
        params.sorting,
        params.search,
        params.searchBy,
      );
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

export const createMagazine = createAsyncThunk(
  'magazine/createMagazine',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await magazineCreate(params);
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

export const fetchMagazine = createAsyncThunk(
  'magazine/magazine',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await magazine(params);
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

export const fetchLike = createAsyncThunk(
  'magazine/like',
  async (params, { rejectWithValue }) => {
    try {
      await like(params);
      const { data } = await magazine(params);
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

export const fetchComment = createAsyncThunk(
  'magazine/comment',
  async (params, { rejectWithValue }) => {
    try {
      await comment(params.id, params.comment);
      const { data } = await magazine(params.id);
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

export const deleteComment = createAsyncThunk(
  'magazine/deleteComment',
  async (params, { rejectWithValue }) => {
    try {
      await commentDelete(params.articleId, params.commentId);
      const { data } = await magazine(params.articleId);
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

export const modifyComment = createAsyncThunk(
  'magazine/modifyComment',
  async (params, { rejectWithValue }) => {
    try {
      await commentModify(params);
      const { data } = await magazine(params.magazineId);
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

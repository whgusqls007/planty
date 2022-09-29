import { createSlice } from '@reduxjs/toolkit';
import {
  fetchMagazineList,
  fetchMagazine,
  fetchLike,
  fetchMagazineListForPagination,
  fetchComment,
  deleteComment,
  modifyComment,
} from './magazineActions';

const initialState = {
  loading: false,
  magazineList: [],
  totalCount: 1,
  array: [],
  pageCount: 0,
  comments: [],
  magazine: {},
  current: 0,
  prevCurrent: -1,
  limit: 9,
  offset: 0,
  sorting: 0,
  error: null,
  success: false,
};

const magazineSlice = createSlice({
  name: 'magazine',
  initialState,
  reducers: {
    setCurrentOffsetLimit(state, { payload }) {
      state.current = payload.current;
      state.limit = payload.current * 9 + 9;
      state.offset = payload.current * 9;
    },

    setPrevCurrent(state, { payload }) {
      state.prevCurrent = payload.prevCurrent;
      state.prevSorting = payload.prevSorting;
    },

    setSorting(state, { payload }) {
      state.sorting = payload.sorting;
    },
  },
  extraReducers: {
    // magazineList
    [fetchMagazineList.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchMagazineList.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.magazineList = [];
      state.magazineList = payload.results;
      state.totalCount = payload.count;
      state.pageCount = Math.ceil(state.totalCount / 9);
      if (state.prevCurrent !== -1) {
        state.current = state.prevCurrent;
        state.sorting = state.prevSorting;
        state.limit = state.prevCurrent * 9 + 9;
        state.offset = state.prevCurrent * 9;
      } else {
        state.current = 0;
        state.offset = 0;
        state.limit = 9;
      }
      state.prevCurrent = -1;
      state.array = [];
      for (let i = 0; i < state.pageCount; i++) {
        state.array.push(i);
      }
    },
    [fetchMagazineList.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // magazine
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

    //like
    [fetchLike.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchLike.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.magazine = payload;
      state.comments = payload.comments;
    },
    [fetchLike.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // magazineListForPagination
    [fetchMagazineListForPagination.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchMagazineListForPagination.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.magazineList = [];
      state.magazineList = payload.results;
      state.totalCount = payload.count;
      state.pageCount = Math.ceil(state.totalCount / 9);
      state.array = [];
      for (let i = 0; i < state.pageCount; i++) {
        state.array.push(i);
      }
    },
    [fetchMagazineListForPagination.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    //comment
    [fetchComment.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchComment.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.comments = payload.comments;
    },
    [fetchComment.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // deleteComment
    [deleteComment.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [deleteComment.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.comments = payload.comments;
    },
    [deleteComment.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // modifyComment
    [modifyComment.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [modifyComment.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.comments = payload.comments;
    },
    [modifyComment.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export let { setCurrentOffsetLimit, setPrevCurrent, setSorting } =
  magazineSlice.actions;
export default magazineSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { fetchUserInfo } from './gardenActions';

const initialState = {
  loading: false,
  garden: null,
  userInfo: {},
  gardenList: null,
  error: null,
  success: false,
};

const gardenSlice = createSlice({
  name: 'garden',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUserInfo.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchUserInfo.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
    },
    [fetchUserInfo.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default gardenSlice.reducer;

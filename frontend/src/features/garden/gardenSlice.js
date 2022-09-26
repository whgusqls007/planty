import { createSlice } from '@reduxjs/toolkit';
import { fetchGardenList } from './gardenActions';

const initialState = {
  loading: false,
  garden: null,
  gardenList: null,
  error: null,
  success: false,
};

const gardenSlice = createSlice({
  name: 'garden',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGardenList.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchGardenList.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.gardenList = payload;
    },
    [fetchGardenList.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default gardenSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { userLogin, userRegister } from './userActions';

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: {
    // 유저 로그인
    [userLogin.pending]: (state) => {
      // 액션 디스패치
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      // 요청 성공
      state.loading = false;
      state.userInfo = payload;
      state.userToken = payload.serToken;
    },
    [userLogin.rejected]: (state, { payload }) => {
      // 요청 실패
      state.loading = false;
      state.error = payload;
    },
  },
});

export default userSlice.reducer;

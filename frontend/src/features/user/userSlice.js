import { createSlice } from '@reduxjs/toolkit';
import { userLogin, userRegister } from './userActions';

const userInfo = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  loading: false,
  userInfo,
  error: null,
  success: false,
  registerState: false,
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
    registerDone: (state) => {
      state.registerState = false;
    },
    confirmError: (state) => {
      state.error = null;
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
    },
    [userLogin.rejected]: (state, { payload }) => {
      // 요청 실패
      state.loading = false;
      state.error = payload;
    },
    // 유저 회원가입
    [userRegister.pending]: (state) => {
      // 액션 디스패치
      state.loading = true;
      state.error = null;
    },
    [userRegister.fulfilled]: (state, { payload }) => {
      // 요청 성공
      state.loading = false;
      state.registerState = true;
    },
    [userRegister.rejected]: (state, { payload }) => {
      // 요청 실패
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { logout, registerDone, confirmError } = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import {
  userLogin,
  userRegister,
  updateUsername,
  updatePassword,
  updateUsernamePassword,
  fetchUserInfo,
  fetchUserComments,
  fetchUserLikes,
} from './userActions';

const userInfo = sessionStorage.getItem('userInfo')
  ? JSON.parse(sessionStorage.getItem('userInfo'))
  : null;

const initialState = {
  loading: false,
  userInfo,
  error: null,
  success: false,
  registerState: false,
  userCommentList: [],
  userLikeList: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = null;
      state.error = null;
      state.loading = false;
      sessionStorage.removeItem('userInfo');
      sessionStorage.removeItem('Token');
    },
    registerDone: (state) => {
      state.registerState = false;
    },
    confirmError: (state) => {
      state.error = null;
    },
    usernameUpdateDone: (state) => {
      state.success = false;
    },
    passwordUpdateDone: (state) => {
      state.success = false;
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
    // 유저 정보 가져오기
    [fetchUserInfo.pending]: (state) => {
      // 액션 디스패치
      state.loading = true;
      state.error = null;
    },
    [fetchUserInfo.fulfilled]: (state, { payload }) => {
      // 요청 성공
      state.loading = false;
      state.userInfo = payload;
    },
    [fetchUserInfo.rejected]: (state, { payload }) => {
      // 요청 실패
      state.loading = false;
      state.error = payload;
    },
    // 유저 이름 변경
    [updateUsername.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [updateUsername.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      const userInfo = {
        ...JSON.parse(sessionStorage.getItem('userInfo')),
        username: payload.username,
      };
      sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
      state.userInfo = { ...state.userInfo, ...payload };
    },
    [updateUsername.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [updatePassword.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    // 비밀번호 변경 완료 시 로그아웃
    [updatePassword.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
    },
    [updatePassword.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [updateUsernamePassword.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [updateUsernamePassword.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      const userInfo = {
        ...JSON.parse(sessionStorage.getItem('userInfo')),
        username: payload.username,
      };
      sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
      state.userInfo = { ...state.userInfo, ...payload };
    },
    [updateUsernamePassword.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // 댓글 목록 가져오기
    [fetchUserComments.pending]: (state) => {
      // 액션 디스패치
      state.loading = true;
      state.error = null;
    },
    [fetchUserComments.fulfilled]: (state, { payload }) => {
      // 요청 성공
      state.loading = false;
      state.userCommentList = payload;
    },
    [fetchUserComments.rejected]: (state, { payload }) => {
      // 요청 실패
      state.loading = false;
      state.error = payload;
    },
    // 좋아요 목록 가져오기
    [fetchUserLikes.pending]: (state) => {
      // 액션 디스패치
      state.loading = true;
      state.error = null;
    },
    [fetchUserLikes.fulfilled]: (state, { payload }) => {
      // 요청 성공
      state.loading = false;
      state.userLikeList = payload;
    },
    [fetchUserLikes.rejected]: (state, { payload }) => {
      // 요청 실패
      state.loading = false;
      state.error = payload;
    },
  },
});

export const {
  logout,
  registerDone,
  confirmError,
  usernameUpdateDone,
  passwordUpdateDone,
} = userSlice.actions;
export default userSlice.reducer;

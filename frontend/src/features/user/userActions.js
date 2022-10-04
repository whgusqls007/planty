import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getUserInfo,
  login,
  register,
  patchUsername,
  postNewPassword,
} from '../../api/user';

export const userLogin = createAsyncThunk(
  'user/login',
  async (params, { rejectWithValue }) => {
    try {
      const loginData = await login(params);
      // 세션스토리지에 Token 저장
      sessionStorage.setItem('Token', loginData.data.key);
      const { data } = await getUserInfo();
      sessionStorage.setItem('userInfo', JSON.stringify(data));
      return data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const userRegister = createAsyncThunk(
  'user/register',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await register(params);
      return data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const updateUsername = createAsyncThunk(
  'user/updateUsername',
  async (username, { rejectWithValue }) => {
    try {
      const { data } = await patchUsername(username);
      console.log(data);
      return data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const updatePassword = createAsyncThunk(
  'user/updatePassword',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await postNewPassword(params);
      return data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const updateUsernamePassword = createAsyncThunk(
  'user/updateUsernamePassword',
  async (params, { rejectWithValue }) => {
    try {
      await postNewPassword(params);
      const { data } = await patchUsername(params);
      return data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

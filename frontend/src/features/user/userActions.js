import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, register } from '../../api/user';

export const userLogin = createAsyncThunk(
  'user/login',
  async ({ userId, userPassword }, { rejectWithValue }) => {
    try {
      const { data } = await login({ userId, userPassword });

      // 로컬스토리지에 Token 저장
      localStorage.setItem('userToken', data.userToken);

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

export const userRegister = createAsyncThunk(
  'user/register',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await register(params);

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

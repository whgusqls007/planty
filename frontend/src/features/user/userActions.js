import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo, login, register } from '../../api/user';

export const userLogin = createAsyncThunk(
  'user/login',
  async (params, { rejectWithValue }) => {
    try {
      const loginData = await login(params);
      // 로컬스토리지에 Token 저장
      localStorage.setItem('Token', loginData.data.key);
      const { data } = await getUserInfo();
      localStorage.setItem('userInfo', JSON.stringify(data));
      return data;
    } catch (error) {
      console.log('error', error);
      if (error.response && error.response.data) {
        console.log(error.response.data);
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

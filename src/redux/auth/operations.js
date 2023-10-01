import { createAsyncThunk } from '@reduxjs/toolkit';
import { publicApi, privateApi } from 'api';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async ({ userName, email, password }, thunkAPI) => {
    try {
      const response = await publicApi.post('/api/auth/register', {
        userName,
        email,
        password,
      });
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        code: error.response.status,
      });
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await publicApi.post('/api/auth/login', {
        email,
        password,
      });
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        code: error.response.status,
      });
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await privateApi.post('/api/auth/logout');
  } catch (error) {
    return thunkAPI.rejectWithValue({
      message: error.response.data.message,
      code: error.response.status,
    });
  }
});

export const getUserData = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    try {
      const response = await privateApi.get('/api/auth/current');
      console.log(response);

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        code: error.response.status,
      });
    }
  }
);

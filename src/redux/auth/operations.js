import { createAsyncThunk } from '@reduxjs/toolkit';
import { publicApi, privateApi, refreshApi } from 'api';
import { toast } from 'react-toastify';

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

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        code: error.response.status,
      });
    }
  }
);

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  try {
    const response = await refreshApi.post('/api/auth/refresh');
    return response.data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateAvatar = createAsyncThunk(
  'auth/avatar',
  async (formData, thunkAPI) => {
    try {
      const response = await privateApi.patch('/api/auth/avatar', formData);
      toast.success('Avatar changed successfully');
      return response.data.data;
    } catch (error) {
      toast.error('Ops, something is wrong');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editData = createAsyncThunk(
  'auth/user',
  async (credentials, thunkAPI) => {
    try {
      const response = await privateApi.patch('/api/auth/user', credentials);
      toast.success('Changes saved successfully');
      return response.data.data;
    } catch (error) {
      toast.error('Ops, something is wrong');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

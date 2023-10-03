import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateApi } from 'api';

export const getAllReview = createAsyncThunk(
  'reviews/getReview',
  async (_, thunkAPI) => {
    try {
      const response = await privateApi.get('/api/reviews');
      console.log(response.data.data);

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        code: error.response.status,
      });
    }
  }
);

export const addReview = createAsyncThunk(
  'reviews/addReview',
  async (review, thunkAPI) => {
    try {
      const response = await privateApi.post('/api/reviews/own', review);
      console.log(response.data.data);

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        code: error.response.status,
      });
    }
  }
);
export const updateReview = createAsyncThunk(
  'reviews/updateReview',
  async (review, thunkAPI) => {
    try {
      const response = await privateApi.patch('/api/reviews/own', review);
      console.log(response.data.data);

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        code: error.response.status,
        message: error.response.data.message,
      });
    }
  }
);

export const deleteReview = createAsyncThunk(
  'reviews/deleteReview',
  async (_, thunkAPI) => {
    try {
      const response = await privateApi.delete('/api/reviews/own');
      console.log(response.data.data);

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        code: error.response.status,
        message: error.response.data.message,
      });
    }
  }
);

import { createAsyncThunk } from '@reduxjs/toolkit';


export const signUp = createAsyncThunk(
  'auth/signUp',
  async ({}, thunkAPI) => {
    try {
    } catch (error) {
      console.log(thunkAPI.rejectWithValue(error.message));
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

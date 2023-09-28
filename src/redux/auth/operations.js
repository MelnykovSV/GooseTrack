import { createAsyncThunk } from '@reduxjs/toolkit';

export const signUp = createAsyncThunk('auth/signUp', async (_, thunkAPI) => {
  try {
  } catch (error) {
    console.log(thunkAPI.rejectWithValue(error.message));
    return thunkAPI.rejectWithValue(error.message);
  }
});

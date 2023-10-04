const { createAsyncThunk } = require('@reduxjs/toolkit');
const { privateApi } = require('api');

export const getTasksByMonth = createAsyncThunk(
  'tasks/getTasksByMonth',
  async (month, { rejectWithValue }) => {
    try {
      const { data } = await privateApi.get(`/api/tasks/getByMonth/${month}`);

      return data.data;
    } catch (error) {
      return rejectWithValue({ message: 'error' });
    }
  }
);

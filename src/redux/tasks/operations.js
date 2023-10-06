const { createAsyncThunk } = require('@reduxjs/toolkit');
const { privateApi } = require('api');

export const getTasksByMonth = createAsyncThunk(
  'tasks/getTasksByMonth',
  async (month, { rejectWithValue }) => {
    try {
      const { data } = await privateApi.get(`/api/tasks/getByMonth/${month}`);

      return { data: data.data, month };
    } catch (error) {
      return rejectWithValue({ message: 'error' });
    }
  }
);

export const getTasksByDay = createAsyncThunk(
  'tasks/getTasksByDay',
  async (day, { rejectWithValue }) => {
    try {
      const { data } = await privateApi.get(`/api/tasks/getByDay/${day}`);

      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const { data: updatedData } = await privateApi.patch(
        `/api/tasks/${id}`,
        data
      );

      return updatedData.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

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

export const createTask = createAsyncThunk(
  'tasks/createTask',
  async (data, { rejectWithValue }) => {
    try {
      const { data: newData } = await privateApi.post(`/api/tasks`, data);

      return newData.data;
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

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await privateApi.delete(`/api/tasks/${id}`);

      return data.data._id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

import { createSlice } from '@reduxjs/toolkit';
import { isTasksError, isTasksPending } from '../statusCheckers';
import { getTasksByMonth } from './operations';

// interface ITask {
//     title: string;
//     priority: 'low' | 'medium' | 'high';
//     status: 'todo' | 'inProgress' | 'done';
// date: string|null;  //YYYY-MM-DD
//     start: string; // hh:mm
//     end: string; // hh:mm
//   }

const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTasksByMonth.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addMatcher(isTasksPending, state => {
        state.isLoading = true;
        state.status = 'pending';
      })
      .addMatcher(isTasksError, (state, action) => {
        state.isLoading = false;
        state.status = 'rejected';
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export const tasksReducer = tasksSlice.reducer;
export const getTasksError = state => state.tasks.error;

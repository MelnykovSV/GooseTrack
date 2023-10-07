import { createSlice } from '@reduxjs/toolkit';
import { getTasksByMonth, updateTask, getTasksByDay } from './operations';
import { isTasksError, isTasksPending, islogout } from '../statusCheckers';

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
  month: null,
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    clearTasks(state) {
      state.tasks = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getTasksByMonth.fulfilled, (state, action) => {
        state.tasks = action.payload.data;
        state.month = action.payload.month;
        state.isLoading = false;
      })
      .addCase(getTasksByDay.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.isLoading = false;
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.map(task =>
          task._id === action.payload._id
            ? { ...task, ...action.payload }
            : task
        );
        state.isLoading = false;
      })
      .addMatcher(isTasksPending, state => {
        state.isLoading = true;
        state.status = 'pending';
      })
      .addMatcher(isTasksError, (state, action) => {
        state.isLoading = false;
        state.status = 'rejected';
        state.error = action.payload || 'Something went wrong';
      })
      .addMatcher(islogout, state => {
        state.tasks = [];
        state.isLoading = false;
        state.error = null;
        state.status = 'fulfilled';
      });
  },
});

export const { clearTasks } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
export const getTasksError = state => state.tasks.error;
export const getTasks = state => state.tasks.tasks;
export const getMonth = state => state.tasks.month;

import { createSlice } from '@reduxjs/toolkit';
import { isError, isPending } from '../statusCheckers';

// interface ITask {
//     title: string;
//     priority: 'low' | 'medium' | 'high';
//     status: 'todo' | 'inProgress' | 'done';
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
    builder.addMatcher(isPending, state => {
      state.isLoading = true;
      state.status = 'pending';
    });
    builder.addMatcher(isError, (state, action) => {
      state.isLoading = false;
      state.status = 'rejected';
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export const tasksReducer = tasksSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isError, isPending } from '../statusCheckers';

const initialState = {
  reviews: [],
  isLoading: false,
  error: null,
};

const reviewsSlice = createSlice({
  name: 'reviews',
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

export const reviewsReducer = reviewsSlice.reducer;

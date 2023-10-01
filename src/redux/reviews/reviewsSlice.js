import { createSlice } from '@reduxjs/toolkit';
import { isReviewsError, isReviewsPending } from '../statusCheckers';

// interface IReview {
//     userName: string | null;
//     rating: number; // 1-5
//     review: string | null;
//     avatarUrl: string | null;
//   }

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
    builder.addMatcher(isReviewsPending, state => {
      state.isLoading = true;
      state.status = 'pending';
    });
    builder.addMatcher(isReviewsError, (state, action) => {
      state.isLoading = false;
      state.status = 'rejected';
      state.error = action.payload || 'Something went wrong';
    });
  },
});

export const reviewsReducer = reviewsSlice.reducer;
export const getReviewsError = state => state.reviews.error;

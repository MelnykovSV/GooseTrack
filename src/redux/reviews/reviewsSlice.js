import { createSlice } from '@reduxjs/toolkit';
import { isReviewsError, isReviewsPending } from '../statusCheckers';
import { addReview, deleteReview, updateReview } from './operations';
import { islogout } from 'redux/statusCheckers';

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

const handleAddReview = (state, action) => {
  state.reviews.push(action.payload);
  state.isLoading = false;
  state.error = null;
  state.status = 'fulfilled';
};

const handleUpdateReview = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.status = 'fulfilled';
};

const handleDeleteReview = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.status = 'fulfilled';
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addReview.fulfilled, handleAddReview)
      .addCase(updateReview.fulfilled, handleUpdateReview)
      .addCase(deleteReview.fulfilled, handleDeleteReview);
    builder
      .addMatcher(isReviewsPending, state => {
        state.isLoading = true;
        state.status = 'pending';
      })
      .addMatcher(isReviewsError, (state, action) => {
        state.isLoading = false;
        state.status = 'rejected';
        state.error = action.payload || 'Something went wrong';
      })
      .addMatcher(islogout, state => {
        state.reviews = [];
        state.isLoading = false;
        state.error = null;
        state.status = 'fulfilled';
      });
  },
});

export const reviewsReducer = reviewsSlice.reducer;

export const getReviewsError = state => state.reviews.error;

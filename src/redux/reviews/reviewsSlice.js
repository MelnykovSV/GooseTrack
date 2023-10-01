import { createSlice } from '@reduxjs/toolkit';
import { isReviewsError, isReviewsPending } from '../statusCheckers';
import { addReview, getReview } from './operations';

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

const handleGetReview = (state, action) => {
  console.log(action.payload);
  state.isLoading = false;
  state.error = null;
  state.status = 'fulfilled';
};

const handleAddReview = (state, action) => {
  state.reviews.push(action.payload);
  state.isLoading = false;
  state.error = null;
  state.status = 'fulfilled';
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: initialState,
  reducers: {
    // getReview(state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.status = 'fulfilled';
    // },
    // addReview(state, action) {
    //   state.reviews.push(action.payload);
    //   state.isLoading = false;
    //   state.error = null;
    //   state.status = 'fulfilled';
    // },
  },
  extraReducers: builder => {
    // builder.addCase(getReview.fulfilled, handleGetReview);
    // builder.addCase(addReview.fulfilled, handleAddReview);
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

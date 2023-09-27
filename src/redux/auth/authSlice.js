import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isError, isPending } from '../statusCheckers';

import { signUp } from './operations';

const initialState = {
  user: {
    userName: null,
    email: null,
    birthday: null, // (YYYY-MM-DD)
    phone: null,
    skype: null,
    avatarUrl: null,
  },
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signUp.fulfilled, (state, action) => {});

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

export const userReducer = authSlice.reducer;
export const { updateTokens, forceLogOut } = authSlice.actions;

export const getAccessToken = state => state.auth.accessToken;

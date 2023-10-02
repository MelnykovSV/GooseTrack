import { createSlice } from '@reduxjs/toolkit';
import { isAuthError, isAuthPending } from '../statusCheckers';

import { signUp, signIn, logOut, getUserData } from './operations';

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
  reducers: {
    updateTokens(state, action) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    forceLogOut(state) {
      state.accessToken = null;
      state.refreshToken = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.status = 'fulfilled';
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = { ...state.user, ...action.payload.user };
      state.isLoading = false;
      state.status = 'fulfilled';
      state.error = null;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = { ...state.user, ...action.payload.user };
      state.isLoading = false;
      state.status = 'fulfilled';
      state.error = null;
    });
    builder.addCase(logOut.fulfilled, state => {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = { ...initialState.user };
      state.isLoading = false;
      state.status = 'fulfilled';
      state.error = null;
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.user = { ...state.user, ...action.payload.user };
      state.isLoading = false;
      state.status = 'fulfilled';
      state.error = null;
    });
    // builder.addCase(refresh.fulfilled, (state, action) => {
    //   state.accessToken = action.payload.accessToken;
    //   state.refreshToken = action.payload.refreshToken;
    //   state.isLoading = false;
    //   state.status = 'fulfilled';
    // });

    builder.addMatcher(isAuthPending, state => {
      state.isLoading = true;
      state.status = 'pending';
    });
    builder.addMatcher(isAuthError, (state, action) => {
      state.isLoading = false;
      state.status = 'rejected';
      state.error = action.payload || { message: 'Unknown error', code: null };
      // console.log(action.payload.code);
    });
  },
});

export const userReducer = authSlice.reducer;
export const { updateTokens, forceLogOut } = authSlice.actions;

export const getAccessToken = state => state.auth.accessToken;
export const getRefreshToken = state => state.auth.refreshToken;

export const getUser = state => state.auth.user;
export const getAuthError = state => state.auth.error;


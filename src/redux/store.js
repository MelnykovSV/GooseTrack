import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './auth/authSlice';
import { reviewsReducer } from './reviews/reviewsSlice';
import { tasksReducer } from './tasks/tasksSlice';
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'gooseAuth',
  storage,
  whitelist: ['accessToken', 'refreshToken'],
};

const customMiddleWare = store => next => action => {
  next(action);
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, userReducer),
    tasks: tasksReducer,
    reviews: reviewsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(customMiddleWare),
});

export const persistor = persistStore(store);

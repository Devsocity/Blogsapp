import { configureStore } from '@reduxjs/toolkit';
import apiSlice from './apiSlice.js';
import authReducer from '../features/auth/authSlice';

// Create store
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    userState: authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: import.meta.env.VITE_APP_ENVIRONMENT === 'Development' ? true : false
});

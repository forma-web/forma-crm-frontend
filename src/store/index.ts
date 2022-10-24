import { configureStore } from '@reduxjs/toolkit';

import { authApi } from '../api';
import { userStoreSlice } from './userSlice';

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userStoreSlice.name]: userStoreSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), authApi.middleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;

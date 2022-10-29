import { configureStore } from '@reduxjs/toolkit';

import { authApi, companiesApi } from '../api';
import { userStoreSlice } from './userSlice';

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [companiesApi.reducerPath]: companiesApi.reducer,
    [userStoreSlice.name]: userStoreSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    authApi.middleware,
    companiesApi.middleware,
  ],
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;

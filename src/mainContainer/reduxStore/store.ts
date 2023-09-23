// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { bitHomeApi } from '../service/appSlice';

export const store = configureStore({
  reducer: {
    [bitHomeApi.reducerPath]: bitHomeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bitHomeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

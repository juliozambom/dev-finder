import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './user/slice';
import { appSlice } from './app/slice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    app: appSlice.reducer,
  },
});

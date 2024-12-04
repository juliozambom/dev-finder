import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    savedUser: null,
  },
  reducers: {
    setSavedUser(state, action) {
      state.savedUser = action.payload;
    },
  },
});

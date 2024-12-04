import { I18NLanguage } from '@/src/utils/i18n';
import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    savedUser: null,
    language: 'en' as I18NLanguage,
  },
  reducers: {
    setSavedUser(state, action) {
      state.savedUser = action.payload;
    },
    setLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = appSlice.actions;

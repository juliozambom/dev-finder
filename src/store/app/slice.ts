import { I18NLanguage } from '@/src/utils/i18n';
import { en } from '@/src/utils/i18n/en';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    savedUser: null,
    language: en,
  },
  reducers: {
    setSavedUser(state, action) {
      state.savedUser = action.payload;
    },
    setLanguage(state, action: PayloadAction<typeof en>) {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = appSlice.actions;

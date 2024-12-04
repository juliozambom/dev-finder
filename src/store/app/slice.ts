import { I18NLanguage, i18nLocales } from '@/src/utils/i18n';
import { en } from '@/src/utils/i18n/en';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
    setLanguage(state, action: PayloadAction<I18NLanguage>) {
      state.language = i18nLocales[action.payload];
      AsyncStorage.setItem('language', action.payload);
    },
  },
});

export const { setLanguage } = appSlice.actions;

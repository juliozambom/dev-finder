import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../types';
import { en } from '../../utils/i18n/en';
import { I18NLanguage, i18nLocales } from '../../utils/i18n';
import { fetchFavoriteUser, fetchToSaveUser } from './thunks';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    savedUser: null as IUser | null,
    favoritedUsers: [] as IUser[],
    isLoading: false,
    isLoadingFavoritedUsers: false,
    language: en,
  },
  reducers: {
    setSavedUser(state, action: PayloadAction<IUser | null>) {
      state.savedUser = action.payload;
    },
    setLanguage(state, action: PayloadAction<I18NLanguage>) {
      state.language = i18nLocales[action.payload];
      AsyncStorage.setItem('language', action.payload);
    },
    setFavoritedUsers(state, action: PayloadAction<IUser[]>) {
      state.favoritedUsers = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchToSaveUser.fulfilled, (state, action) => {
        const user = {
          slug: action.payload.login,
          avatar: action.payload.avatar_url,
          bio: action.payload.bio,
          followers: action.payload.followers,
          following: action.payload.following,
          name: action.payload.name,
          repositories: action.payload.public_repos,
          email: action.payload.email,
        };

        state.savedUser = user;
        state.isLoading = false;

        AsyncStorage.setItem('savedUser', JSON.stringify(user));
      })
      .addCase(fetchToSaveUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchToSaveUser.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      .addCase(fetchFavoriteUser.fulfilled, (state, action) => {
        state.favoritedUsers = action.payload;
        state.isLoadingFavoritedUsers = false;
      })
      .addCase(fetchFavoriteUser.pending, (state) => {
        state.isLoadingFavoritedUsers = true;
      })
      .addCase(fetchFavoriteUser.rejected, (state) => {
        state.isLoadingFavoritedUsers = false;
      });
  },
});

export const { setLanguage, setSavedUser, setFavoritedUsers } =
  appSlice.actions;

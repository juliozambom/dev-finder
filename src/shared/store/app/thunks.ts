import { createAsyncThunk } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { IUser, RootState } from '../types';
import { FetchUserService } from '../../services/github/user/fetch-user';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchFavoriteUser = createAsyncThunk(
  'app/fetchFavoriteUser',
  async (user: IUser) => {
    const users = await AsyncStorage.getItem('favoritedUsers');

    const favoritedUsers = JSON.parse(users || '[]') as IUser[];

    const isUserAlreadySaved = favoritedUsers.some(
      (item) => item.slug == user.slug
    );

    let result = favoritedUsers;

    if (isUserAlreadySaved) {
      result = favoritedUsers.filter((item) => item.slug != user.slug);
    }

    if (!isUserAlreadySaved) {
      result.push(user);
    }

    AsyncStorage.setItem('favoritedUsers', JSON.stringify(result));

    return result;
  }
);

export const fetchToSaveUser = createAsyncThunk(
  'app/fetchSavedUser',
  async (username: string, { getState, rejectWithValue }) => {
    try {
      const data = await FetchUserService(username);

      return data;
    } catch (error) {
      const i18n = (getState() as RootState).app.language;

      if (error instanceof Error && error.message == 'NotFoundError') {
        Alert.alert(
          i18n['User not found'],
          i18n['Check the username, and try again.']
        );
        return rejectWithValue(error.message);
      }

      return rejectWithValue(error || 'UnexpectedError');
    }
  }
);

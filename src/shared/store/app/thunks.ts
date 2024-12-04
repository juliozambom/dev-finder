import { createAsyncThunk } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { RootState } from '../types';
import { FetchUserService } from '../../services/github/user/fetch-user';

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

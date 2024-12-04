import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../types';
import { fetchUser } from './thunks';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: {} as IUser,
    isLoading: false,
  },
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.currentUser = {
          avatar: action.payload.avatar_url,
          bio: action.payload.bio,
          followers: action.payload.followers,
          following: action.payload.following,
          name: action.payload.name,
          repositories: action.payload.public_repos,
          email: action.payload.email,
        };
        state.isLoading = false;
      })
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

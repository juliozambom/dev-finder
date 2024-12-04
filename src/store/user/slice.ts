import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRepository, IUser } from '../user/types';
import { fetchUser, fetchUserRepositories } from './thunks';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: {} as IUser,
    repositories: [] as IRepository[],
    isLoading: false,
    isRepositoriesLoading: false,
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
          slug: action.payload.login,
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

    builder
      .addCase(fetchUserRepositories.fulfilled, (state, action) => {
        state.repositories = action.payload.map((repo) => ({
          name: repo.name,
          description: repo.description,
          language: repo.language,
          stars: repo.stargazers_count,
          url: repo.html_url,
          forks: repo.forks,
          visibility: repo.visibility,
        }));
        state.isRepositoriesLoading = false;
      })
      .addCase(fetchUserRepositories.pending, (state) => {
        state.isRepositoriesLoading = true;
      })
      .addCase(fetchUserRepositories.rejected, (state) => {
        state.isRepositoriesLoading = false;
      });
  },
});

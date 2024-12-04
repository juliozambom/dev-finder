import { createAsyncThunk } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { RootState } from '../types';

interface GithubAPIUserResponse {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
  name: string;
  company?: string;
  blog?: string;
  location?: string;
  email?: string;
  hireable?: boolean;
  bio: string;
  twitter_username?: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
  message?: string;
  status?: string;
}

interface GithubAPIRepositoryResponse {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: GithubAPIUserResponse;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  forks: number;
  watchers: number;
  visibility: string;
  default_branch: string;
}

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (username: string, { getState, rejectWithValue }) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = (await response.json()) as GithubAPIUserResponse;

      if (data?.status == '404') {
        const state = getState() as RootState;

        const i18n = state.app.language;

        Alert.alert(
          i18n['User not found'],
          i18n['Check the username, and try again.']
        );
        throw new Error('NotFoundError');
      }

      return data;
    } catch (error) {
      return rejectWithValue(error || 'UnexpectedError');
    }
  }
);

export const fetchUserRepositories = createAsyncThunk(
  'user/fetchUserRepositories',
  async (username: string, { rejectWithValue, getState }) => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const data = (await response.json()) as GithubAPIRepositoryResponse[];

      const state = getState() as RootState;

      const i18n = state.app.language;

      if (data.length == 0) {
        Alert.alert(
          i18n['Repositories not found'],
          i18n['This user has no repositories.']
        );
        throw new Error('NotFoundError');
      }

      return data;
    } catch (error) {
      return rejectWithValue(error || 'UnexpectedError');
    }
  }
);

import { createAsyncThunk } from '@reduxjs/toolkit';

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

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (username: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = (await response.json()) as GithubAPIUserResponse;

      if (data?.status == '404') {
        throw new Error('NotFoundError');
      }

      return data;
    } catch (error) {
      return rejectWithValue(error || 'UnexpectedError');
    }
  }
);

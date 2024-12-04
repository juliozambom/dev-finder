import { store } from '.';

export interface IUser {
  name: string;
  email?: string;
  bio: string;
  avatar: string;
  followers: number;
  following: number;
  repositories: number;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

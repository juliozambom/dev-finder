import { GithubAPIUserResponse } from '../fetch-user';

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

export async function FetchUserReposService(username: string) {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );
  const data = (await response.json()) as GithubAPIRepositoryResponse[];

  if (data.length == 0) {
    throw new Error('NotFoundError');
  }

  return data;
}

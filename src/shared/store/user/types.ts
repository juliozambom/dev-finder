export interface IRepository {
  name: string;
  description: string;
  language: string;
  url: string;
  stars: number;
  forks: number;
  visibility: string;
}

export type RepositoriesSort = 'best-match' | 'most-stars' | 'most-forks';

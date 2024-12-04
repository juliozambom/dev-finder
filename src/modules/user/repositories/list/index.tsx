import { RepositoryCard } from '@/src/shared/components/repository-card';
import { RootState } from '@/src/shared/store/types';
import { IRepository } from '@/src/shared/store/user/types';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

export default function UserRepositoriesList() {
  const { repositories, repositoriesSort } = useSelector(
    (state: RootState) => state.user
  );

  const [sortedRepositories, setSortedRepositories] = useState(repositories);

  useEffect(() => {
    let sortedRepositories = [...repositories];

    setSortedRepositories(
      sortedRepositories.sort((a: IRepository, b: IRepository) => {
        if (repositoriesSort === 'best-match') {
          return 0;
        } else if (repositoriesSort === 'most-stars') {
          return a.stars > b.stars ? -1 : 1;
        } else if (repositoriesSort === 'most-forks') {
          return a.forks > b.forks ? -1 : 1;
        }

        return 1;
      })
    );
  }, [repositoriesSort]);

  return (
    <FlatList
      data={sortedRepositories}
      contentContainerStyle={{
        paddingBottom: 80,
      }}
      className="mt-8"
      renderItem={({ item }) => <RepositoryCard {...item} />}
      keyExtractor={(item) => item.url}
      showsVerticalScrollIndicator={false}
    />
  );
}

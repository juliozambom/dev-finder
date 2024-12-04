import { UserCard } from '@/src/shared/components/user-card';
import { RootState } from '@/src/shared/store/types';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

export const FavoritedUsersList = () => {
  const { favoritedUsers } = useSelector((state: RootState) => state.app);

  return (
    <FlatList
      data={favoritedUsers}
      renderItem={({ item }) => <UserCard user={item} />}
      keyExtractor={(item) => item.slug}
      showsVerticalScrollIndicator={false}
    />
  );
};

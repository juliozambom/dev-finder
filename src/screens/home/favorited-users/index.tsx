import { FavoritedUsersHeader } from '@/src/modules/home/favorited-users/header';
import { FavoritedUsersList } from '@/src/modules/home/favorited-users/list';
import { RootState } from '@/src/shared/store/types';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

export const FavoritedUsers = () => {
  const { favoritedUsers } = useSelector((state: RootState) => state.app);

  return (
    <View className="flex-1 bg-white dark:bg-gray-800 px-8 py-6">
      <FavoritedUsersHeader />
      <FavoritedUsersList />
    </View>
  );
};

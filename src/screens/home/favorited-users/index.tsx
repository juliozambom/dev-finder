import { FavoritedUsersHeader } from '@/src/modules/home/favorited-users/header';
import { FavoritedUsersList } from '@/src/modules/home/favorited-users/list';
import { View } from 'react-native';

export const FavoritedUsers = () => {
  return (
    <View className="flex-1 bg-white dark:bg-gray-800 px-8 py-6">
      <FavoritedUsersHeader />
      <FavoritedUsersList />
    </View>
  );
};

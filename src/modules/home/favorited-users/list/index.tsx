import { UserCard } from '@/src/shared/components/user-card';
import { RootState } from '@/src/shared/store/types';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

export const FavoritedUsersList = () => {
  const { favoritedUsers } = useSelector((state: RootState) => state.app);

  const i18n = useSelector((state: RootState) => state.app.language);

  if (favoritedUsers.length == 0) {
    return (
      <Text className="dark:text-white font-lato-bold text-center mt-4">
        {i18n['We couldn’t find any favorited users']}
      </Text>
    );
  }

  return (
    <FlatList
      data={favoritedUsers}
      renderItem={({ item }) => <UserCard user={item} />}
      keyExtractor={(item) => item.slug}
      showsVerticalScrollIndicator={false}
    />
  );
};

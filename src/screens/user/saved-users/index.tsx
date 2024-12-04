import { RootState } from '@/src/shared/store/types';
import { FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

export const FavoriteUsers = () => {
  const { favoritedUsers } = useSelector((state: RootState) => state.app);

  return (
    <View className="flex-1">
      <FlatList
        data={favoritedUsers}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.slug}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

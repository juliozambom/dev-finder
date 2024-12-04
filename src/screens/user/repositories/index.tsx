import UserRepositoriesHeader from '@/src/modules/user/repositories/header';
import UserRepositoriesList from '@/src/modules/user/repositories/list';
import UserRepositoriesOrder from '@/src/modules/user/repositories/order';
import { View } from 'react-native';

export default function UserRepositories() {
  return (
    <View className="px-8 py-6 bg-white dark:bg-gray-800">
      <UserRepositoriesHeader />
      <UserRepositoriesOrder />
      <UserRepositoriesList />
    </View>
  );
}

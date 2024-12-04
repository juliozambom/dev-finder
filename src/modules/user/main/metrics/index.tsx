import { RootState } from '@/src/store/types';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function UserMetrics() {
  const { currentUser } = useSelector((state: RootState) => state.user);

  return (
    <View>
      <View className="flex-row items-center justify-center gap-8 mt-4">
        <View className="items-center gap-4">
          <Text className="font-lato-normal text-lg dark:text-white">
            Followers
          </Text>
          <Text className="text-blue-300 text-3xl">
            {currentUser.followers}
          </Text>
        </View>

        <View className="bg-gray-100 h-20 w-0.5" />

        <View className="items-center gap-4">
          <Text className="font-lato-normal text-lg dark:text-white">
            Following
          </Text>
          <Text className="text-blue-300 text-3xl">
            {currentUser.following}
          </Text>
        </View>
      </View>
    </View>
  );
}

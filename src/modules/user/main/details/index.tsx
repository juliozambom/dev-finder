import { RootState } from '@/src/shared/store/types';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function UserDetails() {
  const { currentUser } = useSelector((state: RootState) => state.user);

  return (
    <View className="p-8">
      <Text className="font-lato-bold text-3xl dark:text-white">
        {currentUser.name}
      </Text>

      <Text className="text-gray-200 font-lato-normal text-md mt-2">
        • {currentUser.email || 'Hidden email'}
      </Text>

      <Text className="text-gray-500 dark:text-white font-source-sans text-lg mt-4">
        Bio - {currentUser?.bio || ''}
      </Text>
    </View>
  );
}

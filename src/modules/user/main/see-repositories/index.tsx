import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function UserRepositories() {
  const router = useRouter();
  return (
    <View className="px-8">
      <TouchableOpacity
        className="bg-green-500 rounded-md py-6 items-center mt-6"
        onPress={() => {
          router.push('/user/repositories');
        }}
      >
        <Text className="text-white font-lato-bold text-xl leading-5">
          See repositories
        </Text>
      </TouchableOpacity>
    </View>
  );
}
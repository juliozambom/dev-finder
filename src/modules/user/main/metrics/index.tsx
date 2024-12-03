import { Text, View } from 'react-native';

export default function UserMetrics() {
  return (
    <View>
      <View className="flex-row items-center justify-center gap-8 mt-4">
        <View className="items-center gap-4">
          <Text className="font-lato-normal text-lg">Followers</Text>
          <Text className="text-blue-300 text-3xl">3</Text>
        </View>

        <View className="bg-gray-100 h-20 w-0.5" />

        <View className="items-center gap-4">
          <Text className="font-lato-normal text-lg">Following</Text>
          <Text className="text-blue-300 text-3xl">1221</Text>
        </View>
      </View>
    </View>
  );
}

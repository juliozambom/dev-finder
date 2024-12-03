import { FlatList, View, Text } from 'react-native';

function RepositoryItem() {
  return (
    <View className="flex-row mb-4 gap-4">
      <View className="w-24 h-24 bg-gray-200 rounded-md"></View>

      <View className="flex-1">
        <Text className="font-lato-bold text-lg">Repository 01</Text>
        <Text className="text-gray-200 font-lato-normal text-sm mt-1">
          • Description
        </Text>

        <View className="flex-row items-center mt-4 justify-between">
          <Text className="font-lato-normal">Java</Text>

          <View className="bg-green-100 px-2 py-1 rounded-md">
            <Text className="text-green-400">Open</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default function UserRepositoriesList() {
  return (
    <FlatList
      data={Array.from({ length: 10 })}
      className="mt-8"
      renderItem={RepositoryItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

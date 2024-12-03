import { MaterialIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

export default function UserRepositoriesOrder() {
  return (
    <View className="flex w-full flex-row justify-end items-center gap-2 mt-2">
      <Text className="font-lato-bold dark:text-white">Sort by:</Text>

      <View className="items-center flex-row">
        <Text className="font-lato-bold text-blue-300">Best match</Text>
        <MaterialIcons name="arrow-drop-down" size={24} color={'#4485FD'} />
      </View>
    </View>
  );
}

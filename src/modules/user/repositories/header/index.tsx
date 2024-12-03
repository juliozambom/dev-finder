import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, View, Text } from 'react-native';

export default function UserRepositoriesHeader() {
  return (
    <View className="flex-row items-center gap-4">
      <TouchableOpacity>
        <MaterialIcons name="chevron-left" size={32} className="rounded-full" />
      </TouchableOpacity>

      <Text className="font-lato-regular text-2xl">Repositories</Text>
    </View>
  );
}

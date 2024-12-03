import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function HomeHeader() {
  const router = useRouter();

  return (
    <View className="justify-between w-full flex-row">
      <View className="items-center flex-row gap-6">
        <TouchableOpacity onPress={() => router.push('/(drawer)')}>
          <MaterialIcons name="dehaze" size={32} />
        </TouchableOpacity>
        <Text className="font-black-han-sans text-[1.6rem]">Dev Tracker</Text>
      </View>

      <View className="rounded-full overflow-hidden bg-blue-100">
        <Image
          className="w-12 h-12"
          source={{
            uri: 'https://avatars.githubusercontent.com/u/128169023?v=4',
          }}
        />
      </View>
    </View>
  );
}

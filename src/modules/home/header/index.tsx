import { MaterialIcons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation, useRouter } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function HomeHeader() {
  const navigation = useNavigation();
  const { colorScheme } = useColorScheme();

  return (
    <View className="justify-between w-full flex-row">
      <View className="items-center flex-row gap-6">
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <MaterialIcons
            name="dehaze"
            size={32}
            color={colorScheme === 'dark' ? '#FFFFFF' : '#000000'}
          />
        </TouchableOpacity>
        <Text className="font-black-han-sans text-[1.6rem] dark:text-white">
          Dev Tracker
        </Text>
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

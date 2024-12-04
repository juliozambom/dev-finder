import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { TouchableOpacity, View } from 'react-native';

export default function SaveUserHeader() {
  const { colorScheme } = useColorScheme();
  const router = useRouter();

  const isDark = colorScheme === 'dark';

  return (
    <View className="flex-row items-center gap-4 absolute top-4 w-full">
      <TouchableOpacity
        onPress={() => {
          router.back();
        }}
      >
        <MaterialIcons
          name="chevron-left"
          size={32}
          color={isDark ? '#FFFFFF' : '#000000'}
        />
      </TouchableOpacity>
    </View>
  );
}

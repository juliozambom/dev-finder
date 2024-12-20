import { RootState } from '@/src/shared/store/types';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { TouchableOpacity, View, Text } from 'react-native';
import { useSelector } from 'react-redux';

export default function UserRepositoriesHeader() {
  const router = useRouter();
  const { colorScheme } = useColorScheme();

  const i18n = useSelector((state: RootState) => state.app.language);

  return (
    <View className="flex-row items-center gap-4">
      <TouchableOpacity onPress={() => router.back()}>
        <MaterialIcons
          name="chevron-left"
          size={32}
          className="rounded-full"
          color={colorScheme === 'dark' ? '#FFFFFF' : '#000000'}
        />
      </TouchableOpacity>

      <Text className="font-lato-regular text-2xl dark:text-white">
        {i18n['Repositories']}
      </Text>
    </View>
  );
}

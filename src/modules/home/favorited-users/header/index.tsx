import { RootState } from '@/src/shared/store/types';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

export const FavoritedUsersHeader = () => {
  const { colorScheme } = useColorScheme();
  const router = useRouter();

  const i18n = useSelector((state: RootState) => state.app.language);

  const isDark = colorScheme === 'dark';

  return (
    <View className="flex-row items-center gap-4 w-full mb-4">
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

      <Text className="font-lato-regular text-2xl dark:text-white">
        {i18n['Saved']}
      </Text>
    </View>
  );
};

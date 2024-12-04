import { useAppDispatch } from '@/src/store/hooks/useAppDispatch';
import { RootState } from '@/src/store/types';
import { fetchUser } from '@/src/store/user/thunks';
import { MaterialIcons } from '@expo/vector-icons';
import { useRef, useState } from 'react';
import {
  ActivityIndicator,
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useColorScheme } from 'nativewind';
import { useRouter } from 'expo-router';
import { cn } from '@/src/utils/cn';
import { i18n } from '@/src/utils/i18n';

export default function HomeSearchForm() {
  const router = useRouter();
  const { colorScheme } = useColorScheme();
  const dispatch = useAppDispatch();
  const { isLoading } = useSelector((state: RootState) => state.user);

  const [search, setSearch] = useState('');

  const handleSubmit = () => {
    dispatch(fetchUser(search))
      .unwrap()
      .then(() => router.push('/user'));
  };

  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setSearch(e.nativeEvent.text);
  };

  return (
    <View className="justify-between w-full mt-8">
      <View className="bg-gray-100 dark:bg-gray-700 w-full rounded-md px-6 py-6 justify-center">
        <TextInput
          placeholder={i18n['Search a dev']}
          autoCapitalize="none"
          className="font-lato-normal text-xl dark:text-white leading-5"
          onChange={handleChange}
          onSubmitEditing={handleSubmit}
        />

        <MaterialIcons
          name="search"
          size={32}
          className="absolute right-6"
          color={colorScheme === 'dark' ? '#FFFFFF' : '#000000'}
        />
      </View>

      <TouchableOpacity
        onPress={handleSubmit}
        disabled={isLoading || search == ''}
        className={cn(
          'bg-blue-300 dark:bg-gray-600 rounded-md py-6 items-center mt-6',
          {
            'bg-gray-200': isLoading || search == '',
          }
        )}
      >
        {!isLoading && (
          <Text className="text-white font-lato-bold text-xl leading-5">
            {i18n['Find']}
          </Text>
        )}

        {isLoading && <ActivityIndicator size="small" color="#FFFFFF" />}
      </TouchableOpacity>
    </View>
  );
}

import { fetchToSaveUser } from '@/src/shared/store/app/thunks';
import { useAppDispatch } from '@/src/shared/store/hooks/useAppDispatch';
import { RootState } from '@/src/shared/store/types';
import { cn } from '@/src/shared/utils/cn';
import { useState } from 'react';
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

export default function SaveUserForm() {
  const i18n = useSelector((state: RootState) => state.app.language);
  const { isLoading, savedUser } = useSelector((state: RootState) => state.app);
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');

  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setSearch(e.nativeEvent.text);
  };

  const handleSubmit = () => {
    dispatch(fetchToSaveUser(search));
  };

  if (savedUser?.name) {
    return null;
  }

  return (
    <View className="w-full">
      <View className="bg-gray-100 dark:bg-gray-700 w-full rounded-md px-6 py-6 justify-center">
        <TextInput
          placeholder={i18n['Enter your Github username']}
          autoCapitalize="none"
          className="font-lato-normal text-xl dark:text-white leading-5"
          onChange={handleChange}
          onSubmitEditing={handleSubmit}
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

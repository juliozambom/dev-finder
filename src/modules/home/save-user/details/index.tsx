import { setSavedUser } from '@/src/shared/store/app/slice';
import { useAppDispatch } from '@/src/shared/store/hooks/useAppDispatch';
import { RootState } from '@/src/shared/store/types';
import { Text, TouchableOpacity, View } from 'react-native';

import { useSelector } from 'react-redux';

export default function SaveUserDetails() {
  const { savedUser, language: i18n } = useSelector(
    (state: RootState) => state.app
  );

  const dispatch = useAppDispatch();

  const handleRemoveAccount = () => {
    dispatch(setSavedUser(null));
  };

  if (!savedUser?.name) {
    return null;
  }

  return (
    <View className="flex-col items-center justify-center gap-0">
      <Text className="font-lato-bold text-3xl dark:text-white">
        {savedUser.name}
      </Text>

      <Text className="text-gray-200 font-lato-normal text-md mt-2 text-center">
        Bio - {savedUser?.bio || ''}
      </Text>

      <TouchableOpacity
        onPress={handleRemoveAccount}
        className="mt-8"
        hitSlop={10}
      >
        <Text className="text-red-500">{i18n['Remove account']}</Text>
      </TouchableOpacity>
    </View>
  );
}

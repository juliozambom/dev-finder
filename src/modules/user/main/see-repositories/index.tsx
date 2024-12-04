import { useAppDispatch } from '@/src/store/hooks/useAppDispatch';
import { RootState } from '@/src/store/types';
import { fetchUserRepositories } from '@/src/store/user/thunks';
import { useRouter } from 'expo-router';

import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function UserRepositories() {
  const router = useRouter();
  const { currentUser, isRepositoriesLoading } = useSelector(
    (state: RootState) => state.user
  );
  const i18n = useSelector((state: RootState) => state.app.language);

  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(fetchUserRepositories(currentUser.slug))
      .unwrap()
      .then(() => router.push('/user/repositories'));
  };

  return (
    <View className="px-8">
      <TouchableOpacity
        className="bg-green-500 rounded-md py-6 items-center mt-6"
        onPress={handleSubmit}
      >
        {!isRepositoriesLoading && (
          <Text className="text-white font-lato-bold text-xl leading-5">
            {i18n['See repositories']}
          </Text>
        )}

        {isRepositoriesLoading && (
          <ActivityIndicator size="small" color="#FFFFFF" />
        )}
      </TouchableOpacity>
    </View>
  );
}

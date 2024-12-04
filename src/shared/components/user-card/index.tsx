import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { IUser, RootState } from '../../store/types';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { fetchUser } from '../../store/user/thunks';
import { useRouter } from 'expo-router';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const UserCard = ({ user }: { user: IUser }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const handleSelectUser = () => {
    setIsLoading(true);
    if (isLoading) {
      return;
    }

    dispatch(fetchUser(user.slug))
      .unwrap()
      .then(() => {
        router.push('/user');
        setIsLoading(false);
      });
  };

  return (
    <TouchableOpacity
      className="flex-col items-center gap-4 mt-6"
      onPress={handleSelectUser}
    >
      <View className="flex-row gap-4">
        <ImageBackground
          className="w-24 h-24 rounded-md items-center justify-center"
          source={{
            uri: user.avatar,
          }}
        >
          {isLoading && <ActivityIndicator size="small" color="#FFFFFF" />}
        </ImageBackground>

        <View className="flex-1">
          <Text className="font-lato-bold text-lg dark:text-white">
            {user.name}
          </Text>
          <Text className="text-gray-300 font-lato-normal text-sm mt-1">
            {user.bio}
          </Text>

          <View className="flex-row items-center gap-4 mt-2">
            <Text className="text-gray-300 font-lato-normal text-sm mt-1">
              Seguidores: {user.followers}
            </Text>
            <Text className="text-gray-300 font-lato-normal text-sm mt-1">
              Seguindo: {user.following}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

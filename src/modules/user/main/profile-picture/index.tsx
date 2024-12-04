import { fetchFavoriteUser } from '@/src/shared/store/app/thunks';
import { useAppDispatch } from '@/src/shared/store/hooks/useAppDispatch';
import { RootState } from '@/src/shared/store/types';
import { cn } from '@/src/shared/utils/cn';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function UserProfilePicture() {
  const router = useRouter();
  const { currentUser } = useSelector((state: RootState) => state.user);
  const { favoritedUsers } = useSelector((state: RootState) => state.app);
  const dispatch = useAppDispatch();

  const handleFavoriteUser = () => {
    dispatch(fetchFavoriteUser(currentUser));
  };

  const isUserFavorited = favoritedUsers.some(
    (item) => item.slug == currentUser.slug
  );

  return (
    <ImageBackground
      className="w-full aspect-square"
      source={{
        uri: currentUser.avatar,
      }}
    >
      <View className="mt-8">
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <MaterialIcons
            name="chevron-left"
            size={32}
            className="absolute left-6 bg-[#FFFFFF10] rounded-full"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleFavoriteUser}>
          <MaterialIcons
            name={isUserFavorited ? 'bookmark' : 'bookmark-border'}
            size={32}
            className={cn('absolute right-6 bg-[#FFFFFF10] rounded-full')}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

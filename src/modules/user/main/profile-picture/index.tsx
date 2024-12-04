import { RootState } from '@/src/shared/store/types';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function UserProfilePicture() {
  const router = useRouter();
  const { currentUser } = useSelector((state: RootState) => state.user);

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

        <MaterialIcons
          name="bookmark-border"
          size={32}
          className="absolute right-6 bg-[#FFFFFF10] rounded-full"
        />
      </View>
    </ImageBackground>
  );
}

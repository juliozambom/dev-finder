import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ImageBackground, TouchableOpacity, View } from 'react-native';

export default function UserProfilePicture() {
  const router = useRouter();

  return (
    <ImageBackground
      className="w-full aspect-square"
      source={{
        uri: 'https://avatars.githubusercontent.com/u/128169023?v=4',
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

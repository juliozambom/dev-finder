import { RootState } from '@/src/shared/store/types';
import { avatarPlaceholder } from '@/src/shared/utils/placeholders';
import { Image, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function SaveUserProfilePicture() {
  const { savedUser } = useSelector((state: RootState) => state.app);

  return (
    <View className="w-48 h-48 rounded-full overflow-hidden">
      <Image
        className="h-full w-full"
        source={{
          uri: savedUser?.avatar || avatarPlaceholder,
        }}
      />
    </View>
  );
}

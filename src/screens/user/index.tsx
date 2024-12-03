import UserDetails from '@/src/modules/user/details';
import UserMetrics from '@/src/modules/user/metrics';
import UserProfilePicture from '@/src/modules/user/profile-picture';
import UserRepositories from '@/src/modules/user/see-repositories';
import { Text, TouchableOpacity, View } from 'react-native';

export default function User() {
  return (
    <View className="flex-1">
      <UserProfilePicture />
      <UserDetails />
      <UserMetrics />
      <UserRepositories />
    </View>
  );
}

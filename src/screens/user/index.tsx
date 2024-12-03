import { View } from 'react-native';

import UserProfilePicture from '@/src/modules/user/main/profile-picture';
import UserDetails from '@/src/modules/user/main/details';
import UserMetrics from '@/src/modules/user/main/metrics';
import UserRepositories from '@/src/modules/user/main/see-repositories';

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

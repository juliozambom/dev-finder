import SaveUserDetails from '@/src/modules/home/save-user/details';
import SaveUserForm from '@/src/modules/home/save-user/form';
import SaveUserHeader from '@/src/modules/home/save-user/header';
import SaveUserProfilePicture from '@/src/modules/home/save-user/profile-picture';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

export default function SaveUser() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : undefined}
      className="w-full"
    >
      <View className="flex-col px-8 pt-4 bg-white dark:bg-gray-800 justify-center items-center gap-8 pb-16 h-full">
        <SaveUserHeader />
        <SaveUserProfilePicture />
        <SaveUserDetails />
        <SaveUserForm />
      </View>
    </KeyboardAvoidingView>
  );
}

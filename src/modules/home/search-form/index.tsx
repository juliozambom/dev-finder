import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeSearchForm() {
  const router = useRouter();

  return (
    <View className="justify-between w-full mt-8">
      <View className="bg-gray-100 w-full rounded-md px-6 py-6 justify-center">
        <TextInput
          placeholder="Search a dev"
          className="font-lato-normal text-xl leading-5"
        />

        <MaterialIcons name="search" size={32} className="absolute right-6" />
      </View>

      <TouchableOpacity
        onPress={() => {
          router.push('/user');
        }}
        className="bg-blue-300 rounded-md py-6 items-center mt-6"
      >
        <Text className="text-white font-lato-bold text-xl leading-5">
          Find
        </Text>
      </TouchableOpacity>
    </View>
  );
}

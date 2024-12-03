import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';

export default function User() {
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground
        className="w-full aspect-square"
        source={{
          uri: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
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

      <View className="p-8">
        <Text className="font-lato-bold text-3xl">Developer name</Text>

        <Text className="text-gray-200 font-lato-normal text-md mt-2">
          • juliozambom@curseduca.com
        </Text>

        <Text className="text-gray-500 font-source-sans text-lg mt-4">
          Bio - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          euismod, nibh non consectetur euismod, sapien tellus lacinia mi, ut
          finibus erat arcu ac magna. Suspendisse nec auctor velit. Suspendisse
          nec auctor velit. Suspendisse nec auctor velit.
        </Text>

        <View className="flex-row items-center justify-center gap-8 mt-4">
          <View className="items-center gap-4">
            <Text className="font-lato-normal text-lg">Followers</Text>
            <Text className="text-blue-300 text-3xl">3</Text>
          </View>

          <View className="bg-gray-200 h-16 w-0.5" />

          <View className="items-center gap-4">
            <Text className="font-lato-normal text-lg">Followers</Text>
            <Text className="text-blue-300 text-3xl">3</Text>
          </View>
        </View>

        <TouchableOpacity className="bg-green-500 rounded-md py-6 items-center mt-6">
          <Text className="text-white font-lato-bold text-xl leading-5">
            See repositories
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

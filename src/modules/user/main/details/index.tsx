import { Text, View } from 'react-native';

export default function UserDetails() {
  return (
    <View className="p-8">
      <Text className="font-lato-bold text-3xl dark:text-white">
        Developer name
      </Text>

      <Text className="text-gray-200 font-lato-normal text-md mt-2">
        • juliozambom@curseduca.com
      </Text>

      <Text className="text-gray-500 dark:text-white font-source-sans text-lg mt-4">
        Bio - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
        euismod, nibh non consectetur euismod, sapien tellus lacinia mi, ut
        finibus erat arcu ac magna. Suspendisse nec auctor velit. Suspendisse
        nec auctor velit. Suspendisse nec auctor velit.
      </Text>
    </View>
  );
}

import { View } from 'react-native';
import HomeHeader from '@/src/modules/home/main/header';
import HomeSearchForm from '@/src/modules/home/main/search-form';

export default function Home() {
  return (
    <View className="flex-col px-8 pt-4 bg-white dark:bg-gray-800 h-full">
      <HomeHeader />
      <HomeSearchForm />
    </View>
  );
}

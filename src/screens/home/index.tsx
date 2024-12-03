import HomeHeader from '@/src/modules/home/header';
import { View } from 'react-native';
import HomeSearchForm from '@/src/modules/home/search-form';

export default function Home() {
  return (
    <View className="flex-col px-8 pt-4 bg-white">
      <HomeHeader />
      <HomeSearchForm />
    </View>
  );
}

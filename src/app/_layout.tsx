import { useFonts } from 'expo-font';
import { Slot, SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';

import '../styles/global.css';
import { SafeAreaView } from 'react-native';

export default function RootLayout() {
  const [loaded] = useFonts({
    LatoRegular: require('../../assets/fonts/Lato-Regular.ttf'),
    LatoBold: require('../../assets/fonts/Lato-Bold.ttf'),
    BlackHanSans: require('../../assets/fonts/BlackHanSans-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1 flex h-full">
      <Slot />
    </SafeAreaView>
  );
}

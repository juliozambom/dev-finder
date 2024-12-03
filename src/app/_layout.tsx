import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import { useEffect } from 'react';

import '../styles/global.css';
import { SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useColorScheme } from 'nativewind';

export default function RootLayout() {
  const { setColorScheme } = useColorScheme();

  const [loaded] = useFonts({
    LatoRegular: require('../../assets/fonts/Lato-Regular.ttf'),
    LatoBold: require('../../assets/fonts/Lato-Bold.ttf'),
    BlackHanSans: require('../../assets/fonts/BlackHanSans-Regular.ttf'),
    SourceSans: require(`../../assets/fonts/SourceSans3-VariableFont_wght.ttf`),
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
    <GestureHandlerRootView className="flex-1">
      <SafeAreaView className="flex-1 flex bg-white dark:bg-gray-800">
        <Slot />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

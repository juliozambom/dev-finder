import { useFonts } from 'expo-font';
import { Slot, SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native';

import { Provider } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import '../shared/styles/global.css';
import { store } from '../shared/store';
import { useColorScheme } from 'nativewind';

export default function RootLayout() {
  const [loaded] = useFonts({
    LatoRegular: require('../../assets/fonts/Lato-Regular.ttf'),
    LatoBold: require('../../assets/fonts/Lato-Bold.ttf'),
    BlackHanSans: require('../../assets/fonts/BlackHanSans-Regular.ttf'),
    SourceSans: require(`../../assets/fonts/SourceSans3-VariableFont_wght.ttf`),
  });

  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <GestureHandlerRootView className="flex-1">
        <SafeAreaView className="flex-1 flex bg-white dark:bg-gray-800">
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: {
                backgroundColor: isDark ? '#1E1E1E' : '#FFFFFF',
              },
            }}
          >
            <Stack.Screen name="(drawer)" />
          </Stack>
        </SafeAreaView>
      </GestureHandlerRootView>
    </Provider>
  );
}

import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  const [loaded] = useFonts({
    LatoRegular: require('../assets/fonts/Lato-Regular.ttf'),
    LatoBold: require('../assets/fonts/Lato-Bold.ttf'),
    BlackHanSans: require('../assets/fonts/BlackHanSans-Regular.ttf'),
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
    <Stack 
      screenOptions={{
        headerShown: false
      }}
    />
  );
}

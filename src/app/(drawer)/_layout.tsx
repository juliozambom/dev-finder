import HomeDrawer from '@/src/modules/home/drawer';
import { setLanguage } from '@/src/store/app/slice';
import { useAppDispatch } from '@/src/store/hooks/useAppDispatch';
import { I18NLanguage } from '@/src/utils/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Drawer } from 'expo-router/drawer';
import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';

export default function DrawerLayout() {
  const dispatch = useAppDispatch();
  const { setColorScheme } = useColorScheme();

  useEffect(() => {
    (async () => {
      const language = (await AsyncStorage.getItem('language')) as I18NLanguage;
      const colorScheme = (await AsyncStorage.getItem('ColorScheme')) as
        | 'light'
        | 'dark';

      if (colorScheme) {
        setColorScheme(colorScheme);
      }

      if (language) {
        dispatch(setLanguage(language));
      }
    })();
  }, []);

  return (
    <Drawer
      defaultStatus="closed"
      screenOptions={{
        headerShown: false,

        drawerStyle: {
          width: '60%',
        },
      }}
      drawerContent={(props) => <HomeDrawer {...props} />}
    >
      <Drawer.Screen name="index" />
    </Drawer>
  );
}

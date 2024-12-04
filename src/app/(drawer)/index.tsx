import Home from '@/src/screens/home';
import { setLanguage, setSavedUser } from '@/src/shared/store/app/slice';
import { useAppDispatch } from '@/src/shared/store/hooks/useAppDispatch';
import { I18NLanguage } from '@/src/shared/utils/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';

export default function Index() {
  const dispatch = useAppDispatch();
  const { setColorScheme } = useColorScheme();

  useEffect(() => {
    (async () => {
      const language = (await AsyncStorage.getItem('language')) as I18NLanguage;
      const colorScheme = (await AsyncStorage.getItem('ColorScheme')) as
        | 'light'
        | 'dark';
      const savedUser = (await AsyncStorage.getItem('savedUser')) as string;

      if (savedUser) {
        dispatch(setSavedUser(JSON.parse(savedUser)));
      }

      if (colorScheme) {
        setColorScheme(colorScheme);
      }

      if (language) {
        dispatch(setLanguage(language));
      }
    })();
  }, []);

  return <Home />;
}

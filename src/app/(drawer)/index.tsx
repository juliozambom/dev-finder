import Home from '@/src/screens/home';
import {
  setFavoritedUsers,
  setLanguage,
  setSavedUser,
} from '@/src/shared/store/app/slice';
import { useAppDispatch } from '@/src/shared/store/hooks/useAppDispatch';
import { I18NLanguage } from '@/src/shared/utils/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../shared/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import { Slot } from 'expo-router';

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
      const favoritedUsers = (await AsyncStorage.getItem(
        'favoritedUsers'
      )) as string;

      if (favoritedUsers) {
        console.log(favoritedUsers);
        dispatch(setFavoritedUsers(JSON.parse(favoritedUsers)));
      }

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

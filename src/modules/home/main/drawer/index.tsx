import { setLanguage } from '@/src/shared/store/app/slice';
import { useAppDispatch } from '@/src/shared/store/hooks/useAppDispatch';
import { RootState } from '@/src/shared/store/types';
import { I18NLanguage, Languages } from '@/src/shared/utils/i18n';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { useRef } from 'react';
import { FlatList, Switch, Text, TouchableOpacity, View } from 'react-native';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
import { useSelector } from 'react-redux';

function DrawerItem({
  label,
  icon,
  onPress,
  isDark,
}: {
  label: string;
  icon: string;
  onPress?: () => void;
  isDark: boolean;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row gap-2 items-center mb-5"
    >
      <MaterialIcons
        name={icon as any}
        size={28}
        color={isDark ? '#FFFFFF' : '#000000'}
      />

      <Text className="font-lato-bold text-xl dark:text-white">{label}</Text>
    </TouchableOpacity>
  );
}
export default function HomeDrawer(drawerProps: DrawerContentComponentProps) {
  const router = useRouter();

  const i18n = useSelector((state: RootState) => state.app.language);

  const drawerItems: {
    label: string;
    icon: string;
    onPress?: () => void;
  }[] = [
    {
      label: i18n['Saved'],
      icon: 'bookmark-border',
      onPress: () => router.push('/favorited-users'),
    },
    {
      label: i18n['Language'],
      icon: 'language',
      onPress: () => actionSheetRef.current?.show(),
    },
  ];

  const { colorScheme, toggleColorScheme } = useColorScheme();
  const dispatch = useAppDispatch();

  const actionSheetRef = useRef<ActionSheetRef>(null);

  const isDark = colorScheme === 'dark';

  const handleChangeLanguage = (language: I18NLanguage) => {
    dispatch(setLanguage(language));
    actionSheetRef.current?.hide();
  };

  const handleToggleColorScheme = () => {
    AsyncStorage.setItem(
      'ColorScheme',
      colorScheme == 'dark' ? 'light' : 'dark'
    );
    toggleColorScheme();
  };

  return (
    <>
      <View className="p-8 h-full dark:bg-gray-800">
        <Text className="font-black-han-sans text-[1.6rem] dark:text-white">
          Dev Finder
        </Text>

        <FlatList
          className="mt-12"
          data={drawerItems}
          renderItem={({ item }) => (
            <DrawerItem isDark={colorScheme == 'dark'} {...item} />
          )}
          keyExtractor={(item) => item.label}
        />

        <View className="absolute bottom-6 left-6 flex-row items-center gap-4">
          <Switch
            value={colorScheme === 'dark'}
            onChange={handleToggleColorScheme}
          />

          <Text className="font-lato-bold text-xl dark:text-white">
            {i18n['Dark mode']}
          </Text>
        </View>
      </View>

      <ActionSheet
        ref={actionSheetRef}
        containerStyle={{
          backgroundColor: isDark ? '#1E1E1E' : '#FFFFFF',
          paddingHorizontal: 32,
          paddingBottom: 64,
        }}
      >
        <Text className="font-lato-bold text-xl dark:text-white mt-8 mb-6">
          {i18n['Language']}
        </Text>

        <FlatList
          data={Languages}
          renderItem={({ item }) => (
            <TouchableOpacity
              hitSlop={10}
              className="flex-row items-center gap-2 mt-4 mb-4"
              onPress={() => handleChangeLanguage(item.code as I18NLanguage)}
            >
              <Text className="font-lato-bold dark:text-white">
                {item.flag}
              </Text>
              <Text className="font-lato-bold dark:text-white">
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.code}
        />
      </ActionSheet>
    </>
  );
}

import { i18n } from '@/src/utils/i18n';
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Href, useRouter } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { FlatList, Switch, Text, TouchableOpacity, View } from 'react-native';

function DrawerItem({
  label,
  icon,
  href,
  isDark,
}: {
  label: string;
  icon: string;
  href: Href;
  isDark: boolean;
}) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => {
        router.push(href);
      }}
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
  const drawerItems: {
    label: string;
    icon: string;
    href: Href;
  }[] = [
    {
      label: i18n['Saved'],
      icon: 'bookmark-border',
      href: '/user',
    },
    {
      label: i18n['Language'],
      icon: 'language',
      href: '/user',
    },
  ];

  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
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
        <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />

        <Text className="font-lato-bold text-xl dark:text-white">
          {i18n['Dark mode']}
        </Text>
      </View>
    </View>
  );
}

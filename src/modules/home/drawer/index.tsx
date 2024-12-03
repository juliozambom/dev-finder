import { MaterialIcons } from '@expo/vector-icons';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { FlatList, Switch, Text, TouchableOpacity, View } from 'react-native';

function DrawerItem({ label, icon, href }: any) {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        router.push(href);
      }}
      className="flex-row gap-2 items-center mb-5"
    >
      <MaterialIcons name={icon} size={28} />

      <Text className="font-lato-bold text-xl">{label}</Text>
    </TouchableOpacity>
  );
}
export default function HomeDrawer(drawerProps: DrawerContentComponentProps) {
  const drawerItems = [
    {
      label: 'Saved',
      icon: 'bookmark-border',
      href: '/user/saved',
    },
    {
      label: 'Language',
      icon: 'language',
      href: '/user/language',
    },
  ];

  return (
    <View className="p-8 h-full">
      <Text className="font-black-han-sans text-[1.6rem]">Dev Tracker</Text>

      <FlatList
        className="mt-12"
        data={drawerItems}
        renderItem={({ item }) => <DrawerItem {...item} />}
        keyExtractor={(item, index) => index.toString()}
      />

      <View className="absolute bottom-6 left-6 flex-row items-center gap-4">
        <Switch />

        <Text className="font-lato-bold text-xl">Dark mode</Text>
      </View>
    </View>
  );
}

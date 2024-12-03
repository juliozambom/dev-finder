import HomeDrawer from '@/src/modules/home/drawer';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer
      defaultStatus="open"
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

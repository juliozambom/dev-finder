import HomeDrawer from '@/src/modules/home/main/drawer';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
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
      <Drawer.Screen name="user/index" />
    </Drawer>
  );
}

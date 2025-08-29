import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        drawerType: 'front',      // drawer slides over screen
        swipeEnabled: true,       // allow swipe to open
        gestureEnabled: true,     // allow gestures
        headerShown: true,        // show top header
      }}
    >
      <Drawer.Screen name="index" options={{ title: "Main" }} />
      <Drawer.Screen name="about" options={{ title: "About" }} />
    </Drawer>
  );
}

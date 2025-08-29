import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#f8f9f8",
        tabBarStyle: {
          paddingBottom: 2,
          paddingTop: 10,
          backgroundColor: "#9f0703",
          borderRadius: 40,
          height: 80,
        },
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Football App",
          headerStyle: { backgroundColor: "#9f0703" },
          headerTitleStyle: { color: "#f8f9f8" },
          headerRight: () => (
            <Ionicons
              name="trophy"
              size={24}
              color="#f8f9f8"
              style={{ marginRight: 10 }}
            />
          ),
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="home-outline"
              size={focused ? 28 : 24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="person-outline"
              size={focused ? 28 : 24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="settings-outline"
              size={focused ? 28 : 24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

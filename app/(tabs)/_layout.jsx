import { Tabs } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#f8f9f8",
        headerTitleStyle: {
          color: "#f8f9f8",
          fontSize: 22,
          fontWeight: "bold",
        },
        tabBarStyle: {
          paddingBottom: 2,
          paddingTop: 10,
          backgroundColor: "#9f0703",
          borderTopLeftRadius: 45,
          borderTopRightRadius: 45,
          height: 80,
        },
        tabBarLabelStyle: { fontSize: 10 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Football Tournament App",
          title: "Home",
          headerStyle: {
            backgroundColor: "#9f0703",
          },
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
        name="TournamentDetails"
        options={{
          headerTitle: "Tournament Details",
          title: "Tournament",
          headerStyle: {
            backgroundColor: "#9f0703",
          },
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="soccer-field"
              size={focused ? 30 : 28}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: "#9f0703",
          },
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

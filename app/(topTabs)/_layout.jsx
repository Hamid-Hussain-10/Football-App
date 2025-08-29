import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";

const { Navigator } = createMaterialTopTabNavigator();
const TopTabs = withLayoutContext(Navigator);

export default function TopTabsLayout() {
  return (
    <TopTabs>
      <TopTabs.Screen name="feed" options={{ title: "Feed" }} />
      <TopTabs.Screen name="notifications" options={{ title: "Notifications" }} />
    </TopTabs>
  );
}

import { Text, TouchableOpacity, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
export default function Index() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/frontpage.jpg")}
      style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 70,
        width: "105%",
        height: "110%",
        marginBottom: 12,
      }}
      resizeMode="stretch"
    >
      <StatusBar style="light" backgroundColor="#9f0703" />

      <TouchableOpacity
        onPress={() => router.push("./(tabs)")}
        style={{
          backgroundColor: "#9f0703",
          padding: 12,
          marginBottom: 10,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "#f8f9f8" }}>Go Next</Text>
      </TouchableOpacity>

      {/* 
      If you want more navigation options, just uncomment these:
      
      <TouchableOpacity
        onPress={() => router.push("./(drawer)")}
        style={{
          backgroundColor: "#9f0703",
          padding: 10,
          marginBottom: 10,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#f8f9f8" }}>Go to Drawer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("./(topTabs)")}
        style={{ backgroundColor: "#0c5702", padding: 10, borderRadius: 8 }}
      >
        <Text style={{ color: "#f8f9f8" }}>Go to Top Tabs</Text>
      </TouchableOpacity> 
      */}
    </ImageBackground>
  );
}

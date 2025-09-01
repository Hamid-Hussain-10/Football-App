import { Text, TouchableOpacity, ImageBackground, View, StatusBar as RNStatusBar } from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/frontpage.png")}
      style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 70,
        width: "105%",
        height: "110%",
      }}
      resizeMode="stretch"
    >
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: RNStatusBar.currentHeight,
          backgroundColor: "#9f0703",
        }}
      />
      <StatusBar style="light" />

      <TouchableOpacity
        onPress={() => router.push("./(tabs)")}
        style={{
          backgroundColor: "#9f0703",
          padding: 10,
          marginBottom: 10,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "#f8f9f8" }}>Go Next</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

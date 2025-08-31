import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const [tournamentName, setTournamentName] = useState("");
  const [venue, setVenue] = useState("");
  const [teams, setTeams] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const router = useRouter();

  const clearAll = () => {
    setTournamentName("");
    setVenue("");
    setTeams("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/Home.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.mainContainer}>
          <Text style={styles.contentText}>Add Tournament Details</Text>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Tournament Name"
              placeholderTextColor="#999"
              style={styles.input}
              value={tournamentName}
              onChangeText={setTournamentName}
            />
            <TextInput
              placeholder="Tournament Venue"
              placeholderTextColor="#999"
              style={styles.input}
              value={venue}
              onChangeText={setVenue}
            />
            <TextInput
              placeholder="Number of Teams"
              placeholderTextColor="#999"
              style={styles.input}
              value={teams}
              onChangeText={setTeams}
              keyboardType="numeric"
            />
            <TextInput
              placeholder="Start Date"
              placeholderTextColor="#999"
              style={styles.input}
              value={startDate}
              onChangeText={setStartDate}
            />
            <TextInput
              placeholder="End Date"
              placeholderTextColor="#999"
              style={styles.input}
              value={endDate}
              onChangeText={setEndDate}
            />
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#0c5702" }]}
              onPress={() =>
                router.push({
                  pathname: "./(tabs)/TournamentDetails",
                  params: { tournamentName, venue, teams, startDate, endDate },
                })
              }
            >
              <Text style={styles.buttonText}>Save Tournament</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#b31616" }]}
              onPress={clearAll}
            >
              <Text style={styles.buttonText}>Clear All</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: { flexGrow: 1 },
  container: { flex: 1, backgroundColor: "#f8f9f8" },
  imageContainer: { width: "100%" },
  image: { width: "100%", height: 250 },
  mainContainer: {
    minHeight: 400,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#f8f9f8",
    padding: 10,
  },
  contentText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#b31616",
    marginBottom: 5,
  },
  inputContainer: { width: "100%", marginVertical: 5, padding: 10 },
  input: {
    width: "100%",
    borderWidth: 1,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderStyle: "dotted",
    borderColor: "#0c5702",
    borderRadius: 10,
    padding: 10,
    fontSize: 13,
    color: "#000",
    backgroundColor: "#f8f9f8",
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "90%",
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#f8f9f8",
    fontSize: 13,
    fontWeight: "bold",
    fontStyle: "italic",
  },
});

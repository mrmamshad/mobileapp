import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Slot } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Slot />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

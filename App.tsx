import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { Header } from "./components/Header";
import { UserGrid } from "./components/UserGrid";
import { BottomNavigation } from "./components/BottomNavigation";
import { mockUsers } from "./data";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='dark' />
      <Header />
      <UserGrid users={mockUsers} />
      <BottomNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD",
  },
});

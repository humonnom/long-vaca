import * as React from "react";
import { View } from "react-native";
import { Header } from "../../components/Header";
import { UserGrid } from "./UserGrid";
import { mockUsers } from "../../data";

export const HomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
      <Header />
      <UserGrid users={mockUsers} />
    </View>
  );
};

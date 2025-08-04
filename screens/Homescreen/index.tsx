import * as React from "react";
import { View } from "react-native";
import { Header } from "../../components/Header";
import { UserGrid } from "./UserGrid";
import { mockUsers } from "../../data";

export const HomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
      <Header title='둘러보기' subtitle='새로운 인연이 기다리고 있어요' />
      <UserGrid users={mockUsers} />
    </View>
  );
};

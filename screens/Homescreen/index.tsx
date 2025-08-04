import * as React from "react";
import { View } from "react-native";
import { Header } from "../../components/Header";
import { UserGrid } from "./UserGrid";
import { mockUsers } from "../../data";

export const HomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
      <Header title='둘러보기' subtitle='서울, 대한민국' />
      <UserGrid users={mockUsers} />
    </View>
  );
};

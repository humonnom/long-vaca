import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import { HomeScreen } from "./screens/HomeScreen";
import { MatchScreen } from "./screens/MatchScreen";
import { MessageScreen } from "./screens/MessageScreen";
import { ProfileScreen } from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
      <NavigationContainer>
        <StatusBar style='dark' />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              let iconName = "explore";

              if (route.name === "둘러보기") {
                iconName = "explore";
              } else if (route.name === "매치") {
                iconName = "favorite";
              } else if (route.name === "메시지") {
                iconName = "chat";
              } else if (route.name === "프로필") {
                iconName = "person";
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#EE9CA7",
            tabBarInactiveTintColor: "#666",
            tabBarStyle: {
              backgroundColor: "white",
              borderTopColor: "#F0F0F0",
              borderTopWidth: 1,
              paddingVertical: 5,
              height: 60,
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: "600",
            },
          })}
        >
          <Tab.Screen name='둘러보기' component={HomeScreen} />
          <Tab.Screen name='매치' component={MatchScreen} />
          <Tab.Screen name='메시지' component={MessageScreen} />
          <Tab.Screen name='프로필' component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

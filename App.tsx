import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import { HomeScreen } from "./screens/HomeScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { EmptyScreenComponent } from "./components/EmptyScreenComponent";
import { useState, useEffect } from 'react'
import { supabase } from './lib/supabase'
import Auth from './components/Auth'
import Account from './components/Account'
import { View } from 'react-native'
import { Session } from '@supabase/supabase-js'

const Tab = createBottomTabNavigator();

export default function App() {
    const [session, setSession] = useState<Session | null>(null)
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])

    return (
        <View>
            {session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />}
        </View>
    )

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
          <Tab.Screen
            name='매치'
            component={(props: any) => (
              <EmptyScreenComponent
                {...props}
                onNavigateToProfile={() => {
                  props.navigation.navigate("프로필");
                }}
                featureName='매치'
                icon='favorite'
              />
            )}
          />
          <Tab.Screen
            name='메시지'
            component={(props: any) => (
              <EmptyScreenComponent
                {...props}
                onNavigateToProfile={() => {
                  props.navigation.navigate("프로필");
                }}
                featureName='메시지'
                icon='chat'
              />
            )}
          />
          <Tab.Screen name='프로필' component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

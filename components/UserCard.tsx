import * as React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { User } from "../types";

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <TouchableOpacity
      style={styles.userCard}
      activeOpacity={0.9}
    >
      <Image
        source={user.image}
        style={styles.userImage}
        resizeMode='cover'
      />
      <View style={styles.cardOverlay}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>
            {user.name}, {user.age}
          </Text>
          <Text style={styles.userCity}>{user.city}</Text>
        </View>
        {user.isOnline && <View style={styles.onlineIndicator} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  userCard: {
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 10,
    position: "relative",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    width: "48%",
    height: 250,
  },
  userImage: {
    width: "100%",
    height: "100%",
  },
  cardOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 2,
  },
  userCity: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 12,
  },
  onlineIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#4CAF50",
    borderWidth: 2,
    borderColor: "white",
  },
});

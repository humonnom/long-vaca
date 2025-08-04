"use client";

import * as React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import type { User } from "../types";

interface UserCardProps {
  user: User;
  onLikeToggle?: (userId: number, isLiked: boolean) => void;
}

export const UserCard = ({ user, onLikeToggle }: UserCardProps) => {
  const [isLiked, setIsLiked] = React.useState(user.isLiked || false);

  const handleLikePress = () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    onLikeToggle?.(user.id, newLikedState);
  };

  const handleCardPress = () => {
    // 카드 전체 터치 시 프로필 상세로 이동하는 로직
    console.log(`프로필 보기: ${user.name}`);
  };

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        style={styles.userCard}
        activeOpacity={0.9}
        onPress={handleCardPress}
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

      {/* 하트 버튼 */}
      <TouchableOpacity
        style={styles.heartButton}
        onPress={handleLikePress}
        activeOpacity={0.8}
      >
        <View
          style={[
            styles.heartContainer,
            {
              backgroundColor: isLiked
                ? "rgba(238, 156, 167, 0.95)"
                : "rgba(0, 0, 0, 0.3)",
              borderWidth: isLiked ? 0 : 1,
              borderColor: "rgba(255, 255, 255, 0.3)",
            },
          ]}
        >
          <Icon
            name={isLiked ? "favorite" : "favorite-border"}
            size={20}
            color={isLiked ? "white" : "rgba(255, 255, 255, 0.9)"}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    position: "relative",
    marginBottom: 10,
    width: "48%",
  },
  userCard: {
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
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
  heartButton: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 10,
  },
  heartContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
});

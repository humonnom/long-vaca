import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const BottomNavigation = () => {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.navItem}>
        <View style={[styles.navIcon, styles.activeNavIcon]} />
        <Text style={[styles.navText, styles.activeNavText]}>둘러보기</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <View style={styles.navIcon} />
        <Text style={styles.navText}>매치</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <View style={styles.navIcon} />
        <Text style={styles.navText}>메시지</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <View style={styles.navIcon} />
        <Text style={styles.navText}>프로필</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
  },
  navIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#E0E0E0",
    marginBottom: 4,
  },
  activeNavIcon: {
    backgroundColor: "#FFCBD2",
  },
  navText: {
    fontSize: 12,
    color: "#666",
  },
  activeNavText: {
    color: "#EE9CA7",
    fontWeight: "600",
  },
});
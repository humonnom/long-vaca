"use client";

import * as React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { InterestSection } from "../../components/InterestSection";

export const ProfileScreen = () => {
  const [hasRequestedLaunch, setHasRequestedLaunch] = React.useState(false);

  const handleLaunchRequest = () => {
    setHasRequestedLaunch(true);
    Alert.alert(
      "정식 런치 희망 완료",
      "정식 런치 알림을 받으실 수 있도록 등록되었습니다!"
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>마이 프로필</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
          <Image
            source={require("../../assets/profiles/profile1.jpg")}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editButton}>
            <Icon name='edit' size={16} color='#666' />
          </TouchableOpacity>
        </View>
        <Text style={styles.profileName}>박준석, 34</Text>
        <Text style={styles.profileLocation}>서울, 강남구</Text>
      </View>

      <View style={styles.interestSection}>
        <InterestSection
          lunchMessage='앱이 정식 런치되면 해당 인연들과 연결될 수 있습니다.'
          renderButton={() => (
            <TouchableOpacity
              style={[
                styles.launchButton,
                hasRequestedLaunch && styles.launchButtonDisabled,
              ]}
              onPress={handleLaunchRequest}
              disabled={hasRequestedLaunch}
            >
              <Icon
                name={hasRequestedLaunch ? "check-circle" : "notifications"}
                size={20}
                color={hasRequestedLaunch ? "#4CAF50" : "white"}
              />
              <Text
                style={[
                  styles.launchButtonText,
                  hasRequestedLaunch && styles.launchButtonTextDisabled,
                ]}
              >
                {hasRequestedLaunch
                  ? "정식 런치 희망 완료"
                  : "정식 런치 희망하기"}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD",
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#FDFDFD",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  profileSection: {
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  profileImageContainer: {
    position: "relative",
    marginBottom: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#FFCBD2",
  },
  editButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  profileLocation: {
    fontSize: 16,
    color: "#666",
  },
  interestSection: {
    margin: 20,
  },
  launchMessage: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  launchButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EE9CA7",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    gap: 8,
  },
  launchButtonDisabled: {
    backgroundColor: "#F0F0F0",
  },
  launchButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  launchButtonTextDisabled: {
    color: "#4CAF50",
  },
});

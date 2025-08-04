import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { InterestSection } from "./InterestSection";
import { Header } from "./Header";

interface EmptyScreenComponentProps {
  onNavigateToProfile: () => void;
  featureName: string;
  icon?: string;
}
export const EmptyScreenComponent = ({
  onNavigateToProfile,
  featureName,
  icon = "favorite",
}: EmptyScreenComponentProps) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header title={featureName} subtitle='' />

      {/* Development Status */}
      <View style={styles.developmentBanner}>
        <Icon name='construction' size={24} color='#FF9800' />
        <Text style={styles.developmentText}>개발 중인 기능입니다</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Icon name='favorite' size={80} color='#FFCBD2' />
        </View>

        <Text style={styles.mainTitle}>{featureName} 기능 준비 중</Text>
        <Text style={styles.subtitle}>
          곧 멋진 {featureName} 기능으로 만나뵙겠습니다!
        </Text>

        <InterestSection
          lunchMessage='나에게 관심을 보인 사람들을 자세히 확인해보세요.'
          onPressButton={onNavigateToProfile}
          buttonText='마이페이지에서 확인하기'
          simple
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
  developmentBanner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF3E0",
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 12,
    gap: 8,
  },
  developmentText: {
    fontSize: 14,
    color: "#FF9800",
    fontWeight: "600",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  iconContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 40,
  },
});

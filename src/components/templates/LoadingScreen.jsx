import { ActivityIndicator, StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
    justifyContent: "center",
    alignItems: "center",
  },
});

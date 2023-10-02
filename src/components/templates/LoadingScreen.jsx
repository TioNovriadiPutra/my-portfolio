import { ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";

const LoadingScreen = () => {
  return (
    <MainContainer extraStyle={styles.container}>
      <ActivityIndicator size="large" />
    </MainContainer>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

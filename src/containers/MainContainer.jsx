import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { colors } from "@themes/colors";

const MainContainer = ({ children, extraStyle }) => {
  return (
    <ScrollView style={[styles.container, extraStyle]}>{children}</ScrollView>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
  },
});

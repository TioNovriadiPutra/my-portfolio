import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";

const MainContainer = ({ children, extraStyle }) => {
  return <View style={[styles.container, extraStyle]}>{children}</View>;
};

export default MainContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
  },
});

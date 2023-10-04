import { StyleSheet, View } from "react-native";
import React from "react";
import NavbarButton from "@components/atoms/NavbarButton";

const Navbar = () => {
  return (
    <View style={styles.container}>
      <NavbarButton label="HOME" />
      <NavbarButton label="ABOUT" />
      <NavbarButton label="WORK" />
      <NavbarButton label="CONTACT" />
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 65,
    paddingVertical: 33,
    gap: 54,
  },
});

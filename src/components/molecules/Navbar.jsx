import { StyleSheet, View } from "react-native";
import React from "react";
import NavbarButton from "@components/atoms/NavbarButton";

const Navbar = () => {
  const navbarButtons = ["HOME", "ABOUT", "WORK", "CONTACT"];
  return (
    <View style={styles.container}>
      {navbarButtons.map((item, index) => (
        <NavbarButton label={item} index={index} key={index.toString()} />
      ))}
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 65,
    marginTop: 33,
    gap: 54,
    position: "absolute",
    alignSelf: "flex-end",
  },
});

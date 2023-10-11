import { StyleSheet, View } from "react-native";
import React from "react";
import NavbarButton from "@components/atoms/NavbarButton";
import { navbarButtons } from "@utils/constant/navbar";
import useResponsive from "@hooks/useResponsive";
import HamburgerButton from "@components/atoms/HamburgerButton";
import { colors } from "@themes/colors";
import NavbarMenuDropdown from "@components/atoms/NavbarMenuDropdown";

const Navbar = () => {
  const { isTabletOrMobileDevice } = useResponsive();

  return (
    <View
      style={[
        styles.container,
        isTabletOrMobileDevice ? styles.containerMobile : styles.containerWeb,
      ]}
    >
      {isTabletOrMobileDevice ? (
        <View style={styles.navbarContainerMobile}>
          <HamburgerButton />
          <NavbarMenuDropdown />
        </View>
      ) : (
        navbarButtons.map((item, index) => (
          <NavbarButton label={item} index={index} key={index.toString()} />
        ))
      )}
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    marginTop: 33,
    position: "absolute",
  },
  containerWeb: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 65,
    gap: 54,
    alignSelf: "flex-end",
  },
  containerMobile: {
    left: 0,
    right: 0,
  },
  navbarContainerMobile: {
    paddingHorizontal: 15,
    gap: 10,
  },
});

import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { colors } from "@themes/colors";
import { useRecoilState } from "recoil";
import { navbarIsExpandState } from "@store/pageState";

const HamburgerButton = () => {
  const [isExpand, setIsExpand] = useRecoilState(navbarIsExpandState);

  const handlePress = () => {
    setIsExpand(!isExpand);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <FontAwesome name="bars" color={colors.White} size={24} />
    </TouchableOpacity>
  );
};

export default HamburgerButton;

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-end",
    padding: 15,
    backgroundColor: colors.BlurGrey,
    borderRadius: 10,
  },
});

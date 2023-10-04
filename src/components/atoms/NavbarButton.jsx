import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const NavbarButton = ({ label }) => {
  const widthAnim = useSharedValue(0);

  const blockAnimatedStyle = useAnimatedStyle(() => {
    const width = interpolate(widthAnim.value, [0, 1], [0, 100]);

    return {
      width: `${width}%`,
    };
  });

  const onHoverIn = () => {
    widthAnim.value = withTiming(1, { duration: 300 });
  };

  const onHoverOut = () => {
    widthAnim.value = withTiming(0, { duration: 300 });
  };

  return (
    <Pressable onHoverIn={onHoverIn} onHoverOut={onHoverOut}>
      <Text style={styles.label}>{label}</Text>

      <Animated.View style={[styles.block, blockAnimatedStyle]} />
    </Pressable>
  );
};

export default NavbarButton;

const styles = StyleSheet.create({
  label: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: 16,
    color: colors.White,
  },
  block: {
    height: 3,
    backgroundColor: colors.Yellow,
  },
});

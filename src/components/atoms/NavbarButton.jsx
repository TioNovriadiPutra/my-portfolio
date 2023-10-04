import { StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { AnimatedPressable } from "@utils/constant/animatedComponent";

const NavbarButton = ({ label, index }) => {
  const widthAnim = useSharedValue(0);
  const opacityAnim = useSharedValue(0);
  const translateYAnim = useSharedValue(-50);

  const blockAnimatedStyle = useAnimatedStyle(() => {
    const width = interpolate(widthAnim.value, [0, 1], [0, 100]);

    return {
      width: `${width}%`,
    };
  });

  const btnAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityAnim.value,
      transform: [{ translateY: translateYAnim.value }],
    };
  });

  const onHoverIn = () => {
    widthAnim.value = withTiming(1, { duration: 300 });
  };

  const onHoverOut = () => {
    widthAnim.value = withTiming(0, { duration: 300 });
  };

  const handleIn = () => {
    setTimeout(() => {
      opacityAnim.value = withTiming(1, { duration: 1000 });
      translateYAnim.value = withTiming(0, { duration: 1000 });
    }, 300 * index);
  };

  useEffect(() => {
    handleIn();
  }, []);

  return (
    <AnimatedPressable
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
      style={btnAnimatedStyle}
    >
      <Text style={styles.label}>{label}</Text>

      <Animated.View style={[styles.block, blockAnimatedStyle]} />
    </AnimatedPressable>
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

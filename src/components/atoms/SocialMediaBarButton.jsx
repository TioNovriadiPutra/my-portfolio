import { Image, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@themes/colors";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { AnimatedPressable } from "@utils/constant/animatedComponent";

const SocialMediaBarButton = ({ icon, index }) => {
  const scaleAnim = useSharedValue(0);
  const translateXAnim = useSharedValue(-50);
  const opacityAnim = useSharedValue(0);

  const btnAnimatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(scaleAnim.value, [0, 1], [1, 1.2]);

    return {
      opacity: opacityAnim.value,
      transform: [{ scale }, { translateX: translateXAnim.value }],
    };
  });

  const onHoverIn = () => {
    scaleAnim.value = withTiming(1, { duration: 300 });
  };

  const onHoverOut = () => {
    scaleAnim.value = withTiming(0, { duration: 300 });
  };

  const handleIn = () => {
    opacityAnim.value = withTiming(1, { duration: 1000 });
    translateXAnim.value = withTiming(0, { duration: 1000 });
  };

  useEffect(() => {
    setTimeout(() => {
      handleIn();
    }, 300 * index);
  }, []);

  return (
    <AnimatedPressable
      style={[styles.container, btnAnimatedStyle]}
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
    >
      <Image source={icon} style={styles.icon} resizeMode="contain" />
    </AnimatedPressable>
  );
};

export default SocialMediaBarButton;

const styles = StyleSheet.create({
  container: {
    width: 25,
    height: 25,
    backgroundColor: colors.BlurWhite,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: { width: 15, height: 15 },
});

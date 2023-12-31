import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const VerticalText = ({ word }) => {
  const letters = word.split("").reverse();

  const translateYAnim = useSharedValue(50);
  const opacityAnim = useSharedValue(0);

  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateYAnim.value }],
      opacity: opacityAnim.value,
    };
  });

  const handleIn = () => {
    setTimeout(() => {
      opacityAnim.value = withTiming(1, { duration: 1000 });
      translateYAnim.value = withTiming(0, { duration: 1000 });
    }, 1400);
  };

  useEffect(() => {
    handleIn();
  }, []);

  return (
    <Animated.View style={[styles.container, textAnimatedStyle]}>
      {letters.map((letter, index) => (
        <Text style={styles.letter}>{letter.toUpperCase()}</Text>
      ))}
    </Animated.View>
  );
};

export default VerticalText;

const styles = StyleSheet.create({
  container: {
    width: "auto",
    justifyContent: "center",
  },
  letter: {
    color: colors.White,
    fontFamily: fonts.PoppinsRegular,
    transform: [{ rotate: "-90deg" }],
  },
});

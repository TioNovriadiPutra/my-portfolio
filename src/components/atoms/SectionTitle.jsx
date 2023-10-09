import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useRecoilValue } from "recoil";
import { pageState } from "@store/pageState";

const SectionTitle = ({ title, inPoint, timeout = 0 }) => {
  const scrollPage = useRecoilValue(pageState);

  const titleAnim = useSharedValue(0);
  const blockAnim = useSharedValue(0);

  const titleAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: titleAnim.value,
    };
  });

  const blockAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: blockAnim.value,
    };
  });

  const handleIn = () => {
    setTimeout(() => {
      titleAnim.value = withTiming(1, { duration: 1000 });
      setTimeout(() => {
        blockAnim.value = withTiming(70, { duration: 1000 });
      }, 500);
    }, timeout);
  };

  useEffect(() => {
    if (scrollPage >= inPoint) {
      handleIn();
    }
  }, [scrollPage]);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.title, titleAnimatedStyle]}>
        {title.toUpperCase()}
      </Animated.Text>

      <Animated.View style={[styles.block, blockAnimatedStyle]} />
    </View>
  );
};

export default SectionTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  title: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: 24,
    color: colors.White,
  },
  block: {
    height: 3,
    backgroundColor: colors.White,
  },
});

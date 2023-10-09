import { Image, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@themes/colors";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useRecoilValue } from "recoil";
import { pageState } from "@store/pageState";
import { HEIGHT } from "@utils/constant/screenSize";

const AboutPicture = () => {
  const scrollPage = useRecoilValue(pageState);

  const imageAnim = useSharedValue(0);
  const backdropAnim = useSharedValue(0);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(imageAnim.value, [0, 1], [-50, 0]);
    const opacity = interpolate(imageAnim.value, [0, 1], [0, 1]);

    return {
      transform: [{ translateY }],
      opacity,
    };
  });

  const backdropAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${backdropAnim.value}deg` }],
    };
  });

  const handleIn = () => {
    imageAnim.value = withTiming(1, { duration: 1000 });
    setTimeout(() => {
      backdropAnim.value = withTiming(-7.17, { duration: 1000 });
    }, 500);
  };

  useEffect(() => {
    if (scrollPage >= HEIGHT - 100) {
      handleIn();
    }
  }, [scrollPage]);

  return (
    <Animated.View style={[styles.container, imageAnimatedStyle]}>
      <Animated.View style={[styles.backdrop, backdropAnimatedStyle]} />
      <Image
        source={require("@assets/images/profile.jpg")}
        style={styles.image}
      />
    </Animated.View>
  );
};

export default AboutPicture;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
  },
  image: {
    width: 330,
    height: 420,
    aspectRatio: 330 / 420,
    resizeMode: "cover",
    borderRadius: 20,
    position: "absolute",
  },
  backdrop: {
    width: 330,
    height: 420,
    aspectRatio: 330 / 420,
    backgroundColor: colors.BlurGrey,
    borderRadius: 20,
  },
});

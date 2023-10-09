import { Image, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@themes/colors";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const ProfilePicture = () => {
  const translateYAnim = useSharedValue(-50);
  const opacityAnim = useSharedValue(0);

  const pictureAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateYAnim.value }],
      opacity: opacityAnim.value,
    };
  });

  const handleIn = () => {
    translateYAnim.value = withTiming(0, { duration: 1000 });
    opacityAnim.value = withTiming(1, { duration: 1000 });
  };

  useEffect(() => {
    handleIn();
  }, []);

  return (
    <Animated.View style={[styles.container, pictureAnimatedStyle]}>
      <Image
        source={require("@assets/images/profile.jpg")}
        style={styles.image}
      />
    </Animated.View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 250,
    borderRadius: "50%",
    backgroundColor: colors.BlurWhite,
    marginBottom: 24,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: "50%",
    resizeMode: "contain",
  },
});

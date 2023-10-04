import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import SocialMediaBarButton from "@components/atoms/SocialMediaBarButton";
import { colors } from "@themes/colors";
import VerticalText from "@components/atoms/VerticalText";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const SocialMediaBar = () => {
  const socialMediaIcons = [
    require("@assets/images/linkedin.png"),
    require("@assets/images/github.png"),
    require("@assets/images/instagram.png"),
    require("@assets/images/whatsapp.png"),
  ];

  const heightAnim = useSharedValue(0);
  const translateYAnim = useSharedValue(70);

  const lineAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: heightAnim.value,
      transform: [{ translateY: translateYAnim.value }],
    };
  });

  const handleIn = () => {
    setTimeout(() => {
      heightAnim.value = withTiming(32, { duration: 1000 });
      translateYAnim.value = withTiming(0, { duration: 1000 });
    }, 700);
  };

  useEffect(() => {
    handleIn();
  }, []);

  return (
    <View style={styles.container}>
      {socialMediaIcons.map((icon, index) => (
        <SocialMediaBarButton
          icon={icon}
          index={index}
          key={index.toString()}
        />
      ))}
      <Animated.View style={[styles.line, lineAnimatedStyle]} />
      <VerticalText word="Scroll Down" />
    </View>
  );
};

export default SocialMediaBar;

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 60,
  },
  line: {
    width: 1,
    backgroundColor: colors.White,
  },
});

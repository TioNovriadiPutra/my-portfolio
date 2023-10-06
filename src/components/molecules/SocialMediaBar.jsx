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
  const socialMedia = [
    {
      icon: require("@assets/images/linkedin.png"),
      url: "https://www.linkedin.com/in/tio-novriadi-putra-7293071b0/",
      name: "tio-novriadi-putra",
      width: 180,
    },
    {
      icon: require("@assets/images/github.png"),
      url: "https://www.github.com/TioNovriadiPutra",
      name: "TioNovriadiPutra",
      width: 168,
    },
    {
      icon: require("@assets/images/instagram.png"),
      url: "https://www.instagram.com/tio_novriadi",
      name: "tio_novriadi",
      width: 143,
    },
    {
      icon: require("@assets/images/whatsapp.png"),
      url: "https://wa.me/+6282177000433",
      name: "+62082177000433",
      width: 176,
    },
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
      {socialMedia.map((item, index) => (
        <SocialMediaBarButton
          icon={item.icon}
          index={index}
          key={index.toString()}
          url={item.url}
          name={item.name}
          childWidth={item.width}
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

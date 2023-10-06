import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "@themes/colors";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { AnimatedPressable } from "@utils/constant/animatedComponent";
import { fonts } from "@themes/fonts";

const SocialMediaBarButton = ({ icon, index, url, name, childWidth }) => {
  const [descWidth, setDescWidth] = useState(0);

  const scaleAnim = useSharedValue(0);
  const translateXAnim = useSharedValue(-50);
  const opacityAnim = useSharedValue(0);
  const descAnim = useSharedValue(0);

  const btnAnimatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(scaleAnim.value, [0, 1], [1, 1.2]);

    return {
      opacity: opacityAnim.value,
      transform: [{ scale }, { translateX: translateXAnim.value }],
    };
  });

  const descAnimatedStyle = useAnimatedStyle(() => {
    const width = interpolate(descAnim.value, [0, 1], [0, childWidth]);
    const opacity = interpolate(descAnim.value, [0, 1], [0, 1]);

    return {
      width,
      opacity,
    };
  });

  const onDescChildLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setDescWidth(width);
  };

  const onHoverIn = () => {
    scaleAnim.value = withTiming(1, { duration: 300 });
    descAnim.value = withTiming(1, { duration: 300 });
  };

  const onHoverOut = () => {
    scaleAnim.value = withTiming(0, { duration: 300 });
    descAnim.value = withTiming(0, { duration: 300 });
  };

  const handleIn = () => {
    opacityAnim.value = withTiming(1, { duration: 1000 });
    translateXAnim.value = withTiming(0, { duration: 1000 });
  };

  const handlePress = () => {
    window.open(url);
  };

  useEffect(() => {
    setTimeout(() => {
      handleIn();
    }, 300 * index);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <AnimatedPressable
        style={[styles.container, btnAnimatedStyle]}
        onHoverIn={onHoverIn}
        onHoverOut={onHoverOut}
        onPress={handlePress}
      >
        <Image source={icon} style={styles.icon} resizeMode="contain" />
      </AnimatedPressable>

      <Animated.View
        style={[styles.urlDesc, descAnimatedStyle]}
        onLayout={onDescChildLayout}
      >
        <Text style={styles.url} numberOfLines={1}>
          {name}
        </Text>
      </Animated.View>
    </View>
  );
};

export default SocialMediaBarButton;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
  },
  container: {
    width: 25,
    height: 25,
    backgroundColor: colors.BlurWhite,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  icon: { width: 15, height: 15 },
  urlDesc: {
    backgroundColor: colors.BlurWhite,
    position: "absolute",
    paddingLeft: 50,
    paddingRight: 20,
    height: 25,
    justifyContent: "center",
    borderRadius: 20,
  },
  url: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: 12,
    color: colors.White,
  },
});

import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import SectionTitle from "@components/atoms/SectionTitle";
import { fonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import SkillGrid from "@components/atoms/SkillGrid";
import { HEIGHT } from "@utils/constant/screenSize";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useRecoilValue } from "recoil";
import { pageState } from "@store/pageState";

const AboutDesc = () => {
  const scrollPage = useRecoilValue(pageState);

  const descAnim = useSharedValue(0);
  const skillAnim = useSharedValue(0);

  const descAnimatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(descAnim.value, [0, 1], [-50, 0]);
    const opacity = interpolate(descAnim.value, [0, 1], [0, 1]);

    return {
      transform: [{ translateX }],
      opacity,
    };
  });

  const skillAnimatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(skillAnim.value, [0, 1], [-50, 0]);
    const opacity = interpolate(skillAnim.value, [0, 1], [0, 1]);

    return {
      transform: [{ translateX }],
      opacity,
    };
  });

  const handleIn = () => {
    setTimeout(() => {
      descAnim.value = withTiming(1, { duration: 1000 });
    }, 500);

    setTimeout(() => {
      skillAnim.value = withTiming(1, { duration: 1000 });
    }, 1500);
  };

  useEffect(() => {
    if (scrollPage >= HEIGHT - 100) {
      handleIn();
    }
  }, [scrollPage]);

  return (
    <View style={styles.container}>
      <SectionTitle title="About" inPoint={HEIGHT - 100} />
      <Animated.View style={descAnimatedStyle}>
        <Text style={styles.name}>Tio Novriadi Putra</Text>
        <Text style={styles.desc}>
          Hi, i'm a Mobile Developer and Back-End Developer who have 5 years of
          experience in developing full stack mobile application. I very
          enthusiast in developing mobile application and also love creating
          innovation with code.
        </Text>
      </Animated.View>

      <SectionTitle title="Skill" inPoint={HEIGHT - 100} timeout={1000} />
      <Animated.View style={skillAnimatedStyle}>
        <SkillGrid />
      </Animated.View>
    </View>
  );
};

export default AboutDesc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  name: {
    fontFamily: fonts.MarkerRegular,
    fontSize: 36,
    color: colors.Yellow,
  },
  desc: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: 16,
    color: colors.White,
    marginVertical: 25,
  },
});

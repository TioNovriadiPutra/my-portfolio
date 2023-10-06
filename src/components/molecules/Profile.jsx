import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@themes/colors";
import ProfilePicture from "@components/atoms/ProfilePicture";
import { fonts } from "@themes/fonts";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const Profile = () => {
  const opacityAnim = useSharedValue(0);
  const leftAnim = useSharedValue(-50);
  const rightAnim = useSharedValue(50);

  const leftAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityAnim.value,
      transform: [{ translateX: leftAnim.value }],
    };
  });

  const rightAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityAnim.value,
      transform: [{ translateX: rightAnim.value }],
    };
  });

  const handleIn = () => {
    setTimeout(() => {
      opacityAnim.value = withTiming(1, { duration: 1000 });
      leftAnim.value = withTiming(0, { duration: 1000 });
      rightAnim.value = withTiming(0, { duration: 1000 });
    }, 700);
  };

  useEffect(() => {
    handleIn();
  }, []);

  return (
    <View style={styles.container}>
      <ProfilePicture />
      <Animated.Text style={[styles.name, leftAnimatedStyle]}>
        Tio Novriadi Putra
      </Animated.Text>
      <Animated.Text style={[styles.status, rightAnimatedStyle]}>
        Mobile Developer | Back-End Developer
      </Animated.Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  name: {
    fontFamily: fonts.MarkerRegular,
    fontSize: 36,
    color: colors.Yellow,
    marginBottom: 4,
  },
  status: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: 24,
    color: colors.White,
  },
});

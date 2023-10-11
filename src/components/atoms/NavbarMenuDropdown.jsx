import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useRef } from "react";
import { colors } from "@themes/colors";
import { navbarButtons } from "@utils/constant/navbar";
import { fonts } from "@themes/fonts";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useRecoilValue } from "recoil";
import { navbarIsExpandState } from "@store/pageState";

const NavbarMenuDropdown = () => {
  const heightAnim = useSharedValue(0);

  const isExpand = useRecoilValue(navbarIsExpandState);

  const viewRef = useRef(null);

  const navbarAnimatedStyle = useAnimatedStyle(() => {
    return {
      maxHeight: heightAnim.value,
    };
  });

  const handleExpand = () => {
    if (isExpand) {
      heightAnim.value = withTiming(300, { duration: 1000 });

      setTimeout(() => {
        viewRef.current.measure((x, y, width, height) => {
          heightAnim.value = withTiming(height, { duration: 200 });
        });
      }, 1000);
    } else {
      heightAnim.value = withTiming(0, { duration: 1000 });
    }
  };

  useEffect(() => {
    handleExpand();
  }, [isExpand]);

  return (
    <Animated.View
      style={[styles.container, navbarAnimatedStyle]}
      ref={viewRef}
    >
      {navbarButtons.map((item, index) => (
        <TouchableOpacity key={index.toString()} style={styles.menuBtn}>
          <Text style={styles.item}>{item.toUpperCase()}</Text>
        </TouchableOpacity>
      ))}
    </Animated.View>
  );
};

export default NavbarMenuDropdown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.LightGrey,
    borderRadius: 10,
    overflow: "hidden",
  },
  menuBtn: {
    alignItems: "center",
    paddingVertical: 10,
  },
  item: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: 16,
    color: colors.White,
  },
});

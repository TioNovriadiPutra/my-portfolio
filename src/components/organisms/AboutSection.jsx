import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { HEIGHT } from "@utils/constant/screenSize";
import AboutPicture from "@components/molecules/AboutPicture";
import AboutDesc from "@components/molecules/AboutDesc";

const AboutSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <AboutPicture />
        <AboutDesc />
      </View>
    </View>
  );
};

export default AboutSection;

const styles = StyleSheet.create({
  container: {
    height: HEIGHT,
    backgroundColor: colors.Grey,
    justifyContent: "center",
  },
  contentContainer: {
    flexDirection: "row",
    gap: 75.09,
    paddingHorizontal: 100,
  },
});

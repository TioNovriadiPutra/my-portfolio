import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { HEIGHT } from "@utils/constant/screenSize";

const AboutSection = () => {
  return (
    <View style={styles.container}>
      <Text>AboutSection</Text>
    </View>
  );
};

export default AboutSection;

const styles = StyleSheet.create({
  container: {
    height: HEIGHT,
    backgroundColor: colors.Grey,
  },
});

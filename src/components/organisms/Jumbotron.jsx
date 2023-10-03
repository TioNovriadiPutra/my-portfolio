import { StyleSheet, View } from "react-native";
import React from "react";
import { HEIGHT, WIDTH } from "@utils/constant/screenSize";
import { colors } from "@themes/colors";
import Navbar from "@components/molecules/Navbar";

const Jumbotron = () => {
  return (
    <View style={styles.container}>
      <Navbar />
    </View>
  );
};

export default Jumbotron;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: colors.Black,
  },
});

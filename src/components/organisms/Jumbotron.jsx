import { StyleSheet, View } from "react-native";
import React from "react";
import { HEIGHT, WIDTH } from "@utils/constant/screenSize";
import { colors } from "@themes/colors";
import Navbar from "@components/molecules/Navbar";
import SocialMediaBar from "@components/molecules/SocialMediaBar";
import Profile from "@components/molecules/Profile";

const Jumbotron = () => {
  return (
    <View style={styles.container}>
      <Profile />
      <Navbar />
      <SocialMediaBar />
    </View>
  );
};

export default Jumbotron;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    minHeight: HEIGHT,
    backgroundColor: colors.Black,
  },
});

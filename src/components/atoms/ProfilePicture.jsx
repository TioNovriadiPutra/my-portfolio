import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";

const ProfilePicture = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("@assets/images/profile.jpg")}
        style={styles.image}
      />
    </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 250,
    borderRadius: "50%",
    backgroundColor: colors.BlurWhite,
    marginBottom: 24,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: "50%",
    resizeMode: "contain",
  },
});

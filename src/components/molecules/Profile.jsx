import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { HEIGHT } from "@utils/constant/screenSize";
import ProfilePicture from "@components/atoms/ProfilePicture";
import { fonts } from "@themes/fonts";

const Profile = () => {
  return (
    <View style={styles.container}>
      <ProfilePicture />
      <Text style={styles.name}>Tio Novriadi Putra</Text>
      <Text style={styles.status}>Mobile Developer | Back-End Developer</Text>
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

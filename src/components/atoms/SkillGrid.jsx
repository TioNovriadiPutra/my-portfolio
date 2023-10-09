import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatGrid } from "react-native-super-grid";
import { colors } from "@themes/colors";
import { fonts } from "@themes/fonts";

const SkillGrid = () => {
  const skillData = [
    "Javascript",
    "HTML",
    "React Native",
    "Java",
    "CSS",
    "ReactJS",
    "Kotlin",
    "NodeJS",
    "AdonisJS",
  ];

  return (
    <View>
      <FlatGrid
        data={skillData}
        itemDimension={130}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.circle} />
            <Text style={styles.item}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SkillGrid;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: colors.Yellow,
  },
  item: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: 16,
    color: colors.White,
  },
});

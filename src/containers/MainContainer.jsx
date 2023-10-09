import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { useSetRecoilState } from "recoil";
import { pageState } from "@store/pageState";

const MainContainer = ({ children, extraStyle }) => {
  const setScrollPage = useSetRecoilState(pageState);

  const handleScroll = (event) => {
    setScrollPage(event.nativeEvent.contentOffset.y);
  };

  return (
    <ScrollView style={[styles.container, extraStyle]} onScroll={handleScroll}>
      {children}
    </ScrollView>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
  },
});

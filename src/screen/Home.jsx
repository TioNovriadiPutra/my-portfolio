import { View, Text } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import Jumbotron from "@components/organisms/Jumbotron";

const Home = () => {
  return (
    <MainContainer>
      <Jumbotron />
    </MainContainer>
  );
};

export default Home;

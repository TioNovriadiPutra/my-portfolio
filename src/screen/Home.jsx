import { View, Text } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import Jumbotron from "@components/organisms/Jumbotron";
import AboutSection from "@components/organisms/AboutSection";

const Home = () => {
  return (
    <MainContainer>
      <Jumbotron />
      <AboutSection />
    </MainContainer>
  );
};

export default Home;

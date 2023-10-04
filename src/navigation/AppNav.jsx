import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import WebStack from "@routes/WebStack";

const AppNav = () => {
  return (
    <NavigationContainer>
      <WebStack />
    </NavigationContainer>
  );
};

export default AppNav;

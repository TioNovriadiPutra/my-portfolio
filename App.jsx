import React from "react";
import AppNav from "@navigation/AppNav";
import { useFonts } from "expo-font";
import LoadingScreen from "@components/templates/LoadingScreen";

const App = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("@assets/fonts/Poppins-Regular.ttf"),
    "PermanentMarker-Regular": require("@assets/fonts/PermanentMarker-Regular.ttf"),
  });

  if (!fontsLoaded) return <LoadingScreen />;

  return <AppNav />;
};

export default App;

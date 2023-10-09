import React from "react";
import AppNav from "@navigation/AppNav";
import { useFonts } from "expo-font";
import LoadingScreen from "@components/templates/LoadingScreen";
import { RecoilRoot } from "recoil";

const App = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("@assets/fonts/Poppins-Regular.ttf"),
    "PermanentMarker-Regular": require("@assets/fonts/PermanentMarker-Regular.ttf"),
  });

  if (!fontsLoaded) return <LoadingScreen />;

  return (
    <RecoilRoot>
      <AppNav />
    </RecoilRoot>
  );
};

export default App;

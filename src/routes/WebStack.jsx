import React from "react";
import { Stack } from "@utils/constant/stackNavigation";
import Home from "@screen/Home";

const WebStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default WebStack;

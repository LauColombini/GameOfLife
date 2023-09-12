import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeNavigation } from "../interfaces/Navigation";
import Home from "../pages/Home";
import TabTop from "../components/TabTop";

const Stack = createNativeStackNavigator<HomeNavigation>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={() => ({
          header: (props) => <TabTop />,
        })}
        component={Home}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { InfoNavigation } from "../interfaces/Navigation";

import TabTop from "../components/TabTop";
import Info from "../pages/Info";

const Stack = createNativeStackNavigator<InfoNavigation>();

const InfoStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Info"
        options={() => ({
          header: (props) => <TabTop />,
        })}
        component={Info}
      />
    </Stack.Navigator>
  );
};

export default InfoStackNavigator;

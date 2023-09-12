import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import { TabBarNavigation } from "../interfaces/Navigation";

import HomeStackNavigator from "./HomeStackNavigator";
import TabBarButton from "../components/TabBarButton";
import InfoStackNavigator from "./InfoStackNavigator";

const Tab = createBottomTabNavigator<TabBarNavigation>();

const DEFAULT_TAB_BAR_STYLE = {
  backgroundColor: "#0f172a",
  height: 60,
  borderTopColor: "transparent",
  paddingBottom: 0,
};

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          return <TabBarButton active={focused} type={route.name} />;
        },
        tabBarStyle: DEFAULT_TAB_BAR_STYLE,
        tabBarShowLabel: false,
        headerShown: false,
      })}
      sceneContainerStyle={{ backgroundColor: "#0f172a" }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={() => ({
          tabBarStyle: (() => {
            return DEFAULT_TAB_BAR_STYLE;
          })(),
        })}
        listeners={({ navigation }) => ({
          tabPress: ({}) => {
            console.log(navigation.isFocused());
            if (navigation.isFocused()) {
              navigation.navigate("HomeTab", {
                screen: "Home",
              });
            }
          },
        })}
      />
      <Tab.Screen
        name="InfoTab"
        component={InfoStackNavigator}
        options={() => ({
          tabBarStyle: (() => {
            return DEFAULT_TAB_BAR_STYLE;
          })(),
        })}
        listeners={({ navigation }) => ({
          tabPress: ({}) => {
            if (navigation.isFocused()) {
              navigation.navigate("InfoTab", {
                screen: "Info",
              });
            }
          },
        })}
      />
    </Tab.Navigator>
  );
};

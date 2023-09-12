import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import { TabBarNavigation } from "../interfaces/Navigation";

import HomeStackNavigator from "./HomeStackNavigator";
import TabBarButton from "../components/TabBarButton";

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
        options={({ route }) => ({
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "";

            return DEFAULT_TAB_BAR_STYLE;
          })(route),
        })}
      />
      <Tab.Screen
        name="InfoTab"
        component={HomeStackNavigator}
        options={({ route }) => ({
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "";

            return DEFAULT_TAB_BAR_STYLE;
          })(route),
        })}
      />
    </Tab.Navigator>
  );
};

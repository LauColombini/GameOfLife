import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { TabBarNavigation } from "../interfaces/Navigation";
import HomeStackNavigator from "./HomeStackNavigator";

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
        // tabBarIcon: ({focused, color, size}) => {
        //   return <TabBarButton active={focused} type={route.name} />;
        // },
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
      {/*
      <Tab.Screen
        name="ExploreTab"
        component={ExploreStackNavigator}
        listeners={({navigation}) => ({
          tabPress: ({}) => {
            if (navigation.isFocused()) {
              navigation.navigate('ExploreTab', {
                screen: 'Explore',
                params: {
                  focusInput: Math.random(),
                },
              });
            }
            ReactNativeHapticFeedback.trigger('impactMedium', {
              enableVibrateFallback: true,
              ignoreAndroidSystemSettings: false,
            });
          },
        })}
      />
      <Tab.Screen
        name="NotificationsTab"
        component={NotificationsStackNavigator}
        listeners={() => ({
          tabPress: () => {
            ReactNativeHapticFeedback.trigger('impactMedium', {
              enableVibrateFallback: true,
              ignoreAndroidSystemSettings: false,
            });
          },
        })}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStackNavigator}
        listeners={() => ({
          tabPress: () => {
            ReactNativeHapticFeedback.trigger('impactMedium', {
              enableVibrateFallback: true,
              ignoreAndroidSystemSettings: false,
            });
          },
        })}
      /> */}
    </Tab.Navigator>
  );
};

import { NavigatorScreenParams } from "@react-navigation/native";

export type HomeNavigation = {
  Home: undefined;
};
export type InfoNavigation = {};
export type TabBarNavigation = {
  HomeTab: NavigatorScreenParams<HomeNavigation>;
  InfoTab: NavigatorScreenParams<InfoNavigation>;
};

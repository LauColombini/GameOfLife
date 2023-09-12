import React from "react";
import { StatusBar, View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  backgroundColor: string;
}
export const CustomStatusBarTop: React.FC<Props> = ({ backgroundColor }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        height: insets.top,
        backgroundColor,
      }}
    >
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle="light-content"
      />
    </View>
  );
};

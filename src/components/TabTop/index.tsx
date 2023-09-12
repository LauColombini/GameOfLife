import { View, Text } from "react-native";
import React from "react";
import LogoIcon from "../../assets/svg/LogoIcon";
import styles from "./styles";

const TabTop = () => {
  return (
    <View style={[styles.tabContainer]}>
      <LogoIcon />
    </View>
  );
};

export default TabTop;

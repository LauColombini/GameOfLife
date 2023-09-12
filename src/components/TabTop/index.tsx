import { View, Platform, Image } from "react-native";
import React from "react";
import LogoIcon from "../../assets/svg/LogoIcon";
import LogoIconPng from "../../assets/img/Logo.png";
import styles from "./styles";

const TabTop = () => {
  return (
    <View style={[styles.tabContainer]}>
      {Platform.OS === "ios" && <LogoIcon />}
      {Platform.OS === "android" && (
        <Image
          source={LogoIconPng}
          style={{
            width: 120,
            height: 20,
          }}
        />
      )}
    </View>
  );
};

export default TabTop;

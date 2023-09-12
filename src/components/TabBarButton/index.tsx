import React, { useMemo } from "react";
import { Image } from "react-native";

// @ts-ignore
import { default as BoringAvatar } from "react-native-boring-avatars";

import { ContainerItem, Name } from "./styles";
import HomeIcon from "../../assets/svg/HomeIcon";
import InfoIcon from "../../assets/svg/InfoIcon";

interface Props {
  type: "HomeTab" | "InfoTab";
  active: boolean;
}

const TabBarButton: React.FC<Props> = ({ active, type }) => {
  const icon = useMemo(() => {
    switch (type) {
      case "HomeTab":
        return active ? (
          <HomeIcon width="15" height="15" bgColor="white" />
        ) : (
          <HomeIcon width="15" height="15" bgColor="white" />
        );
      case "InfoTab":
        return active ? (
          <InfoIcon width="15" height="15" bgColor="white" />
        ) : (
          <InfoIcon width="15" height="15" bgColor="white" />
        );
    }
  }, [active, type]);

  return <ContainerItem>{icon}</ContainerItem>;
};

export default TabBarButton;

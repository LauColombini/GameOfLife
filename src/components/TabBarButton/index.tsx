import React, { useMemo } from "react";

import { ContainerItem } from "./styles";
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
        return <HomeIcon active={active} />;
      case "InfoTab":
        return <InfoIcon active={active} />;
    }
  }, [active, type]);

  return <ContainerItem>{icon}</ContainerItem>;
};

export default TabBarButton;

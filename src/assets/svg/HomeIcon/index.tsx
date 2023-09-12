import * as React from "react";
import HomeF from "./HomeF.svg";
import Home from "./Home.svg";
interface Props {
  color?: string;
  size?: number;
  active?: boolean;
}

const HomeIcon: React.FC<Props> = ({ size = 25, active }) => {
  if (!active) return <HomeF width={size} height={size} />;
  return <Home width={size} height={size} />;
};

export default HomeIcon;

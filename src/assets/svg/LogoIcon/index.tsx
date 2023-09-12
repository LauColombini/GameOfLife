import * as React from "react";
import Logo from "./Logo.svg";

interface Props {
  color?: string;
  size?: number;
}

const LogoIcon: React.FC<Props> = ({ size = 120 }) => {
  return <Logo width={size} height={size} />;
};

export default LogoIcon;

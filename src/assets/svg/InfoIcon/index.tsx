import * as React from "react";
import Info from "./Info.svg";

interface Props {
  color?: string;
  size?: number;
}

const InfoIcon: React.FC<Props> = ({ size = 25 }) => {
  return <Info width={size} height={size} />;
};

export default InfoIcon;

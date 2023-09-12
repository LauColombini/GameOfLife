import * as React from "react";
import Info from "./Info.svg";
import InfoF from "./InfoF.svg";

interface Props {
  color?: string;
  size?: number;
  active?: boolean;
}

const InfoIcon: React.FC<Props> = ({ size = 25, active }) => {
  if (!active) return <InfoF width={size} height={size} />;
  return <Info width={size} height={size} />;
};

export default InfoIcon;

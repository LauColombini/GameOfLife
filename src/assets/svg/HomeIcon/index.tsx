import React from "react";

import Svg, { Path } from "react-native-svg";

export interface IconPropTypes {
  width?: string;
  height?: string;
  bgColor?: string;
}

export const HomeIcon = ({ width, height, bgColor }: IconPropTypes) => {
  return (
    <Svg width="18" height="19" viewBox="0 0 18 19" fill="none">
      <Path
        d="M9.97 0.590216C9.69901 0.360474 9.35527 0.234375 9 0.234375C8.64473 0.234375 8.30099 0.360474 8.03 0.590216L0.53 6.95322C0.363925 7.09401 0.230492 7.26927 0.138968 7.46683C0.0474437 7.66438 2.30915e-05 7.87949 0 8.09722V17.5002C0 17.898 0.158035 18.2796 0.43934 18.5609C0.720644 18.8422 1.10218 19.0002 1.5 19.0002H6.25C6.44891 19.0002 6.63968 18.9212 6.78033 18.7805C6.92098 18.6399 7 18.4491 7 18.2502V12.0002H11V18.2502C11 18.6642 11.336 19.0002 11.75 19.0002H16.5C16.8978 19.0002 17.2794 18.8422 17.5607 18.5609C17.842 18.2796 18 17.898 18 17.5002V8.09722C18 7.87949 17.9526 7.66438 17.861 7.46683C17.7695 7.26927 17.6361 7.09401 17.47 6.95322L9.97 0.590216Z"
        fill="white"
      />
    </Svg>
  );
};

HomeIcon.defaultProps = {
  width: "20",
  height: "20",
  bgColor: "white",
};

export default HomeIcon;

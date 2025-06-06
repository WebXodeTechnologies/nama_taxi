import React from "react";
import { G, Path, Svg } from "react-native-svg";

export default function PlaceHolder() {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 64.000000 64.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <G
        transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
        fill="#000"
        stroke="none"
      >
        <Path
          d="M405 633 c-33 -9 -72 -41 -84 -71 -10 -25 -9 -35 8 -68 26 -52 34
    -111 22 -164 -9 -41 -7 -49 25 -110 19 -37 47 -82 63 -101 l28 -34 45 70 c110
    171 143 360 75 433 -40 44 -113 62 -182 45z m126 -72 c62 -62 20 -171 -65
    -171 -25 0 -45 9 -68 29 -27 24 -33 36 -33 71 0 35 6 47 33 71 44 40 93 40
    133 0z"
        />
        <Path
          d="M90 532 c-73 -39 -93 -147 -50 -279 24 -76 78 -183 114 -227 l24 -29
    32 44 c68 91 130 259 130 349 0 52 -34 116 -72 140 -43 26 -130 27 -178 2z
    m145 -48 c37 -24 52 -82 31 -123 -49 -94 -186 -66 -186 39 0 81 88 128 155 84z"
        />
      </G>
    </Svg>
  );
}

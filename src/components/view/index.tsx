import { View as RNView, ViewStyle } from "react-native";
import React from "react";
import { convertMargin, convertPadding, SpaceMP } from "../../themes";

interface Props {
  style?: ViewStyle | ViewStyle[];
  m?: SpaceMP;
  p?: SpaceMP;
  flex?: number;
  bg?: string;
}

export const View: React.FC<Props> = ({
  style = {},
  m = 0,
  p = 0,
  bg = "",
  flex,
  children,
}) => {
  const st = Array.isArray(style) ? style : [style];
  return (
    <RNView
      style={[
        // styles.container,
        convertMargin(m),
        convertPadding(p),
        { backgroundColor: bg, flex },
        ...st,
      ]}
    >
      <>{children}</>
    </RNView>
  );
};



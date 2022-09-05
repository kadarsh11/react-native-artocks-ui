import { View as RNView, ViewProps, ViewStyle } from "react-native";
import React from "react";
import { convertMargin, convertPadding, SpaceMP } from "../../themes";

interface Props extends ViewProps {
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
  children=<></>,
  ...viewProps
}) => {

  const st = Array.isArray(style) ? style : [style];

  return (
    <RNView
      style={[
        convertMargin(m),
        convertPadding(p),
        bg ? { backgroundColor: bg  } : {},
        flex ?{flex}:{},
        ...st,
      ]}
      {...viewProps}
    >
      {children}
    </RNView>
  );
};



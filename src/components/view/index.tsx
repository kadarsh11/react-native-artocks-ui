import { Dimensions, View as RNView, ViewProps } from "react-native";
import React from "react";
import { convertMargin, convertPadding, SpaceMP } from "../../themes";
const { width, height } = Dimensions.get('screen');

interface Props extends ViewProps {
  m?: SpaceMP;
  p?: SpaceMP;
  flex?: number;
  bg?: string;
  heightRatio?: number;
  widthRatio?: number;
  center?: boolean
}

export const View: React.FC<Props> = ({
  style = {},
  m = 0,
  p = 0,
  bg = "",
  flex,
  heightRatio,
  widthRatio,
  center = false,
  children = <></>,
  ...viewProps
}) => {

  const st = Array.isArray(style) ? style : [style];

  return (
    <RNView
      style={[
        convertMargin(m),
        convertPadding(p),
        flex ? { flex } : {},
        bg ? { backgroundColor: bg } : {},
        heightRatio ? { height: height * heightRatio } : {},
        widthRatio ? { width: width * widthRatio } : {},
        center ? {
          justifyContent: 'center',
          alignItems: 'center'
        } : {},
        ...st,
      ]}
      {...viewProps}
    >
      {children}
    </RNView>
  );
};



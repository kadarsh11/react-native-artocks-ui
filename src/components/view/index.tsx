import { StyleSheet, TouchableOpacity, View as RNView, ViewProps, ViewStyle } from "react-native";
import React from "react";
import { convertMargin, convertPadding, SpaceMP } from "../../themes";

interface Props extends ViewProps {
  style?: ViewStyle | ViewStyle[];
  m?: SpaceMP;
  p?: SpaceMP;
  flex?: number;
  radius?: number;
  size?: number;
  row?: boolean;
  center?: boolean;
  verticalCenter?: boolean;
  horizontalCenter?: boolean;
  onPress?: () => void
  bg?: string;
}

export const View: React.FC<Props> = ({
  style = {},
  m = 0,
  p = 0,
  bg = '',
  flex,
  size = 0,
  radius = 0,
  row = false,
  center = false,
  verticalCenter = false,
  horizontalCenter = false,
  children,
  onPress,
  ...viewProps
}) => {

  const st = Array.isArray(style) ? style : [style];
  const UiView = <RNView
    style={[
      convertMargin(m),
      convertPadding(p),
      flex ? { flex } : {},
      bg ? { backgroundColor: bg } : {},
      row ? styles.row : {},
      radius ? { borderRadius: radius } : {},
      size ? { height: size, width: size } : {},
      (verticalCenter && row) || (horizontalCenter && !row) ? styles.alignCenter : {},
      (verticalCenter && !row) || (horizontalCenter && row) ? styles.justifyCenter : {},
      center ? styles.center : {},
      ...st,
    ]}
    {...viewProps}
  >
    {children}
  </RNView>
  if (onPress) {
    return <TouchableOpacity onPress={onPress} >
      {UiView}
    </TouchableOpacity>
  }
  return UiView
};


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  center: { justifyContent: 'center', alignItems: 'center' },
  alignCenter: {
    alignItems: 'center'
  },
  justifyCenter: {
    justifyContent: 'center'
  }
});


import { Artocks, convertMargin, SpaceMP } from "../../themes";
import React from "react";
import { StyleSheet, Text as RNText, TextStyle, Platform } from "react-native";
import type { TextProps } from "react-native-svg";

type Size =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p1"
  | "p2"
  | "p3"
  | "caption1"
  | "caption2";
type FontWeight = "semiBold" | "bold" | "regular";

interface Props extends TextProps {
  size?: Size;
  style?: TextStyle | TextStyle[],
  fw?: FontWeight;
  m?: SpaceMP;
  color?: string;
  numberOfLines?: number;
}

export const Text: React.FC<Props> = ({
  size = "p1",
  fw = "regular",
  color = "#000000",
  style = {},
  m = 0,
  children = "",
  numberOfLines = 0,
  ...textProps
}) => {
  const st = Array.isArray(style) ? style : [style];
  const fontFamily = Artocks.getFontFamily();
  return (
    <RNText
      style={[
        styles[size as Size],
        styles[fw as FontWeight],
        fontFamily[fw] ? {
          fontFamily: fontFamily[fw]
        } : {},
        convertMargin(m),
        { color },
        ...st,
      ]}
      numberOfLines={numberOfLines}
      {...textProps}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  h1: {
    letterSpacing: 0.37,
    fontSize: Platform.select({
      ios: 34,
      android: 32,
    }),
  },
  h2: {
    letterSpacing: 0.36,
    fontSize: Platform.select({
      ios: 28,
      android: 25,
    }),
  },
  h3: {
    letterSpacing: 0.35,
    fontSize: Platform.select({
      ios: 22,
      android: 19,
    }),
  },
  h4: {
    letterSpacing: 0.38,
    fontSize: Platform.select({
      ios: 20,
      android: 17,
    }),
  },
  p1: {
    letterSpacing: -0.41,
    fontSize: Platform.select({
      ios: 17,
      android: 14,
    }),
  },
  p2: {
    letterSpacing: -0.32,
    fontSize: Platform.select({
      ios: 16,
      android: 13,
    }),
  },
  p3: {
    letterSpacing: -0.32,
    fontSize: Platform.select({
      ios: 15,
      android: 12,
    }),
  },
  caption1: {
    letterSpacing: 0,
    fontSize: Platform.select({
      ios: 12,
      android: 10,
    }),
  },
  caption2: {
    letterSpacing: 0.07,
    fontSize: Platform.select({
      ios: 11,
      android: 9,
    }),
  },
  regular: {
    fontWeight: "400",
  },
  semiBold: {
    fontWeight: "500",
  },
  bold: {
    fontWeight: "bold",
  },
});

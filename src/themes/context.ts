import { colors } from "./colors";
import React, { useContext } from "react";
import {
  StyleSheet as RNStylesheet,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";

export const theme = {
  dark: false,
  colors,
};
export const ThemeContext = React.createContext({
  dark: false,
  colors,
});

type NamedStyles = { [s: string]: ViewStyle | TextStyle | ImageStyle };

type Style = (props: typeof theme) => NamedStyles;

export const StyleSheet = {
  create: (st: Style) => {
    const theme = useContext(ThemeContext);
    return RNStylesheet.create(st(theme) as NamedStyles);
  },
};

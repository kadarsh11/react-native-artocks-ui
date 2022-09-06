import { StyleSheet, View, ViewStyle } from "react-native";
import React from "react";
import { convertMargin, convertPadding, SpaceMP } from "../../themes";
// import { LinearGradient } from "../gradient";

interface Props {
  style?: ViewStyle;
  margin?: SpaceMP;
  padding?: SpaceMP;
  bg?: string;
  isgradient?: boolean;
  color?: string;
}

const Divider = ({
  style = {},
  margin = 0,
  padding = 0,
  color = "#F3F2F8",
}: Props) => {


  return (
    <View
      style={[
        styles.divider,
        convertMargin(margin),
        convertPadding(padding),
        style,
        { borderColor: color },
      ]}
    ></View>
  );
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    borderWidth: 1,
    borderRadius: 1,
  },

  gradientdivider: {
    height: 2,
    marginTop: 20,
  },
});

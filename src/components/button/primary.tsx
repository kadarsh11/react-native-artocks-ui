import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from "react-native";
import React from "react";
import { colors, s } from "../../themes";
import { convertMargin, convertPadding, SpaceMP, GlobalConfig } from "../../themes";

interface Props {
  title: string;
  bg?: string;
  radius?: number;
  textColor?: string;
  block?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
  m?: SpaceMP;
  p?: SpaceMP;
}
const Primary = ({
  title = "",
  bg = colors.secondary[1],
  textColor = colors.white,
  block = false,
  style = {},
  textStyle = {},
  icon = <></>,
  m = 0,
  radius = 1,
  p = s.s14,
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        convertMargin(m),
        convertPadding(p),

        {
          backgroundColor: bg,
        },
        radius ? {
          borderRadius: radius * GlobalConfig.unit
        } : {},
        block && {
          width: "100%",
          alignSelf: "auto",
        },
        style,
      ]}
    >
      <View style={{ flexDirection: "row" }}>
        {!!icon && <>{icon}</>}
        <Text style={[styles.title, { color: textColor }, textStyle]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Primary;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 10,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  title: {
    fontSize: s.s14,
    fontWeight: "bold",
  },
});

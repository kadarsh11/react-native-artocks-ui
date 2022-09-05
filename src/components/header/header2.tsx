import React from "react";
import { s } from "../../themes";
import { Icon } from "../icon";
import {
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Text } from "../text";
import { View } from "../view";

interface Props {
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
const Header2 = ({
  title = "",
  style = {},
  leftIcon = <Icon name="Arrow Back Ios" />,
  textStyle = {},
  rightIcon = <></>,
}: Props) => {
  return (
    <View style={[styles.header, style]}>
      <TouchableOpacity style={styles.touchOpacity}>
        <>{leftIcon}</>
      </TouchableOpacity>
      <Text fw="bold" size="h4" style={[textStyle]}>
        {title}
      </Text>
      <TouchableOpacity style={styles.touchOpacity}>
        <>{rightIcon}</>
      </TouchableOpacity>
    </View>
  );
};

export default Header2;

const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  touchOpacity: {
    alignSelf: "center",
    backgroundColor: "red",
    paddingVertical: s.s8,
    paddingHorizontal: s.s16,
  },
});

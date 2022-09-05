import {
  StyleSheet,
  SafeAreaView,
  ViewStyle,
  Platform,
} from "react-native";
import React from "react";
import { convertMargin, convertPadding, s, SpaceMP } from "../../themes";

interface Props {
  style?: ViewStyle;
  margin?: SpaceMP;
  padding?: SpaceMP;
  bg?: string;
  children?: React.ReactElement | React.ReactElement[];
}

const Screen = ({
  style = {},
  margin = 0,
  padding = 0,
  bg = "white",
  children = <></>,
}: Props) => {
  return (
    <SafeAreaView
      style={[
        styles.container,
        convertMargin(margin),
        convertPadding(padding),
        { backgroundColor: bg },
        style,
      ]}
    >
      <>{children}</>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFE9E2",
  },
});

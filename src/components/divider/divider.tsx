import { StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import {
  convertMargin,
  convertPadding,
  SpaceMP,
  useArtocks,
} from '../../themes';
// import { LinearGradient } from "../gradient";

interface Props {
  style?: ViewStyle;
  m?: SpaceMP;
  p?: SpaceMP;
  bg?: string;
  isgradient?: boolean;
  color?: string;
}

const Divider = ({ style = {}, m = 0, p = 0, color = '#F3F2F8' }: Props) => {
  const artocks = useArtocks();

  return (
    <View
      style={[
        styles.divider,
        convertMargin(m, artocks.screenRefrence.height),
        convertPadding(p, artocks.screenRefrence.height),
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

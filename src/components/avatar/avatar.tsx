import {
  colors,
  convertMargin,
  convertPadding,
  SpaceMP,
  useArtocks,
} from '../../themes';
import React from 'react';
import { Image, StyleSheet, View, ViewStyle } from 'react-native';

interface Props {
  children?: React.ReactElement;
  style?: ViewStyle | ViewStyle[];
  size: number;
  radius?: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
  url?: string;
  backgroundColor?: string;
  m?: SpaceMP;
  p?: SpaceMP;
}

export const Avatar = ({
  children = <></>,
  size = 50,
  radius = 1,
  style = {},
  url = '',
  backgroundColor = colors.white,
  m,
  p,
}: Props) => {
  const st = Array.isArray(style) ? style : [style];
  const artocks = useArtocks();

  return (
    <View
      style={[
        styles.circle,
        {
          backgroundColor,
          width: size,
          height: size,
          borderRadius: size * (radius / 2),
        },
        convertMargin(m, artocks.screenRefrence.height),
        convertPadding(p, artocks.screenRefrence.height),
        ...st,
      ]}
    >
      {url ? (
        <Image
          source={{
            uri: url,
          }}
          style={{
            width: size,
            height: size,
          }}
        />
      ) : (
        children
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    borderWidth: 1,
    borderColor: colors.black[0.1],
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});

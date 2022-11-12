import React from 'react';
import { StyleSheet, Text as RNText, TextStyle } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import type { TextProps } from 'react-native-svg';
import { convertMargin, SpaceMP, useArtocks } from '../../themes';

type Size =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'p1'
  | 'p2'
  | 'p3'
  | 'caption1'
  | 'caption2';
type FontWeight = 'semiBold' | 'bold' | 'regular';

interface Props extends TextProps {
  size?: Size;
  style?: TextStyle | TextStyle[];
  fw?: FontWeight;
  m?: SpaceMP;
  color?: string;
}
let obj: any = {};

function getValue(s: number, height: number) {
  if (obj[s]) return obj[s];
  obj[s] = RFValue(s, height);
  return obj[s];
}

export const Text: React.FC<Props> = ({
  size = 'p2',
  fw = 'regular',
  color = '#000000',
  style = {},
  m,
  children = '',
  ...textProps
}) => {
  const st = Array.isArray(style) ? style : [style];
  const artocks = useArtocks();
  return (
    <RNText
      style={[
        {
          fontSize: getValue(
            styles[size].fontSize,
            artocks.screenRefrence.height
          ),
        },
        styles[fw],
        artocks.fontFamily[fw]
          ? {
              fontFamily: artocks.fontFamily[fw],
            }
          : {},
        m ? convertMargin(m, artocks.screenRefrence.height) : {},
        { color },
        ...st,
      ]}
      {...textProps}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 32,
  },
  h2: {
    fontSize: 28,
  },
  h3: {
    fontSize: 24,
  },
  h4: {
    fontSize: 20,
  },
  p1: {
    fontSize: 18,
  },
  p2: {
    fontSize: 16,
  },
  p3: {
    fontSize: 14,
  },
  caption1: {
    fontSize: 12,
  },
  caption2: {
    fontSize: 10,
  },
  regular: {
    fontWeight: '400',
  },
  semiBold: {
    fontWeight: '600',
  },
  bold: {
    fontWeight: 'bold',
  },
});

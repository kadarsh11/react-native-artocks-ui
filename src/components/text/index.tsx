import React from 'react';
import { StyleSheet, Text as RNText, TextStyle } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import type { TextProps } from 'react-native-svg';
import { Artocks, convertMargin, SpaceMP } from '../../themes';

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

export const Text: React.FC<Props> = React.memo(
  ({
    size = 'p2',
    fw = 'regular',
    color = '#000000',
    style = {},
    m,
    children = '',
    ...textProps
  }) => {
    const st = Array.isArray(style) ? style : [style];
    const fontFamily = Artocks.getFontFamily();
    return (
      <RNText
        style={[
          styles[size as Size],
          styles[fw as FontWeight],
          fontFamily[fw]
            ? {
                fontFamily: fontFamily[fw],
              }
            : {},
          m ? convertMargin(m) : {},
          { color },
          ...st,
        ]}
        // numberOfLines={numberOfLines}
        {...textProps}
      >
        {children}
      </RNText>
    );
  }
);

const styles = StyleSheet.create({
  h1: {
    fontSize: RFValue(32),
  },
  h2: {
    fontSize: RFValue(28),
  },
  h3: {
    fontSize: RFValue(24),
  },
  h4: {
    fontSize: RFValue(20),
  },
  p1: {
    fontSize: RFValue(18),
  },
  p2: {
    fontSize: RFValue(16),
  },
  p3: {
    fontSize: RFValue(14),
  },
  caption1: {
    fontSize: RFValue(12),
  },
  caption2: {
    fontSize: RFValue(10),
  },
  regular: {
    fontWeight: '400',
  },
  semiBold: {
    fontWeight: '500',
  },
  bold: {
    fontWeight: 'bold',
  },
});

import { colors } from '../../themes';
import React from 'react';
import { View, ViewStyle } from 'react-native';
import { SvgProps, SvgUri } from 'react-native-svg';

/**
 * https://fonts.google.com/icons?icon.query=dot&icon.style=Outlined
 */

// const baseUrl =
//   'https://fonts.gstatic.com/s/i/materialicons/thumb_up/v18/24px.svg';

interface Props extends SvgProps {
  name: string;
  uri?: string | null;
  pack?: 'MaterialIcon';
  color?: string;
  style?: ViewStyle;
}

export const Icon = ({
  name = '',
  pack = 'MaterialIcon',
  color = colors.black[1],
  style = {},
  uri: iUri = '',
  width = 20,
  height = 20,
  ...uriProps
}: Props) => {
  return (
    <View pointerEvents="none" style={style}>
      <SvgUri
        pointerEvents="none"
        fill={color}
        uri={
          iUri ||
          `https://fonts.gstatic.com/s/i/materialicons/${name
            .toLowerCase()
            .replace(/\s/g, '_')}/v18/24px.svg`
        }
        viewBox="0 0 24 24"
        width={width}
        height={height}
        {...uriProps}
      />
    </View>
  );
};

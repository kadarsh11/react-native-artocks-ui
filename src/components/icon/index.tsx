import { colors } from '../../themes';
import React from 'react';
import { View, ViewStyle } from 'react-native';
import { SvgProps, SvgUri } from 'react-native-svg';

/**
 * https://fonts.google.com/icons?icon.query=dot&icon.style=Outlined
 */

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
  // const [uri, setUri] = React.useState(
  //   iUri ||
  //     `https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/${name
  //       .toLowerCase()
  //       .replaceAll(" ", "_")}/default/20px.svg`
  // );

  return (
    <View style={style}>
      <SvgUri
        fill={color}
        uri={
          iUri ||
          `https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/${name
            .toLowerCase()
            .replace(/\s/g, '_')}/default/20px.svg`
        }
        viewBox="0 0 20 20"
        width={width}
        height={height}
        // onError={() =>
        //   setUri(
        //     "https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/blur_on/default/20px.svg"
        //   )
        // }
        {...uriProps}
      />
    </View>
  );
};

import { colors, fonts, s, useArtocks } from '../../themes';
import React from 'react';
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Icon } from '../icon';
import { Text } from '../text';
import { convertMargin, convertPadding, SpaceMP } from '../../themes';

interface Props {
  title: string;
  subtitle?: string;
  style?: ViewStyle;
  m?: SpaceMP;
  p?: SpaceMP;
  textStyle?: TextStyle;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onPress?: () => void;
}

const ListTile = ({
  title = '',
  subtitle = '',
  style = {},
  m,
  p,
  leftIcon = <></>,
  rightIcon = (
    <Icon
      fill={colors.black[0.75]}
      width={35}
      height={35}
      name={'navigate next'}
    />
  ),
  onPress = () => {},
  textStyle = {},
}: Props) => {
  const artocks = useArtocks();

  return (
    <TouchableOpacity
      style={[
        styles.card,
        style,
        convertMargin(m, artocks.screenRefrence.height),
        convertPadding(p, artocks.screenRefrence.height),
      ]}
      onPress={onPress}
    >
      <View style={[styles.leftCircle]}>
        <>{leftIcon}</>
      </View>
      <View style={{ flex: 1, paddingHorizontal: s.s12 }}>
        <Text size={'p1'} fw="bold" style={textStyle}>
          {title}
        </Text>
        {!!subtitle && (
          <Text m={[4]} color={colors.black[0.25]} size={'caption1'}>
            {subtitle}
          </Text>
        )}
      </View>
      {!!rightIcon && <>{rightIcon}</>}
    </TouchableOpacity>
  );
};

export default ListTile;

const styles = StyleSheet.create({
  title: {
    fontSize: fonts.f16,
    fontWeight: 'bold',
  },
  card: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: s.s6,
    alignItems: 'center',
  },

  leftCircle: {
    borderRadius: 20,
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: colors.white,
    backgroundColor: '#F7F6F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

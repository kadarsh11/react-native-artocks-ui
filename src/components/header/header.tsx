import {
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import { s, fonts } from '../../themes';
import { Icon } from '../icon';
import { Text } from '../text';
import { View } from '../view';

interface Props {
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Header = ({
  title = '',
  style = {},
  leftIcon = <Icon name="Arrow Back Ios" />,
  textStyle = {},
  rightIcon = <></>,
}: Props) => {
  return (
    <View m={[16, 0]} style={[styles.header, style]}>
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

export default Header;

const styles = StyleSheet.create({
  title: {
    fontSize: fonts.f20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  touchOpacity: {
    alignSelf: 'center',
    paddingVertical: s.s8,
    paddingHorizontal: s.s16,
  },
});

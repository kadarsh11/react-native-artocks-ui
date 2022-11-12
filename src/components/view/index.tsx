import React from 'react';
import {
  InteractionManager,
  StyleSheet,
  TouchableOpacity,
  View as RNView,
  ViewStyle,
} from 'react-native';
import {
  convertMargin,
  convertPadding,
  SpaceMP,
  useArtocks,
} from '../../themes';

interface Props {
  style?: ViewStyle | ViewStyle[];
  m?: SpaceMP;
  p?: SpaceMP;
  flex?: number;
  radius?: number;
  size?: number;
  row?: boolean;
  center?: boolean;
  verticalCenter?: boolean;
  horizontalCenter?: boolean;
  onPress?: () => any | Promise<any>;
  bg?: string;
  children: React.ReactNode;
}

export const View: React.FC<Props> = ({
  style = {},
  m,
  p,
  bg = '',
  flex,
  size = 0,
  radius = 0,
  row = false,
  center = false,
  verticalCenter = false,
  horizontalCenter = false,
  children,
  onPress,
}) => {
  const st = Array.isArray(style) ? style : [style];
  const artocks = useArtocks();
  const compStyle = [
    flex ? { flex } : {},
    m ? convertMargin(m, artocks.screenRefrence.height) : {},
    p ? convertPadding(p, artocks.screenRefrence.height) : {},
    bg ? { backgroundColor: bg } : {},
    row ? styles.row : {},
    radius ? { borderRadius: radius } : {},
    size ? { height: size, width: size } : {},
    (verticalCenter && row) || (horizontalCenter && !row)
      ? styles.alignCenter
      : {},
    (verticalCenter && !row) || (horizontalCenter && row)
      ? styles.justifyCenter
      : {},
    center ? styles.center : {},
    ...st,
  ];
  if (onPress) {
    return (
      <TouchableOpacity
        style={compStyle}
        onPress={() => {
          InteractionManager.runAfterInteractions(onPress);
        }}
      >
        {children}
      </TouchableOpacity>
    );
  }
  return <RNView style={compStyle}>{children}</RNView>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  center: { justifyContent: 'center', alignItems: 'center' },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
});

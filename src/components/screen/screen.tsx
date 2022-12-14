import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
  View as RNView,
} from 'react-native';
import React from 'react';
import { View } from '../view';
import { convertMargin, convertPadding, useArtocks } from '../../themes';
import type { Props, MyStatusBarProps } from './type';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const MyStatusBar = ({
  backgroundColor,
  textColor = 'black',
}: MyStatusBarProps) => (
  <View style={[styles.statusBar, { backgroundColor: backgroundColor }]}>
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        barStyle={textColor == 'black' ? 'dark-content' : 'light-content'}
      />
    </SafeAreaView>
  </View>
);

const defaultPadding = [Platform.OS == 'android' ? STATUSBAR_HEIGHT || 0 : 0];
const Screen = ({
  style = {},
  m,
  p,
  bg = 'white',
  statusBar = {},
  config = {
    withKeyBoardAvodingView: false,
    withSafeAreaView: true,
  },
  children = <></>,
}: Props) => {
  const CustomView = config.withSafeAreaView ? SafeAreaView : RNView;
  const artocks = useArtocks();
  return (
    <View flex={1} p={defaultPadding as any}>
      <CustomView
        style={[
          styles.container,
          convertMargin(m, artocks.screenRefrence.height),
          convertPadding(p, artocks.screenRefrence.height),
          { backgroundColor: bg },
          style,
        ]}
      >
        {config.withKeyBoardAvodingView ? (
          <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <>{children}</>
          </KeyboardAvoidingView>
        ) : (
          <>{children}</>
        )}
      </CustomView>
      <MyStatusBar backgroundColor={statusBar.backgroundColor || bg} />
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  appBar: {
    backgroundColor: '#79B45D',
    height: APPBAR_HEIGHT,
  },
});

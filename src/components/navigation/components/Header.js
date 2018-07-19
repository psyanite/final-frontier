/* eslint-disable no-param-reassign */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import LayoutConstants from '../../../styles/constants/LayoutConstants';
import { HeaderTitle } from 'react-navigation';

export const Header = ({ left, title, right }) => (
  <View style={HeaderStyles.wrap}>
    { left }
    { title }
    { right }
  </View>
);

const HeaderStyles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: LayoutConstants.margins.s,
    paddingLeft: LayoutConstants.margins.m,
    paddingRight: LayoutConstants.margins.m,
  },
});

export const Title = ({ text, style }) => (<HeaderTitle style={[TitleStyles.default, style]}>{text}</HeaderTitle>);

const TitleStyles = StyleSheet.create({
  default: {
    fontSize: 26,
    fontWeight: 'normal',
  },
});

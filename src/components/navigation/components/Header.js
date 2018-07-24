/* eslint-disable no-param-reassign */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HeaderTitle } from 'react-navigation';
import LayoutConstants from '../../../styles/constants/LayoutConstants';

export const Header = ({ left, title, right }) => (
  <View style={HeaderStyles.wrap}>
    <View style={HeaderStyles.header}>{ left }{ right }</View>
    <View style={HeaderStyles.titleWrap}>{ title }</View>
  </View>
);

const HeaderStyles = StyleSheet.create({
  wrap: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: LayoutConstants.margins.xl,
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  titleWrap: {
    alignSelf: 'stretch',
  }
});

export const Title = ({ text, style }) => (<HeaderTitle style={[TitleStyles.default, style]}>{text}</HeaderTitle>);

const TitleStyles = StyleSheet.create({
  default: {
    fontSize: 28,
    fontWeight: 'normal',
    marginHorizontal: 0,
  },
});

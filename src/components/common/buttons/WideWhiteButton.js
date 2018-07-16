/* eslint-disable no-param-reassign */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import LayoutConstants from '../../../styles/constants/LayoutConstants';
import ColorConstants from '../../../styles/constants/ColorConstants';

const WideWhiteButton = ({ onPress, style, text, textColor, children }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.defaultButtonStyle, style]}
    activeOpacity={1.0}
  >
    { getChildren(children, text, textColor) }
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  defaultButtonStyle: {
    marginBottom: LayoutConstants.margins.s,
    paddingTop: LayoutConstants.margins.m,
    paddingBottom: LayoutConstants.margins.m,
    borderRadius: 5,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    alignItems: 'center',
  }
});

const getChildren = (children, text, textColor) =>
  children || (<Text style={{ color: textColor }}>{text}</Text>);

WideWhiteButton.defaultProps = {
  textColor: ColorConstants.tintColor
};

export default WideWhiteButton;

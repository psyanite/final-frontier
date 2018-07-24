/* eslint-disable no-param-reassign */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import LayoutConstants from '../../../styles/constants/LayoutConstants';
import ColorConstants from '../../../styles/constants/ColorConstants';

export const Types = {
  Light: 'Light',
  Tinted: 'Tinted',
};

// the style is applied on the outermost element TouchableOpacity or BurntGradient
const WideButton = ({ onPress, type, style, text, textColor, children }) => {
  let customStyle;

  switch (type) {
    case Types.Light:
      customStyle = styles.light;
      break;
    case Types.Tinted:
    default:
      customStyle = styles.tinted;
      textColor = '#fff';
      break;
  }

  return (
    <TouchableOpacity onPress={onPress} style={[styles.defaultButtonStyle, customStyle, style]} activeOpacity={1.0}>
      { getChildren(children, text, textColor) }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultButtonStyle: {
    padding: LayoutConstants.margins.xl,
    marginBottom: LayoutConstants.margins.l,
    paddingTop: LayoutConstants.margins.l,
    paddingBottom: LayoutConstants.margins.l,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  light: {
    backgroundColor: '#fff',
  },
  tinted: {
    backgroundColor: ColorConstants.tintColor,
  }
});

const getChildren = (children, text, textColor) =>
  children || (<Text style={{ color: textColor, fontSize: 26 }}>{text}</Text>);

WideButton.defaultProps = {
  textColor: ColorConstants.tintColor
};

WideButton.propTypes = {
  type: PropTypes.oneOf(Object.values(Types)).isRequired
};

export default WideButton;

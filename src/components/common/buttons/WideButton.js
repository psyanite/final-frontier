import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import LayoutConstants from '../../../styles/constants/LayoutConstants';
import ColorConstants from '../../../styles/constants/ColorConstants';
import BurntGradient from '../../gradients/BurntGradient';

export const Types = {
  Light: 'Light',
  Tinted: 'Tinted',
};

// the style is applied on the outermost element TouchableOpacity or BurntGradient
const WideButton = ({ onPress, type, style, text, textColor, children }) => {
  if (type === Types.Light) {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.defaultButtonStyle, styles.light, style]} activeOpacity={1.0}>
        { getChildren(children, text, textColor) }
      </TouchableOpacity>
    );
  }

  return (
    <BurntGradient>
      <TouchableOpacity onPress={onPress} style={[styles.defaultButtonStyle]} activeOpacity={1.0}>
        { getChildren(children, text, textColor) }
      </TouchableOpacity>
    </BurntGradient>
  );
};

const styles = StyleSheet.create({
  defaultButtonStyle: {
    marginBottom: LayoutConstants.margins.m,
    paddingTop: LayoutConstants.margins.m,
    paddingBottom: LayoutConstants.margins.m,
    borderRadius: 5,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  light: {
    backgroundColor: '#fff',
  }
});

const getChildren = (children, text, textColor) =>
  children || (<Text style={{ color: textColor }}>{text}</Text>);

WideButton.defaultProps = {
  textColor: ColorConstants.tintColor
};

WideButton.propTypes = {
  type: PropTypes.oneOf(Object.values(Types)).isRequired
};

export default WideButton;

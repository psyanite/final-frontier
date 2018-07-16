/* eslint-disable no-param-reassign */
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import LayoutConstants from '../../../styles/constants/LayoutConstants';
import ColorConstants from '../../../styles/constants/ColorConstants';

const HeaderBack = ({ navigation, type, wrapStyle, size, color }) => (
  <TouchableOpacity
    onPress={() => navigation.dispatch(NavigationActions.back())}
    style={wrapStyle}
    activeOpacity={1.0}
  >
    { getIcon(size, color, type) }
  </TouchableOpacity>
);

const getIcon = (size, color, type) => {
  let name;
  let style;
  switch (type) {
    case 'overlay':
      name = 'ios-arrow-back';
      style = styles.overlayIcon;
      color = '#fff'; // overlay is always white arrow on black background
      break;
    case 'line':
    default:
      name = 'ios-arrow-round-back-outline';
      style = styles.lineIcon;
  }
  return (
    <Ionicons
      name={name}
      style={style}
      size={size}
      color={color}
    />
  );
};

const styles = StyleSheet.create({
  wrap: {
    paddingLeft: LayoutConstants.margins.m,
  },
  lineIcon: {},
  overlayIcon: {
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 10,
  },
});

HeaderBack.defaultProps = {
  size: 40,
  color: ColorConstants.bodyText,
};

HeaderBack.propTypes = {
  navigation: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default HeaderBack;

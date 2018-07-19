import React from 'react';
import { StyleSheet } from 'react-native';
import BurnGradient from '../gradients/BurntGradient';
import LayoutConstants from '../../styles/constants/LayoutConstants';

/**
 * Static view that is NOT-SCROLLABLE, with the BurnGradient background.
 */
const BurntView = ({ centerCenterYah, style, children }) =>
  (<BurnGradient
    children={children}
    style={[styles.default, style, centerCenterYah ? styles.centerCenter : {}]}
  />);

const styles = StyleSheet.create({
  default: {
    flex: 1,
    paddingLeft: LayoutConstants.margins.m,
    paddingRight: LayoutConstants.margins.m,
    alignSelf: 'stretch',
  },
  centerCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default BurntView;

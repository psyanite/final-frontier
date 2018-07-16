import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import BurnGradient from '../gradients/BurnGradient';
import LayoutConstants from '../../styles/constants/LayoutConstants';

/**
 * Static view that is NOT-SCROLLABLE, with the BurnGradient background.
 */
const BurnView = ({ isCenterCenter, children }) =>
  (<BurnGradient
    children={children}
    style={[styles.default, isCenterCenter ? styles.centerCenter : {}]}
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

export default BurnView;

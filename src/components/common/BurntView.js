import React from 'react';
import { StyleSheet } from 'react-native';
import BurnGradient from '../gradients/BurntGradient';

/**
 * Static view that is NOT-SCROLLABLE, with the BurnGradient background.
 */
const BurntView = ({ style, children }) => <BurnGradient style={[styles.default, style]} children={children} />;

const styles = StyleSheet.create({
  default: {
    flex: 1,
    alignSelf: 'stretch',
  }
});

export default BurntView;
